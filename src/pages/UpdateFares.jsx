import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateFares = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [fares, setFares] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState({});

  const pickupCities = ["Pune", "Mumbai", "Lonavala"];
  const dropCities = {
    "Pune": ["Chhatrapati Sambhajinagar", "Kolhapur", "Nashik", "Shirdi", "Karad", "Mumbai", "Ahmednagar", "Mahabaleshwar", "Lonavala"],
    "Mumbai": ["Chhatrapati Sambhajinagar", "Kolhapur", "Nashik", "Shirdi", "Karad", "Pune", "Ahmednagar", "Mahabaleshwar", "Lonavala"],
    "Lonavala": ["Chhatrapati Sambhajinagar", "Kolhapur", "Nashik", "Shirdi", "Karad", "Pune", "Mumbai", "Ahmednagar", "Mahabaleshwar"]
  };

  const vehicleTypes = [
    { key: "hatchback", label: "Hatchback" },
    { key: "sedan", label: "Sedan" },
    { key: "eco", label: "Economy 6-Seater" },
    { key: "premium", label: "Premium 7-Seater" }
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
          headers: { Authorization: token }
        });

        if (res.status === 401) {
          window.location.href = "/admin-login";
          return;
        }

        const data = await res.json();
        setFares(data);
      } catch (error) {
        console.error("Failed to fetch fares:", error);
        toast.error("Failed to load fares");
      } finally {
        setLoading(false);
      }
    };

    fetchFares();
  }, [apiUrl]);

  const handleFareChange = (routeKey, vehicleType, value) => {
    setFares((prev) => ({
      ...prev,
      [routeKey]: {
        ...(prev[routeKey] || {}),
        [vehicleType]: Number(value) || 0
      }
    }));
  };

  const handleSaveFare = async (routeKey, vehicleType) => {
    const token = sessionStorage.getItem("adminToken");
    const fare = fares[routeKey]?.[vehicleType];

    if (!fare || Number.isNaN(fare) || fare <= 0) {
      toast.error("Please enter a valid fare amount");
      return;
    }

    const saveKey = `${routeKey}-${vehicleType}`;
    setSaving((prev) => ({ ...prev, [saveKey]: true }));

    try {
      const res = await fetch(`${apiUrl}/api/fares/${encodeURIComponent(routeKey)}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        body: JSON.stringify({ fare, type: vehicleType })
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to update fare");
      }

      toast.success(`Fare updated for ${routeKey} - ${vehicleType}`);
    } catch (error) {
      console.error("Error updating fare:", error);
      toast.error(error.message || "Failed to update fare");
    } finally {
      setSaving((prev) => ({ ...prev, [saveKey]: false }));
    }
  };

  if (loading) {
    return <div className="p-6 text-center">Loading fares...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Update One-Way Fares</h1>
        <button
          onClick={() => navigate("/admin")}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          ← Back to Admin
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
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
                      const currentFare = fares[routeKey]?.[vehicle.key] || 0;
                      const saveKey = `${routeKey}-${vehicle.key}`;
                      const isSaving = saving[saveKey];

                      return (
                        <td key={vehicle.key} className="p-3 border">
                          <div className="flex gap-2 items-center">
                            <input
                              type="number"
                              value={currentFare || ""}
                              onChange={(e) =>
                                handleFareChange(routeKey, vehicle.key, e.target.value)
                              }
                              placeholder="₹"
                              className="w-20 px-2 py-1 border rounded text-center"
                              min="0"
                            />
                            <button
                              onClick={() => handleSaveFare(routeKey, vehicle.key)}
                              disabled={isSaving}
                              className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                              {isSaving ? "Saving..." : "Save"}
                            </button>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateFares;
