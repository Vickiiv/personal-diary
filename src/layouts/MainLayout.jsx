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
}) {
  return (
    <main className="">
      <EntrySort setSortMode={setSortMode} />
      <AddEntryModal
        isOpen={isOpen}
        closeModal={closeModal}
        setEntries={setEntries}
        entries={entries}
      />
      <EntryList sortedEntries={sortedEntries} deleteEntry={deleteEntry} />
    </main>
  );
}

export default MainLayout;
