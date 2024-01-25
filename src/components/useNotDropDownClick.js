import { useEffect, useRef } from "react";

export function useNotDropDownClick() {
  const selectEl = useRef(null);
  useEffect(function () {
    const appEl = selectEl.current;
    function handleAppClick(e) {
      if (e.target.className !== "font-change") {
        dispatch({ type: "notADropDownClick" });
      }
    }

    appEl.addEventListener("click", handleAppClick);

    return () => {
      appEl.removeEventListener("click", handleAppClick);
    };
  }, []);
}
