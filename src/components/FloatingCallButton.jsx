/** Fixed call shortcut for viewports below Tailwind `md` (hidden on desktop). */
const FloatingCallButton = () => (
  <a
    href="tel:7709040404"
    className="fixed bottom-5 left-5 z-40 flex items-center justify-center rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg ring-1 ring-black/10 transition hover:bg-red-700 hover:shadow-xl active:scale-[0.98] md:hidden"
    aria-label="Call 7709040404"
  >
    Call
  </a>
);

export default FloatingCallButton;
