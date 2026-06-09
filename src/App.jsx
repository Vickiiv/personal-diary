import { useState } from "react";
import { useEffect } from "react";
import AddEntryButton from "./components/AddEntryButton";
import AddEntryModal from "./components/Modals/AddEntryModal";

function App() {
  //Formular öffnen
  const [isOpen, setisOpen] = useState(false);

  const openModal = () => setisOpen(true);
  const closeModal = () => setisOpen(false);

  // Entries speichern
  const [entries, setEntries] = useState([]);

  useEffect(() => {
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
