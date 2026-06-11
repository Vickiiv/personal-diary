import React, { useState } from "react";

function EntryCard({ entry }) {
  const date = new Date(entry.date);
  const [isExpanded, setIsExpanded] = useState(false);
  const expandSwitch = () => setIsExpanded((isExpanded) => !isExpanded);

  const formattedDate = `${String(date.getDate()).padStart(2, "0")}.${date.toLocaleString(
    "de-DE",
    {
      month: "long",
    },
  )}.${date.getFullYear()}`;
  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl p-4 shadow-xl border-2 border-gray-100 bg-white mb-4">
      {entry.picture && (
        <img
          src={entry.picture}
          alt={entry.title}
          className="w-full h-56 object-cover object-center rounded-lg mb-3"
        />
      )}
      <p className="font-mono">{formattedDate}</p>
      <h2 className="font-mono text-xl font-bold">{entry.title}</h2>
      <div className="flex justify-end">
        <button onClick={expandSwitch} className="bg-pink-200 cursor-pointer">
          {isExpanded ? "" : ""}
        </button>
      </div>

      {isExpanded && (
        <div>
          <div className="border-t-2 py-4">
            <p className="break-normal whitespace-pre-wrap">{entry.content}</p>
          </div>

          <div className="flex justify-end border-t-2 pt-2">
            <button className="cursor-pointer hover:bg-gray-200 rounded-xl px-2 py-1 ">
              Bearbeiten
            </button>
            <button className="cursor-pointer hover:bg-gray-200 rounded-xl px-2 py-1 ">
              Löschen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EntryCard;
