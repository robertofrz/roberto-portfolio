import { useState } from "react";
import { useTranslation } from "react-i18next";

function Contact(): React.JSX.Element {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const { t } = useTranslation();

  const copyText = (text: string, type: "email" | "phone") => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if (type === "email") {
          setCopiedEmail(true);
          setTimeout(() => setCopiedEmail(false), 1500);
        } else if (type === "phone") {
          setCopiedPhone(true);
          setTimeout(() => setCopiedPhone(false), 1500);
        }
      })
      .catch((err) => console.error("Error when copying:", err));
  };

  return (
    <div className="w-[85vw] sm:w-[70vw] h-[60vh] sm:h-[100vh] text-center text-zinc-500 mt-20 mb-38 sm:-mb-20 flex flex-col sm:flex-row items-center justify-evenly text-2xl">
      <img
        src="/memojis/call.png"
        alt="making a call memoji"
        className="w-60"
      />
      <div className="flex flex-col items-center gap-10 h-[50%] w-[60%] ">
        <h2 className="text-4xl sm:text-5xl w-[80vw] sm:w-full my-green font-medium font-Sen">
          {t("call")}
        </h2>
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-2 w-full h-[80%]   ">
          <div className="flex flex-col text-lg gap-2 items-center w-[80vw] sm:w-[60%] font-Andika">
            <div>
              <div className=" rounded-xl flex gap-2 shadow shadow-zinc-200  border border-zinc-200  dark:border-zinc-900 dark:shadow-zinc-900">
                <p className="py-1.5 px-3 h-[100%] m-0 border-r border-r-zinc-200 dark:border-r-zinc-900 dark:text-zinc-500 font-Montserrat">
                  robertofrz94@gmail.com
                </p>
                <button
                  className="cursor-pointer"
                  onClick={() => copyText("robertofrz94@gmail.com", "email")}
                >
                  <img
                    src="/icons/copy-icon.png"
                    alt="copy icon"
                    className="pr-1 opacity-30 dark:opacity-50"
                    title={t("email")}
                  />
                </button>
              </div>

              <p
                className={`text-zinc-400 dark:text-zinc-700 text-lg transition-opacity duration-300 ${
                  copiedEmail ? "opacity-100" : "opacity-0"
                }`}
              >
                {t("copied")}
              </p>
            </div>
            <div>
              <div className=" rounded-xl flex gap-2 shadow shadow-zinc-200  border border-zinc-200  dark:border-zinc-900 dark:shadow-zinc-900">
                <p className="py-1.5 px-3 h-[100%] m-0 border-r border-r-zinc-200 dark:border-r-zinc-900 dark:text-zinc-500 font-Montserrat">
                  +5511937274647
                </p>
                <button
                  className="cursor-pointer"
                  onClick={() => copyText("+5511937274647", "phone")}
                >
                  <img
                    src="/icons/copy-icon.png"
                    alt="copy icon"
                    className="pr-1 opacity-30 dark:opacity-50"
                    title={t("phone")}
                  />
                </button>
              </div>
              <p
                className={`text-zinc-400 dark:text-zinc-700 text-lg transition-opacity duration-300 ${
                  copiedPhone ? "opacity-100" : "opacity-0"
                }`}
              >
                {t("copied")}
              </p>
            </div>
          </div>
          <div className="flex justify-around items-center w-[80vw] sm:w-[40%] ">
            <a
              href="https://www.linkedin.com/in/robertofrz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logos/linkedin.png"
                alt="linkedin logo"
                className="opacity-40 dark:invert"
                title={t("linkedin")}
              />
            </a>

            <a
              href="https://github.com/robertofrz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logos/GitHub.png"
                alt="github logo"
                title={t("github")}
                className="opacity-40 dark:invert"
              />
            </a>

            <a href={t("cv")} download className="cursor-pointer">
              <img
                src="/icons/cv.png"
                alt="cv icon"
                className="opacity-40 dark:invert"
                title={t("download")}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
