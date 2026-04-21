


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const TABS = ["One Way", "Round Trip", "Hourly Rental"];

// const CabSearch = () => {
//   const navigate = useNavigate();

//   const [tab, setTab] = useState("One Way");
//   const [fromCity, setFromCity] = useState("Pune");
//   const [toCity, setToCity] = useState("Mumbai");

//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [hours, setHours] = useState("4");

//   const handleSearch = () => {
//     if (!date || !time) return alert("Select date & time");

//     if (fromCity === toCity && tab !== "Hourly Rental") {
//       return alert("Pickup & Drop city cannot be same");
//     }

//     const validRoute =
//       (fromCity === "Pune" && toCity === "Mumbai") ||
//       (fromCity === "Mumbai" && toCity === "Pune");

//     if (tab !== "Hourly Rental" && !validRoute) {
//       return alert("Only Pune ↔ Mumbai available");
//     }

//     navigate("/results", {
//       state: {
//         tab,
//         fromCity,
//         toCity,
//         date,
//         time,
//         returnDate,
//         hours
//       }
//     });
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-6 max-w-6xl mx-auto -mt-24 relative z-10 border">

//       {/* Tabs */}
//       <div className="flex gap-4 border-b pb-3 mb-5 overflow-x-auto">
//         {TABS.map((t) => (
//           <button
//             key={t}
//             onClick={() => setTab(t)}
//             className={`pb-2 whitespace-nowrap font-semibold ${
//               tab === t
//                 ? "text-red-600 border-b-2 border-red-600"
//                 : "text-gray-500"
//             }`}
//           >
//             {t}
//           </button>
//         ))}
//       </div>

//       {/* Row */}
//       <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

//         {/* Pickup City */}
//         <div>
//           <label className="text-sm font-semibold text-gray-600 mb-1 block">
//             Pickup City
//           </label>
//           <select
//             value={fromCity}
//             onChange={(e) => setFromCity(e.target.value)}
//             className="w-full border rounded-lg p-3 bg-gray-100"
//           >
//             <option>Pune</option>
//             <option>Mumbai</option>
//           </select>
//         </div>

//         {/* Drop City */}
//         {tab !== "Hourly Rental" && (
//           <div>
//             <label className="text-sm font-semibold text-gray-600 mb-1 block">
//               Drop City
//             </label>
//             <select
//               value={toCity}
//               onChange={(e) => setToCity(e.target.value)}
//               className="w-full border rounded-lg p-3 bg-gray-100"
//             >
//               <option>Mumbai</option>
//               <option>Pune</option>
//             </select>
//           </div>
//         )}

//         {/* Pickup Date */}
//         <div>
//           <label className="text-sm font-semibold text-gray-600 mb-1 block">
//             Pickup Date
//           </label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="w-full border rounded-lg p-3 bg-gray-100"
//           />
//         </div>

//         {/* Pickup Time */}
//         <div>
//           <label className="text-sm font-semibold text-gray-600 mb-1 block">
//             Pickup Time
//           </label>
//           <input
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="w-full border rounded-lg p-3 bg-gray-100"
//           />
//         </div>

//         {/* Return Date / Hours */}
//         {tab === "Round Trip" ? (
//           <div>
//             <label className="text-sm font-semibold text-gray-600 mb-1 block">
//               Return Date
//             </label>
//             <input
//               type="date"
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//               className="w-full border rounded-lg p-3 bg-gray-100"
//             />
//           </div>
//         ) : tab === "Hourly Rental" ? (
//           <div>
//             <label className="text-sm font-semibold text-gray-600 mb-1 block">
//               Duration
//             </label>
//             <select
//               value={hours}
//               onChange={(e) => setHours(e.target.value)}
//               className="w-full border rounded-lg p-3 bg-gray-100"
//             >
//               <option value="4">4 hrs</option>
//               <option value="8">8 hrs</option>
//             </select>
//           </div>
//         ) : null}

//       </div>

//       {/* Button */}
//       <div className="mt-5">
//         <button
//           onClick={handleSearch}
//           className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition"
//         >
//           Search Cabs
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CabSearch;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const TABS = ["One Way", "Round Trip", "Hourly Rental"];

// const CabSearch = () => {
//   const navigate = useNavigate();

//   const [tab, setTab] = useState("One Way");
//   const [fromCity, setFromCity] = useState("Pune");
//   const [toCity, setToCity] = useState("Mumbai");

//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [hours, setHours] = useState("4");

//   const handleSearch = () => {
//     if (!date || !time) return alert("Select date & time");

//     if (fromCity === toCity && tab !== "Hourly Rental") {
//       return alert("Pickup & Drop city cannot be same");
//     }

//     const validRoute =
//       (fromCity === "Pune" && toCity === "Mumbai") ||
//       (fromCity === "Mumbai" && toCity === "Pune");

//     if (tab !== "Hourly Rental" && !validRoute) {
//       return alert("Only Pune ↔ Mumbai available");
//     }

//     navigate("/results", {
//       state: {
//         tab,
//         fromCity,
//         toCity,
//         date,
//         time,
//         returnDate,
//         hours
//       }
//     });
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-6 max-w-6xl mx-auto -mt-24 relative z-10 border">

//       {/* Tabs */}
//       <div className="flex gap-6 border-b pb-3 mb-5 overflow-x-auto">
//         {TABS.map((t) => (
//           <button
//             key={t}
//             onClick={() => setTab(t)}
//             className={`pb-2 whitespace-nowrap font-semibold transition ${
//               tab === t
//                 ? "text-red-600 border-b-2 border-red-600"
//                 : "text-gray-500 hover:text-red-500"
//             }`}
//           >
//             {t}
//           </button>
//         ))}
//       </div>

//       {/* FORM GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end">

//         {/* Pickup City */}
//         <div>
//           <label className="text-sm font-semibold text-gray-600 mb-1">
//             Pickup City
//           </label>
//           <select
//             value={fromCity}
//             onChange={(e) => setFromCity(e.target.value)}
//             className="input"
//           >
//             <option>Pune</option>
//             <option>Mumbai</option>
//           </select>
//         </div>

//         {/* Drop City */}
//         {tab !== "Hourly Rental" && (
//           <div>
//             <label className="text-sm font-semibold text-gray-600 mb-1">
//               Drop City
//             </label>
//             <select
//               value={toCity}
//               onChange={(e) => setToCity(e.target.value)}
//               className="input"
//             >
//               <option>Mumbai</option>
//               <option>Pune</option>
//             </select>
//           </div>
//         )}

//         {/* Pickup Date */}
//         <div>
//           <label className="text-sm font-semibold text-gray-600 mb-1">
//             Pickup Date
//           </label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="input"
//           />
//         </div>

//         {/* Pickup Time */}
//         <div>
//           <label className="text-sm font-semibold text-gray-600 mb-1">
//             Pickup Time
//           </label>
//           <input
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="input"
//           />
//         </div>

//         {/* Return Date / Hours */}
//         {tab === "Round Trip" ? (
//           <div>
//             <label className="text-sm font-semibold text-gray-600 mb-1">
//               Return Date
//             </label>
//             <input
//               type="date"
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//               className="input"
//             />
//           </div>
//         ) : tab === "Hourly Rental" ? (
//           <div>
//             <label className="text-sm font-semibold text-gray-600 mb-1">
//               Duration
//             </label>
//             <select
//               value={hours}
//               onChange={(e) => setHours(e.target.value)}
//               className="input"
//             >
//               <option value="4">4 hrs</option>
//               <option value="8">8 hrs</option>
//             </select>
//           </div>
//         ) : (
//           <div></div>
//         )}

//       </div>

//       {/* BUTTON */}
//       <div className="mt-6 flex justify-end">
//         <button
//           onClick={handleSearch}
//           className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition"
//         >
//           Search Cabs
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CabSearch;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const TABS = ["One Way", "Round Trip", "Hourly Rental"];

// const CabSearch = () => {
//   const navigate = useNavigate();

//   const [tab, setTab] = useState("One Way");
//   const [fromCity, setFromCity] = useState("Pune");
//   const [toCity, setToCity] = useState("Mumbai");

//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [returnDate, setReturnDate] = useState("");

//   // 🔥 Updated hourly state (duration + kms)
//   const [hours, setHours] = useState({
//     duration: "4",
//     kms: "40"
//   });

//   const handleSearch = () => {
//     if (!date || !time) return alert("Select date & time");

//     if (fromCity === toCity && tab !== "Hourly Rental") {
//       return alert("Pickup & Drop city cannot be same");
//     }

//     const validRoute =
//       (fromCity === "Pune" && toCity === "Mumbai") ||
//       (fromCity === "Mumbai" && toCity === "Pune");

//     if (tab !== "Hourly Rental" && !validRoute) {
//       return alert("Only Pune ↔ Mumbai available");
//     }

//     navigate("/results", {
//       state: {
//         tab,
//         fromCity,
//         toCity,
//         date,
//         time,
//         returnDate,
//         hours: hours.duration,
//         kms: hours.kms
//       }
//     });
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-6 max-w-6xl mx-auto relative z-10 border">

//       {/* Tabs */}
//       <div className="flex gap-6 border-b pb-3 mb-5 overflow-x-auto">
//         {TABS.map((t) => (
//           <button
//             key={t}
//             onClick={() => setTab(t)}
//             className={`pb-2 whitespace-nowrap font-semibold transition ${
//               tab === t
//                 ? "text-red-600 border-b-2 border-red-600"
//                 : "text-gray-500 hover:text-red-500"
//             }`}
//           >
//             {t}
//           </button>
//         ))}
//       </div>

//       {/* FORM GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end">

//         {/* Pickup City */}
//         <div>
//           <label className="text-sm font-semibold text-gray-600 mb-1">
//             Pickup City
//           </label>
//           <select
//             value={fromCity}
//             onChange={(e) => setFromCity(e.target.value)}
//             className="input"
//           >
//             <option>Pune</option>
//             <option>Mumbai</option>
//           </select>
//         </div>

//         {/* Drop City */}
//         {tab !== "Hourly Rental" && (
//           <div>
//             <label className="text-sm font-semibold text-gray-600 mb-1">
//               Drop City
//             </label>
//             <select
//               value={toCity}
//               onChange={(e) => setToCity(e.target.value)}
//               className="input"
//             >
//               <option>Mumbai</option>
//               <option>Pune</option>
//             </select>
//           </div>
//         )}

//         {/* Pickup Date */}
//         <div>
//           <label className="text-sm font-semibold text-gray-600 mb-1">
//             Pickup Date
//           </label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="input"
//           />
//         </div>

//         {/* Pickup Time */}
//         <div>
//           <label className="text-sm font-semibold text-gray-600 mb-1">
//             Pickup Time
//           </label>
//           <input
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="input"
//           />
//         </div>

//         {/* Return Date OR Hourly */}
//         {tab === "Round Trip" ? (
//           <div>
//             <label className="text-sm font-semibold text-gray-600 mb-1">
//               Return Date
//             </label>
//             <input
//               type="date"
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//               className="input"
//             />
//           </div>
//         ) : tab === "Hourly Rental" ? (
//           <div>
//             <label className="text-sm font-semibold text-gray-600 mb-1">
//               Package
//             </label>
//             <select
//               value={hours.duration}
//               onChange={(e) => {
//                 const val = e.target.value;
//                 setHours({
//                   duration: val,
//                   kms: String(val * 10)
//                 });
//               }}
//               className="input"
//             >
//               <option value="2">2 hrs / 20 kms</option>
//               <option value="3">3 hrs / 30 kms</option>
//               <option value="4">4 hrs / 40 kms</option>
//               <option value="8">8 hrs / 80 kms</option>
//             </select>
//           </div>
//         ) : (
//           <div></div>
//         )}

//       </div>

//       {/* BUTTON */}
//       <div className="mt-6 flex justify-end">
//         <button
//           onClick={handleSearch}
//           className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition"
//         >
//           Search Cabs
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CabSearch;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const TABS = ["One Way", "Round Trip", "Hourly Rental"];

// const CabSearch = () => {
//   const navigate = useNavigate();

//   const [tab, setTab] = useState("One Way");
//   const [fromCity, setFromCity] = useState("Pune");
//   const [toCity, setToCity] = useState("Mumbai");

//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [returnDate, setReturnDate] = useState("");

//   const [hours, setHours] = useState({
//     duration: "4",
//     kms: "40"
//   });

//   const handleSwap = () => {
//     setFromCity(toCity);
//     setToCity(fromCity);
//   };

//   const handleSearch = () => {
//     if (!date || !time) return alert("Select date & time");

//     if (tab !== "Hourly Rental" && fromCity === toCity) {
//       return alert("Pickup & Drop city cannot be same");
//     }

//     navigate("/results", {
//       state: {
//         tab,
//         fromCity,
//         toCity,
//         date,
//         time,
//         returnDate,
//         hours: hours.duration,
//         kms: hours.kms
//       }
//     });
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-6 max-w-6xl mx-auto relative z-10 border">

//       {/* Tabs */}
//       <div className="flex gap-6 border-b pb-3 mb-5 overflow-x-auto">
//         {TABS.map((t) => (
//           <button
//             key={t}
//             onClick={() => setTab(t)}
//             className={`pb-2 whitespace-nowrap font-semibold transition ${
//               tab === t
//                 ? "text-red-600 border-b-2 border-red-600"
//                 : "text-gray-500 hover:text-red-500"
//             }`}
//           >
//             {t}
//           </button>
//         ))}
//       </div>

//       {/* GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end">

//         {/* Pickup City */}
//         <div>
//           <label className="text-sm font-semibold text-gray-600 mb-1">
//             Pickup City
//           </label>
//           <select
//             value={fromCity}
//             onChange={(e) => setFromCity(e.target.value)}
//             className="input"
//           >
//             <option>Pune</option>
//             <option>Mumbai</option>
//             <option>Kolhapur</option>
//             <option>Lonavala</option>
//             <option>Shirdi</option>
//           </select>
//         </div>

//         {/* Drop City */}
//         {tab !== "Hourly Rental" && (
//           <div className="relative">
//             <label className="text-sm font-semibold text-gray-600 mb-1">
//               Drop City
//             </label>
//             <select
//               value={toCity}
//               onChange={(e) => setToCity(e.target.value)}
//               className="input"
//             >
//               <option>Mumbai</option>
//               <option>Pune</option>
//               <option>Kolhapur</option>
//               <option>Lonavala</option>
//               <option>Shirdi</option>
//             </select>

//             {/* Swap Button */}
//             <button
//               onClick={handleSwap}
//               className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full px-2 py-1 text-sm"
//             >
//               ⇄
//             </button>
//           </div>
//         )}

//         {/* Pickup Date */}
//         <div
//           onClick={() =>
//             document.getElementById("pickupDate")?.showPicker()
//           }
//           className="cursor-pointer"
//         >
//           <label className="text-sm font-semibold text-gray-600 mb-1 block">
//             Pickup Date
//           </label>
//           <input
//             id="pickupDate"
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="input cursor-pointer"
//           />
//         </div>

//         {/* Pickup Time */}
//         <div
//           onClick={() =>
//             document.getElementById("pickupTime")?.showPicker()
//           }
//           className="cursor-pointer"
//         >
//           <label className="text-sm font-semibold text-gray-600 mb-1 block">
//             Pickup Time
//           </label>
//           <input
//             id="pickupTime"
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="input cursor-pointer"
//           />
//         </div>

//         {/* Return / Hourly */}
//         {tab === "Round Trip" ? (
//           <div>
//             <label className="text-sm font-semibold text-gray-600 mb-1">
//               Return Date
//             </label>
//             <input
//               type="date"
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//               className="input"
//             />
//           </div>
//         ) : tab === "Hourly Rental" ? (
//           <div>
//             <label className="text-sm font-semibold text-gray-600 mb-1">
//               Package
//             </label>
//             <select
//               value={hours.duration}
//               onChange={(e) => {
//                 const val = e.target.value;
//                 setHours({
//                   duration: val,
//                   kms: String(val * 10)
//                 });
//               }}
//               className="input"
//             >
//               <option value="2">2 hrs / 20 kms</option>
//               <option value="3">3 hrs / 30 kms</option>
//               <option value="4">4 hrs / 40 kms</option>
//               <option value="8">8 hrs / 80 kms</option>
//             </select>
//           </div>
//         ) : (
//           <div></div>
//         )}

//       </div>

//       {/* BUTTON */}
//       <div className="mt-6 flex justify-end">
//         <button
//           onClick={handleSearch}
//           className="w-full md:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition"
//         >
//           Search Cabs 🚗
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CabSearch;



// hya mde prcies reflected hot nhi
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { routesMap } from "../data/routes";

// const TABS = ["One Way", "Round Trip", "Hourly Rental"];

// const CabSearch = () => {
//   const navigate = useNavigate();

//   const [tab, setTab] = useState("One Way");
//   const [fromCity, setFromCity] = useState("Pune");
//   const [toCity, setToCity] = useState("Mumbai");

//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [returnDate, setReturnDate] = useState("");

//   const [hours, setHours] = useState({
//     duration: "4",
//     kms: "40"
//   });

//   // ✅ Auto update drop city when pickup changes
//   useEffect(() => {
//     if (routesMap[fromCity]) {
//       setToCity(routesMap[fromCity][0]);
//     }
//   }, [fromCity]);

//   const handleSwap = () => {
//     setFromCity(toCity);
//     setToCity(fromCity);
//   };

//   const handleSearch = () => {
//     if (!date || !time) return alert("Select date & time");

//     if (tab === "One Way" && fromCity === toCity) {
//       return alert("Pickup & Drop city cannot be same");
//     }

//     navigate("/results", {
//       state: {
//         tab,
//         fromCity,
//         toCity,
//         date,
//         time,
//         returnDate,
//         hours: hours.duration,
//         kms: hours.kms
//       }
//     });
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-6 max-w-6xl mx-auto relative z-10 border">

//       {/* Tabs */}
//       <div className="flex gap-6 border-b pb-3 mb-5 overflow-x-auto">
//         {TABS.map((t) => (
//           <button
//             key={t}
//             onClick={() => setTab(t)}
//             className={`pb-2 whitespace-nowrap font-semibold transition ${
//               tab === t
//                 ? "text-red-600 border-b-2 border-red-600"
//                 : "text-gray-500 hover:text-red-500"
//             }`}
//           >
//             {t}
//           </button>
//         ))}
//       </div>

//       {/* GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end">

//         {/* Pickup City */}
//         <div>
//           <label className="text-sm font-semibold text-gray-600 mb-1">
//             Pickup City
//           </label>
//           <select
//             value={fromCity}
//             onChange={(e) => setFromCity(e.target.value)}
//             className="input"
//           >
//             <option>Pune</option>
//             <option>Mumbai</option>
//             <option>Lonavala</option>
//           </select>
//         </div>

//         {/* Drop City (Dynamic) */}
//         {tab === "One Way" && (
//           <div className="relative">
//             <label className="text-sm font-semibold text-gray-600 mb-1">
//               Drop City
//             </label>

//             <select
//               value={toCity}
//               onChange={(e) => setToCity(e.target.value)}
//               className="input"
//             >
//               {(routesMap[fromCity] || []).map((city, i) => (
//                 <option key={i} value={city}>
//                   {city.charAt(0) + city.slice(1).toLowerCase()}
//                 </option>
//               ))}
//             </select>

//             {/* Swap */}
//             <button
//               onClick={handleSwap}
//               className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full px-2 py-1 text-sm"
//             >
//               ⇄
//             </button>
//           </div>
//         )}

//         {/* Round Trip Destinations */}
//         {tab === "Round Trip" && (
//           <div>
//             <label className="text-sm font-semibold text-gray-600 mb-1">
//               Destinations
//             </label>
//             <input
//               type="text"
//               placeholder="Enter destinations (e.g. Shirdi, Nashik)"
//               value={toCity}
//               onChange={(e) => setToCity(e.target.value)}
//               className="input"
//             />
//           </div>
//         )}

//         {/* Pickup Date */}
//         <div
//           onClick={() =>
//             document.getElementById("pickupDate")?.showPicker()
//           }
//           className="cursor-pointer"
//         >
//           <label className="text-sm font-semibold text-gray-600 mb-1 block">
//             Pickup Date
//           </label>
//           <input
//             id="pickupDate"
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="input cursor-pointer"
//           />
//         </div>

//         {/* Pickup Time */}
//         <div
//           onClick={() =>
//             document.getElementById("pickupTime")?.showPicker()
//           }
//           className="cursor-pointer"
//         >
//           <label className="text-sm font-semibold text-gray-600 mb-1 block">
//             Pickup Time
//           </label>
//           <input
//             id="pickupTime"
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="input cursor-pointer"
//           />
//         </div>

//         {/* Return Date / Hourly */}
//         {tab === "Round Trip" ? (
//           <div
//             onClick={() =>
//               document.getElementById("returnDate")?.showPicker()
//             }
//             className="cursor-pointer"
//           >
//             <label className="text-sm font-semibold text-gray-600 mb-1 block">
//               Return Date
//             </label>
//             <input
//               id="returnDate"
//               type="date"
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//               className="input cursor-pointer"
//             />
//           </div>
//         ) : tab === "Hourly Rental" ? (
//           <div>
//             <label className="text-sm font-semibold text-gray-600 mb-1">
//               Package
//             </label>
//             <select
//               value={hours.duration}
//               onChange={(e) => {
//                 const val = e.target.value;
//                 setHours({
//                   duration: val,
//                   kms: String(val * 10)
//                 });
//               }}
//               className="input"
//             >
//               <option value="2">2 hrs / 20 kms</option>
//               <option value="3">3 hrs / 30 kms</option>
//               <option value="4">4 hrs / 40 kms</option>
//               <option value="8">8 hrs / 80 kms</option>
//             </select>
//           </div>
//         ) : (
//           <div></div>
//         )}

//       </div>

//       {/* BUTTON */}
//       <div className="mt-6 flex justify-end">
//         <button
//           onClick={handleSearch}
//           className="w-full md:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition"
//         >
//           Search Cabs 🚗
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CabSearch;





import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routesMap } from "../data/routes";

const TABS = ["One Way", "Round Trip", "Hourly Rental"];

const CabSearch = () => {
  const navigate = useNavigate();

  const [tab, setTab] = useState("One Way");
  const [fromCity, setFromCity] = useState("Pune");
  const [toCity, setToCity] = useState("Mumbai");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [hours, setHours] = useState({
    duration: "4",
    kms: "40"
  });

  // ✅ Auto update drop city when pickup changes
  useEffect(() => {
    if (routesMap[fromCity]) {
      const firstCity = routesMap[fromCity][0];
      setToCity(
        firstCity.charAt(0) + firstCity.slice(1).toLowerCase()
      );
    }
  }, [fromCity]);

  // ✅ FIXED SWAP (case-safe)
  const handleSwap = () => {
    const newFrom =
      toCity.charAt(0) + toCity.slice(1).toLowerCase();

    const newTo =
      fromCity.charAt(0) + fromCity.slice(1).toLowerCase();

    setFromCity(newFrom);
    setToCity(newTo);
  };

  const handleSearch = () => {
    if (!date || !time) return alert("Select date & time");

    if (tab === "One Way" && fromCity === toCity) {
      return alert("Pickup & Drop city cannot be same");
    }

    navigate("/results", {
      state: {
        tab,
        fromCity,
        toCity,
        date,
        time,
        returnDate,
        hours: hours.duration,
        kms: hours.kms
      }
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-6 max-w-6xl mx-auto relative z-10 border">

      {/* Tabs */}
      <div className="flex gap-6 border-b pb-3 mb-5 overflow-x-auto">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pb-2 whitespace-nowrap font-semibold transition ${
              tab === t
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500 hover:text-red-500"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end">

        {/* Pickup City */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1">
            Pickup City
          </label>
          <select
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            className="input"
          >
            <option>Pune</option>
            <option>Mumbai</option>
            <option>Lonavala</option>
          </select>
        </div>

        {/* Drop City */}
        {tab === "One Way" && (
          <div className="relative">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Drop City
            </label>

            <select
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              className="input"
            >
              {(routesMap[fromCity] || []).map((city, i) => {
                const formatted =
                  city.charAt(0) + city.slice(1).toLowerCase();

                return (
                  <option key={i} value={formatted}>
                    {formatted}
                  </option>
                );
              })}
            </select>

            {/* Swap */}
            <button
              onClick={handleSwap}
              className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full px-2 py-1 text-sm"
            >
              ⇄
            </button>
          </div>
        )}

        {/* Round Trip */}
        {tab === "Round Trip" && (
          <div>
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Destinations
            </label>
            <input
              type="text"
              placeholder="Enter destinations (e.g. Shirdi, Nashik)"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              className="input"
            />
          </div>
        )}

        {/* Pickup Date */}
        <div
          onClick={() =>
            document.getElementById("pickupDate")?.showPicker()
          }
          className="cursor-pointer"
        >
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Pickup Date
          </label>
          <input
            id="pickupDate"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input cursor-pointer"
          />
        </div>

        {/* Pickup Time */}
        <div
          onClick={() =>
            document.getElementById("pickupTime")?.showPicker()
          }
          className="cursor-pointer"
        >
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Pickup Time
          </label>
          <input
            id="pickupTime"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="input cursor-pointer"
          />
        </div>

        {/* Return / Hourly */}
        {tab === "Round Trip" ? (
          <div
            onClick={() =>
              document.getElementById("returnDate")?.showPicker()
            }
            className="cursor-pointer"
          >
            <label className="text-sm font-semibold text-gray-600 mb-1 block">
              Return Date
            </label>
            <input
              id="returnDate"
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="input cursor-pointer"
            />
          </div>
        ) : tab === "Hourly Rental" ? (
          <div>
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Package
            </label>
            <select
              value={hours.duration}
              onChange={(e) => {
                const val = e.target.value;
                setHours({
                  duration: val,
                  kms: String(val * 10)
                });
              }}
              className="input"
            >
              <option value="2">2 hrs / 20 kms</option>
              <option value="3">3 hrs / 30 kms</option>
              <option value="4">4 hrs / 40 kms</option>
              <option value="8">8 hrs / 80 kms</option>
            </select>
          </div>
        ) : (
          <div></div>
        )}

      </div>

      {/* BUTTON */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSearch}
          className="w-full md:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition"
        >
          Search Cabs 🚗
        </button>
      </div>
    </div>
  );
};

export default CabSearch;
// final code with dynamic drop down and swap




