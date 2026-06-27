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
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-500" />
            <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">
              My Setup
            </span>
            <div className="w-8 h-px bg-amber-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Remote Work Ready</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Fully equipped for remote work with a reliable setup and flexible availability across
            multiple time zones.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {setup.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100 h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-700 text-sm font-medium mb-1">{item.detail}</p>
                <p className="text-slate-400 text-xs">{item.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
