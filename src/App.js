import { Synonyms } from "./components/Synonyms";
import { WordMeaning } from "./components/WordMeaning";
import { Form } from "./components/Form";
import { SearchWordHeading } from "./components/SearchWordHeading";
import { SourceFooter } from "./components/SourceFooter";
import { FaArrowDown } from "react-icons/fa6";
import { useEffect, useReducer, useRef, useState } from "react";
import FontChange from "./components/FontChange";
import NavBar from "./components/NavBar";
import Error from "./components/Error";
import Loader from "./components/Loader";

// Application theme
const appTheme = JSON.parse(localStorage.getItem("themes"));

function reducer(state, action) {
  switch (action.type) {
    case "fontChange":
      return { ...state, fontFamily: action.payload };
    case "dropdown":
      return { ...state, isOpen: !state.isOpen };
    case "notADropDownClick":
      return { ...state, isOpen: false };
    case "theme":
      return { ...state, isDark: !state.isDark };
    case "startLoading":
      return { ...state, isLoading: true };
    case "errMessage":
      return { ...state, error: action.payload };
    case "wordData":
      return { ...state, wordData: action.payload, status: "active" };
    case "endLoading":
      return { ...state, isLoading: false };
    case "searchFormUpdate":
      return { ...state, searchWord: action.payload };
    case "clearError":
      return { ...state, error: "" };
    case "incorrectWord":
      return { ...state, status: "error" };

    default:
      throw new Error("Unknown error");
  }
}

export default function App() {
  const initialState = {
    isDark: appTheme,
    fontFamily: "sans",
    isOpen: false,
    status: "loading",
    wordData: {},
    searchWord: "dictionary",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isDark, fontFamily, isOpen, status, wordData, searchWord } = state;
  const selectEl = useRef(null);

  function handleFontFamily(font) {
    dispatch({ type: "fontChange", payload: font });
  }

  function handleFontsDropdown() {
    dispatch({ type: "dropdown" });
  }

  function handleTheme() {
    dispatch({ type: "theme" });
  }

  function handleSearchWordForm(e) {
    dispatch({ type: "searchFormUpdate", payload: e.target.value });
  }

  // an effect for any click apart from the click on the font-change components
  useEffect(function () {
    const appEl = selectEl.current;
    function handleAppClick(e) {
      if (!e.target.closest(".font-change")) {
        dispatch({ type: "notADropDownClick" });
      }
    }

    appEl.addEventListener("click", handleAppClick);

    return () => {
      appEl.removeEventListener("click", handleAppClick);
    };
  }, []);

  // fetching data from the dictonary api
  useEffect(
    function () {
      const abortController = new AbortController();
      const signal = abortController.signal;
      async function getWord() {
        try {
          const res = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`,
            { signal }
          );
          if (!res.ok) throw new Error("Something went wrong fetching data");
          const [data] = await res.json();
          console.log(data);
          dispatch({ type: "wordData", payload: data });
        } catch (err) {
          if (err.message === undefined)
            dispatch({
              type: "incorrectWord",
            });
          if (err.name === "AbortError") return;
        }
      }

      if (!searchWord) return;
      getWord();

      return () => {
        abortController.abort();
      };
    },
    [searchWord]
  );

  // local storage to store the App theme
  useEffect(
    function () {
      localStorage.setItem("themes", JSON.stringify(isDark));
    },
    [isDark]
  );

  return (
    <div
      ref={selectEl}
      className={`${isDark ? "bg-black" : "bg-white"} ${
        fontFamily === "sans" && "font-sanSerif"
      } ${fontFamily === "serif" && "font-serif"} ${
        fontFamily === "mono" && "font-mono"
      } transition-colors duration-1000 min-h-screen  `}
    >
      <div className="px-8 max-w-3xl mx-auto py-10">
        <NavBar isDark={isDark} onTheme={handleTheme}>
          <FontChange
            isDark={isDark}
            onFontFamily={handleFontFamily}
            isDropdownOpen={isOpen}
            onFontsDropdown={handleFontsDropdown}
          />
        </NavBar>
        <Form
          isDark={isDark}
          value={searchWord}
          onChange={handleSearchWordForm}
        />
        {status === "loading" && <Loader />}

        {status === "error" && <Error isDark={isDark} />}
        {status === "active" && (
          <>
            <SearchWordHeading isDark={isDark} wordData={wordData} />
            <WordMeaning
              wordType="noun"
              isDark={isDark}
              wordData={wordData}
              defintionType={0}
            />
            <Synonyms isDark={isDark} wordData={wordData} />
            <WordMeaning
              wordType="verb"
              isDark={isDark}
              wordData={wordData}
              defintionType={1}
            />
            <SourceFooter isDark={isDark} />
          </>
        )}
      </div>
    </div>
  );
}
