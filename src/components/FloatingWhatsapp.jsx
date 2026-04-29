const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/917709040404?text=Hi%20I%20want%20to%20book%20a%20cab"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg z-50"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="whatsapp"
        className="w-6 h-6"
      />
    </a>
  );
};

export default FloatingWhatsApp;