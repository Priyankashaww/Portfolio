import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import PortfolioChat from "./PortfolioChat";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute left-[-10%] top-[20%] h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Open to opportunities
          </div>

          <p className="mb-4 text-lg text-gray-400">Hi, I'm</p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Priyanka
            <br />
            <span className="gradient-text">Shaw.</span>
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-gray-200 md:text-3xl">
            Generative AI | Software Developer | AI/ML Engineer
            {/* <br />  
            AI/ML Engineer */}
          </h2>

          <p className="max-w-xl text-lg leading-8 text-gray-400">
            I build intelligent web applications, data-driven dashboards, and
            AI-powered solutions using React, Python, FastAPI, Machine Learning,
            Generative AI, and RAG systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-violet-600 px-6 py-3 font-medium transition hover:bg-violet-500"
            >
              View My Work
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 px-6 py-3 font-medium text-gray-300 transition hover:border-violet-400 hover:text-white"
            >
              View Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/Priyankashaww"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-white"
            >
              <span className="text-xl">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/priyanka-shaw-a0217020b/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-white"
            >
              <span className="text-xl">LinkedIn</span>
            </a>

            <a
              href="mailto:your-email@example.com"
              className="text-gray-400 transition hover:text-white"
            >
              <span className="text-xl">Gmail</span>
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative flex justify-center"
        >
          <PortfolioChat />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
      >
        <ArrowDown />
      </a>
    </section>
  );
}

export default Hero;
