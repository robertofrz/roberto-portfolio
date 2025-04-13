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
    <div
      id="contact"
      className="w-[95vw] sm:w-[90vw] h-[80vh] sm:h-[80vh] text-center font-Rosehot text-gray-500 mt-60 mb-20 flex flex-col sm:flex-row items-center justify-evenly text-2xl "
    >
      <img src="/memojis/call.png" alt="call memoji" className="w-60" />
      <div className="flex flex-col items-center gap-10 h-[50%] w-[60%] ">
        <h2 className="text-4xl sm:text-6xl w-[80vw] sm:w-full my-green">
          {t("call")}
        </h2>
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-10 w-full h-[80%]   ">
          <div className="flex flex-col text-xl gap-2 items-center w-[80vw] sm:w-[60%] font-Andika">
            <div>
              <div className=" rounded-xl flex gap-2 shadow shadow-gray-200  border border-gray-200">
                <p className="p-1.5 h-[100%] m-0 border-r border-r-gray-200">
                  robertofrz94@gmail.com
                </p>
                <button
                  className="cursor-pointer"
                  onClick={() => copyText("robertofrz94@gmail.com", "email")}
                >
                  <img
                    src="/icons/copy-icon.png"
                    alt="copy icon"
                    className="pr-1 opacity-30"
                    title={t("email")}
                  />
                </button>
              </div>

              <p
                className={`text-gray-400 text-lg transition-opacity duration-300 ${
                  copiedEmail ? "opacity-100" : "opacity-0"
                }`}
              >
                {t("copied")}
              </p>
            </div>
            <div>
              <div className=" rounded-xl flex gap-2 shadow shadow-gray-200 border border-gray-200">
                <p className="p-1.5 h-[100%] m-0 border-r border-r-gray-200">
                  +5511937274647
                </p>
                <button
                  className="cursor-pointer"
                  onClick={() => copyText("+5511937274647", "phone")}
                >
                  <img
                    src="/icons/copy-icon.png"
                    alt="copy icon"
                    className="pr-1 opacity-30"
                    title={t("phone")}
                  />
                </button>
              </div>
              <p
                className={`text-gray-400 text-lg transition-opacity duration-300 ${
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
                className="opacity-40"
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
                className="opacity-40"
              />
            </a>

            <a href="/cv/codeHire.pdf" download className="cursor-pointer">
              <img
                src="/icons/cv.png"
                alt="cv icon"
                className="opacity-40"
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
