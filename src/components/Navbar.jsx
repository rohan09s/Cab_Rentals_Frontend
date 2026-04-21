



// import { useState } from "react";
// import logo from "../assets/iim.jpg";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="bg-white shadow-md sticky top-0 z-50">

//       <div className="flex justify-between items-center px-4 md:px-8 py-3">

//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img src={logo} alt="Amit Tours" className="h-10 w-auto" />

//           <div className="leading-tight">
//             <h1 className="font-bold text-blue-900 text-sm md:text-base">
//               Amit Tours
//             </h1>
//             <p className="text-xs text-gray-500">& Travels</p>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6 font-semibold text-gray-600">
//           <button className="hover:text-blue-600">Home</button>
//           <button className="hover:text-blue-600">Packages</button>
//           <button className="hover:text-blue-600">Contact</button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden px-4 pb-4 space-y-3 text-gray-700">
//           <div>Home</div>
//           <div>Packages</div>
//           <div>Contact</div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;



// import { useState } from "react";
// import logo from "../assets/iim.jpg";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="bg-white shadow-md sticky top-0 z-50">

//       <div className="flex justify-between items-center px-4 md:px-8 py-3">

//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img src={logo} alt="Amit Tours" className="h-10 w-auto" />

//           <div className="leading-tight">
//             <h1 className="font-bold text-blue-900 text-sm md:text-base">
//               Amit Tours
//             </h1>
//             <p className="text-xs text-gray-500">& Travels</p>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6 font-semibold text-gray-600">
//           <button className="hover:text-blue-600">Home</button>
//           <button className="hover:text-blue-600">Packages</button>
//           <button className="hover:text-blue-600">Contact</button>

//           {/* Call Button (RED) */}
//           <a
//             href="tel:7709040404"
//             className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition"
//           >
//             📞 7709040404
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden px-4 pb-4 space-y-3 text-gray-700">

//           <div>Home</div>
//           <div>Packages</div>
//           <div>Contact</div>

//           {/* Mobile Call Button */}
//           <a
//             href="tel:7709040404"
//             className="block bg-red-600 text-white text-center py-2 rounded-lg font-bold"
//           >
//             📞 Call: 7709040404
//           </a>

//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;






import { useState, useEffect } from "react";
import logo from "../assets/iim.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Packages", "Contact"];

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(to right, #1e3a8a, #2563eb, #dc2626)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Amit Tours"
              className="h-10 w-10 object-cover rounded-lg border border-gray-200 shadow-sm"
            />
            <div>
              <h1 className="font-bold text-blue-900 text-base tracking-wide leading-tight">
                Amit Tours & Travels
              </h1>
              <p
                className="text-gray-400 leading-tight"
                style={{ fontSize: "10px", letterSpacing: "0.15em" }}
              >
                
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <button
                key={item}
                className="text-sm font-semibold text-gray-600 hover:text-blue-800 transition-colors duration-200"
              >
                {item}
              </button>
            ))}

            <div className="w-px h-6 bg-gray-200" />

            {/* Call Button */}
            <a
              href="tel:7709040404"
              className="flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 transition-all duration-200"
            >
              📞 7709040404
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-blue-900 font-bold text-xl"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-gray-50 px-4 py-3 space-y-1">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => setOpen(false)}
              className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-700 hover:text-blue-800 hover:bg-white rounded-lg transition-all duration-200"
            >
              {item}
            </button>
          ))}

          {/* Call Button Mobile */}
          <a
            href="tel:7709040404"
            className="flex items-center justify-center gap-2 text-white text-sm font-bold py-3 rounded-lg mt-2 bg-red-600 hover:bg-red-700 transition-all duration-200"
          >
            📞 Call: 7709040404
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;