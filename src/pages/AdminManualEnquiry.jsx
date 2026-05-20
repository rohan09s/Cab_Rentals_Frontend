import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminManualEnquiry = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    fromCity: "",
    toCity: "",
    date: "",
    time: "",
    car: "",
    fare: "",
    amountPaid: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.fromCity ||
      !formData.toCity ||
      !formData.date ||
      !formData.time ||
      !formData.car ||
      !formData.fare
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const token = sessionStorage.getItem("adminToken");
      const response = await fetch(`${apiUrl}/api/bookings/manual-create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          ...formData,
          fare: Number(formData.fare),
          amountPaid: formData.amountPaid ? Number(formData.amountPaid) : 0,
          status: "confirmed",
          remarks: formData.remarks || "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create enquiry");
      }

      toast.success("Enquiry created successfully!");
      setFormData({
        name: "",
        phone: "",
        fromCity: "",
        toCity: "",
        date: "",
        time: "",
        car: "",
        fare: "",
        amountPaid: "",
        remarks: "",
      });

      // Redirect to admin after 1.5 seconds
      setTimeout(() => {
        navigate("/admin");
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Error creating enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manual Enquiry Generation</h1>
        <button
          onClick={() => navigate("/admin")}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Back to Bookings
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-6 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Customer name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* From City and To City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                From City *
              </label>
              <input
                type="text"
                name="fromCity"
                value={formData.fromCity}
                onChange={handleChange}
                placeholder="Starting city"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                To City *
              </label>
              <input
                type="text"
                name="toCity"
                value={formData.toCity}
                onChange={handleChange}
                placeholder="Destination city"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Time *
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Car and Fare */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Car *
              </label>
              <input
                type="text"
                name="car"
                value={formData.car}
                onChange={handleChange}
                placeholder="Car type/name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Fare (₹) *
              </label>
              <input
                type="number"
                name="fare"
                value={formData.fare}
                onChange={handleChange}
                placeholder="Amount"
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Amount Paid */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Amount Paid (₹)
            </label>
            <input
              type="number"
              name="amountPaid"
              value={formData.amountPaid}
              onChange={handleChange}
              placeholder="Amount paid by customer (optional)"
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remarks */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Remarks
            </label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Any special notes or customer requests"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Creating..." : "Create Enquiry"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminManualEnquiry;
