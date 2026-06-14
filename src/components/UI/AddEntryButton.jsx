import React from "react";

function AddEntryButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-taupe-700 text-white font-bold py-2 sm:px-8 px-4 rounded-2xl hover:bg-taupe-900 cursor-pointer whitespace-nowrap text-sm sm:text-base"
    >
      + Neuer Eintrag
    </button>
  );
}

export default AddEntryButton;
