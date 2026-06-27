import FadeIn from "./FadeIn";

const skillCategories = [
  {
    icon: "📚",
    title: "Teaching Skills",
    skills: [
      "Online ESL Teaching",
      "Lesson Planning & Delivery",
      "Student Engagement",
      "One-on-One Instruction",
      "Curriculum Adaptation",
      "Beginner to Advanced",
    ],
  },
  {
    icon: "💬",
    title: "Customer Service",
    skills: [
      "Email & Chat Support",
      "Issue Resolution",
      "Order Tracking",
      "Payment Processing",
      "CRM Systems",
      "Professional Communication",
    ],
  },
  {
    icon: "🖥️",
    title: "Teaching Platforms",
    skills: ["QQ English Platform", "Zoom", "Skype", "Google Meet", "Classin", "Voov"],
  },
  {
    icon: "⚙️",
    title: "Productivity Tools",
    skills: [
      "Microsoft Office Suite",
      "Google Workspace",
      "Canva",
      "Basic Data Entry",
      "Email Platforms",
    ],
  },
];

const languages = [
  { lang: "English", level: "Fluent" },
  { lang: "Tagalog", level: "Native" },
  { lang: "Cebuano", level: "Native" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-indigo-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">
              What I Know
            </span>
            <div className="w-8 h-px bg-emerald-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills &amp; Expertise</h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {skillCategories.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.08}>
              <div className="bg-indigo-900 rounded-2xl p-6 border border-indigo-800 hover:border-emerald-500/40 transition-colors h-full">
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-white text-lg mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-indigo-200 text-sm">
                      <span className="w-1 h-1 bg-emerald-500 rounded-full shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center">
          <h3 className="text-indigo-400 font-medium mb-5 text-sm tracking-widest uppercase">
            Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((l) => (
              <div
                key={l.lang}
                className="bg-indigo-900 border border-indigo-800 px-6 py-2.5 rounded-full"
              >
                <span className="text-white font-medium">{l.lang}</span>
                <span className="text-indigo-300 text-sm ml-2">&middot; {l.level}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
