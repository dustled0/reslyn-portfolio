import FadeIn from "./FadeIn";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-rose-400" />
            <span className="text-rose-500 text-sm font-medium tracking-widest uppercase">
              Academic Background
            </span>
            <div className="w-8 h-px bg-rose-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
            Education &amp; Certifications
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 border border-stone-200 h-full">
              <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-2xl mb-5">
                🎓
              </div>
              <h3 className="font-bold text-stone-900 text-xl mb-1">
                Bachelor of Elementary Education
              </h3>
              <p className="text-rose-500 font-medium mb-2">
                University of Cebu Lapu-lapu and Mandaue
              </p>
              <p className="text-stone-400 text-sm mb-4">
                Cebu City, Philippines &nbsp;&middot;&nbsp; Jun 2016 – Jul 2021
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Strong foundation in teaching strategies, classroom management, lesson planning,
                and learner-centered instruction.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl p-8 border border-rose-200 h-full ring-1 ring-rose-100">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-2xl mb-5">
                📜
              </div>
              <h3 className="font-bold text-stone-900 text-xl mb-1">
                Licensed Professional Teacher
              </h3>
              <p className="text-rose-500 font-medium mb-2">
                Professional Regulation Commission (PRC)
              </p>
              <p className="text-stone-400 text-sm mb-4">Philippines</p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Passed the Licensure Examination for Teachers (LET), qualifying as a licensed
                professional educator in the Philippines.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
