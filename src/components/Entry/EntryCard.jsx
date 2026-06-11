import React, { useState } from "react";

function EntryCard({ entry, deleteEntry, openEditModal }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const date = new Date(entry.date);
  const expandSwitch = () => setIsExpanded((isExpanded) => !isExpanded);

  const formattedDate = `${String(date.getDate()).padStart(2, "0")}.${date.toLocaleString(
    "de-DE",
    {
      month: "long",
    },
  )}.${date.getFullYear()}`;

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl shadow-xl border-2 border-gray-100 bg-white mb-4">
      <div className="">
        {entry.picture && (
          <img
            src={entry.picture}
            alt={entry.title}
            className="w-full h-56 object-cover object-center rounded-t-lg mb-3"
          />
        )}
      </div>
      <div>
        <div className="px-4 pt-4 pb-2">
          <p className="font-mono">{formattedDate}</p>
          <h2 className="font-sans font-bold text-stone-800 text-xl">
            {entry.title}
          </h2>
          <div className="flex justify-end">
            <button
              onClick={expandSwitch}
              className="cursor-pointer hover:text-taupe-700 "
            >
              {isExpanded ? "▲" : "▼"}
            </button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="px-4">
          <div className="border-t-2 border-gray-300 py-4">
            <p className="break-normal whitespace-pre-wrap font-sans text-stone-500">
              {entry.content}
            </p>
          </div>

          <div className="flex justify-end border-t-2 border-gray-300  py-2">
            <button
              onClick={() => openEditModal(entry)}
              className="cursor-pointer hover:bg-gray-200 rounded-xl px-2 py-1 "
            >
              Bearbeiten
            </button>
            <button
              onClick={() => {
                if (
                  window.confirm("Willst du diesen Eintrag wirklich löschen?")
                )
                  deleteEntry(entry.id);
              }}
              className="cursor-pointer hover:bg-gray-200 rounded-xl px-2 py-1 "
            >
              Löschen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EntryCard;
