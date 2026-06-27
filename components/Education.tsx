import FadeIn from "./FadeIn";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-emerald-500" />
            <span className="text-emerald-600 text-sm font-medium tracking-widest uppercase">
              Academic Background
            </span>
            <div className="w-8 h-px bg-emerald-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Education &amp; Certifications
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 h-full">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl mb-5">
                🎓
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-1">
                Bachelor of Elementary Education
              </h3>
              <p className="text-emerald-600 font-medium mb-2">
                University of Cebu Lapu-lapu and Mandaue
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Cebu City, Philippines &nbsp;&middot;&nbsp; Jun 2016 – Jul 2021
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strong foundation in teaching strategies, classroom management, lesson planning,
                and learner-centered instruction.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200 h-full">
              <div className="w-12 h-12 bg-emerald-200 rounded-xl flex items-center justify-center text-2xl mb-5">
                📜
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-1">
                Licensed Professional Teacher
              </h3>
              <p className="text-emerald-600 font-medium mb-2">
                Professional Regulation Commission (PRC)
              </p>
              <p className="text-gray-400 text-sm mb-4">Philippines</p>
              <p className="text-gray-600 text-sm leading-relaxed">
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
