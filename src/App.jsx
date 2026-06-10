import { useState } from "react";
import { useEffect } from "react";
import AddEntryButton from "./components/UI/AddEntryButton";
import AddEntryModal from "./components/Form/AddEntryModal";
import EntryList from "./components/Entry/EntryList";
import EntrySort from "./components/UI/EntrySort";

function App() {
  //Formular öffnen
  const [isOpen, setisOpen] = useState(false);

  const openModal = () => setisOpen(true);
  const closeModal = () => setisOpen(false);

  // Entries speichern + LocalStorage
  const [entries, setEntries] = useState(() => {
    const stored = localStorage.getItem("entries");
    return stored ? JSON.parse(stored) : [];
  });

  // entries sortieren
  const [sortMode, setSortMode] = useState("newest");

  const sortedEntries = [...entries].sort((a, b) => {
    if (sortMode === "newest") {
      return new Date(b.date) - new Date(a.date);
    }
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <>
      <AddEntryButton openModal={openModal} />
      <EntrySort setSortMode={setSortMode} />
      <AddEntryModal
        isOpen={isOpen}
        closeModal={closeModal}
        setEntries={setEntries}
        entries={entries}
      />
      <EntryList entries={sortedEntries} />
    </>
  );
}

export default App;
