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
    // Normalize incoming city names and try to match one-way route keys
    const normalize = (s = "") =>
      String(s)
        .trim()
        .replace(/\s+/g, " ")
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");

    const from = normalize(state.fromCity);
    const to = normalize(state.toCity);

    const exactKey = `${from}-${to}`;

    const oneWay = faresData.oneWayRates || {};

    // 1) try exact match
    if (oneWay[exactKey] && oneWay[exactKey][car.type] != null) {
      const v = Number(oneWay[exactKey][car.type]);
      return Number.isFinite(v) && v > 0 ? v : null;
    }

    // 2) try case-insensitive lookup over keys
    const lowerKey = `${from}-${to}`.toLowerCase();
    for (const k of Object.keys(oneWay)) {
      if (k.replace(/\s+/g, " ").toLowerCase() === lowerKey) {
        const v = Number(oneWay[k]?.[car.type]);
        return Number.isFinite(v) && v > 0 ? v : null;
      }
    }

    // 3) try reverse route (user may have swapped cities)
    const reverseKey = `${to}-${from}`.toLowerCase();
    for (const k of Object.keys(oneWay)) {
      if (k.replace(/\s+/g, " ").toLowerCase() === reverseKey) {
        const v = Number(oneWay[k]?.[car.type]);
        return Number.isFinite(v) && v > 0 ? v : null;
      }
    }

    // 4) fallback: attempt a loose contains-match (ignore punctuation/spaces)
    const compact = (s = "") => s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const target = compact(`${from}${to}`);
    for (const k of Object.keys(oneWay)) {
      if (compact(k).includes(target) || target.includes(compact(k))) {
        const v = Number(oneWay[k]?.[car.type]);
        if (Number.isFinite(v) && v > 0) return v;
      }
    }

    return null;
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