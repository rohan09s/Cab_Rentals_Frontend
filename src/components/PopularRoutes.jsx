import { useEffect, useState } from "react";

const PHONE_DISPLAY = "7709040404";
const PHONE_TEL = "7709040404";
const WHATSAPP_E164 = "917709040404";

const routes = [
  {
    icon: "🛕",
    title: "Ashtavinayak Darshan",
    price: "Starting at ₹10,000",
    tag: "Pilgrimage",
    description:
      "Sacred journey to all 8 Ganesha temples around Pune. Fully guided tour with comfortable seating and meals included.",
    distance: "Multi-day circuit from Pune",
    duration: "Typically 2–3 days",
    highlights: ["All 8 temples covered", "Comfortable AC vehicle", "Meals can be arranged", "Flexible group sizes"],
  },
  {
    icon: "🙏",
    title: "Pune → Shirdi",
    price: "Starting at ₹4,999",
    tag: "Pilgrimage",
    description:
      "Visit the holy Sai Baba temple at Shirdi. 240 km journey with experienced guides and flexible timings.",
    distance: "~240 km (one way)",
    duration: "Same day or overnight options",
    highlights: ["Experienced drivers", "Flexible pickup time", "Round trip available", "Temple drop & pickup"],
  },
  {
    icon: "⛰️",
    title: "Pune → Mahabaleshwar",
    price: "Starting at ₹3,999",
    tag: "Hill Station",
    description:
      "Scenic hill station at 1,438m altitude. Perfect for trekking, strawberry picking, and panoramic views.",
    distance: "~120 km (one way)",
    duration: "Full day or weekend trip",
    highlights: ["Scenic ghats route", "Viewpoints & markets", "Family-friendly", "AC cab"],
  },
  {
    icon: "🌿",
    title: "Pune → Lonavala",
    price: "Starting at ₹1,999",
    tag: "Scenic",
    description: "Just 65 km away. Ideal for weekend getaway with caves, waterfalls, and adventure activities.",
    distance: "~65 km (one way)",
    duration: "Half day or full day",
    highlights: ["Quick getaway", "Caves & viewpoints", "Budget-friendly", "Same-day return"],
  },
  {
    icon: "🌊",
    title: "Pune → Konkan Coast",
    price: "Starting at ₹5,999",
    tag: "Beach",
    description: "Discover beautiful beaches like Alibaug and Murud. Beach camping and water sports available.",
    distance: "Coastal route (varies by beach)",
    duration: "Full day or multi-day",
    highlights: ["Alibaug / Murud options", "Coastal drive", "Group & family trips", "Custom stops on request"],
  },
  {
    icon: "📞",
    title: "Custom Tour Packages",
    price: "Customized Pricing",
    tag: "Enquire",
    description:
      "Plan your own itinerary. We offer flexible customization for groups, families, and corporate events.",
    distance: "As per your itinerary",
    duration: "You choose the schedule",
    highlights: ["Corporate & events", "Family groups", "Multi-city plans", "Dedicated support"],
  },
];

const tagColors = {
  Pilgrimage: "bg-amber-100 text-amber-800",
  "Hill Station": "bg-purple-100 text-purple-800",
  Scenic: "bg-blue-100 text-blue-800",
  Beach: "bg-teal-100 text-teal-800",
  Enquire: "bg-green-100 text-green-800",
};

function whatsappHref(routeTitle) {
  const text = encodeURIComponent(`Hi, I'm interested in: ${routeTitle}`);
  return `https://wa.me/${WHATSAPP_E164}?text=${text}`;
}

const PopularRoutes = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selected]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-2">Popular Routes 🚗</h2>
      <p className="text-center text-sm text-gray-500 mb-6">Handpicked packages from Pune — tap a route for details</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {routes.map((route, i) => (
          <button
            type="button"
            key={i}
            onClick={() => setSelected(route)}
            className="bg-white p-5 rounded-xl shadow text-center hover:-translate-y-1 transition-transform flex flex-col items-center w-full border border-transparent hover:border-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <div className="text-3xl mb-2">{route.icon}</div>
            <h3 className="font-bold text-gray-800 mb-1">{route.title}</h3>
            <p className="text-xs text-gray-600 mb-2 flex-grow">{route.description}</p>
            <p className="text-sm text-gray-500 mb-3 font-semibold">{route.price}</p>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[route.tag]} inline-block mx-auto`}>
              {route.tag}
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popular-route-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close dialog"
            onClick={() => setSelected(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-[101]">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>

            <div className="text-4xl mb-3 text-center">{selected.icon}</div>
            <h3 id="popular-route-modal-title" className="text-xl font-bold text-blue-900 text-center pr-6">
              {selected.title}
            </h3>
            <p className="text-center mt-2">
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[selected.tag]}`}>
                {selected.tag}
              </span>
            </p>
            <p className="text-lg font-semibold text-red-600 text-center mt-3">{selected.price}</p>

            <div className="mt-5 space-y-3 text-sm text-gray-700">
              <p>{selected.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-gray-100">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Distance</p>
                  <p className="font-medium text-gray-800">{selected.distance}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Duration</p>
                  <p className="font-medium text-gray-800">{selected.duration}</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Includes / highlights</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selected.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                  <li className="font-medium text-blue-900">Contact us to know more about this package.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 text-white text-sm font-semibold py-2 px-3 hover:bg-blue-800 transition-colors shadow whitespace-nowrap"
              >
                <span aria-hidden>📞</span>
                Call us
              </a>
              <a
                href={whatsappHref(selected.title)}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 text-white text-sm font-semibold py-2 px-3 hover:bg-green-700 transition-colors shadow whitespace-nowrap"
              >
                <span aria-hidden>💬</span>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularRoutes;
