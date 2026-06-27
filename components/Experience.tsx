import FadeIn from "./FadeIn";

const experiences = [
  {
    role: "Email Support Representative",
    company: "Teleperformance",
    period: "Aug 2024 – Sep 2025",
    type: "Customer Service",
    points: [
      "Assisted customers with login, billing, and order concerns through email support",
      "Maintained accurate records and professional communication across all interactions",
    ],
  },
  {
    role: "ESL Teacher",
    company: "QQ English",
    period: "Jun 2023 – Jul 2024",
    type: "Education",
    points: [
      "Conducted one-on-one online English lessons for students aged 5 to 70 years old",
      "Taught students from Korea, Japan, Vietnam, Taiwan, Mongolia, and other Asian countries",
      "Helped develop speaking, pronunciation, grammar, vocabulary, and conversational English",
      "Adapted lessons based on each student's age, learning style, and proficiency level",
    ],
  },
  {
    role: "Payment Back Office Staff",
    company: "96 Group Back Office",
    period: "Nov 2022 – May 2023",
    type: "Finance",
    points: [
      "Processed payment-related transactions and maintained accurate records",
      "Coordinated with team members to complete daily tasks efficiently",
    ],
  },
  {
    role: "Machine Operator",
    company: "Cebu Toyo Corporation",
    period: "May 2014 – Oct 2015",
    type: "Manufacturing",
    points: [
      "Operated automatic and manual machines in a fast-paced production environment",
      "Maintained product quality and followed company safety procedures",
      "Assisted in meeting daily production targets through machine monitoring",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-emerald-500" />
            <span className="text-emerald-600 text-sm font-medium tracking-widest uppercase">
              Work History
            </span>
            <div className="w-8 h-px bg-emerald-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Professional Experience</h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-indigo-100 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-emerald-500 rounded-full md:-translate-x-1/2 top-6 z-10 ring-4 ring-white" />

                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-14" : "md:pl-14"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:border-emerald-200 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg leading-tight">
                            {exp.role}
                          </h3>
                          <p className="text-emerald-600 font-medium mt-0.5">{exp.company}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-gray-400 text-sm">{exp.period}</p>
                          <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                            <span className="text-emerald-500 mt-1 shrink-0 text-xs">●</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
