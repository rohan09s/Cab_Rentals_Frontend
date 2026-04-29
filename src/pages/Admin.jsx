import { useEffect, useState } from "react";

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

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

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th>Phone</th>
              <th>Route</th>
              <th>Date</th>
              <th>Time</th> {/* ✅ ADD THIS */}
              <th>Car</th>
              <th>Fare</th>
              <th>Status</th>
              <th className="p-3 text-right">Delete</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b, i) => (
              <tr key={b._id || i} className="border-t text-center">
                <td className="p-2">{b.name}</td>
                <td>{b.phone}</td>
                <td>{b.fromCity} → {b.toCity}</td>
                <td>{b.date}</td>
                <td>{b.time}</td>
                <td>{b.car}</td>
                <td>₹{b.fare}</td>
                <td className="text-green-600 font-semibold">
                  {b.status}
                </td>
                <td className="p-2 text-right">
                  {(b.status === "confirmed" ||
                    b.status === "pending") &&
                  b._id ? (
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
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Admin;