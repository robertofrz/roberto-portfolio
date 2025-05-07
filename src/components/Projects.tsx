import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import projects from "../data/ProjectsArray";

function Projects(): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <div
      id="projects"
      className="scroll-mt-16 w-[90vw] sm:w-[60vw] flex flex-col justify-evenly items-center gap-12 mt-40  text-gray-500 font-Montserrat"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <img
          src="/memojis/coding.png"
          alt="working on laptop memoji"
          className="w-20"
        />
        <h2 className="font-Sen font-medium text-5xl w-[90vw] sm:text-5xl my-green flex justify-center items-center -mb-2">
          &lt;{t("projects")} /&gt;
        </h2>
      </div>
      {projects.map((project) => (
        <div
          key={project.title}
          className=" w-full flex-shrink-0 border border-gray-300 rounded-xl shadow-lg shadow-zinc-200 dark:shadow-zinc-950 sm:h-full flex flex-col justify-between items-center dark:border-zinc-800"
        >
          <motion.img
            src={project.screenshot}
            alt={`screenshot from project ${project.title}`}
            className="w-full object-cover border-b-1 border-b-gray-300 rounded-t-xl dark:border-b-zinc-800"
            initial={{ filter: "grayscale(100%)" }}
            whileHover={{ filter: "grayscale(0%)" }}
            transition={{ duration: 0.2 }}
          />
          <div className="w-full p-8 rounded-b-xl bg-white dark:bg-zinc-900">
            <h3 className="text-2xl my-green pb-2 font-Sen font-semibold">
              {t(project.title)}
            </h3>
            <p className=" pb-2 text-lg text-justify text-gray-500 dark:text-gray-400">
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
