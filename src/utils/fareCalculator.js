import { oneWayRates } from "../data/oneWayRates";
import { rentalPricing } from "../data/rentalPricing";

let cachedFares = null;

const defaultRoundTripRates = {
  hatchback: 12,
  sedan: 13,
  eco: 17,
  premium: 22,
};

const defaultRentalRates = {
  hatchback: { ratePerKm: 13, extraKm: 13, extraHour: 180 },
  sedan: { ratePerKm: 14, extraKm: 14, extraHour: 200 },
  eco: { ratePerKm: 17, extraKm: 17, extraHour: 250 },
  premium: { ratePerKm: 20, extraKm: 20, extraHour: 300 },
};

export const fetchFaresFromBackend = async (apiUrl) => {
  if (cachedFares) return cachedFares;

  try {
    const response = await fetch(`${apiUrl}/api/fares`);
    if (response.ok) {
      cachedFares = await response.json();
      return cachedFares;
    }
  } catch (error) {
    console.warn("Failed to fetch fares from backend, using defaults:", error);
  }

  return {
    oneWayRates,
    roundTripRates: defaultRoundTripRates,
    rentalRates: defaultRentalRates,
  };
};

export const clearFaresCache = () => {
  cachedFares = null;
};

/** Round trip: included distance per calendar day (used in fare = km × days × rate/km). */
export const ROUND_TRIP_KM_PER_DAY = 300;

export const getRoundTripDayCount = (state = {}) => {
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

    const diff = (endDay - startDay) / (1000 * 60 * 60 * 24);
    days = diff + 1;
  }

  return days;
};

export const calculateFare = async (tab, car, state = {}, apiUrl = "") => {
  const faresData = await fetchFaresFromBackend(apiUrl || "http://localhost:5000");

  if (tab === "One Way") {
    const from =
      state.fromCity?.charAt(0).toUpperCase() +
      state.fromCity?.slice(1).toLowerCase();

    const to =
      state.toCity?.charAt(0).toUpperCase() +
      state.toCity?.slice(1).toLowerCase();

    const key = `${from}-${to}`;
    const route = faresData.oneWayRates?.[key] || {};

    const fare = Number(route[car.type]);
    return fare > 0 ? fare : null;
  }

  if (tab === "Round Trip") {
    const days = getRoundTripDayCount(state);
    const rate = Number(faresData.roundTripRates?.[car.type] ?? car.rate);
    return rate > 0 ? ROUND_TRIP_KM_PER_DAY * days * rate : null;
  }

  if (tab === "Rental") {
    const price = Number(state?.price);
    return !Number.isNaN(price) && price > 0 ? price : null;
  }

  return null;
};



