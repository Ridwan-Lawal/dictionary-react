export function Synonyms({ isDark, wordData }) {
  return (
    <div className="flex gap-7 mt-7 items-center ">
      <p className={` ${isDark ? "text-gray-400" : "text-gray-700"} `}>
        Synonyms
      </p>
      <ul className="text-purple-600 items-center flex gap-4">
        {wordData?.meanings
          ?.at(0)
          ?.synonyms.slice(0, 4)
          .map((synonym, i) => (
            <li key={i}>{synonym}</li>
          ))}
      </ul>
    </div>
  );
}
