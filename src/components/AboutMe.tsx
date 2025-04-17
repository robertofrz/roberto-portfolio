import { useTranslation } from "react-i18next";
import aboutMeArray from "../data/AboutMeArray";
import { motion } from "framer-motion";

function AboutMe(): React.JSX.Element {
  const { t } = useTranslation();

  const animation = {
    initial: { opacity: 0.6 },
    whileHover: { scale: 1.1, opacity: 1, color: "#52662b" },
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  return (
    <div
      id="aboutMe"
      className="scroll-mt-16 w-[95vw] h-[60vh] sm:h-[90vh] text-center text-zinc-600 dark:text-zinc-300 font-Andika mt-60 mb-20"
    >
      <h2 className="text-center m-auto w-[80vw] text-4xl sm:text-5xl my-green font-Rosehot mb-12 sm:mb-22 ">
        {t("myself")}
      </h2>
      <div className="grid grid-cols-3 h-full gap-2">
        <div className="h-full flex flex-col justify-between items-center">
          {aboutMeArray[0].map((item) => (
            <motion.p
              key={item.translation}
              className={item.style}
              initial={animation.initial}
              whileHover={animation.whileHover}
              transition={animation.transition}
            >
              {t(item.translation)}
            </motion.p>
          ))}
        </div>
        <div className="h-full flex flex-col justify-between items-center">
          {aboutMeArray[1].map((item) => (
            <motion.p
              key={item.translation}
              className={item.style}
              initial={animation.initial}
              whileHover={animation.whileHover}
              transition={animation.transition}
            >
              {t(item.translation)}
            </motion.p>
          ))}

          <img
            src="/memojis/meditating.png"
            alt="meditating memoji"
            className="w-70 my-6"
          />

          {aboutMeArray[2].map((item) => (
            <motion.p
              key={item.translation}
              className={item.style}
              initial={animation.initial}
              whileHover={animation.whileHover}
              transition={animation.transition}
            >
              {t(item.translation)}
            </motion.p>
          ))}
        </div>
        <div className="h-full flex flex-col justify-between items-center">
          {aboutMeArray[3].map((item) => (
            <motion.p
              key={item.translation}
              className={item.style}
              initial={animation.initial}
              whileHover={animation.whileHover}
              transition={animation.transition}
            >
              {t(item.translation)}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
