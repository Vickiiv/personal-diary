import EntryCard from "./EntryCard";
import { useEntriesContext } from "../../context/EntriesContext";

function EntryList() {
  const { sortedEntries } = useEntriesContext();

  if (sortedEntries.length === 0) {
    return (
      <div className="flex justify-center text-taupe-500 m-20">
        <p>Keine Einträge vorhanden</p>
      </div>
    );
  }

  return (
    <div className="my-20 mx-20 flex flex-col gap-2">
      {sortedEntries.map((entry) => (
        <EntryCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

export default EntryList;
