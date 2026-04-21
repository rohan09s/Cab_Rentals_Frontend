// export const cars = [
//   { name: "Dzire", rate: 13, seats: "4 Seater" },
//   { name: "Aura", rate: 13, seats: "4 Seater" },
//   { name: "Xcent", rate: 13, seats: "4 Seater" },
//   { name: "Ertiga", rate: 15, seats: "6 Seater" },
//   { name: "Xuv 5OO", rate: 19, seats: "7 Seater" },
//   { name: "Innova Crysta", rate: 20, seats: "7 Seater Premium" }
// ]



// export const cars = [
//   {
//     category: "hatchback",
//     models: ["WagonR", "Celerio"],
//     rate: 12,
//     seats: "4 Seater",
//     type: "hatchback",
//     inclusions: ["Fuel", "Driver", "Car Fare"],
//     exclusions: ["Toll", "Parking", "State Tax", "Entry Fees"]
//   },
//   {
//     category: "sedan",
//     models: ["Dzire", "Aura", "Xcent"],
//     rate: 13,
//     seats: "4 Seater",
//     type: "sedan",
//     inclusions: ["Fuel", "Driver", "Car Fare"],
//     exclusions: ["Toll", "Parking", "State Tax", "Entry Fees"]
//   },
//   {
//     category: "Eco 6 Seater",
//     models: ["Ertiga"],
//     rate: 17,
//     seats: "6 Seater",
//     type: "eco",
//     inclusions: ["Fuel", "Driver", "Car Fare"],
//     exclusions: ["Toll", "Parking", "State Tax", "Entry Fees"]
//   },
//   {
//     category: "Premium 7 Seater",
//     models: ["Innova Crysta"],
//     rate: 17,
//     seats: "7 Seater",
//     type: "premium",
//     inclusions: ["Fuel", "Driver", "Car Fare"],
//     exclusions: ["Toll", "Parking", "State Tax", "Entry Fees"]
//   }
// ];



export const cars = [
  {
    category: "Hatchback",
    models: ["WagonR", "Celerio"],
    image: "https://res.cloudinary.com/dt0mm3yj1/image/upload/q_auto/f_auto/v1776594356/WhatsApp_Image_2026-04-19_at_3.48.48_PM_icyqf9.jpg",
    rate: 12,
    seats: "4 Seater",
    type: "hatchback",
    inclusions: ["Fuel", "Driver", "Car Fare"],
    exclusions: ["Toll", "Parking", "State Tax", "Entry Fees"]
  },
  {
    category: "Sedan",
    models: ["Dzire", "Aura", "Xcent"],
    image: "https://res.cloudinary.com/dt0mm3yj1/image/upload/q_auto/f_auto/v1776593792/aura_kaiqg7.webp",
    rate: 13,
    seats: "4 Seater",
    type: "sedan",
    inclusions: ["Fuel", "Driver", "Car Fare"],
    exclusions: ["Toll", "Parking", "State Tax", "Entry Fees"]
  },
  {
    category: "Eco 6 Seater",
    models: ["Ertiga"],
    image: "https://res.cloudinary.com/dt0mm3yj1/image/upload/q_auto/f_auto/v1776595474/Ertiga_1_pczowk.jpg",
    rate: 17,
    seats: "6 Seater",
    type: "eco",
    inclusions: ["Fuel", "Driver", "Car Fare"],
    exclusions: ["Toll", "Parking", "State Tax", "Entry Fees"]
  },
  {
    category: "Premium 7 Seater",
    models: ["Innova Crysta"],
    image: "https://res.cloudinary.com/dt0mm3yj1/image/upload/q_auto/f_auto/v1776594461/innova-crysta-9-240_qojbd1.jpg",
    rate: 17,
    seats: "7 Seater",
    type: "premium",
    inclusions: ["Fuel", "Driver", "Car Fare"],
    exclusions: ["Toll", "Parking", "State Tax", "Entry Fees"]
  }
];





















































// export const calculateFare = (tab, car, hours, kms = 0) => {

//   // ✅ ONE WAY (FIXED PRICE)
//   if (tab === "One Way") {
//     if (car.type === "hatchback") return 2100;
//     if (car.type === "sedan") return 2200;
//     if (car.type === "eco") return 2300;
//     if (car.type === "premium") return 2500;
//   }

//   // ✅ ROUND TRIP
//   if (tab === "Round Trip") {
//     // default 1 day if not calculated
//     const days = 1;

//     return 300 * days * car.rate;
//   }

//   // ✅ HOURLY RENTAL
//   if (tab === "Hourly Rental") {
//     return 1500;
//   }

//   return 0;
// };