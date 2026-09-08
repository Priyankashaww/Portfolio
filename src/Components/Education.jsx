function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          Academic Background
        </p>

        <h2 className="mt-3 text-4xl font-bold md:text-5xl">Education</h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <EducationCard
            degree="Master of Computer Applications"
            institute="Christ University, Delhi NCR"
            score="CGPA: 3.69 / 4.0"
          />

          <EducationCard
            degree="Bachelor of Computer Applications"
            institute="The Calcutta Anglo Gujarati College"
            score="CGPA: 9.20 / 10"
          />
        </div>
      </div>
    </section>
  );
}

function EducationCard({ degree, institute, score }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1020] p-7">
      <div className="mb-5 text-3xl">🎓</div>

      <h3 className="text-xl font-bold">{degree}</h3>

      <p className="mt-3 text-gray-400">{institute}</p>

      <p className="mt-5 text-sm font-medium text-violet-400">{score}</p>
    </div>
  );
}

export default Education;
