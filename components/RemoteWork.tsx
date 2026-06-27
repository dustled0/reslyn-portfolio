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
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-emerald-500" />
            <span className="text-emerald-600 text-sm font-medium tracking-widest uppercase">
              My Setup
            </span>
            <div className="w-8 h-px bg-emerald-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Remote Work Ready</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Fully equipped for remote work with a reliable setup and flexible availability across
            multiple time zones.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {setup.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200 hover:border-emerald-200 hover:shadow-md transition-all h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm font-medium mb-1">{item.detail}</p>
                <p className="text-gray-400 text-xs">{item.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
