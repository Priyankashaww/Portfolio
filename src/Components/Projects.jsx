import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, Play, X } from "lucide-react";

import { projects } from "../data/portfolioData";

function GitHubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.57 9.57 0 012.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.748 0 .268.18.579.688.481A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}
function Projects() {
  const [currentImages, setCurrentImages] = useState({});
  const [selectedVideo, setSelectedVideo] = useState(null);

  const nextImage = (projectId, totalImages) => {
    setCurrentImages((prev) => {
      const current = prev[projectId] || 0;

      return {
        ...prev,
        [projectId]: (current + 1) % totalImages,
      };
    });
  };

  const previousImage = (projectId, totalImages) => {
    setCurrentImages((prev) => {
      const current = prev[projectId] || 0;

      return {
        ...prev,
        [projectId]: (current - 1 + totalImages) % totalImages,
      };
    });
  };

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              Portfolio
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Things I've built.
            </h2>
          </div>

          <p className="max-w-md text-gray-400">
            A selection of projects combining software development, data
            analytics, artificial intelligence, and modern web technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const currentImage = currentImages[project.id] || 0;

            return (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className={`group overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                  project.featured
                    ? "border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-cyan-500/5"
                    : "border-white/10 bg-[#0b1020]"
                }`}
              >
                {/* IMAGE SLIDER */}
                <div className="relative h-64 overflow-hidden bg-[#080c16]">
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[currentImage]}
                      alt={`${project.title} screenshot ${currentImage + 1}`}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-500">
                      No preview available
                    </div>
                  )}

                  {/* Dark overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Previous button */}
                  {project.images && project.images.length > 1 && (
                    <button
                      onClick={() =>
                        previousImage(project.id, project.images.length)
                      }
                      className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:bg-violet-600"
                    >
                      <ChevronLeft size={20} />
                    </button>
                  )}

                  {/* Next button */}
                  {project.images && project.images.length > 1 && (
                    <button
                      onClick={() =>
                        nextImage(project.id, project.images.length)
                      }
                      className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:bg-violet-600"
                    >
                      <ChevronRight size={20} />
                    </button>
                  )}

                  {/* Image dots */}
                  {project.images && project.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {project.images.map((_, imageIndex) => (
                        <button
                          key={imageIndex}
                          onClick={() =>
                            setCurrentImages((prev) => ({
                              ...prev,
                              [project.id]: imageIndex,
                            }))
                          }
                          className={`h-2 rounded-full transition-all ${
                            currentImage === imageIndex
                              ? "w-6 bg-white"
                              : "w-2 bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* PROJECT CONTENT */}
                <div className="p-7">
                  <p className="text-sm text-violet-400">{project.category}</p>

                  <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/5 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    {/* GitHub */}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-violet-400 hover:text-white"
                      >
                        <GitHubIcon size={17} />
                        GitHub
                      </a>
                    )}

                    {/* Video */}
                    {project.video && (
                      <button
                        onClick={() => setSelectedVideo(project.video)}
                        className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500"
                      >
                        <Play size={17} fill="currentColor" />
                        Watch Demo
                      </button>
                    )}

                    {/* External Demo */}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-violet-400 transition hover:text-violet-300"
                      >
                        <ExternalLink size={17} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#080c16] shadow-2xl">
            {/* Close */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-red-500"
            >
              <X size={20} />
            </button>

            {/* Video */}
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="max-h-[80vh] w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
