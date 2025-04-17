import { useTranslation } from "react-i18next";

function Footer(): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <footer className="mt-10 flex justify-center gap-16 w-[96%] text-sm text-zinc-500 p-4 h-16 font-Andika">
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
          Portfolio {t("repository")}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
