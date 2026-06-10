import React from "react";

function EntrySort({ setSortMode }) {
  return (
    <div className="flex gap-2 justify-end mx-20 mt-20">
      <button
        onClick={() => setSortMode("newest")}
        className="bg-amber-200 p-2 rounded-2xl font-bold hover:bg-amber-300"
      >
        Neuste
      </button>

      <button
        onClick={() => setSortMode("oldest")}
        className="bg-amber-200 p-2 rounded-2xl font-bold hover:bg-amber-300"
      >
        Älteste
      </button>
    </div>
  );
}

export default EntrySort;
