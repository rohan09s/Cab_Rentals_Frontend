import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <h2 className="p-6 text-center">No booking data</h2>;
  }

  const booking = state.booking;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md text-center">

        <h2 className="text-2xl font-bold text-green-600 mb-3">
          Booking Confirmed 🎉
        </h2>

        <p className="text-gray-600 mb-4">
          Your booking has been successfully confirmed.
        </p>

        <div className="text-left text-sm space-y-2">
          <p><b>Booking ID:</b> {booking.bookingId}</p>
          <p><b>Name:</b> {booking.name}</p>
          <p><b>Phone:</b> {booking.phone}</p>
          <p><b>Route:</b> {booking.fromCity} → {booking.toCity}</p>
          <p><b>Date:</b> {booking.date}</p>
          <p><b>Time:</b> {booking.time}</p>
          <p><b>Car:</b> {booking.car}</p>
          <p><b>Fare:</b> ₹{booking.fare}</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-5 w-full bg-green-500 text-white py-2 rounded"
        >
          Go Home
        </button>

      </div>
    </div>
  );
};

export default Success;