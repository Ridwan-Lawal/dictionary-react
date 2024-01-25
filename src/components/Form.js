import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

export function Form({ isDark, value, onChange }) {
  const selectForm = useRef(null);
  const [isFocus, setIsFocus] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(function () {
    const formEl = selectForm.current;

    function handleFocusBlur(e) {
      setIsFocus((curBool) => !curBool);
    }

    formEl.addEventListener("focus", handleFocusBlur);
    formEl.addEventListener("blur", handleFocusBlur);

    // cleanup function that cancels the event
    return () => {
      formEl.removeEventListener("focus", handleFocusBlur);
      formEl.removeEventListener("blur", handleFocusBlur);
    };
  }, []);

  return (
    <form
      // onFocus={handleFocus}
      action=""
      onSubmit={handleSubmit}
      className={` ${
        isFocus && "border-2 border-purple-600"
      } rounded-lg mt-10 px-6 items-center flex ${
        isDark ? "bg-gray-900" : "bg-purple-50 "
      } transition-colors duration-1000`}
    >
      <input
        type="text"
        ref={selectForm}
        value={value}
        onChange={onChange}
        placeholder="Search for any word..."
        className={`w-full focus:outline-none   py-3.5 font-medium bg-inherit ${
          isDark ? "text-white" : "text-slate-900"
        }  placeholder:font-medium`}
      />

      <button>
        <CiSearch className="text-purple-600 text-[28px]" />
      </button>
    </form>
  );
}
