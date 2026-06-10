import React from "react";
import EntryCard from "./EntryCard";

function EntryList({ entries }) {
  return (
    <div className="my-20 mx-20 flex flex-col ">
      {entries.map((entry) => (
        <EntryCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

export default EntryList;
