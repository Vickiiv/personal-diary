import React from "react";
import EntryForm from "../EntryForm";

function AddEntryModal({ isOpen, closeModal, setEntries }) {
  if (!isOpen) return null;

  return (
    <div>
      <EntryForm closeModal={closeModal} setEntries={setEntries} />
    </div>
  );
}

export default AddEntryModal;
