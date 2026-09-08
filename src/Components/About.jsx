import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Turning ideas into
              <span className="block gradient-text">intelligent products.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-400">
              I'm an MCA graduate and Software Developer with a strong interest
              in Artificial Intelligence, Machine Learning, Generative AI, and
              modern full-stack development.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I enjoy building practical applications that combine beautiful
              user interfaces, scalable backend systems, data analytics, and
              intelligent AI capabilities.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Stat number="10+" label="Projects" />
              <Stat number="2" label="Internships" />
              <Stat number="15+" label="Technologies" />
              <Stat number="AI" label="Focused" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-2xl font-bold text-violet-400">{number}</div>

      <div className="mt-1 text-sm text-gray-500">{label}</div>
    </div>
  );
}

export default About;
