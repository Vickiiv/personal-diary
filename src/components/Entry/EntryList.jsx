import EntryCard from "./EntryCard";
import { useEntriesContext } from "../../context/EntriesContext";

function EntryList() {
  const { sortedEntries } = useEntriesContext();

  if (sortedEntries.length === 0) {
    return (
      <div className="flex justify-center m-20">
        <p>Keine Einträge vorhanden</p>
      </div>
    );
  }

  return (
    <div className="sm:mx-20 my-10 ml-6 mr-15 flex flex-col gap-2">
      {sortedEntries.map((entry) => (
        <EntryCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

export default EntryList;
