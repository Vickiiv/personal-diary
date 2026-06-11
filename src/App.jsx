import { useState, useEffect } from "react";
import Header from "./layouts/Header";
import MainLayout from "./layouts/MainLayout";
import Footer from "./layouts/Footer";

function App() {
  //Formular öffnen
  const [isOpen, setisOpen] = useState(false);

  // const openModal = () => setisOpen(true);
  // const closeModal = () => setisOpen(false);

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

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  // Eintrag löschen
  const deleteEntry = (id) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  // Eintrag bearbeiten
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const openCreateModal = () => {
    setSelectedEntry(null);
    setIsEditMode(false);
    setisOpen(true);
  };

  const openEditModal = (entry) => {
    setSelectedEntry(entry);
    setIsEditMode(true);
    setisOpen(true);
  };

  const closeModal = () => setisOpen(false);

  return (
    <>
      <Header openModal={openCreateModal} />
      <MainLayout
        setSortMode={setSortMode}
        isOpen={isOpen}
        closeModal={closeModal}
        setEntries={setEntries}
        entries={entries}
        sortedEntries={sortedEntries}
        deleteEntry={deleteEntry}
        openEditModal={openEditModal}
        selectedEntry={selectedEntry}
        isEditMode={isEditMode}
      />

      <Footer />
    </>
  );
}

export default App;
