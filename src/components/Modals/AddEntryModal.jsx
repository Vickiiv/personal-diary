import React from "react";
import EntryForm from "../EntryForm";

function AddEntryModal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div>
      <EntryForm closeModal={closeModal} />
    </div>
  );
}

export default AddEntryModal;
