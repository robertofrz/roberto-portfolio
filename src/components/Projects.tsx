import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import projects from "./ProjectsArray";

function Projects(): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <div
      id="projects"
      className="scroll-mt-16 w-[90vw] sm:w-[60vw] flex flex-col justify-evenly items-center gap-12 mt-40 text-gray-500 font-Andika"
    >
      <div className="w-full h-[min-content] flex justify-center mb-8 items-center gap-2">
        <h2 className="font-Rosehot text-3xl sm:text-6xl my-green">
          &lt;{t("projects").toLowerCase()}&gt;
        </h2>
        <img
          src="/memojis/coding.png"
          alt="working memoji"
          className="w-20 sm:w-25"
        />
        <h2 className="font-Rosehot text-3xl sm:text-6xl my-green">
          &lt;/{t("projects").toLowerCase()}&gt;
        </h2>
      </div>
      {projects.map((project) => (
        <div
          key={project.title}
          className=" w-full flex-shrink-0 border border-gray-300 rounded-xl shadow-lg sm:h-full flex flex-col justify-between items-center gap-4"
        >
          <motion.img
            src={project.screenshot}
            alt={`project ${project.title} screenshot`}
            className="w-full object-cover border-b-2 border-gray-300 rounded-t-xl"
            initial={{ filter: "grayscale(100%)" }}
            whileHover={{ filter: "grayscale(0%)" }}
            transition={{ duration: 0.2 }}
          />
          <div className="w-full p-8 ">
            <h3 className="text-2xl my-green pb-2 font-Rosehot font-bold">
              {t(project.title)}
            </h3>
            <p className=" pb-2 text-xl text-justify text-gray-500">
              {t(project.description)}
            </p>
            <div className="flex gap-2 mt-4 mb-2 justify-start items-center ">
              <button className="customBtn">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>
              <button className="customBtn">
                <a
                  href={project.deployed}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("deployed")}
                </a>
              </button>
              <button className="customBtn">
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("repository")}
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
