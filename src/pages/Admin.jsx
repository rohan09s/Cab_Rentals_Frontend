import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const onlineBookings = bookings.filter((booking) => booking.paymentId || booking.orderId);
  const manualBookings = bookings.filter((booking) => !(booking.paymentId || booking.orderId));

  useEffect(() => {
    const token = sessionStorage.getItem("adminToken");

    fetch(`${apiUrl}/api/bookings`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          window.location.href = "/admin-login";
        }
        return res.json();
      })
      .then((data) => setBookings(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/admin-manual-enquiry")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Create Manual Enquiry
          </button>
          <button
            onClick={() => {
              sessionStorage.removeItem("adminToken");
              localStorage.removeItem("adminToken");
              window.location.href = "/admin-login";
            }}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <section className="bg-white rounded-xl shadow p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Online Bookings</h2>
              <p className="text-sm text-gray-500">Bookings created through the website payment flow.</p>
            </div>
            <span className="text-sm text-gray-600">{onlineBookings.length} record{onlineBookings.length !== 1 ? "s" : ""}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="text-left">Phone</th>
                  <th className="text-left">Route</th>
                  <th className="text-left">Date</th>
                  <th className="text-left">Time</th>
                  <th className="text-left">Car</th>
                  <th className="text-left">Fare</th>
                  <th className="text-left">Status</th>
                  <th className="p-3 text-right">Delete</th>
                </tr>
              </thead>
              <tbody>
                {onlineBookings.length ? (
                  onlineBookings.map((b, i) => (
                    <tr key={b._id || i} className="border-t text-center">
                      <td className="p-2 text-left">{b.name}</td>
                      <td className="text-left">{b.phone}</td>
                      <td className="text-left">{b.fromCity} → {b.toCity}</td>
                      <td className="text-left">{b.date}</td>
                      <td className="text-left">{b.time}</td>
                      <td className="text-left">{b.car}</td>
                      <td className="text-left">₹{b.fare}</td>
                      <td className="text-left text-green-600 font-semibold">{b.status}</td>
                      <td className="p-2 text-right">
                        {b._id ? (
                          <button
                            type="button"
                            onClick={async () => {
                              const ok = window.confirm(
                                "Delete this booking? This cannot be undone."
                              );
                              if (!ok) return;

                              const token = sessionStorage.getItem("adminToken");
                              setDeletingId(b._id);

                              try {
                                const res = await fetch(
                                  `${apiUrl}/api/bookings/${b._id}`,
                                  {
                                    method: "DELETE",
                                    headers: { Authorization: token },
                                  }
                                );

                                if (!res.ok) {
                                  let message = "Failed to delete booking";
                                  try {
                                    const data = await res.json();
                                    message = data?.message || message;
                                  } catch {
                                    // ignore json parse errors
                                  }
                                  throw new Error(message);
                                }

                                setBookings((prev) =>
                                  prev.filter((x) => x._id !== b._id)
                                );
                              } catch (err) {
                                alert(err?.message || "Delete failed");
                              } finally {
                                setDeletingId(null);
                              }
                            }}
                            disabled={deletingId === b._id}
                            className="bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-3 py-1 rounded"
                          >
                            {deletingId === b._id ? "Deleting..." : "Delete"}
                          </button>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="p-6 text-center text-gray-500">
                      No online bookings available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Manual Bookings</h2>
              <p className="text-sm text-gray-500">Bookings created through the admin manual enquiry form.</p>
            </div>
            <span className="text-sm text-gray-600">{manualBookings.length} record{manualBookings.length !== 1 ? "s" : ""}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="text-left">Phone</th>
                  <th className="text-left">Route</th>
                  <th className="text-left">Date</th>
                  <th className="text-left">Time</th>
                  <th className="text-left">Car</th>
                  <th className="text-left">Fare</th>
                  <th className="text-left">Amount Paid</th>
                  <th className="text-left">Status</th>
                  <th className="p-3 text-right">Delete</th>
                </tr>
              </thead>
              <tbody>
                {manualBookings.length ? (
                  manualBookings.map((b, i) => (
                    <tr key={b._id || i} className="border-t text-center">
                      <td className="p-2 text-left">{b.name}</td>
                      <td className="text-left">{b.phone}</td>
                      <td className="text-left">{b.fromCity} → {b.toCity}</td>
                      <td className="text-left">{b.date}</td>
                      <td className="text-left">{b.time}</td>
                      <td className="text-left">{b.car}</td>
                      <td className="text-left">₹{b.fare}</td>
                      <td className="text-left">₹{b.amountPaid || 0}</td>
                      <td className="text-left text-green-600 font-semibold">{b.status}</td>
                      <td className="p-2 text-right">
                        {b._id ? (
                          <button
                            type="button"
                            onClick={async () => {
                              const ok = window.confirm(
                                "Delete this booking? This cannot be undone."
                              );
                              if (!ok) return;

                              const token = sessionStorage.getItem("adminToken");
                              setDeletingId(b._id);

                              try {
                                const res = await fetch(
                                  `${apiUrl}/api/bookings/${b._id}`,
                                  {
                                    method: "DELETE",
                                    headers: { Authorization: token },
                                  }
                                );

                                if (!res.ok) {
                                  let message = "Failed to delete booking";
                                  try {
                                    const data = await res.json();
                                    message = data?.message || message;
                                  } catch {
                                    // ignore json parse errors
                                  }
                                  throw new Error(message);
                                }

                                setBookings((prev) =>
                                  prev.filter((x) => x._id !== b._id)
                                );
                              } catch (err) {
                                alert(err?.message || "Delete failed");
                              } finally {
                                setDeletingId(null);
                              }
                            }}
                            disabled={deletingId === b._id}
                            className="bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-3 py-1 rounded"
                          >
                            {deletingId === b._id ? "Deleting..." : "Delete"}
                          </button>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="p-6 text-center text-gray-500">
                      No manual bookings available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;