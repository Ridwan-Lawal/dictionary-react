function Error({ isDark }) {
  return (
    <div className={`text-center mt-28 ${isDark && "text-white"}`}>
      <p className="text-4xl">😕</p>
      <p className="text-xl font-medium mt-8">No Definitions Found</p>
      <p className="mt-4">
        Sorry pal, we couldn't find definitions for the word you were looking
        for.
      </p>
    </div>
  );
}

export default Error;
