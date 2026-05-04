// added photos
import { useNavigate } from "react-router-dom";

const CarCard = ({ car, fare, details }) => {
  const navigate = useNavigate();

  const bookNow = () => {
    navigate("/booking", {
      state: {
        fromCity: details.from,
        toCity: details.to,
        carName: car.category,
        fare: fare,
      },
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-5 hover:shadow-xl transition flex flex-col">

      {/* ✅ IMAGE CONTAINER - RESPONSIVE WITH ZOOM SUPPORT */}
      <div className="w-full overflow-hidden rounded-lg bg-gray-100 mb-2 sm:mb-3 flex-shrink-0">
        <img
          src={car.image || "https://via.placeholder.com/300"}
          alt={car.category}
          onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
          className="w-full h-auto object-cover min-h-24 sm:min-h-28 md:min-h-32 aspect-auto"
          loading="lazy"
        />
      </div>

      <h2 className="text-lg sm:text-xl font-bold line-clamp-2">{car.category}</h2>

      <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-1">
        {car.models.join(", ")}
      </p>

      <p className="text-xs text-gray-400 mt-1">{car.seats}</p>

      <p className="text-green-600 font-bold text-lg sm:text-xl mt-auto pt-2">₹{fare}</p>

      <button
        onClick={bookNow}
        className="mt-3 w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white py-2 rounded-lg font-semibold text-sm transition touch-none"
      >
        Book Now
      </button>
    </div>
  );
};

export default CarCard;