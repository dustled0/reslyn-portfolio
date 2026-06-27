import FadeIn from "./FadeIn";

const setup = [
  {
    icon: "🌐",
    title: "Internet",
    detail: "Fiber — 220 Mbps ↓ / 312 Mbps ↑",
    sub: "TP-LINK 10 GB WiFi backup",
  },
  {
    icon: "💻",
    title: "Equipment",
    detail: "Windows 11 · Gen i5 · 16 GB RAM",
    sub: "Noise-canceling headset · HD webcam",
  },
  {
    icon: "🏠",
    title: "Workspace",
    detail: "Dedicated quiet home office",
    sub: "Stable setup for video calls",
  },
  {
    icon: "🕐",
    title: "Availability",
    detail: "US (PST) · UK (GMT) · AU (AEST)",
    sub: "Flexible schedule",
  },
];

export default function RemoteWork() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-rose-400" />
            <span className="text-rose-500 text-sm font-medium tracking-widest uppercase">
              My Setup
            </span>
            <div className="w-8 h-px bg-rose-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">Remote Work Ready</h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            Fully equipped for remote work with a reliable setup and flexible availability across
            multiple time zones.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {setup.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="bg-rose-50 rounded-2xl p-6 text-center border border-rose-100 hover:border-rose-200 hover:shadow-sm transition-all h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-700 text-sm font-medium mb-1">{item.detail}</p>
                <p className="text-stone-400 text-xs">{item.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
