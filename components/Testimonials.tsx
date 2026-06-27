import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "Kim S.",
    role: "QQ English Student",
    origin: "🇰🇷 South Korea",
    quote:
      "Reslyn is an amazing teacher! My English improved so much in just 2 months. She is very patient and always explains things clearly. I feel so much more confident speaking now.",
    rating: 5,
  },
  {
    name: "Mark R.",
    role: "Team Lead",
    origin: "🏢 Teleperformance",
    quote:
      "Very professional and reliable. Reslyn handled our email queue efficiently, kept detailed records, and always responded to customers with clear and empathetic communication.",
    rating: 5,
  },
  {
    name: "Yuki T.",
    role: "QQ English Student",
    origin: "🇯🇵 Japan",
    quote:
      "I love Reslyn's teaching style. She makes learning English fun and never makes me feel embarrassed for making mistakes. I look forward to every class!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-rose-400" />
            <span className="text-rose-500 text-sm font-medium tracking-widest uppercase">
              What Others Say
            </span>
            <div className="w-8 h-px bg-rose-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">Testimonials</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="bg-rose-50 rounded-2xl p-7 border border-rose-100 flex flex-col h-full">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-rose-400 text-base">★</span>
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-rose-100 pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 font-bold text-sm shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-stone-900 font-semibold text-sm">{t.name}</p>
                    <p className="text-stone-400 text-xs">
                      {t.role} &middot; {t.origin}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-10">
          <p className="text-stone-400 text-xs italic">
            References available upon request.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
