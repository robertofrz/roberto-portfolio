import { useTranslation } from "react-i18next";

function AboutMe(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="w-[90vw] sm:w-[60vw] mb-12 mt-40 flex flex-col items-center m-auto">
      <h2 className="font-Sen my-green text-5xl text-center font-medium mb-8">
        {t("aboutMe")}
      </h2>

      <div className="flex flex-col justify-center items-center  p-6 rounded-xl dark:bg-zinc-900">
        <div className="flex flex-col sm:flex-row justify-center sm:-mb-2 mb-10  items-center gap-8">
          <img
            src="./memojis/meditating.png"
            alt="meditating memoji"
            className="w-55 -mb-4 -mt-6"
          />
          <p className="font-Montserrat text-lg text-zinc-700 dark:text-zinc-400 text-justify">
            {t("personal1")}
          </p>
        </div>
        <div className="flex justify-center flex-col sm:flex-row mb-8 items-center gap-8">
          <p className="order-2 sm:order-1 font-Montserrat text-lg text-zinc-700 dark:text-zinc-400 text-justify mt-4">
            {t("personal2")}
          </p>
          <img
            src="./passport.png"
            alt="image of a laptop and a passport on top of a world map"
            className="w-60 rounded-xl order-1 sm:order-2"
          />
        </div>
        <p className="font-Montserrat text-lg text-zinc-700 dark:text-zinc-400 text-justify">
          {t("personal3")}
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
