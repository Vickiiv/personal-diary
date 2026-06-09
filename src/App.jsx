import { useState } from "react";
import AddEntryButton from "./components/AddEntryButton";
import AddEntryModal from "./components/Modals/AddEntryModal";

function App() {
  //Formular öffnen
  const [isOpen, setisOpen] = useState(false);

  const openModal = () => setisOpen(true);
  const closeModal = () => setisOpen(false);

  return (
    <>
      <AddEntryButton openModal={openModal} />
      <AddEntryModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export default App;
