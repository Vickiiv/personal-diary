import React from "react";

function AddEntryButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-taupe-700 text-white font-bold py-2 px-8 rounded-2xl hover:bg-taupe-900 cursor-pointer"
    >
      + Neuer Eintrag
    </button>
  );
}

export default AddEntryButton;
