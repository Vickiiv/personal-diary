import React, { useState } from "react";

function EntryForm({ setEntries, closeModal }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });
  const [picture, setPicture] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntries = {
      id: Date.now(),
      title,
      date,
      picture,
      content,
    };

    setEntries((prev) => [newEntries, ...prev]);

    closeModal();
  };

  return (
    <div className="m-50 p-4 rounded-xl border-2">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between px-2">
          <h2 className="font-bold text-2xl py-2">Neuer Eintrag</h2>

          <button
            type="button"
            onClick={closeModal}
            className="rounded-full px-2 text-2xl hover:text-red-700"
          >
            x
          </button>
        </div>

        <div className="flex flex-col">
          {/* Titel */}
          <label className="px-2 font-bold" htmlFor="">
            Titel
          </label>
          <input
            type="text"
            className="bg-gray-50 border-2 rounded px-2 p-3 m-2 "
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Datum */}
          <label className="px-2 font-bold" htmlFor="">
            Datum
          </label>
          <input
            type="date"
            className="bg-gray-50 border-2 rounded px-2 p-3 m-2"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* Bild-URL */}
          <label className="px-2 font-bold" htmlFor="">
            Bild-URL (optional)
          </label>
          <input
            type="url"
            className="bg-gray-50 border-2 rounded px-2 p-3 m-2"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />

          {/* Inhalt */}
          <label className="px-2 font-bold" htmlFor="">
            Inhalt
          </label>
          <textarea
            type="text"
            className="bg-gray-50 border-2 rounded px-2  pt-2 pb-20 m-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="flex justify-center gap-10">
          <button
            type="button"
            onClick={closeModal}
            className="bg-gray-200 py-2  px-5 rounded my-2 hover:bg-gray-300 "
          >
            Abbrechen
          </button>

          <button
            type="submit"
            className="bg-gray-200 py-2  px-5 rounded my-2 hover:bg-gray-300 "
          >
            Eintrag speichern
          </button>
        </div>
      </form>
    </div>
  );
}

export default EntryForm;
