import { oneWayRates } from "../data/oneWayRates";
import { rentalPricing } from "../data/rentalPricing";

const rentalCategoryMap = {
  hatchback: "Hatchback",
  sedan: "Sedan",
  eco: "Economy 6-Seater",
  premium: "Premium 6-Seater",
};

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

      days = diff + 1;
    }

    return 300 * days * car.rate;
  }

  if (tab === "Rental") {
    const rentalKey = rentalCategoryMap[car.type];
    const rentalConfig = rentalPricing[rentalKey];
    const packageDuration = String(
      state?.hours?.duration || state?.hours || state?.duration
    );

    if (rentalConfig) {
      const matchedPackage = rentalConfig.packages.find(
        (pkg) => String(pkg.duration) === packageDuration
      );

      if (matchedPackage) {
        return matchedPackage.price;
      }
    }

    if (state?.price) {
      return state.price;
    }

    return "N/A";
  }

  return 0;
};



