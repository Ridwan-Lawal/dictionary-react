export default function FontChange({
  isDark,
  onFontFamily,
  onFontsDropdown,
  isDropdownOpen,
}) {
  return (
    <div className=" font-change relative">
      <section
        onClick={onFontsDropdown}
        className="flex gap-12 cursor-pointer items-center justify-between"
      >
        <p className="">Sans Serif</p>
        <img
          src="/icon-arrow-down.svg"
          alt=""
          className={`cursor-pointer ${
            isDropdownOpen && "rotate-180"
          } transtion-transform duration-300 `}
        />
      </section>

      {isDropdownOpen && (
        <ul
          className={` absolute  w-full z-20  mt-3 space-y-2 py-5 px-6 rounded-lg  ${
            isDark
              ? "bg-gray-900 shadow-lg  shadow-purple-700"
              : "bg-white shadow-xl shadow-purple-200"
          } `}
        >
          <li
            onClick={() => onFontFamily("sans")}
            className="font font-sanSerif "
          >
            Sans Serif
          </li>
          <li
            onClick={() => onFontFamily("serif")}
            className="font font-serif "
          >
            Serif
          </li>
          <li onClick={() => onFontFamily("mono")} className="font font-mono ">
            Mono
          </li>
        </ul>
      )}
    </div>
  );
}
