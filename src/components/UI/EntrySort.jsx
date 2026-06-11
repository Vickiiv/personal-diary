import React from "react";

function EntrySort({ setSortMode }) {
  return (
    <div className="flex gap-2 justify-end mx-20 mt-30 ">
      <div className="flex bg-amber-50  shadow-md border-taupe-700 rounded-2xl p-1">
        <button
          onClick={() => setSortMode("newest")}
          className="cursor-pointer font-bold bg-amber-50 text-taupe-700 py-1 px-4 rounded-xl  focus:bg-taupe-700 focus:text-amber-50 active:bg-taupe-800"
        >
          Neuste
        </button>

        <button
          onClick={() => setSortMode("oldest")}
          className="cursor-pointer font-bold bg-amber-50 text-taupe-700 py-1 px-4 rounded-xl  focus:bg-taupe-700 focus:text-amber-50 active:bg-taupe-800  "
        >
          Älteste
        </button>
      </div>
    </div>
  );
}

export default EntrySort;
