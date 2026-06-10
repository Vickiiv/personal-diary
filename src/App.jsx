import { useState } from "react";
import { useEffect } from "react";
import AddEntryButton from "./components/AddEntryButton";
import AddEntryModal from "./components/Modals/AddEntryModal";

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

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
    console.log(entries);
  }, [entries]);

  return (
    <>
      <AddEntryButton openModal={openModal} />
      <AddEntryModal
        isOpen={isOpen}
        closeModal={closeModal}
        setEntries={setEntries}
      />
    </>
  );
}

export default App;
