







// import { useLocation } from "react-router-dom";
// import { useState } from "react";

// const Booking = () => {
//   const { state } = useLocation();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     pickup: "",
//     drop: "",
//   });

//   const [errors, setErrors] = useState({});

//   if (!state) {
//     return <h2 className="p-6">No booking data found</h2>;
//   }

//   const advance = 500;

//   const validate = () => {
//     let newErrors = {};

//     if (!form.name) newErrors.name = "Name required";
//     if (!form.phone || form.phone.length !== 10)
//       newErrors.phone = "Valid 10-digit number required";
//     if (!form.pickup) newErrors.pickup = "Pickup address required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleBooking = () => {
//     if (!validate()) return;

//     alert("Proceeding to payment (next step)");
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-4 md:p-8">

//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

//         {/* LEFT: SUMMARY */}
//         <div className="bg-white p-5 rounded-xl shadow">

//           <h3 className="font-bold text-lg mb-4 border-b pb-2">
//             Booking Summary
//           </h3>

//           <div className="text-sm space-y-2 text-gray-700">
//             <p><b>Trip Type:</b> {state.tab}</p>
//             <p><b>Pickup City:</b> {state.fromCity}</p>
//             <p><b>Drop City:</b> {state.toCity}</p>
//             <p><b>Date:</b> {state.date}</p>
//             <p><b>Time:</b> {state.time}</p>
//           </div>

//           <div className="mt-4 p-3 border rounded-lg text-center">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
//               className="w-20 mx-auto"
//             />
//             <p className="font-semibold mt-2">{state.carName}</p>
//             <p className="text-green-600 font-bold text-lg">₹{state.fare}</p>
//           </div>

//           <div className="mt-4 space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span>Total Fare</span>
//               <span>₹{state.fare}</span>
//             </div>

//             <div className="flex justify-between text-green-600 font-semibold">
//               <span>Advance</span>
//               <span>₹{advance}</span>
//             </div>

//             <div className="flex justify-between font-bold">
//               <span>Remaining</span>
//               <span>₹{state.fare - advance}</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: FORM */}
//         <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">

//           <h2 className="text-xl font-bold mb-4">
//             Customer Details
//           </h2>

//           <div className="grid gap-4">

//             {/* Name */}
//             <div>
//               <label className="text-sm font-semibold">Full Name</label>
//               <input
//                 type="text"
//                 className="input mt-1"
//                 value={form.name}
//                 onChange={(e) =>
//                   setForm({ ...form, name: e.target.value })
//                 }
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-xs">{errors.name}</p>
//               )}
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="text-sm font-semibold">Mobile Number</label>
//               <input
//                 type="tel"
//                 className="input mt-1"
//                 value={form.phone}
//                 onChange={(e) =>
//                   setForm({ ...form, phone: e.target.value })
//                 }
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-xs">{errors.phone}</p>
//               )}
//             </div>

//             {/* Pickup */}
//             <div>
//               <label className="text-sm font-semibold">Pickup Address</label>
//               <textarea
//                 className="input mt-1"
//                 value={form.pickup}
//                 onChange={(e) =>
//                   setForm({ ...form, pickup: e.target.value })
//                 }
//               />
//               {errors.pickup && (
//                 <p className="text-red-500 text-xs">{errors.pickup}</p>
//               )}
//             </div>

//             {/* Drop */}
//             <div>
//               <label className="text-sm font-semibold">Drop Address</label>
//               <textarea
//                 className="input mt-1"
//                 value={form.drop}
//                 onChange={(e) =>
//                   setForm({ ...form, drop: e.target.value })
//                 }
//               />
//             </div>

//             {/* Payment Notice */}
//             <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm">
//               ₹500 advance required to confirm booking.
//             </div>

//             {/* Button */}
//             <button
//               onClick={handleBooking}
//               className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold disabled:opacity-50"
//             >
//               Pay ₹500 & Confirm Booking
//             </button>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;


// adiicha code aahe

// import { useLocation } from "react-router-dom";
// import { useState } from "react";

// const Booking = () => {
//   const { state } = useLocation();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     pickup: "",
//     drop: "",
//   });

//   const [errors, setErrors] = useState({});

//   if (!state) {
//     return <h2 className="p-6">No booking data found</h2>;
//   }

//   const advance = 500;

//   // ✅ VALIDATION
//   const validate = () => {
//     let newErrors = {};

//     if (!form.name) newErrors.name = "Name required";
//     if (!form.phone || form.phone.length !== 10)
//       newErrors.phone = "Valid 10-digit number required";
//     if (!form.pickup) newErrors.pickup = "Pickup address required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // ✅ WHATSAPP FUNCTION
//   const sendWhatsApp = () => {
//     const message = `
// 🚗 New Booking

// Name: ${form.name}
// Phone: ${form.phone}

// Trip: ${state.tab}
// From: ${state.fromCity}
// To: ${state.toCity}

// Date: ${state.date}
// Time: ${state.time}
// ${state.returnDate ? `Return: ${state.returnDate}` : ""}

// Car: ${state.carName}
// Fare: ₹${state.fare}

// Pickup Address: ${form.pickup}
// Drop Address: ${form.drop}
//     `;

//     const url = `https://wa.me/917709040404?text=${encodeURIComponent(message)}`;

//     window.open(url, "_blank");
//   };

//   // ✅ BOOKING HANDLER
//   const handleBooking = () => {
//     if (!validate()) return;

//     // 👉 Later: save to DB here

//     sendWhatsApp(); // 🔥 send to WhatsApp

//     alert("Redirecting to WhatsApp to confirm booking");
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-4 md:p-8">

//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

//         {/* LEFT: SUMMARY */}
//         <div className="bg-white p-5 rounded-xl shadow">

//           <h3 className="font-bold text-lg mb-4 border-b pb-2">
//             Booking Summary
//           </h3>

//           <div className="text-sm space-y-2 text-gray-700">
//             <p><b>Trip Type:</b> {state.tab}</p>
//             <p><b>Pickup City:</b> {state.fromCity}</p>
//             <p><b>Drop City:</b> {state.toCity}</p>
//             <p><b>Date:</b> {state.date}</p>
//             <p><b>Time:</b> {state.time}</p>
//           </div>

//           <div className="mt-4 p-3 border rounded-lg text-center">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
//               className="w-20 mx-auto"
//             />
//             <p className="font-semibold mt-2">{state.carName}</p>
//             <p className="text-green-600 font-bold text-lg">₹{state.fare}</p>
//           </div>

//           <div className="mt-4 space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span>Total Fare</span>
//               <span>₹{state.fare}</span>
//             </div>

//             <div className="flex justify-between text-green-600 font-semibold">
//               <span>Advance</span>
//               <span>₹{advance}</span>
//             </div>

//             <div className="flex justify-between font-bold">
//               <span>Remaining</span>
//               <span>₹{state.fare - advance}</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: FORM */}
//         <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">

//           <h2 className="text-xl font-bold mb-4">
//             Customer Details
//           </h2>

//           <div className="grid gap-4">

//             {/* Name */}
//             <div>
//               <label className="text-sm font-semibold">Full Name</label>
//               <input
//                 type="text"
//                 className="input mt-1"
//                 value={form.name}
//                 onChange={(e) =>
//                   setForm({ ...form, name: e.target.value })
//                 }
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-xs">{errors.name}</p>
//               )}
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="text-sm font-semibold">Mobile Number</label>
//               <input
//                 type="tel"
//                 className="input mt-1"
//                 value={form.phone}
//                 onChange={(e) =>
//                   setForm({ ...form, phone: e.target.value })
//                 }
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-xs">{errors.phone}</p>
//               )}
//             </div>

//             {/* Pickup */}
//             <div>
//               <label className="text-sm font-semibold">Pickup Address</label>
//               <textarea
//                 className="input mt-1"
//                 value={form.pickup}
//                 onChange={(e) =>
//                   setForm({ ...form, pickup: e.target.value })
//                 }
//               />
//               {errors.pickup && (
//                 <p className="text-red-500 text-xs">{errors.pickup}</p>
//               )}
//             </div>

//             {/* Drop */}
//             <div>
//               <label className="text-sm font-semibold">Drop Address</label>
//               <textarea
//                 className="input mt-1"
//                 value={form.drop}
//                 onChange={(e) =>
//                   setForm({ ...form, drop: e.target.value })
//                 }
//               />
//             </div>

//             {/* Payment Notice */}
//             <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm">
//               ₹500 advance required to confirm booking.
//             </div>

//             {/* Button */}
//             <button
//               onClick={handleBooking}
//               className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold"
//             >
//               Pay ₹500 & Confirm Booking
//             </button>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;




// new code for Booking.jsx with WhatsApp integration and validation.


// import { useLocation } from "react-router-dom";
// import { useState } from "react";

// const Booking = () => {
//   const { state } = useLocation();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     pickup: "",
//     drop: "",
//   });

//   const [errors, setErrors] = useState({});

//   if (!state) {
//     return <h2 className="p-6">No booking data found</h2>;
//   }

//   const advance = 500;

//   // ✅ VALIDATION
//   const validate = () => {
//     let newErrors = {};

//     if (!form.name) newErrors.name = "Name required";
//     if (!form.phone || form.phone.length !== 10)
//       newErrors.phone = "Valid 10-digit number required";
//     if (!form.pickup) newErrors.pickup = "Pickup address required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // ✅ PAYMENT FUNCTION
//   const handlePayment = async () => {
//     if (!validate()) return;

//     try {
//       // 1️⃣ Create order
//       const res = await fetch("http://localhost:5000/api/payment/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: 500 }),
//       });

//       const order = await res.json();

//       const options = {
//         key: "rzp_test_SezajqZCojhWzq", // ✅ FIXED
//         amount: order.amount,
//         currency: "INR",
//         name: "Amit Tours & Travels",
//         description: "Cab Booking Advance",
//         order_id: order.id,

//         handler: async function (response) {
//           try {
//             // 2️⃣ VERIFY + SAVE BOOKING
//             const verifyRes = await fetch(
//               "http://localhost:5000/api/payment/verify",
//               {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                   ...response,
//                   bookingData: {
//                     name: form.name,
//                     phone: form.phone,
//                     fromCity: state.fromCity,
//                     toCity: state.toCity,
//                     date: state.date,
//                     time: state.time,
//                     car: state.carName,
//                     fare: state.fare,
//                   },
//                 }),
//               }
//             );

//             const data = await verifyRes.json();

//             if (data.success) {
//               // ✅ FREE WHATSAPP (NO API)
//               window.location.href = data.whatsappLink;

//               alert("Booking Confirmed 🎉");
//             } else {
//               alert("Payment verification failed");
//             }
//           } catch (err) {
//             console.log(err);
//             alert("Something went wrong");
//           }
//         },

//         theme: {
//           color: "#16a34a",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//     } catch (err) {
//       console.log(err);
//       alert("Payment failed");
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-4 md:p-8">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

//         {/* LEFT: SUMMARY */}
//         <div className="bg-white p-5 rounded-xl shadow">
//           <h3 className="font-bold text-lg mb-4 border-b pb-2">
//             Booking Summary
//           </h3>

//           <div className="text-sm space-y-2 text-gray-700">
//             <p><b>Trip Type:</b> {state.tab}</p>
//             <p><b>Pickup City:</b> {state.fromCity}</p>
//             <p><b>Drop City:</b> {state.toCity}</p>
//             <p><b>Date:</b> {state.date}</p>
//             <p><b>Time:</b> {state.time}</p>
//           </div>

//           <div className="mt-4 p-3 border rounded-lg text-center">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
//               className="w-20 mx-auto"
//             />
//             <p className="font-semibold mt-2">{state.carName}</p>
//             <p className="text-green-600 font-bold text-lg">₹{state.fare}</p>
//           </div>

//           <div className="mt-4 space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span>Total Fare</span>
//               <span>₹{state.fare}</span>
//             </div>

//             <div className="flex justify-between text-green-600 font-semibold">
//               <span>Advance</span>
//               <span>₹{advance}</span>
//             </div>

//             <div className="flex justify-between font-bold">
//               <span>Remaining</span>
//               <span>₹{state.fare - advance}</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: FORM */}
//         <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-bold mb-4">
//             Customer Details
//           </h2>

//           <div className="grid gap-4">

//             {/* Name */}
//             <div>
//               <label className="text-sm font-semibold">Full Name</label>
//               <input
//                 type="text"
//                 className="input mt-1"
//                 value={form.name}
//                 onChange={(e) =>
//                   setForm({ ...form, name: e.target.value })
//                 }
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-xs">{errors.name}</p>
//               )}
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="text-sm font-semibold">Mobile Number</label>
//               <input
//                 type="tel"
//                 className="input mt-1"
//                 value={form.phone}
//                 onChange={(e) =>
//                   setForm({ ...form, phone: e.target.value })
//                 }
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-xs">{errors.phone}</p>
//               )}
//             </div>

//             {/* Pickup */}
//             <div>
//               <label className="text-sm font-semibold">Pickup Address</label>
//               <textarea
//                 className="input mt-1"
//                 value={form.pickup}
//                 onChange={(e) =>
//                   setForm({ ...form, pickup: e.target.value })
//                 }
//               />
//               {errors.pickup && (
//                 <p className="text-red-500 text-xs">{errors.pickup}</p>
//               )}
//             </div>

//             {/* Drop */}
//             <div>
//               <label className="text-sm font-semibold">Drop Address</label>
//               <textarea
//                 className="input mt-1"
//                 value={form.drop}
//                 onChange={(e) =>
//                   setForm({ ...form, drop: e.target.value })
//                 }
//               />
//             </div>

//             {/* Notice */}
//             <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm">
//               ₹500 advance required to confirm booking.
//             </div>

//             {/* BUTTON */}
//             <button
//               onClick={handlePayment}
//               className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold"
//             >
//               Pay ₹500 & Confirm Booking
//             </button>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;
// old payment code 







// import { useLocation } from "react-router-dom";
// import { useState } from "react";

// const Booking = () => {
//   const { state } = useLocation();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     pickup: "",
//     drop: "",
//   });

//   const [errors, setErrors] = useState({});

//   if (!state) {
//     return <h2 className="p-6">No booking data found</h2>;
//   }

//   const advance = 500;

//   // ✅ VALIDATION
//   const validate = () => {
//     let newErrors = {};

//     if (!form.name) newErrors.name = "Name required";
//     if (!form.phone || form.phone.length !== 10)
//       newErrors.phone = "Valid 10-digit number required";
//     if (!form.pickup) newErrors.pickup = "Pickup address required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // ✅ PAYMENT FUNCTION (FULL FIXED)
//   const handlePayment = async () => {
//     if (!validate()) return;

//     try {
//       // 1️⃣ CREATE ORDER
//       const res = await fetch("https://cab-backend-zca0.onrender.com/api/payment/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: Number(advance) }), // ✅ FIX: send advance amount
//       });

//       const order = await res.json();
//       console.log("ORDER RESPONSE:", order);

//       if (!order.id) {
//         alert("Order creation failed");
//         return;
//       }

//       // 2️⃣ RAZORPAY OPTIONS
//       const options = {
//         key: "rzp_test_SezajqZCojhWzq", // ✅ YOUR TEST KEY
//         amount: order.amount,
//         currency: "INR",
//         name: "Amit Tours & Travels",
//         description: "Cab Booking Advance",
//         order_id: order.id,

//         // ✅ FIX FOR 400 ERROR
//         prefill: {
//           name: form.name || "Customer",
//           contact: form.phone || "9999999999",
//           email: "test@gmail.com", // Razorpay requires email, using dummy
//         },
//           notes: {
//             booking_for:form.name,
//           },

//         handler: async function (response) {
//           try {
//             console.log("PAYMENT SUCCESS:", response);

//             // 3️⃣ VERIFY + SAVE BOOKING
//             const verifyRes = await fetch(
//               "https://cab-backend-zca0.onrender.com/api/payment/verify",
//               {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                   ...response,
//                   bookingData: {
//                     name: form.name,
//                     phone: form.phone,
//                     fromCity: state.fromCity,
//                     toCity: state.toCity,
//                     date: state.date,
//                     time: state.time,
//                     car: state.carName,
//                     fare: state.fare,
//                   },
//                 }),
//               }
//             );

//             const data = await verifyRes.json();

//             if (data.success) {
//               alert("Booking Confirmed 🎉");

//               // ✅ WhatsApp redirect
//               // window.location.href = data.whatsappLink;
//             } else {
//               alert("Payment verification failed");
//             }
//           } catch (err) {
//             console.log("VERIFY ERROR:", err);
//             alert("Something went wrong");
//           }
//         },

//         modal: {
//           ondismiss: function () {
//             console.log("Payment popup closed");
//           },
//         },

//         theme: {
//           color: "#16a34a",
//         },
//       };

//       // 4️⃣ OPEN RAZORPAY
//       const rzp = new window.Razorpay(options);
//       rzp.open();

//     } catch (err) {
//       console.log("PAYMENT ERROR:", err);
//       alert("Payment failed");
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-4 md:p-8">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

//         {/* LEFT: SUMMARY */}
//         <div className="bg-white p-5 rounded-xl shadow">
//           <h3 className="font-bold text-lg mb-4 border-b pb-2">
//             Booking Summary
//           </h3>

//           <div className="text-sm space-y-2 text-gray-700">
//             <p><b>Trip Type:</b> {state.tab}</p>
//             <p><b>Pickup City:</b> {state.fromCity}</p>
//             <p><b>Drop City:</b> {state.toCity}</p>
//             <p><b>Date:</b> {state.date}</p>
//             <p><b>Time:</b> {state.time}</p>
//           </div>

//           <div className="mt-4 p-3 border rounded-lg text-center">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
//               className="w-20 mx-auto"
//             />
//             <p className="font-semibold mt-2">{state.carName}</p>
//             <p className="text-green-600 font-bold text-lg">₹{state.fare}</p>
//           </div>

//           <div className="mt-4 space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span>Total Fare</span>
//               <span>₹{state.fare}</span>
//             </div>

//             <div className="flex justify-between text-green-600 font-semibold">
//               <span>Advance</span>
//               <span>₹{advance}</span>
//             </div>

//             <div className="flex justify-between font-bold">
//               <span>Pay to Driver</span>
//               <span>₹{state.fare - advance}</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: FORM */}
//         <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-bold mb-4">
//             Customer Details
//           </h2>

//           <div className="grid gap-4">

//             <div>
//               <label className="text-sm font-semibold">Full Name</label>
//               <input
//                 type="text"
//                 className="input mt-1"
//                 value={form.name}
//                 onChange={(e) =>
//                   setForm({ ...form, name: e.target.value })
//                 }
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-xs">{errors.name}</p>
//               )}
//             </div>

//             <div>
//               <label className="text-sm font-semibold">Mobile Number</label>
//               <input
//                 type="tel"
//                 className="input mt-1"
//                 value={form.phone}
//                 onChange={(e) =>
//                   setForm({ ...form, phone: e.target.value })
//                 }
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-xs">{errors.phone}</p>
//               )}
//             </div>

//             <div>
//               <label className="text-sm font-semibold">Pickup Address</label>
//               <textarea
//                 className="input mt-1"
//                 value={form.pickup}
//                 onChange={(e) =>
//                   setForm({ ...form, pickup: e.target.value })
//                 }
//               />
//               {errors.pickup && (
//                 <p className="text-red-500 text-xs">{errors.pickup}</p>
//               )}
//             </div>

//             <div>
//               <label className="text-sm font-semibold">Drop Address</label>
//               <textarea
//                 className="input mt-1"
//                 value={form.drop}
//                 onChange={(e) =>
//                   setForm({ ...form, drop: e.target.value })
//                 }
//               />
//             </div>

//             <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm">
//               ₹500 advance required to confirm booking.
//             </div>

//             <button
//               onClick={handlePayment}
//               className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold"
//             >
//               Pay ₹500 & Confirm Booking
//             </button>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;   





// added success page for customer .
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Booking = () => {
  const { state } = useLocation();
  const navigate = useNavigate(); // ✅ added

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
  });

  const [errors, setErrors] = useState({});

  if (!state) {
    return <h2 className="p-6">No booking data found</h2>;
  }

  const advance = 500;

  // ✅ VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name required";
    if (!form.phone || form.phone.length !== 10)
      newErrors.phone = "Valid 10-digit number required";
    if (!form.pickup) newErrors.pickup = "Pickup address required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ PAYMENT FUNCTION
  const handlePayment = async () => {
    if (!validate()) return;

    try {
      // 1️⃣ CREATE ORDER
      const res = await fetch("https://cab-backend-zca0.onrender.com/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(advance) }),
      });

      const order = await res.json();

      if (!order.id) {
        alert("Order creation failed");
        return;
      }

      // 2️⃣ RAZORPAY OPTIONS
      const options = {
        key: "rzp_test_SezajqZCojhWzq",
        amount: order.amount,
        currency: "INR",
        name: "Amit Tours & Travels",
        description: "Cab Booking Advance",
        order_id: order.id,

        prefill: {
          name: form.name || "Customer",
          contact: form.phone || "9999999999",
          email: "test@gmail.com",
        },

        notes: {
          booking_for: form.name,
        },

        handler: async function (response) {
          try {
            const verifyRes = await fetch(
              "https://cab-backend-zca0.onrender.com/api/payment/verify",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  ...response,
                  bookingData: {
                    name: form.name,
                    phone: form.phone,
                    fromCity: state.fromCity,
                    toCity: state.toCity,
                    date: state.date,
                    time: state.time,
                    car: state.carName,
                    fare: state.fare,
                  },
                }),
              }
            );

            const data = await verifyRes.json();

            if (data.success) {
              // ✅ CHANGED: redirect instead of alert
              navigate("/success", {
                state: {
                  booking: data.booking,
                },
              });
            } else {
              alert("Payment verification failed");
            }
          } catch (err) {
            console.log("VERIFY ERROR:", err);
            alert("Something went wrong");
          }
        },

        modal: {
          ondismiss: function () {
            console.log("Payment popup closed");
          },
        },

        theme: {
          color: "#16a34a",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.log("PAYMENT ERROR:", err);
      alert("Payment failed");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {/* LEFT: SUMMARY */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-4 border-b pb-2">
            Booking Summary
          </h3>

          <div className="text-sm space-y-2 text-gray-700">
            <p><b>Trip Type:</b> {state.tab}</p>
            <p><b>Pickup City:</b> {state.fromCity}</p>
            <p><b>Drop City:</b> {state.toCity}</p>
            <p><b>Date:</b> {state.date}</p>
            <p><b>Time:</b> {state.time}</p>
          </div>

          <div className="mt-4 p-3 border rounded-lg text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
              className="w-20 mx-auto"
            />
            <p className="font-semibold mt-2">{state.carName}</p>
            <p className="text-green-600 font-bold text-lg">₹{state.fare}</p>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Total Fare</span>
              <span>₹{state.fare}</span>
            </div>

            <div className="flex justify-between text-green-600 font-semibold">
              <span>Advance</span>
              <span>₹{advance}</span>
            </div>

            <div className="flex justify-between font-bold">
              <span>Pay to Driver</span>
              <span>₹{state.fare - advance}</span>
            </div>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">
            Customer Details
          </h2>

          <div className="grid gap-4">

            <div>
              <label className="text-sm font-semibold">Full Name</label>
              <input
                type="text"
                className="input mt-1"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Mobile Number</label>
              <input
                type="tel"
                className="input mt-1"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Pickup Address</label>
              <textarea
                className="input mt-1"
                value={form.pickup}
                onChange={(e) =>
                  setForm({ ...form, pickup: e.target.value })
                }
              />
              {errors.pickup && (
                <p className="text-red-500 text-xs">{errors.pickup}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Drop Address</label>
              <textarea
                className="input mt-1"
                value={form.drop}
                onChange={(e) =>
                  setForm({ ...form, drop: e.target.value })
                }
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm">
              ₹500 advance required to confirm booking.
            </div>

            <button
              onClick={handlePayment}
              className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold"
            >
              Pay ₹500 & Confirm Booking
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;







