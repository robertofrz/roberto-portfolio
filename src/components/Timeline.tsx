import { useTranslation } from "react-i18next";
import React, { useState } from "react";

function Timeline(): React.JSX.Element {
  const techs: string[] = [
    "html",
    "css",
    "javascript",
    "react",
    "tailwind",
    "typescript",
    "next",
  ];
  const [selectedTech, setSelectedTech] = useState<string>("html");
  const { t } = useTranslation();

  return (
    <div className="w-[90vw] sm:w-[60vw] flex flex-col items-center justify-start mt-48 gap-6 h-[fit]">
      <h2 className="font-Sen my-green text-5xl text-center font-medium mb-4">
        {t("timeline")}
      </h2>
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="flex justify-center px-2 pt-5 pb-1 gap-3 rounded-t-xl w-full sm:w-[70%] bg-zinc-200 dark:bg-zinc-900 shadow-lg">
          {techs.map((tech) => (
            <div key={tech}>
              <img
                src={`/logos/color/${tech}.png`}
                alt={`${tech} logo`}
                className={
                  selectedTech === tech
                    ? ""
                    : "filter grayscale opacity-30 cursor-pointer"
                }
                onClick={() => setSelectedTech(tech)}
              />
            </div>
          ))}
        </div>

        <div className="rounded-b-xl  dark:bg-zinc-900 p-4 bg-zinc-200 mb-4 shadow-lg">
          <p className="font-Montserrat text-lg text-zinc-600 dark:text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700 bg-zinc-100 text-justify p-4 border-zinc-300 border-2 rounded-b-xl">
            {t(selectedTech)}
          </p>
        </div>
        <div>
          <p className="font-Montserrat text-zinc-500 text-center m-auto w-[90%]">
            {t("click")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
