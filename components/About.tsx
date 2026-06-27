import FadeIn from "./FadeIn";

const highlights = [
  { number: "5+", label: "Years Experience" },
  { number: "200+", label: "Students Taught" },
  { number: "3", label: "Industries" },
  { number: "3", label: "Languages" },
];

const tags = ["ESL Teaching", "Lesson Planning", "Student-Centered", "LPT Licensed", "Remote-Ready"];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-amber-500" />
              <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Passionate Educator &amp;<br />Dedicated Professional
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              I&apos;m a Licensed Professional Teacher with hands-on experience teaching English to
              students from diverse backgrounds across Asia, including Korea, Japan, Vietnam, Taiwan,
              and Mongolia.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              My approach focuses on one-on-one instruction tailored to each student&apos;s age,
              learning style, and proficiency level — from young learners aged 5 to adult learners
              up to 70 years old.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100">
                  <div className="text-4xl font-bold text-amber-500 mb-1">{item.number}</div>
                  <div className="text-slate-500 text-sm font-medium">{item.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
