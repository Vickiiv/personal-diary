import React from "react";
import EntryForm from "./EntryForm";

function AddEntryModal({
  isOpen,
  closeModal,
  setEntries,
  entries,
  selectedEntry,
  isEditMode,
}) {
  if (!isOpen) return null;

  return (
    <div>
      <EntryForm
        closeModal={closeModal}
        setEntries={setEntries}
        entries={entries}
        selectedEntry={selectedEntry}
        isEditMode={isEditMode}
      />
    </div>
  );
}

export default AddEntryModal;
