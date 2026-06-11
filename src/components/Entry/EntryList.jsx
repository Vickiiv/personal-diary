import React from "react";
import EntryCard from "./EntryCard";

function EntryList({ sortedEntries, deleteEntry }) {
  if (sortedEntries.length === 0) {
    return (
      <div className="flex justify-center m-20">
        <p className="">Keine Einträge vorhanden</p>
      </div>
    );
  }
  return (
    <div className="my-20 mx-20 flex flex-col gap-2">
      {sortedEntries.map((entry) => (
        <EntryCard key={entry.id} entry={entry} deleteEntry={deleteEntry} />
      ))}
    </div>
  );
}

export default EntryList;
