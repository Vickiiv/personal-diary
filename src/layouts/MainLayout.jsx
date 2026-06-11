import React from "react";
import EntrySort from "../components/UI/EntrySort";
import AddEntryModal from "../components/Form/AddEntryModal";
import EntryList from "../components/Entry/EntryList";

function MainLayout({
  setSortMode,
  isOpen,
  closeModal,
  setEntries,
  entries,
  sortedEntries,
  deleteEntry,
  openEditModal,
  selectedEntry,
  isEditMode,
}) {
  return (
    <main>
      <EntrySort setSortMode={setSortMode} />
      <AddEntryModal
        isOpen={isOpen}
        closeModal={closeModal}
        setEntries={setEntries}
        entries={entries}
        selectedEntry={selectedEntry}
        isEditMode={isEditMode}
      />
      <EntryList
        sortedEntries={sortedEntries}
        deleteEntry={deleteEntry}
        openEditModal={openEditModal}
      />
    </main>
  );
}

export default MainLayout;
