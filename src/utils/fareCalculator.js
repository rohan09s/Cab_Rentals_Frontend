// export const calculateFare = (tripType, car, hours) => {
//   const distance = 150;

//   if (tripType === "One Way") {
//     return distance * car.rate + 360;
//   }

//   if (tripType === "Round Trip") {
//     return distance * 2 * car.rate + 720;
//   }

//   if (tripType === "Hourly Rental") {
//     return car.rate * (hours * 10);
//   }

//   return 0;
// };




// export const calculateFare = (tab, car, state = {}) => {

//   // ✅ ONE WAY (FIXED PRICE)
//   if (tab === "One Way") {
//     if (car.type === "hatchback") return 2100;
//     if (car.type === "sedan") return 2200;
//     if (car.type === "eco") return 2300;
//     if (car.type === "premium") return 2400;
//   }

//   // ✅ ROUND TRIP
//   if (tab === "Round Trip") {
//     let days = 1;

//     if (state?.date && state?.returnDate) {
//       const start = new Date(state.date);
//       const end = new Date(state.returnDate);

//       const diff = Math.ceil(
//         (end - start) / (1000 * 60 * 60 * 24)
//       );

//       days = diff > 0 ? diff : 1;
//     }

//     return 300 * days * car.rate;
//   }

//   return 0;


  
// };


// export const calculateFare = (tab, car, state = {}) => {

//   // ✅ ONE WAY (FIXED PRICE)
//   if (tab === "One Way") {
//     if (car.type === "hatchback") return 2100;
//     if (car.type === "sedan") return 2200;
//     if (car.type === "eco") return 2300;
//     if (car.type === "premium") return 2400;
//   }

//   // ✅ ROUND TRIP
//   if (tab === "Round Trip") {
//     let days = 1;

//     if (state?.date && state?.returnDate) {
//       const start = new Date(state.date);
//       const end = new Date(state.returnDate);

//       const diff = Math.ceil(
//         (end - start) / (1000 * 60 * 60 * 24)
//       );

//       days = diff > 0 ? diff : 1;
//     }

//     return 300 * days * car.rate;
//   }

//   return 0;


  
// };




import { oneWayRates } from "../data/oneWayRates";

export const calculateFare = (tab, car, state = {}) => {

  // ✅ ONE WAY
  if (tab === "One Way") {

    const from =
      state.fromCity?.charAt(0).toUpperCase() +
      state.fromCity?.slice(1).toLowerCase();

    const to =
      state.toCity?.charAt(0).toUpperCase() +
      state.toCity?.slice(1).toLowerCase();

    const key = `${from}-${to}`;

    const route = oneWayRates[key];

    console.log("KEY:", key);
    console.log("ROUTE:", route);

    if (route && route[car.type]) {
      return route[car.type];
    }

    return "N/A";
  }

 if (tab === "Round Trip") {
  let days = 1;

  if (state?.date && state?.returnDate) {
    const start = new Date(state.date);
    const end = new Date(state.returnDate);

    const startDay = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate()
    );

    const endDay = new Date(
      end.getFullYear(),
      end.getMonth(),
      end.getDate()
    );

    const diff =
      (endDay - startDay) / (1000 * 60 * 60 * 24);

    days = diff + 1; // 🔥 KEY LINE
  }

  return 300 * days * car.rate;
   
 }

  return 0;
};



