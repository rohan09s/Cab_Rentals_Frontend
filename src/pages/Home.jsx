


// import Navbar from "../components/Navbar";
// import CabSearch from "../components/CabSearch";
// import logo from "../assets/iim.jpg";

// const Home = () => {
//   return (
//     <div>
//       <Navbar />

//       {/* Hero */}
//       <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 pt-16 pb-28 flex flex-col items-center justify-center text-white text-center">

//         <img
//           src={logo}
//           alt="logo"
//           className="h-16 mb-3 rounded-md shadow-md"
//         />

//         <h1 className="text-3xl md:text-4xl font-extrabold">
//           Book Your Perfect Cab 🚗
//         </h1>

//         <p className="text-blue-100 mt-2">
//           Reliable • Affordable • Comfortable Rides
//         </p>

//       </div>

//       {/* Search Box */}
//       <div className="-mt-16 md:-mt-20 px-3 md:px-0">
//         <CabSearch />
//       </div>

//     </div>
//   );
// };

// export default Home;



import Navbar from "../components/Navbar";
import CabSearch from "../components/CabSearch";
import FloatingWhatsApp from "../components/FloatingWhatsapp";
import PopularRoutes from "../components/PopularRoutes";
import logo from "../assets/iim.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 pt-16 pb-28 flex flex-col items-center justify-center text-white text-center px-4">

        <img
          src={logo}
          alt="logo"
          className="h-16 mb-3 rounded-md shadow-md"
        />

        <h1 className="text-3xl md:text-4xl font-extrabold">
          Book Your Perfect Cab 🚗
        </h1>

        <p className="text-blue-100 mt-2 text-sm md:text-base">
          Reliable • Affordable • Comfortable Rides
        </p>
      </div>

      {/* Search Box */}
      <div className="-mt-16 md:-mt-20 px-3">
        <CabSearch />
      </div>

      {/* Popular Routes */}
      <PopularRoutes />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;


