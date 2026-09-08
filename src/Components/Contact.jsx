import { Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-[#0b1020] to-cyan-500/10 px-6 py-16 text-center md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Get In Touch
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Let's build something
            <span className="gradient-text"> interesting.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            I'm interested in opportunities related to Software Development,
            Python, AI/ML Engineering, Generative AI, and Full-Stack
            Development.
          </p>

          <a
            href="mailto:pshaw9812@gmail.com"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-medium transition hover:bg-violet-500"
          >
            <Send size={18} />
            Say Hello
          </a>

          <div className="mt-10 flex justify-center gap-6">
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
              href="mailto:pshaw9812@gmail.com"
              className="text-gray-400 transition hover:text-white"
            >
              <span className="text-xl">Gmail</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
