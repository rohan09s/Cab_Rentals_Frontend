import { useEffect, useState } from "react";

const Admin = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    // fetch("https://cab-backend-zca0.onrender.com/api/bookings", {
      fetch("https://cab-rentals-be.onrender.com/api/bookings", {
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
            </tr>
          </thead>

          <tbody>
            {bookings.map((b, i) => (
              <tr key={i} className="border-t text-center">
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
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Admin;