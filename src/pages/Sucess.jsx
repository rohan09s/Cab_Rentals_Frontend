import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(30);

  if (!state) {
    return <h2 className="p-6 text-center">No booking data</h2>;
  }

  const booking = state.booking;

  useEffect(() => {
    // Keep the user on success flow; pressing browser back goes home.
    window.history.pushState(null, "", window.location.href);
    const handlePopState = () => {
      navigate("/", { replace: true });
    };
    window.addEventListener("popstate", handlePopState);

    const redirectTimeout = setTimeout(() => {
      navigate("/", { replace: true });
    }, 10000);

    const countdownInterval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      clearTimeout(redirectTimeout);
      clearInterval(countdownInterval);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md text-center">

        <h2 className="text-2xl font-bold text-green-600 mb-3">
          Booking Confirmed 🎉
        </h2>

        <p className="text-gray-600 mb-4">
          Your booking has been successfully confirmed.
        </p>

        <p className="text-xs text-gray-500 mb-4">
          You will be redirected to home in {secondsLeft}s.
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