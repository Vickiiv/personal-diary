import { useState } from "react";
import { useEntriesContext } from "../../context/EntriesContext";

function EntryCard({ entry }) {
  const { deleteEntry, openEdit } = useEntriesContext();
  const [isExpanded, setIsExpanded] = useState(false);

  const date = new Date(entry.date);
  const formattedDate = `${String(date.getDate()).padStart(2, "0")}.${date.toLocaleString(
    "de-DE",
    { month: "long" },
  )}.${date.getFullYear()}`;

  const handleDelete = () => {
    if (window.confirm("Willst du diesen Eintrag wirklich löschen?")) {
      deleteEntry(entry.id);
    }
  };

  return (
    <div className="w-full rounded-xl shadow-xl border-2 border-gray-100 bg-white mb-4">
      {entry.picture && (
        <img
          src={entry.picture}
          alt={entry.title}
          className="w-full h-56 object-cover object-center rounded-t-lg mb-3"
        />
      )}

      <div className="px-4 pt-4 pb-2">
        <p className="font-mono text-taupe-500 font-bold">{formattedDate}</p>
        <h2 className="font-sans font-bold text-stone-800 text-xl">
          {entry.title}
        </h2>
        <div className="flex justify-end">
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="cursor-pointer hover:text-taupe-700"
          >
            {isExpanded ? "▲" : "▼"}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="px-4">
          <div className="border-t-2 border-gray-300 py-4">
            <p className="break-normal whitespace-pre-wrap font-sans text-stone-500">
              {entry.content}
            </p>
          </div>

          <div className="flex justify-end border-t-2 border-gray-300 gap-2 pt-2 py-3">
            <button
              onClick={() => openEdit(entry)}
              className="cursor-pointer hover:bg-taupe-700 hover:text-white shadow-md rounded-xl px-2 py-1"
            >
              Bearbeiten
            </button>
            <button
              onClick={handleDelete}
              className="cursor-pointer hover:bg-taupe-700 hover:text-white shadow-md rounded-xl px-2 py-1"
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
