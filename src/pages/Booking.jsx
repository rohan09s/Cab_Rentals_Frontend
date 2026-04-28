// added success page for customer .
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const parseConfigResponse = async (response) => {
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const json = await response.json();
    return { key: json?.key || "", raw: json };
  }

  const text = await response.text();
  return { key: "", raw: text };
};

const fetchRazorpayKey = async (apiUrl, fallbackKey) => {
  const endpoints = ["/api/payment/config", "/api/payment/key"];
  const errors = [];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`${apiUrl}${endpoint}`);
      const payload = await parseConfigResponse(response);

      if (!response.ok) {
        errors.push(`${endpoint} returned ${response.status}`);
        continue;
      }

      if (payload.key) {
        return payload.key;
      }

      errors.push(`${endpoint} did not return key`);
    } catch (error) {
      errors.push(`${endpoint} request failed`);
      console.warn(`⚠️ ${endpoint} fetch failed:`, error);
    }
  }

  if (fallbackKey) {
    console.warn(
      "⚠️ Using fallback Razorpay key from frontend env because backend key endpoint is unavailable."
    );
    return fallbackKey;
  }

  throw new Error(
    `Could not fetch Razorpay key from backend. ${errors.join("; ")}`
  );
};

const Booking = () => {
  const { state } = useLocation();
  const navigate = useNavigate(); // ✅ added

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
  });

  const [errors, setErrors] = useState({});

  if (!state) {
    return <h2 className="p-6">No booking data found</h2>;
  }

  const advance = 500;

  // ✅ VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name required";
    if (!form.phone || form.phone.length !== 10)
      newErrors.phone = "Valid 10-digit number required";
    if (!form.pickup) newErrors.pickup = "Pickup address required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ PAYMENT FUNCTION
  const handlePayment = async () => {
    if (!validate()) return;

    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    console.log("🔵 Payment initiated with API:", apiUrl);

    try {
      if (!window.Razorpay) {
        alert("Payment SDK failed to load. Please refresh and try again.");
        return;
      }

      // 0️⃣ GET KEY FROM BACKEND (must match backend env mode)
      const fallbackKey = import.meta.env.VITE_RAZORPAY_KEY || "";
      const razorpayKey = await fetchRazorpayKey(apiUrl, fallbackKey);

      if (!razorpayKey || !/^rzp_(test|live)_[A-Za-z0-9]+$/.test(razorpayKey)) {
        alert("Payment setup failed: Razorpay key missing.");
        return;
      }

      // 1️⃣ CREATE ORDER
      console.log("📝 Creating order for amount:", advance);
      const res = await fetch(`${apiUrl}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(advance) }),
      });

      if (!res.ok) {
        let errorMessage = "Order creation failed";
        try {
          const errorJson = await res.json();
          errorMessage = errorJson?.error || errorJson?.message || errorMessage;
        } catch {
          const errorText = await res.text();
          errorMessage = errorText || errorMessage;
        }
        console.error("❌ Order creation error:", errorMessage);
        alert(`Order creation failed. ${errorMessage}`);
        return;
      }

      const order = await res.json();
      console.log("✅ Order created:", order);

      if (!order.id) {
        console.error("❌ No order ID in response:", order);
        alert("Order creation failed - no ID received");
        return;
      }

      // 2️⃣ RAZORPAY OPTIONS
      const options = {
        key: razorpayKey,
        amount: order.amount,
        currency: "INR",
        name: "Amit Tours & Travels",
        description: "Cab Booking Advance",
        order_id: order.id,

        prefill: {
          name: form.name || "Customer",
          contact: form.phone || "9999999999",
          email: "test@gmail.com",
        },

        notes: {
          booking_for: form.name,
        },

        handler: async function (response) {
          try {
            console.log("💳 Payment successful, verifying...", response);
            const verifyRes = await fetch(
              `${apiUrl}/api/payment/verify`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  ...response,
                  bookingData: {
                    name: form.name,
                    phone: form.phone,
                    fromCity: state.fromCity,
                    toCity: state.toCity,
                    date: state.date,
                    time: state.time,
                    car: state.carName,
                    fare: state.fare,
                  },
                }),
              }
            );

            if (!verifyRes.ok) {
              const error = await verifyRes.text();
              console.error("❌ Verification API error:", error);
              alert(`Verification failed: ${error}`);
              return;
            }

            const data = await verifyRes.json();
            console.log("📦 Verification response:", data);

            if (data.success) {
              console.log("✅ Payment verified successfully!");
              // ✅ CHANGED: redirect instead of alert
              navigate("/success", {
                state: {
                  booking: data.booking,
                },
              });
            } else {
              console.error("❌ Signature mismatch:", data.message);
              alert(`Payment verification failed: ${data.message}`);
            }
          } catch (err) {
            console.error("❌ VERIFY ERROR:", err);
            alert(`Verification error: ${err.message}`);
          }
        },

        modal: {
          ondismiss: function () {
            console.log("Payment popup closed");
          },
        },

        theme: {
          color: "#16a34a",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        const err = response?.error || {};
        const details = [
          err.description ? `Reason: ${err.description}` : "",
          err.code ? `Code: ${err.code}` : "",
          err.source ? `Source: ${err.source}` : "",
          err.step ? `Step: ${err.step}` : "",
        ]
          .filter(Boolean)
          .join("\n");

        console.error("❌ Razorpay payment failed:", response);
        alert(`Payment failed.\n${details || "Please try another method."}`);
      });
      rzp.open();

    } catch (err) {
      console.error("❌ PAYMENT INIT ERROR:", err);
      alert(`Payment initialization failed: ${err.message}`);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {/* LEFT: SUMMARY */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-4 border-b pb-2">
            Booking Summary
          </h3>

          <div className="text-sm space-y-2 text-gray-700">
            <p><b>Trip Type:</b> {state.tab}</p>
            <p><b>Pickup City:</b> {state.fromCity}</p>
            <p><b>Drop City:</b> {state.toCity}</p>
            <p><b>Date:</b> {state.date}</p>
            <p><b>Time:</b> {state.time}</p>
          </div>

          <div className="mt-4 p-3 border rounded-lg text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
              className="w-16 md:w-20 mx-auto"
            />
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Total Fare</span>
              <span>₹{state.fare}</span>
            </div>

            <div className="flex justify-between text-green-600 font-semibold">
              <span>Advance</span>
              <span>₹{advance}</span>
            </div>

            <div className="flex justify-between font-bold">
              <span>Pay to Driver</span>
              <span>₹{state.fare - advance}</span>
            </div>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">
            Customer Details
          </h2>

          <div className="grid gap-4">

            <div>
              <label className="text-sm font-semibold">Full Name</label>
              <input
                type="text"
                className="input mt-1"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Mobile Number</label>
              <input
                type="tel"
                className="input mt-1"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Pickup Address</label>
              <textarea
                className="input mt-1"
                value={form.pickup}
                onChange={(e) =>
                  setForm({ ...form, pickup: e.target.value })
                }
              />
              {errors.pickup && (
                <p className="text-red-500 text-xs">{errors.pickup}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Drop Address</label>
              <textarea
                className="input mt-1"
                value={form.drop}
                onChange={(e) =>
                  setForm({ ...form, drop: e.target.value })
                }
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm">
              ₹500 advance required to confirm booking.
            </div>

            <button
              onClick={handlePayment}
              className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold"
            >
              Pay ₹500 & Confirm Booking
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;