import React from "react";

function AddEntryButton({ openModal }) {
  return (
    <button
      onClick={openModal}
      className="bg-blue-800 text-white font-bold py-2 px-8 rounded-2xl hover:bg-blue-900 hover:text-white cursor-pointer"
    >
      + Neuer Eintrag
    </button>
  );
}

export default AddEntryButton;
