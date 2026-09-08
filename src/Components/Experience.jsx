import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI Deployment Specialist",
    company: "IVEX Ventures",
    period: "April 2025 – Present",
    points: [
      "Worked on AI and machine learning solutions.",
      "Explored Generative AI, LLMs, and RAG-based applications.",
      "Contributed to intelligent application development.",
      "Built AI agents for automated retrieval, reasoning, and task execution using LangChain.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Bista Technologies",
    period: "May 2024 – July 2024",
    points: [
      "Developed live web pages, improving page speed by 30% and user engagement by 20%",
      "Conducted thorough testing and debugging to ensure optimal performance.",
      "Built responsive and user-friendly interfaces.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-white/[0.02] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Career Journey
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-2xl border border-white/10 bg-[#0b1020] p-7"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-xl font-bold">{item.role}</h3>

                  <p className="mt-1 text-violet-400">{item.company}</p>
                </div>

                <span className="text-sm text-gray-500">{item.period}</span>
              </div>

              <ul className="mt-6 space-y-3 text-gray-400">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-violet-400">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
