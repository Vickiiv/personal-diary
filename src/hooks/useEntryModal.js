import { useState } from "react";

export function useEntryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const openCreate = () => {
    setSelectedEntry(null);
    setIsOpen(true);
  };

  const openEdit = (entry) => {
    setSelectedEntry(entry);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const isEditMode = Boolean(selectedEntry);

  return { isOpen, selectedEntry, isEditMode, openCreate, openEdit, close };
}
