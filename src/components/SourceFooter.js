export function SourceFooter({ isDark }) {
  return (
    <footer
      className={`space-y-1.5 mt-8 border-t pt-5 ${
        isDark && "border-gray-800 "
      } transition-colors duration-1000 `}
    >
      <p
        className={` ${
          isDark && "text-white"
        } text-[17px] transition-colors duration-1000`}
      >
        {" "}
        Source
      </p>
      <p className=" flex gap-2 items-center">
        {" "}
        <a
          className={`${isDark && "text-white"}`}
          href="http://en.wiktionary.org/wiki/keyboard"
        >
          https://en.wiktionary.org/wiki/keyboard
        </a>
        <a
          href="https://en.wiktionary.org/wiki/keyboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon-new-window.svg" alt="" />
        </a>
      </p>
    </footer>
  );
}
