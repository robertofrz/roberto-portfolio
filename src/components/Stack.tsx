import { motion, useAnimation, AnimationControls } from "framer-motion";
import React, { useEffect } from "react";

function Stack(): React.JSX.Element {
  const stack: string[] = [
    "Axios",
    "CSS",
    "Firebase",
    "Git",
    "GitHub",
    "HTML",
    "i18next",
    "JavaScript",
    "Jest",
    "Framer-Motion",
    "React-Query",
    "React-Router",
    "React",
    "Tailwind",
    "TypeScript",
    "Vercel",
    "Vite",
    "Vitest",
    "Webpack",
  ];
  const repeatedStack: string[] = Array(3).fill(stack).flat();
  const controls: AnimationControls = useAnimation();

  const animationProps = {
    x: ["0%", "-80%"],
    transition: {
      duration: 30,
      ease: "linear" as const,
      repeat: Infinity,
    },
  };

  useEffect(() => {
    controls.start(animationProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controls]);

  const handleMouseEnter = (): void => {
    controls.stop();
  };

  const handleMouseLeave = (): void => {
    controls.start(animationProps);
  };
  return (
    <div
      className="overflow-hidden w-[100vw] my-green-bg py-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flex gap-5 items-center"
        animate={controls}
        initial={{
          x: "0%",
        }}
      >
        {repeatedStack.map((item: string, index: number) => (
          <div key={index} className="w-14 h-14 flex-shrink-0">
            <motion.img
              src={`/logos/${item}.png`}
              alt={`${item} logo`}
              className="w-full h-full object-contain opacity-10"
              title={item.replace("-", " ")}
              whileHover={{ opacity: 0.8 }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default Stack;
