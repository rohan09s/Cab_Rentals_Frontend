




// // updated
// import { useLocation, useNavigate } from "react-router-dom";
//  import { cars } from "../data/car"; // ⚠️ change to ../data/cars if your file is cars.js
// import { calculateFare } from "../utils/fareCalculator";

// const Results = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const state = location.state;

//   // Safety check
//   if (!state) {
//     return (
//       <h2 className="p-6 text-center text-gray-600">
//         No search data found. Please go back.
//       </h2>
//     );
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen p-4 md:p-8">

//       {/* Header */}
//       <div className="bg-white p-4 rounded-xl shadow mb-6">
//         <h2 className="text-lg md:text-xl font-bold text-gray-800">
//           {state.fromCity} → {state.toCity}
//         </h2>
//         <p className="text-sm text-gray-500">
//           {state.date} • {state.time}
//         </p>
//       </div>

//       {/* Cars Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//         {cars.map((car, i) => {
//           const fare = calculateFare(
//             state.tab,
//             car,
//             state.hours,
//             state.kms
//           );

//           return (
//             <div
//               key={i}
//               className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
//             >
//               {/* Image */}
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
//                 alt="car"
//                 className="w-20 mb-3"
//               />

//               {/* CATEGORY */}
//               <h3 className="text-xl font-bold text-gray-800">
//                 {car.category}
//               </h3>

//               {/* MODELS */}
//               <p className="text-gray-500 text-sm">
//                 {car.models?.join(", ")}
//               </p>

//               {/* SEATS */}
//               <p className="text-gray-400 text-xs mt-1">
//                 {car.seats}
//               </p>

//               {/* PRICE */}
//               <div className="mt-3">
//                 <p className="text-green-600 font-bold text-xl">
//                   ₹{fare}
//                 </p>
//                 <p className="text-xs text-gray-400">
//                   Includes driver & fuel
//                 </p>
//               </div>

//               {/* INCLUSIONS / EXCLUSIONS */}
//               <div className="mt-3 text-xs">
//                 <p className="text-green-600">
//                   ✔ {car.inclusions?.join(", ")}
//                 </p>
//                 <p className="text-red-500">
//                   ✖ {car.exclusions?.join(", ")}
//                 </p>
//               </div>

//               {/* Badge */}
//               <div className="mt-2 inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
//                 Best Price
//               </div>

//               {/* Button */}
//               <button
//                 onClick={() =>
//                   navigate("/booking", {
//                     state: {
//                       ...state,
//                       carName: car.category,
//                       fare: fare,
//                     },
//                   })
//                 }
//                 className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl font-semibold transition"
//               >
//                 Book Now
//               </button>

//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Results;











































// // without images
// import { useLocation, useNavigate } from "react-router-dom";
// import { cars } from "../data/Car"; // ✅ FIXED (small c)
// import { calculateFare } from "../utils/fareCalculator";

// const Results = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const state = location.state;

//   if (!state) {
//     return <h2 className="p-6 text-center">No data found</h2>;
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen p-4 md:p-8">

//       {/* Header */}
//       <div className="bg-white p-4 rounded-xl shadow mb-6">
//         <h2 className="text-lg font-bold">
//           {state.fromCity} → {state.toCity}
//         </h2>
//         <p className="text-sm text-gray-500">
//           {state.date} • {state.time}
//         </p>
//       </div>

//       {/* Cars */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//         {cars.map((car, i) => {
//           const fare = calculateFare(state.tab, car, state);

//           return (
//             <div key={i} className="bg-white p-5 rounded-xl shadow">

//               {/* Category */}
//               <h3 className="text-xl font-bold">
//                 {car.category}
//               </h3>

//               {/* Models */}
//               <p className="text-sm text-gray-500">
//                 {car.models.join(", ")}
//               </p>

//               {/* Seats */}
//               <p className="text-xs text-gray-400 mt-1">
//                 {car.seats}
//               </p>

//               {/* Price */}
//               <p className="text-green-600 font-bold text-xl mt-2">
//                 ₹{fare}
//               </p>

//               {/* Included */}
//               <p className="text-green-600 text-xs mt-2">
//                 ✔ {car.inclusions.join(", ")}
//               </p>

//               {/* Excluded */}
//               <p className="text-red-500 text-xs">
//                 ✖ {car.exclusions.join(", ")}
//               </p>

//               {/* Button */}
//               <button
//                 onClick={() =>
//                   navigate("/booking", {
//                     state: {
//                       ...state,
//                       carName: car.category,
//                       fare,
//                     },
//                   })
//                 }
//                 className="mt-4 w-full bg-green-500 text-white py-2 rounded"
//               >
//                 Book Now
//               </button>

//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Results;   





import { useLocation, useNavigate } from "react-router-dom";
import { cars } from "../data/car";
import { calculateFare } from "../utils/fareCalculator";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  if (!state) {
    return <h2 className="p-6 text-center">No data found</h2>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">

      {/* Header */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <h2 className="text-lg font-bold">
          {state.fromCity} → {state.toCity}
        </h2>
        <p className="text-sm text-gray-500">
          {state.date} • {state.time}
        </p>
      </div>

      {/* Cars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cars.map((car, i) => {
          const fare = calculateFare(state.tab, car, state);

          return (
            <div key={i} className="bg-white p-5 rounded-xl shadow">

              {/* ✅ CAR IMAGE (ADDED) */}
              <img
                src={car.image || "https://via.placeholder.com/300"}
                alt={car.category}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />

              {/* Category */}
              <h3 className="text-xl font-bold">
                {car.category}
              </h3>

              {/* Models */}
              <p className="text-sm text-gray-500">
                {car.models.join(", ")}
              </p>

              {/* Seats */}
              <p className="text-xs text-gray-400 mt-1">
                {car.seats}
              </p>

              {/* Price */}
              <p className="text-green-600 font-bold text-xl mt-2">
                ₹{fare}
              </p>

              {/* Included */}
              <p className="text-green-600 text-xs mt-2">
                ✔ {car.inclusions.join(", ")}
              </p>

              {/* Excluded */}
              <p className="text-red-500 text-xs">
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












































