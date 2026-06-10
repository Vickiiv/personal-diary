import React from "react";

function EntryCard({ entry }) {
  return (
    <div className="border rounded-xl p-4 shadow bg-white mb-4">
      {entry.picture && (
        <img
          src={entry.picture}
          alt={entry.title}
          className="w-full h-48 object-cover rounded mt-2 mb-2"
        />
      )}
      <p>{entry.date}</p>
      <h2 className="text-xl font-bold">{entry.title}</h2>

      <div className="border-t-2 pt-2">
        <p className="break-words">{entry.content}</p>
      </div>
    </div>
  );
}

export default EntryCard;
