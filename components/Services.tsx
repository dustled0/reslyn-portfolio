import FadeIn from "./FadeIn";

const services = [
  {
    icon: "📖",
    title: "Online ESL Teaching",
    desc: "One-on-one English lessons customized to your goals, level, and schedule.",
    features: [
      "All levels: beginner to advanced",
      "All ages: 5–70 years old",
      "Speaking, grammar, pronunciation & vocabulary",
      "Flexible scheduling across time zones",
    ],
    rate: "$6–10 / hr",
    highlight: false,
  },
  {
    icon: "💬",
    title: "Email & Chat Support",
    desc: "Professional non-voice customer service with fast, accurate, empathetic responses.",
    features: [
      "Email & live chat handling",
      "Issue resolution & escalation",
      "CRM documentation & record keeping",
      "Refunds, billing & order tracking",
    ],
    rate: "$5–8 / hr",
    highlight: true,
  },
  {
    icon: "🗂️",
    title: "Virtual Admin Support",
    desc: "Reliable back-office support to keep your daily operations running smoothly.",
    features: [
      "Data entry & documentation",
      "Google Workspace & MS Office",
      "Scheduling & inbox management",
      "Payment transaction processing",
    ],
    rate: "$4–7 / hr",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-emerald-500" />
            <span className="text-emerald-600 text-sm font-medium tracking-widest uppercase">
              What I Offer
            </span>
            <div className="w-8 h-px bg-emerald-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Services &amp; Rates</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Flexible remote services available across US, Japan, and AU time zones.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <FadeIn key={svc.title} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-7 flex flex-col h-full transition-all hover:shadow-md ${
                  svc.highlight
                    ? "bg-indigo-950 border border-emerald-500/30 ring-1 ring-emerald-500/20"
                    : "bg-white border border-gray-200 hover:border-emerald-300"
                }`}
              >
                {svc.highlight && (
                  <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                    Most Requested
                  </span>
                )}
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3
                  className={`font-bold text-xl mb-2 ${
                    svc.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {svc.title}
                </h3>
                <p
                  className={`text-sm mb-5 leading-relaxed ${
                    svc.highlight ? "text-indigo-300" : "text-gray-500"
                  }`}
                >
                  {svc.desc}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {svc.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-sm ${
                        svc.highlight ? "text-indigo-200" : "text-gray-600"
                      }`}
                    >
                      <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div
                  className={`border-t pt-4 flex items-center justify-between ${
                    svc.highlight ? "border-indigo-800" : "border-gray-200"
                  }`}
                >
                  <div>
                    <p className={`text-xs mb-0.5 ${svc.highlight ? "text-indigo-400" : "text-gray-400"}`}>
                      Starting rate
                    </p>
                    <p className="text-xl font-bold text-emerald-500">{svc.rate}</p>
                  </div>
                  <a
                    href="#contact"
                    className={`font-semibold px-4 py-2 rounded-lg text-sm transition-all ${
                      svc.highlight
                        ? "bg-emerald-500 hover:bg-emerald-400 text-white"
                        : "bg-indigo-950 hover:bg-emerald-500 text-white"
                    }`}
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
