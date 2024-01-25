import { IconMoon } from "./IconMoon";

export default function ThemeToggle({ isDark, onTheme }) {
  return (
    <div className="flex cursor-pointer w-[25%] justify-center items-center gap-6">
      {/* toggle button */}
      <form
        onClick={onTheme}
        className={`theme-form w-fit flex items-center gap-3.5 p-1 rounded-full  ${
          isDark ? "bg-purple-600" : "bg-gray-500"
        } `}
      >
        <input
          type="radio"
          className={` ${!isDark ? "opacity-100" : "opacity-0"} duration-800 `}
          name="theme"
          checked={`${!isDark}`}
        />
        <input
          type="radio"
          name="theme"
          className={` ${
            isDark ? "opacity-100" : "opacity-0"
          } transition-opacity duration-400 cursor-pointer duration-800`}
          checked={`${isDark}`}
        />
      </form>

      {/* moon theme toggle */}
      <button onClick={onTheme}>
        <IconMoon />
      </button>
    </div>
  );
}
