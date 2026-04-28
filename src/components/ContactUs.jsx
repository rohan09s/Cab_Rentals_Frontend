const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-blue-900">Contact Us 📞</h2>
        <p className="text-center text-gray-600 mb-10">We're here to help you with any inquiries</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">📱</div>
              <h3 className="font-bold text-lg text-blue-900">Phone</h3>
            </div>
            <p className="text-gray-700 mb-2">
              <a href="tel:7709040404" className="text-red-600 font-semibold hover:underline">
                7709040404
              </a>
            </p>
            <p className="text-sm text-gray-500">Available 24/7 for bookings and support</p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">✉️</div>
              <h3 className="font-bold text-lg text-blue-900">Email</h3>
            </div>
            <p className="text-gray-700 mb-2">
              <a href="mailto:amittravelspune@gmail.com" className="text-red-600 font-semibold hover:underline">
                amittravelspune@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-500">We respond within 24 hours</p>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">📍</div>
              <h3 className="font-bold text-lg text-blue-900">Address</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Amit Tours & Travels, <br />
              Pune, Maharashtra, India
            </p>
            <p className="text-sm text-gray-500">Visit our office for personalized assistance</p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-10 bg-white p-8 rounded-xl shadow-md">
          <h3 className="font-bold text-lg text-blue-900 mb-4">Business Hours ⏰</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div className="flex justify-between">
              <span className="font-semibold">Monday - Friday:</span>
              <span>6:00 AM - 11:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Saturday:</span>
              <span>6:00 AM - 11:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Sunday:</span>
              <span>6:00 AM - 11:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Holidays:</span>
              <span>Available on Request</span>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        {/* <div className="mt-10 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl">
          <h3 className="font-bold text-lg text-blue-900 mb-4">Why Choose Amit Tours & Travels? 🌟</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl mb-2">✔️</div>
              <p className="text-sm font-semibold text-gray-700">Professional Drivers</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">✔️</div>
              <p className="text-sm font-semibold text-gray-700">Well Maintained Vehicles</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">✔️</div>
              <p className="text-sm font-semibold text-gray-700">Affordable Prices</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">✔️</div>
              <p className="text-sm font-semibold text-gray-700">24/7 Support</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactUs;
