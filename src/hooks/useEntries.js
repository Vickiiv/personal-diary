import { useState, useEffect } from "react";

export function useEntries() {
  const [entries, setEntries] = useState(() => {
    const stored = localStorage.getItem("entries");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) =>
    setEntries((prev) => [{ ...entry, id: crypto.randomUUID() }, ...prev]);

  const updateEntry = (id, changes) =>
    setEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...changes } : e)),
    );

  const deleteEntry = (id) =>
    setEntries((prev) => prev.filter((e) => e.id !== id));

  return { entries, addEntry, updateEntry, deleteEntry };
}
