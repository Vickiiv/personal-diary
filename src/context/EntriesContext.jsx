import { createContext, useContext, useState, useMemo } from "react";
import { useEntries } from "../hooks/useEntries";
import { useEntryModal } from "../hooks/useEntryModal";

const EntriesContext = createContext(null);

export function EntriesProvider({ children }) {
  const entriesApi = useEntries();
  const modal = useEntryModal();
  const [sortMode, setSortMode] = useState("newest");

  const sortedEntries = useMemo(() => {
    return [...entriesApi.entries].sort((a, b) =>
      sortMode === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date),
    );
  }, [entriesApi.entries, sortMode]);

  const value = {
    ...entriesApi,
    ...modal,
    sortMode,
    setSortMode,
    sortedEntries,
  };

  return (
    <EntriesContext.Provider value={value}>{children}</EntriesContext.Provider>
  );
}

export function useEntriesContext() {
  const ctx = useContext(EntriesContext);
  if (!ctx)
    throw new Error(
      "useEntriesContext muss innerhalb von EntriesProvider stehen",
    );
  return ctx;
}
