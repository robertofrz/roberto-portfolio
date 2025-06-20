import { useTranslation } from "react-i18next";

function Footer(): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <footer className="bottom-0 mt-10 flex justify-center items-center gap-10 w-[100vw] text-sm text-zinc-500 p-4 h-17 font-Montserrat">
      <div>
        &copy; <span>{new Date().getFullYear()}</span> Roberto Ferraz.
      </div>
      <div>
        <a
          href="https://github.com/robertofrz/roberto-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600 "
        >
          {t("repository")}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
