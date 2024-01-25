import ThemeToggle from "./ThemeToggle";

export default function NavBar({ isDark, children, onTheme }) {
  return (
    <nav
      className={`${isDark && "text-white"} flex  justify-between items-center`}
    >
      <div
        className={`flex ${
          isDark && "border-gray-700"
        } border-r w-[80%] justify-between pr-6 items-center py-2.5`}
      >
        <section>
          <img src="/logo.svg" alt="" />
        </section>
        {children}
      </div>

      <ThemeToggle isDark={isDark} onTheme={onTheme} />
    </nav>
  );
}
