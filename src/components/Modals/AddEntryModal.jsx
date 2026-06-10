import React from "react";
import EntryForm from "../EntryForm";

function AddEntryModal({ isOpen, closeModal, setEntries, entries }) {
  if (!isOpen) return null;

  return (
    <div>
      <EntryForm
        closeModal={closeModal}
        setEntries={setEntries}
        entries={entries}
      />
    </div>
  );
}

export default AddEntryModal;
