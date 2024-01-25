import { GoDotFill } from "react-icons/go";

export function WordMeaning({
  wordType = "word ",
  isDark,
  wordData,
  defintionType,
}) {
  return (
    <div
      className={`mt-7 ${
        isDark && "text-white"
      } transition-colors duration-1000`}
    >
      {/* word type heading */}
      <div className="flex gap-9 items-center">
        <p className="font-bold  italic lowercase text-lg">{wordType}</p>
        <p
          className={` ${
            isDark && "border-gray-800"
          } border-b w-[86%] transition-colors duration-1000`}
        ></p>
      </div>

      {/* meanings */}

      <div className="mt-5">
        <p className="text-[17px]">Meaning</p>

        <ul className="mt-3 space-y-3.5">
          {wordData?.meanings
            ?.at(defintionType)
            ?.definitions.map((definition, i) => (
              <Definition definition={definition} key={i} />
            ))}
        </ul>
      </div>
    </div>
  );
}

function Definition({ definition }) {
  return (
    <li className="flex  gap-4">
      <section>
        <GoDotFill className="text-purple-600 text-[10px] mt-1 rounded-full" />
      </section>{" "}
      <span className="flex flex-col gap-2.5">
        {/* definition */}
        <span>{definition.definition}</span>

        {/* definiton example */}
        {definition?.example && (
          <span className="text-gray-400 text-[15px]">
            {definition?.example}
          </span>
        )}

        {/* definition synonyms */}
        {definition?.synonyms.length > 0 && (
          <span className="flex gap-2 items-center text-[15px] text-gray-400 ">
            Synonyms{" "}
            <span className="text-purple-600 ">
              {definition?.synonyms.join(" ")}
            </span>
          </span>
        )}
      </span>
    </li>
  );
}
