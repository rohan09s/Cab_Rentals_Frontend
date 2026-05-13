const FloatingWhatsApp = () => {
  return (
    <>
      {/* Desktop version - circular icon button */}
      <a
        href="https://wa.me/917709040404?text=Hi%20I%20want%20to%20book%20a%20cab"
        target="_blank"
        rel="noreferrer"
        className="hidden fixed bottom-5 right-5 z-50 md:flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg ring-1 ring-black/10 transition hover:bg-green-600 hover:shadow-xl active:scale-[0.98]"
        aria-label="Chat on WhatsApp"
      >
        <img src="/WhatsApp.png" alt="WhatsApp" className="w-16 h-16" />
      </a>
    </>
  );
};

export default FloatingWhatsApp;