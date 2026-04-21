// const PopularRoutes = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">

//       <h2 className="text-2xl font-bold text-center mb-6">
//         Popular Routes 🚗
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

//         <div className="bg-white p-5 rounded-xl shadow text-center">
//           <h3 className="font-bold">Ashtavinayak Darshan</h3>
//           <p className="text-sm text-gray-500">Starting at ₹10000</p>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow text-center">
//           <h3 className="font-bold">Pune → Shirdi</h3>
//           <p className="text-sm text-gray-500">Starting at ₹4999</p>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow text-center">
//           <h3 className="font-bold">Contact us</h3>
//           <p className="text-sm text-gray-500">For booking inquiries</p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default PopularRoutes;



const PopularRoutes = () => {
  const routes = [
    { icon: "🛕", title: "Ashtavinayak Darshan", price: "Starting at ₹10,000", tag: "Pilgrimage" },
    { icon: "🙏", title: "Pune → Shirdi", price: "Starting at ₹4,999", tag: "Pilgrimage" },
    { icon: "⛰️", title: "Pune → Mahabaleshwar", price: "Starting at ₹3,999", tag: "Hill Station" },
    { icon: "🌿", title: "Pune → Lonavala", price: "Starting at ₹1,999", tag: "Scenic" },
    { icon: "🌊", title: "Pune → Konkan Coast", price: "Starting at ₹5,999", tag: "Beach" },
    { icon: "📞", title: "Contact Us", price: "For custom bookings", tag: "Enquire" },
  ];

  const tagColors = {
    Pilgrimage: "bg-amber-100 text-amber-800",
    "Hill Station": "bg-purple-100 text-purple-800",
    Scenic: "bg-blue-100 text-blue-800",
    Beach: "bg-teal-100 text-teal-800",
    Enquire: "bg-green-100 text-green-800",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-2">Popular Routes 🚗</h2>
      <p className="text-center text-sm text-gray-500 mb-6">Handpicked packages from Pune</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {routes.map((route, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow text-center hover:-translate-y-1 transition-transform"
          >
            <div className="text-3xl mb-2">{route.icon}</div>
            <h3 className="font-bold text-gray-800">{route.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{route.price}</p>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[route.tag]}`}>
              {route.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRoutes;