import CabSearch from "../components/CabSearch";
import FloatingWhatsApp from "../components/FloatingWhatsapp";
import PopularRoutes from "../components/PopularRoutes";
import ContactUs from "../components/ContactUs";
import logo from "../assets/iim.jpg";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 pt-8 sm:pt-12 md:pt-16 pb-20 sm:pb-24 md:pb-28 flex flex-col items-center justify-center text-white text-center px-4">

        <img
          src={logo}
          alt="logo"
          className="h-10 sm:h-12 md:h-16 w-auto mb-2 sm:mb-3 rounded-md shadow-md flex-shrink-0"
        />

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          Book Your Perfect Cab 🚗
        </h1>

        <p className="text-blue-100 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base leading-relaxed">
          Reliable • Affordable • Comfortable Rides
        </p>
      </div>

      {/* Search Box */}
      <div className="-mt-12 sm:-mt-16 md:-mt-20 px-3">
        <CabSearch />
      </div>

      {/* Popular Routes */}
      <PopularRoutes />

      {/* Contact Us */}
      <ContactUs />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;


