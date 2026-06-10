import React from "react";

function EntrySort({ setSortMode }) {
  return (
    <div className="flex gap-2 justify-end mx-20 mt-25 ">
      <div className="flex  bg-violet-800 rounded-2xl p-1">
        <button
          onClick={() => setSortMode("newest")}
          className="cursor-pointer font-bold bg-violet-800 text-white py-1 px-4 rounded-xl  focus:bg-white focus:text-violet-800 active:bg-violet-600  "
        >
          Neuste
        </button>

        <button
          onClick={() => setSortMode("oldest")}
          className="cursor-pointer font-bold bg-violet-800 text-white py-1 px-4 rounded-xl  focus:bg-white focus:text-violet-800 active:bg-violet-600  "
        >
          Älteste
        </button>
      </div>
    </div>
  );
}

export default EntrySort;
