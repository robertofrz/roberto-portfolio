import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Header(): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detecta o tema salvo ou preferido
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const isDarkMode =
      storedTheme === "dark" || (!storedTheme && systemPrefersDark);

    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  function changeLanguage(event: React.MouseEvent<HTMLButtonElement>) {
    const lang = event.currentTarget.value;
    i18n.changeLanguage(lang);
  }

  function toggleTheme(event: React.ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;
    setIsDark(checked);
    document.documentElement.classList.toggle("dark", checked);
    localStorage.setItem("theme", checked ? "dark" : "light");
  }

  return (
    <header className="flex justify-between fixed w-[96%] text-zinc-500 p-4 h-16 font-Rosehot z-10 backdrop-blur-sm">
      <div className="my-green">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          value="en"
          className="text-xl cursor-pointer mr-4"
          onClick={changeLanguage}
        >
          <img src="/icons/eua-icon.png" alt="eua flag icon" className="w-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          value="pt"
          className="text-xl cursor-pointer"
          onClick={changeLanguage}
        >
          <img
            src="/icons/brazil-icon.png"
            alt="brazil flag icon"
            className="w-6"
          />
        </motion.button>
      </div>
      <div className="flex items-center gap-2">
        <p>{t("light")}</p>

        <label
          htmlFor="dark"
          className="bg-zinc-200 dark:bg-zinc-800 cursor-pointer relative w-10 h-5 rounded-full"
        >
          <input
            type="checkbox"
            id="dark"
            className="sr-only peer"
            checked={isDark}
            onChange={toggleTheme}
          />
          <span className="w-2/5 h-4/5 bg-zinc-400 dark:bg-zinc-500 absolute rounded-full left-1 top-0.5 peer-checked:left-5 transition-all duration-500"></span>
        </label>

        <p>{t("dark")}</p>
      </div>
    </header>
  );
}
export default Header;
