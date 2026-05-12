import { useLocation, useNavigate } from "react-router-dom";
import { cars } from "../data/car";
import {
  calculateFare,
  getRoundTripDayCount,
  ROUND_TRIP_KM_PER_DAY,
} from "../utils/fareCalculator";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  if (!state) {
    return <h2 className="p-6 text-center">No data found</h2>;
  }

  const roundTripDays =
    state.tab === "Round Trip" ? getRoundTripDayCount(state) : null;

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">

      {/* Header */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <h2 className="text-lg font-bold">
          {state.tab === "Round Trip"
            ? `${state.fromCity} → ${state.fromCity}`
            : `${state.fromCity} → ${state.toCity}`}
        </h2>
        <p className="text-sm text-gray-500">
          {state.date} • {state.time}
          {state.tab === "Round Trip" && state.returnDate && (
            <> • Return {state.returnDate}</>
          )}
        </p>
        {state.tab === "Round Trip" && roundTripDays != null && (
          <p className="text-xs text-gray-600 mt-2">
            Round trip pricing: {ROUND_TRIP_KM_PER_DAY} km included per day, billed
            at your vehicle&apos;s per-km rate (e.g. Hatchback ₹12/km).
          </p>
        )}
      </div>

      {/* Cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cars.map((car, i) => {
          const fare = calculateFare(state.tab, car, state);

          return (
            <div key={i} className="bg-white p-3 sm:p-4 md:p-5 rounded-xl shadow flex flex-col h-full">

              {/* ✅ CAR IMAGE - RESPONSIVE WITH ZOOM SUPPORT */}
              <div className="w-full overflow-hidden rounded-lg bg-gray-100 mb-2 sm:mb-3 flex-shrink-0">
                <img
                  src={car.image || "https://via.placeholder.com/300"}
                  alt={car.category}
                  className="w-full h-auto object-cover min-h-24 sm:min-h-28 md:min-h-32 aspect-auto"
                  loading="lazy"
                />
              </div>

              {/* Category */}
              <h3 className="text-lg sm:text-xl font-bold line-clamp-2">
                {car.category}
              </h3>

              {/* Models */}
              <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-1">
                {car.models.join(", ")}
              </p>

              {/* Seats */}
              <p className="text-xs text-gray-400 mt-1">
                {car.seats}
              </p>

              {/* Price */}
              <p className="text-green-600 font-bold text-lg sm:text-xl mt-auto pt-2">
                ₹{fare}
              </p>

              {state.tab === "Round Trip" && roundTripDays != null && (
                <div className="text-xs text-gray-600 space-y-1 mt-2 border-t border-gray-100 pt-2">
                  <p>
                    <span className="font-semibold text-gray-700">
                      Daily range:
                    </span>{" "}
                    up to {ROUND_TRIP_KM_PER_DAY} km/day
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Fare rate:
                    </span>{" "}
                    ₹{car.rate}/km
                  </p>
                  <p className="text-gray-500">
                    {ROUND_TRIP_KM_PER_DAY} km × {roundTripDays}{" "}
                    {roundTripDays === 1 ? "day" : "days"} × ₹{car.rate}/km
                  </p>
                </div>
              )}

              {/* Included */}
              <p className="text-green-600 text-xs mt-2 line-clamp-1">
                ✔ {car.inclusions.join(", ")}
              </p>

              {/* Excluded */}
              <p className="text-red-500 text-xs line-clamp-1">
                ✖ {car.exclusions.join(", ")}
              </p>

              {/* Button */}
              <button
                onClick={() =>
                  navigate("/booking", {
                    state: {
                      ...state,
                      carName: car.category,
                      fare,
                    },
                  })
                }
                className="mt-4 w-full bg-green-500 text-white py-2 rounded"
              >
                Book Now
              </button>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;












































