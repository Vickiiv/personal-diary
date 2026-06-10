import { useState } from "react";
import Header from "./layouts/Header";
import AddEntryButton from "./components/UI/AddEntryButton";
import AddEntryModal from "./components/Form/AddEntryModal";
import EntryList from "./components/Entry/EntryList";
import EntrySort from "./components/UI/EntrySort";
import MainLayout from "./layouts/MainLayout";

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
      <Header openModal={openModal} />
      <MainLayout
        setSortMode={setSortMode}
        isOpen={isOpen}
        closeModal={closeModal}
        setEntries={setEntries}
        entries={entries}
        sortedEntries={sortedEntries}
      />
      {/* <EntrySort setSortMode={setSortMode} />
      <AddEntryModal
        isOpen={isOpen}
        closeModal={closeModal}
        setEntries={setEntries}
        entries={entries}
      />
      <EntryList sortedEntries={sortedEntries} /> */}
    </>
  );
}

export default App;
