// const CarCard = ({ car, fare, details }) => {
//   const bookNow = () => {
//     const msg = `Cab Booking:
// From: ${details.from}
// To: ${details.to}
// Car: ${car.name}
// Fare: ₹${fare}`;

//     window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(msg)}`);
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition">
//       <h2 className="text-xl font-bold">{car.name}</h2>
//       <p className="text-gray-500">{car.seats}</p>

//       <p className="text-green-600 font-bold text-lg mt-2">₹{fare}</p>

//       <button
//         onClick={bookNow}
//         className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg font-semibold"
//       >
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default CarCard;
//  main code








// // added car photos and removed whatsapp link
// import { useNavigate } from "react-router-dom";

// const CarCard = ({ car, fare, details }) => {
//   const navigate = useNavigate();

//   const bookNow = () => {
//     navigate("/booking", {
//       state: {
//         fromCity: details.from,
//         toCity: details.to,
//         carName: car.category,
//         fare: fare,
//       },
//     });
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition">

//       <img
//         src={car.image}
//         alt={car.category}
//         className="w-full h-40 object-cover rounded-lg mb-3"
//       />

//       <h2 className="text-xl font-bold">{car.category}</h2>

//       <p className="text-sm text-gray-500">
//         {car.models.join(", ")}
//       </p>

//       <p className="text-gray-500">{car.seats}</p>

//       <p className="text-green-600 font-bold text-lg mt-2">₹{fare}</p>

//       <button
//         onClick={bookNow}
//         className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg font-semibold"
//       >
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default CarCard;





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
    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition">

      {/* ✅ IMAGE WITH FALLBACK */}
      <img
        src={car.image || "https://via.placeholder.com/300"}
        alt={car.category}
        onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />

      <h2 className="text-xl font-bold">{car.category}</h2>

      <p className="text-sm text-gray-500">
        {car.models.join(", ")}
      </p>

      <p className="text-gray-500">{car.seats}</p>

      <p className="text-green-600 font-bold text-lg mt-2">₹{fare}</p>

      <button
        onClick={bookNow}
        className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg font-semibold"
      >
        Book Now
      </button>
    </div>
  );
};

export default CarCard;