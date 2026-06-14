import EntryForm from "./EntryForm";
import { useEntriesContext } from "../../context/EntriesContext";

function AddEntryModal() {
  const { isOpen } = useEntriesContext();

  if (!isOpen) return null;

  return <EntryForm />;
}

export default AddEntryModal;
