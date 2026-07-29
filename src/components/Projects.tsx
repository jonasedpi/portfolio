import React from "react";
import { useTranslation } from "react-i18next";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  repoLink: string;
};

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: t("projects.portfolio.title"),
      description: t("projects.portfolio.description"),
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      liveLink: "https://jonasedpi.vercel.app",
      repoLink: "https://github.com/jonasedpi/jonasedpi.github.io",
    },
    {
      title: t("projects.vr_unity.title"),
      description: t("projects.vr_unity.description"),
      techStack: ["Unity", "C#", "VR"],
      repoLink: "https://github.com/jonasedpi/vr-unity",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-zinc-800 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="font-pixel text-3xl text-center text-blue-300 mb-12">
          {t("projects.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-zinc-800
                border-4
                border-blue-300
                p-6
                shadow-[8px_8px_0px_#000]
                hover:-translate-y-2
                hover:shadow-[12px_12px_0px_#000]
                transition-all
                duration-200
              "
            >
              {/* Cabeçalho */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎮</span>

                <h3 className="font-pixel text-lg text-blue-300">
                  {project.title}
                </h3>
              </div>

              {/* Descrição */}
              <p className="text-zinc-300 mb-6">
                {project.description}
              </p>

              {/* Tecnologias */}
              <div className="mb-6">

                <h4 className="font-semibold text-blue-300 mb-3">
                  {t("projects.technologies")}
                </h4>

                <div className="flex flex-wrap gap-2">

                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        border-2
                        border-blue-300
                        px-3
                        py-1
                        text-sm
                        bg-zinc-900
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

              {/* Botões */}
              <div className="flex gap-3 mt-auto">

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      text-center
                      border-2
                      border-blue-300
                      py-2
                      hover:bg-blue-300
                      hover:text-black
                      transition
                    "
                  >
                    🌐 {t("projects.viewOnline")}
                  </a>
                )}

                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    text-center
                    border-2
                    border-blue-300
                    py-2
                    hover:bg-blue-300
                    hover:text-black
                    transition
                  "
                >
                  💻 {t("projects.repository")}
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;