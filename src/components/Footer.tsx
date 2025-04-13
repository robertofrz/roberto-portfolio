function Footer(): React.JSX.Element {
  return (
    <footer className="mt-10 flex justify-center gap-16 w-[96%] text-sm text-gray-400 p-4 h-16 font-Andika">
      <div>
        &copy; <span>{new Date().getFullYear()}</span> Roberto Ferraz.
      </div>
      <div>
        <a
          href="https://github.com/robertofrz/roberto-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-500 "
        >
          Portfolio Source Code
        </a>
      </div>
    </footer>
  );
}

export default Footer;
