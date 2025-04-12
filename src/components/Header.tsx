import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Header(): React.JSX.Element {
  const { t, i18n } = useTranslation();

  function changeLanguage(event: React.MouseEvent<HTMLButtonElement>) {
    const lang = event.currentTarget.value;
    i18n.changeLanguage(lang);
  }

  return (
    <header className="flex justify-between fixed w-[96%] my-green p-4 h-16 font-Rosehot z-10 backdrop-blur-sm bg-white/5">
      <div className="my-green">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          value="en"
          className="text-xl cursor-pointer mr-4"
          onClick={changeLanguage}
        >
          EN
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          value="pt"
          className="text-xl cursor-pointer"
          onClick={changeLanguage}
        >
          PT
        </motion.button>
      </div>
      <nav className="flex justify-end items-center my-green gap-4 -mr-3">
        <motion.a
          href="#projects"
          className="text-xl cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {t("projects")}
        </motion.a>
        <motion.a
          href="#aboutMe"
          className="text-xl cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {t("aboutMe")}
        </motion.a>
        <motion.a
          href="#contact"
          className="text-xl cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {t("contact")}
        </motion.a>
      </nav>
    </header>
  );
}
export default Header;
