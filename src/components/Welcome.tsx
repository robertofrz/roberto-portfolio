import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Welcome(): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="w-[85vw] sm:w-[70vw] h-[75vh] mt-20 mb-12 flex justify-center items-center m-auto">
      <motion.div
        initial={{ transform: "translateX(200px)" }}
        animate={{ transform: "translateX(0px)" }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col  -mt-8 sm:flex-row justify-center items-center"
      >
        <img src="/memojis/hello.png" alt="waving memoji" className="w-60 " />
        <div className="w-[70vw] sm:w-[55%] mt-10 sm:mt-25 flex flex-col gap-2 ml-7 ">
          <p className="w-full font-Montserrat text-zinc-500 ">
            {t("welcome1")}
          </p>
          <h1 className="font-Rosehot text-7xl my-green">Roberto Ferraz</h1>
          <p className="font-Montserrat text-zinc-500 ">{t("welcome2")}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Welcome;
