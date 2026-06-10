import React from "react";
import EntryCard from "./EntryCard";

function EntryList({ sortedEntries }) {
  return (
    <div className="my-20 mx-20 flex flex-col gap-2">
      {sortedEntries.map((entry) => (
        <EntryCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

export default EntryList;
