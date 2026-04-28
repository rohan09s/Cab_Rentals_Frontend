const PopularRoutes = () => {
  const routes = [
    { 
      icon: "🛕", 
      title: "Ashtavinayak Darshan", 
      price: "Starting at ₹10,000", 
      tag: "Pilgrimage",
      description: "Sacred journey to all 8 Ganesha temples around Pune. Fully guided tour with comfortable seating and meals included." 
    },
    { 
      icon: "🙏", 
      title: "Pune → Shirdi", 
      price: "Starting at ₹4,999", 
      tag: "Pilgrimage",
      description: "Visit the holy Sai Baba temple at Shirdi. 240 km journey with experienced guides and flexible timings." 
    },
    { 
      icon: "⛰️", 
      title: "Pune → Mahabaleshwar", 
      price: "Starting at ₹3,999", 
      tag: "Hill Station",
      description: "Scenic hill station at 1,438m altitude. Perfect for trekking, strawberry picking, and panoramic views." 
    },
    { 
      icon: "🌿", 
      title: "Pune → Lonavala", 
      price: "Starting at ₹1,999", 
      tag: "Scenic",
      description: "Just 65 km away. Ideal for weekend getaway with caves, waterfalls, and adventure activities." 
    },
    { 
      icon: "🌊", 
      title: "Pune → Konkan Coast", 
      price: "Starting at ₹5,999", 
      tag: "Beach",
      description: "Discover beautiful beaches like Alibaug and Murud. Beach camping and water sports available." 
    },
    { 
      icon: "📞", 
      title: "Custom Tour Packages", 
      price: "Customized Pricing", 
      tag: "Enquire",
      description: "Plan your own itinerary. We offer flexible customization for groups, families, and corporate events." 
    },
  ];

  const tagColors = {
    Pilgrimage: "bg-amber-100 text-amber-800",
    "Hill Station": "bg-purple-100 text-purple-800",
    Scenic: "bg-blue-100 text-blue-800",
    Beach: "bg-teal-100 text-teal-800",
    Enquire: "bg-green-100 text-green-800",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-2">Popular Routes 🚗</h2>
      <p className="text-center text-sm text-gray-500 mb-6">Handpicked packages from Pune</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {routes.map((route, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow text-center hover:-translate-y-1 transition-transform flex flex-col"
          >
            <div className="text-3xl mb-2">{route.icon}</div>
            <h3 className="font-bold text-gray-800 mb-1">{route.title}</h3>
            <p className="text-xs text-gray-600 mb-2 flex-grow">{route.description}</p>
            <p className="text-sm text-gray-500 mb-3 font-semibold">{route.price}</p>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[route.tag]} inline-block mx-auto`}>
              {route.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRoutes;