import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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

    try {
      const res = await fetch(`${apiUrl}/api/fares`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(fares),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to save fares");
      }

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
          <div className="mb-4">
            <h2 className="text-xl font-semibold">One Way Fare Rates</h2>
            <p className="text-sm text-gray-500">Update fare per route and vehicle type.</p>
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
            </tbody>
          </table>
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
