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
    }
  ];

  return (
    <section className="projects bg-gray-500 py-10 aspect-<3/2>">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t("projects.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" shadow-md rounded-lg p-4 transition-transform hover:scale-105 bg-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold">
                  {t("projects.technologies")}:
                </h4>

                <ul className="list-disc list-inside">
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {t("projects.viewOnline")}
                  </a>
                )}

                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {t("projects.repository")}
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