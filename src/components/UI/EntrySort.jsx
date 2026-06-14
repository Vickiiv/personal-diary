import { useEntriesContext } from "../../context/EntriesContext";

function EntrySort() {
  const { sortMode, setSortMode } = useEntriesContext();

  const buttonClass = (mode) =>
    `cursor-pointer font-bold py-1 px-4 rounded-xl ${
      sortMode === mode
        ? "bg-taupe-700 text-amber-50"
        : "bg-amber-50 text-taupe-700"
    }`;

  return (
    <div className="flex gap-2 justify-end mx-20 mt-30">
      <div className="flex bg-amber-50 shadow-md border-taupe-700 rounded-2xl p-1">
        <button
          onClick={() => setSortMode("newest")}
          className={buttonClass("newest")}
        >
          Neuste
        </button>
        <button
          onClick={() => setSortMode("oldest")}
          className={buttonClass("oldest")}
        >
          Älteste
        </button>
      </div>
    </div>
  );
}

export default EntrySort;
