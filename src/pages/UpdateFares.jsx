import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { clearFaresCache } from "../utils/fareCalculator";

const UpdateFares = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [fares, setFares] = useState({
    oneWayRates: {},
    roundTripRates: {},
    rentalRates: {},
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [extraOneWayRoutes, setExtraOneWayRoutes] = useState([]);

  const pickupCities = ["Pune", "Mumbai", "Lonavala"];
  const dropCities = {
    Pune: [
      "Chhatrapati Sambhajinagar",
      "Kolhapur",
      "Nashik",
      "Shirdi",
      "Karad",
      "Mumbai",
      "Ahmednagar",
      "Mahabaleshwar",
      "Lonavala",
    ],
    Mumbai: [
      "Chhatrapati Sambhajinagar",
      "Kolhapur",
      "Nashik",
      "Shirdi",
      "Karad",
      "Pune",
      "Ahmednagar",
      "Mahabaleshwar",
      "Lonavala",
    ],
    Lonavala: [
      "Chhatrapati Sambhajinagar",
      "Kolhapur",
      "Nashik",
      "Shirdi",
      "Karad",
      "Pune",
      "Mumbai",
      "Ahmednagar",
      "Mahabaleshwar",
    ],
  };
  const [pickupOptions, setPickupOptions] = useState(pickupCities);
  const [dropOptions, setDropOptions] = useState([
    ...new Set(Object.values(dropCities).flat()),
  ]);

  const vehicleTypes = [
    { key: "hatchback", label: "Hatchback" },
    { key: "sedan", label: "Sedan" },
    { key: "eco", label: "Economy 6-Seater" },
    { key: "premium", label: "Premium 7-Seater" },
  ];

  useEffect(() => {
    const token = sessionStorage.getItem("adminToken");
    if (!token) {
      window.location.href = "/admin-login";
      return;
    }

    const fetchFares = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/fares`, {
          headers: { Authorization: token },
        });

        if (res.status === 401) {
          window.location.href = "/admin-login";
          return;
        }

        const data = await res.json();
        setFares({
          oneWayRates: data.oneWayRates || {},
          roundTripRates: data.roundTripRates || {},
          rentalRates: data.rentalRates || {},
        });
      } catch (error) {
        console.error("Failed to fetch fares:", error);
        toast.error("Failed to load fares");
      } finally {
        setLoading(false);
      }
    };

    fetchFares();
  }, [apiUrl]);

  const updateOneWayRate = (routeKey, vehicleType, value) => {
    setFares((prev) => ({
      ...prev,
      oneWayRates: {
        ...prev.oneWayRates,
        [routeKey]: {
          ...(prev.oneWayRates[routeKey] || {}),
          [vehicleType]: Number(value) || 0,
        },
      },
    }));
  };

  const ensurePickupOption = (city) => {
    const normalized = city?.trim();
    if (!normalized) return;
    setPickupOptions((prev) =>
      prev.includes(normalized) ? prev : [...prev, normalized]
    );
  };

  const ensureDropOption = (city) => {
    const normalized = city?.trim();
    if (!normalized) return;
    setDropOptions((prev) =>
      prev.includes(normalized) ? prev : [...prev, normalized]
    );
  };

  const addNewOneWayRoute = () => {
    const defaultPickup = pickupOptions[0] || "";
    const defaultDrop = dropOptions.find((city) => city !== defaultPickup) || "";
    setExtraOneWayRoutes((prev) => [
      ...prev,
      {
        id: `new-route-${Date.now()}-${prev.length}`,
        pickupCity: defaultPickup,
        dropCity: defaultDrop,
        rates: {
          hatchback: 0,
          sedan: 0,
          eco: 0,
          premium: 0,
        },
      },
    ]);
  };

  const updateNewRouteField = (routeId, field, value) => {
    setExtraOneWayRoutes((prev) =>
      prev.map((route) => {
        if (route.id !== routeId) return route;
        if (field === "pickupCity") {
          return { ...route, pickupCity: value };
        }
        if (field === "dropCity") {
          return { ...route, dropCity: value };
        }
        return {
          ...route,
          rates: {
            ...route.rates,
            [field]: Number(value) || 0,
          },
        };
      })
    );
  };

  const updateRoundTripRate = (vehicleType, value) => {
    setFares((prev) => ({
      ...prev,
      roundTripRates: {
        ...prev.roundTripRates,
        [vehicleType]: Number(value) || 0,
      },
    }));
  };

  const updateRentalRate = (vehicleType, field, value) => {
    setFares((prev) => ({
      ...prev,
      rentalRates: {
        ...prev.rentalRates,
        [vehicleType]: {
          ...(prev.rentalRates[vehicleType] || {}),
          [field]: Number(value) || 0,
        },
      },
    }));
  };

  const handleSaveAll = async () => {
    const token = sessionStorage.getItem("adminToken");
    setSaving(true);

    const mergedOneWayRates = { ...fares.oneWayRates };
    extraOneWayRoutes.forEach((route) => {
      const pickup = route.pickupCity?.trim();
      const drop = route.dropCity?.trim();
      if (!pickup || !drop) return;
      const routeKey = `${pickup}-${drop}`;
      mergedOneWayRates[routeKey] = {
        hatchback: Number(route.rates.hatchback) || 0,
        sedan: Number(route.rates.sedan) || 0,
        eco: Number(route.rates.eco) || 0,
        premium: Number(route.rates.premium) || 0,
      };
    });

    const payload = {
      ...fares,
      oneWayRates: mergedOneWayRates,
    };

    try {
      const res = await fetch(`${apiUrl}/api/fares`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to save fares");
      }

      clearFaresCache();
      toast.success("Fare updates saved successfully");
    } catch (error) {
      console.error("Failed to save fares:", error);
      toast.error(error.message || "Could not save fares");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-6 text-center">Loading fares...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Update Fare Tables</h1>
          <p className="text-sm text-gray-500 mt-1">
            Update one-way, round-trip and rental rates from a single page.
          </p>
        </div>
        <button
          onClick={() => navigate("/admin")}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          ← Back to Admin
        </button>
      </div>

      <div className="space-y-8">
        <section className="bg-white rounded-xl shadow p-6 overflow-x-auto">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">One Way Fare Rates</h2>
              <p className="text-sm text-gray-500">Update fare per route and vehicle type.</p>
            </div>
            <button
              type="button"
              onClick={addNewOneWayRoute}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              + Add New Route
            </button>
          </div>

          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-200 border">
                <th className="p-3 text-left border">Pickup City</th>
                <th className="p-3 text-left border">Drop City</th>
                {vehicleTypes.map((v) => (
                  <th key={v.key} className="p-3 text-center border">
                    {v.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pickupCities.map((pickupCity) =>
                (dropCities[pickupCity] || []).map((dropCity) => {
                  const routeKey = `${pickupCity}-${dropCity}`;
                  return (
                    <tr key={routeKey} className="border-t hover:bg-gray-50">
                      <td className="p-3 border font-semibold">{pickupCity}</td>
                      <td className="p-3 border">{dropCity}</td>
                      {vehicleTypes.map((vehicle) => {
                        const currentFare = fares.oneWayRates[routeKey]?.[vehicle.key] || 0;
                        return (
                          <td key={vehicle.key} className="p-3 border">
                            <input
                              type="number"
                              value={currentFare || ""}
                              onChange={(e) =>
                                updateOneWayRate(routeKey, vehicle.key, e.target.value)
                              }
                              placeholder="₹"
                              className="w-24 px-2 py-1 border rounded text-center"
                              min="0"
                            />
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              )}

              {extraOneWayRoutes.map((route) => (
                <tr key={route.id} className="border-t bg-slate-50 hover:bg-slate-100">
                  <td className="p-3 border">
                    <input
                      list="pickupCityOptions"
                      value={route.pickupCity}
                      onChange={(e) => updateNewRouteField(route.id, "pickupCity", e.target.value)}
                      onBlur={(e) => ensurePickupOption(e.target.value)}
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="p-3 border">
                    <input
                      list="dropCityOptions"
                      value={route.dropCity}
                      onChange={(e) => updateNewRouteField(route.id, "dropCity", e.target.value)}
                      onBlur={(e) => ensureDropOption(e.target.value)}
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                  {vehicleTypes.map((vehicle) => (
                    <td key={vehicle.key} className="p-3 border">
                      <input
                        type="number"
                        value={route.rates[vehicle.key] || ""}
                        onChange={(e) =>
                          updateNewRouteField(route.id, vehicle.key, e.target.value)
                        }
                        placeholder="₹"
                        className="w-24 px-2 py-1 border rounded text-center"
                        min="0"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <datalist id="pickupCityOptions">
            {pickupOptions.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>
          <datalist id="dropCityOptions">
            {dropOptions.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>
        </section>

        <section className="bg-white rounded-xl shadow p-6 overflow-x-auto">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Round Trip Rates</h2>
            <p className="text-sm text-gray-500">Update per-km rate for each vehicle type.</p>
          </div>

          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-200 border">
                <th className="p-3 text-left border">Vehicle Type</th>
                <th className="p-3 text-left border">Rate / km</th>
              </tr>
            </thead>
            <tbody>
              {vehicleTypes.map((vehicle) => (
                <tr key={vehicle.key} className="border-t hover:bg-gray-50">
                  <td className="p-3 border font-semibold">{vehicle.label}</td>
                  <td className="p-3 border">
                    <input
                      type="number"
                      value={fares.roundTripRates[vehicle.key] || ""}
                      onChange={(e) => updateRoundTripRate(vehicle.key, e.target.value)}
                      placeholder="₹"
                      className="w-28 px-2 py-1 border rounded text-center"
                      min="0"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="bg-white rounded-xl shadow p-6 overflow-x-auto">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Rental Trip Rates</h2>
            <p className="text-sm text-gray-500">Update per-km and extra-rate charges for each rental vehicle.</p>
          </div>

          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-200 border">
                <th className="p-3 text-left border">Vehicle Type</th>
                <th className="p-3 text-left border">Rate / km</th>
                <th className="p-3 text-left border">Rs / extra km</th>
                <th className="p-3 text-left border">Rs / extra hour</th>
              </tr>
            </thead>
            <tbody>
              {vehicleTypes.map((vehicle) => {
                const rentalRate = fares.rentalRates[vehicle.key] || {};
                return (
                  <tr key={vehicle.key} className="border-t hover:bg-gray-50">
                    <td className="p-3 border font-semibold">{vehicle.label}</td>
                    <td className="p-3 border">
                      <input
                        type="number"
                        value={rentalRate.ratePerKm || ""}
                        onChange={(e) => updateRentalRate(vehicle.key, "ratePerKm", e.target.value)}
                        placeholder="₹"
                        className="w-28 px-2 py-1 border rounded text-center"
                        min="0"
                      />
                    </td>
                    <td className="p-3 border">
                      <input
                        type="number"
                        value={rentalRate.extraKm || ""}
                        onChange={(e) => updateRentalRate(vehicle.key, "extraKm", e.target.value)}
                        placeholder="₹"
                        className="w-28 px-2 py-1 border rounded text-center"
                        min="0"
                      />
                    </td>
                    <td className="p-3 border">
                      <input
                        type="number"
                        value={rentalRate.extraHour || ""}
                        onChange={(e) => updateRentalRate(vehicle.key, "extraHour", e.target.value)}
                        placeholder="₹"
                        className="w-28 px-2 py-1 border rounded text-center"
                        min="0"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>

        <div className="flex justify-end">
          <button
            onClick={handleSaveAll}
            disabled={saving}
            className="bg-green-600 text-white px-5 py-3 rounded hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {saving ? "Saving..." : "Save All Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateFares;
