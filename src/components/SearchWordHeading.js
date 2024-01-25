import { useEffect, useRef } from "react";
import { IconPlay } from "./IconPlay";
import { useVoiceOver } from "./useVoiceOver";

export function SearchWordHeading({ isDark, wordData }) {
  const imgElSelect = useVoiceOver(
    wordData?.phonetics?.at(0)?.audio || wordData?.phonetics?.at(1)?.audio
  );

  const wordPhonetic = wordData?.phonetics
    ?.filter((phonetic) => phonetic.text)
    .at(0)?.text;

  return (
    <div className="flex mt-7 md:mt-9 justify-between items-center">
      <div className="space-y-1.5 md:space-y-2.5">
        <p
          className={` ${
            isDark ? "text-white" : "text-slate-900"
          } text-[32px] font-bold md:text-5xl transition-colors duration-1000`}
        >
          {wordData?.word}
        </p>
        <p className="text-purple-600 text-lg md:text-2xl transition-colors duration-1000">
          {wordPhonetic}
        </p>
      </div>

      {/* image to click for voice over */}
      <div>
        <button ref={imgElSelect} className="cursor-pointer">
          <IconPlay />
        </button>
      </div>
    </div>
  );
}
