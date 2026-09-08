import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "JavaScript", "HTML5", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "REST APIs",
      "TensorFlow",
      "Scikit-Learn",
      "CNN",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Generative AI",
      "RAG",
      "LLMs",
      "SLM",
      "AI Inference Services",
      "NLP",
      "Computer Vision",
      "Prompt Eningeering",
      "Multi-Agent Workflow",
      "LangChain",
      "Agent Orchestration",
      "Prompt Engineering",
      "Vector search",
      "Ollama",
      "Hugging Face",
    ],
  },
  {
    title: "Data & Databases",
    skills: ["MySQL", "ChromaDB", "FAISS", "Pandas", "Power BI", "Tableau"],
  },
  {
    title: "Cloud & Devops",
    skills: ["AWS", "API Deployment Concepts"],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-white/[0.02] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          subtitle="My Toolkit"
          title="Technologies I work with"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-[#0b1020] p-7"
            >
              <h3 className="text-xl font-semibold">{group.title}</h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-violet-400/10 bg-violet-500/10 px-3 py-2 text-sm text-violet-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ subtitle, title }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl font-bold md:text-5xl">{title}</h2>
    </div>
  );
}

export default Skills;
