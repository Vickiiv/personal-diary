import React from "react";

function AddEntryButton({ openModal }) {
  return (
    <button
      onClick={openModal}
      className="bg-gray-400 py-2 px-5 rounded-2xl hover:bg-gray-700 hover:text-white cursor-pointer"
    >
      + Neu
    </button>
  );
}

export default AddEntryButton;
