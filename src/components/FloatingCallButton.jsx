/** Mobile-only floating call + WhatsApp bar. */
const FloatingCallButton = () => (
  <div className="fixed bottom-4 left-1/2 z-40 flex w-[min(26rem,calc(100%-1rem))] -translate-x-1/2 gap-3 rounded-xl bg-slate-200/95 px-3 py-3 shadow-xl ring-1 ring-black/10 backdrop-blur-sm md:hidden">
    <a
      href="tel:7709040404"
      className="flex flex-1 min-w-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-slate-900 shadow-sm ring-1 ring-black/5 transition hover:bg-blue-600 active:scale-[0.98]"
      aria-label="Call 7709040404"
    >
      <img src="/Call.png" alt="Call icon" className="h-5 w-5 shrink-0" />
      <span className="text-white">Call</span>
    </a>
    <a
      href="https://wa.me/917709040404?text=Hi%20I%20want%20to%20book%20a%20cab"
      target="_blank"
      rel="noreferrer"
      className="flex flex-1 min-w-0 items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-bold text-slate-900 shadow-sm ring-1 ring-black/5 transition hover:bg-green-600 active:scale-[0.98]"
      aria-label="Chat on WhatsApp"
    >
      <img src="/WA-logo.png" alt="WhatsApp icon" className="h-5 w-5 shrink-0" />
      <span className="text-white">WhatsApp</span>
    </a>
  </div>
);

export default FloatingCallButton;
