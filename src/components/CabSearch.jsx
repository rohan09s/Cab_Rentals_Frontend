import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { routesMap } from "../data/routes";
import { rentalPricing } from "../data/rentalPricing";

const TABS = ["One Way", "Round Trip", "Rental"];

const RENTAL_PACKAGES = [
  { duration: "2", hours: 2, kms: 20 },
  { duration: "3", hours: 3, kms: 30 },
  { duration: "4", hours: 4, kms: 40 },
  { duration: "8", hours: 8, kms: 80 },
];

const CabSearch = () => {
  const navigate = useNavigate();

  const [tab, setTab] = useState("One Way");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [vehicleType, setVehicleType] = useState("");
  const [hours, setHours] = useState({
    duration: "",
    kms: "",
    price: "",
  });

  const vehicleExtras = vehicleType ? rentalPricing[vehicleType].extras : null;

  useEffect(() => {
    setFromCity("");
    setToCity("");
    setDate("");
    setTime("");
    setReturnDate("");
    setVehicleType("");

    setHours({
      duration: "",
      kms: "",
      price: "",
    });
  }, [tab]);

  const handleSwap = () => {
    if (!fromCity || !toCity) return;

    const oldFrom = fromCity;
    const oldTo = toCity;

    setFromCity(oldTo);
    
    // Check if oldFrom is a valid destination for oldTo
    const validDestinations = routesMap[oldTo] || [];
    const isValidDestination = validDestinations.some(
      (city) => city.toLowerCase() === oldFrom.toLowerCase()
    );

    // Only set toCity if it's a valid destination, otherwise clear it
    if (isValidDestination) {
      setToCity(oldFrom);
    } else {
      setToCity("");
    }
  };

  const handleSearch = () => {
    if (!fromCity) return toast.error("Choose Pickup City");

    if (tab === "One Way" && !toCity) {
      return toast.error("Choose Drop City");
    }

    if (!date || !time) {
      return toast.error("Select date & time");
    }

    if (tab === "One Way" && fromCity === toCity) {
      return toast.error("Pickup & Drop city cannot be same");
    }

    if (tab === "Rental") {
      if (!vehicleType) return toast.error("Choose Vehicle Type");
      if (!hours.duration) return toast.error("Choose Package");
    }

    navigate("/results", {
      state: {
        tab,
        fromCity,
        toCity,
        date,
        time,
        returnDate,
        vehicleType,
        hours: hours.duration,
        kms: hours.kms,
        price: hours.price,
      },
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
        {/* Pickup City + Swap + Drop City Container */}
        {tab === "One Way" ? (
          <div className="md:col-span-3 flex gap-2 items-end">
            {/* Pickup City */}
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Pickup City
              </label>

              <select
                value={fromCity}
                onChange={(e) => {
                  setFromCity(e.target.value);
                  setToCity("");
                }}
                className={`input ${
                  fromCity === "" ? "text-gray-400" : "text-black"
                }`}
              >
                <option value="" disabled>
                  Choose Pickup City
                </option>

                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Lonavala">Lonavala</option>
              </select>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center items-end pb-1">
              <button
                type="button"
                onClick={handleSwap}
                className="w-10 h-10 rounded-full pl-2 bg-gray-100 hover:bg-red-100 border shadow text-lg transition-all duration-300 hover:rotate-180 hover:scale-110"
              >
                <img src="/swap.svg" alt="Swap Button" />
              </button>
            </div>

            {/* Drop City */}
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Drop City
              </label>

              <select
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                className={`input ${
                  toCity === "" ? "text-gray-400" : "text-black"
                }`}
              >
                <option value="" disabled>
                  Choose Drop City
                </option>

                {(routesMap[fromCity] || []).map((city, i) => {
                  const formatted = city.charAt(0) + city.slice(1).toLowerCase();

                  return (
                    <option key={i} value={formatted}>
                      {formatted}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        ) : tab === "Round Trip" ? (
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-600 mb-1 block">
              Pickup City
            </label>
            <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              className={`input ${
                fromCity === "" ? "text-gray-400" : "text-black"
              }`}
            >
              <option value="" disabled>
                Choose Pickup City
              </option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Lonavala">Lonavala</option>
            </select>
          </div>
        ) : tab === "Rental" ? (
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-600 mb-1 block">
              Pickup City
            </label>
            <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              className={`input ${
                fromCity === "" ? "text-gray-400" : "text-black"
              }`}
            >
              <option value="" disabled>
                Choose Pickup City
              </option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Lonavala">Lonavala</option>
            </select>
          </div>
        ) : null}

        {tab === "Round Trip" && (
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-600 mb-1 block">
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
          onClick={() => document.getElementById("pickupDate")?.showPicker()}
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
            className={`input cursor-pointer ${
              date ? "text-black" : "text-gray-400"
            }`}
          />
        </div>

        {/* Pickup Time */}
        <div
          onClick={() => document.getElementById("pickupTime")?.showPicker()}
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
            className={`input cursor-pointer ${
              time ? "text-black" : "text-gray-400"
            }`}
          />
        </div>

        {/* Return */}
        {tab === "Round Trip" ? (
          <div
            onClick={() => document.getElementById("returnDate")?.showPicker()}
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
              className={`input cursor-pointer ${
                returnDate ? "text-black" : "text-gray-400"
              }`}
            />
          </div>
        ) : tab === "Rental" ? (
          <>
            <div>
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Vehicle Type
              </label>
              <select
                value={vehicleType}
                onChange={(e) => {
                  const newVehicle = e.target.value;
                  setVehicleType(newVehicle);
                  setHours((prev) => {
                    if (!newVehicle) {
                      return { ...prev, price: "" };
                    }

                    const selectedPackage = RENTAL_PACKAGES.find(
                      (pkg) => pkg.duration === prev.duration
                    );

                    const price = selectedPackage
                      ? rentalPricing[newVehicle].packages.find(
                          (pkg) => pkg.duration === selectedPackage.duration
                        )?.price || ""
                      : "";

                    return {
                      ...prev,
                      price,
                    };
                  });
                }}
                className={`input ${
                  vehicleType === "" ? "text-gray-400" : "text-black"
                }`}
              >
                <option value="" disabled>
                  Choose Vehicle
                </option>
                {Object.keys(rentalPricing).map((key) => (
                  <option key={key} value={key}>
                    {rentalPricing[key].name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Package
              </label>
              <select
                value={hours.duration}
                onChange={(e) => {
                  const val = e.target.value;
                  if (!val) {
                    setHours({
                      duration: "",
                      kms: "",
                      price: "",
                    });
                    return;
                  }

                  const selectedPackage = RENTAL_PACKAGES.find(
                    (pkg) => pkg.duration === val
                  );

                  const price =
                    vehicleType &&
                    rentalPricing[vehicleType].packages.find(
                      (pkg) => pkg.duration === val
                    )?.price;

                  setHours({
                    duration: val,
                    kms: String(selectedPackage.kms),
                    price: price || "",
                  });
                }}
                className={`input ${
                  hours.duration === "" ? "text-gray-400" : "text-black"
                }`}
              >
                <option value="" disabled>
                  Choose Package
                </option>

                {RENTAL_PACKAGES.map((pkg) => {
                  const price =
                    vehicleType &&
                    rentalPricing[vehicleType].packages.find(
                      (vehiclePkg) => vehiclePkg.duration === pkg.duration
                    )?.price;

                  return (
                    <option key={pkg.duration} value={pkg.duration}>
                      {pkg.hours} hrs / {pkg.kms} kms
                      {price ? ` - ₹${price}` : ""}
                    </option>
                  );
                })}
              </select>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>

      {tab === "Rental" && (
        <div className="mt-4 rounded-2xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          <span className="font-semibold text-slate-700">Additional rental charges:</span>{" "}
          <span>
            {vehicleType
              ? `Extra Km: ₹${vehicleExtras.perKm}/km · Extra Hr: ₹${vehicleExtras.perHour}/hr`
              : "Select a vehicle to view extra km/hr rates."}
          </span>
        </div>
      )}

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
