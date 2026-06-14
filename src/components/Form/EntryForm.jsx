import { useState, useEffect } from "react";
import { useEntriesContext } from "../../context/EntriesContext";

function EntryForm() {
  const { entries, addEntry, updateEntry, selectedEntry, isEditMode, close } =
    useEntriesContext();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [picture, setPicture] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (selectedEntry) {
      setTitle(selectedEntry.title);
      setDate(selectedEntry.date);
      setPicture(selectedEntry.picture || "");
      setContent(selectedEntry.content);
    }
  }, [selectedEntry]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const exists = entries.some(
      (entry) => entry.date === date && entry.id !== selectedEntry?.id,
    );

    if (exists) {
      alert("Für dieses Datum gibt es schon einen Eintrag!");
      return;
    }

    if (isEditMode) {
      updateEntry(selectedEntry.id, { title, date, picture, content });
    } else {
      addEntry({ title, date, picture, content });
    }

    close();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl w-full max-w-xl shadow-2xl"
      >
        <div className="flex justify-between bg-taupe-700 rounded-t-2xl px-5 py-2 border-b-2 border-black/50 shadow-md">
          <h2 className="font-bold text-2xl py-2 text-white">
            {isEditMode ? "Eintrag bearbeiten" : "Neuer Eintrag"}
          </h2>
          <button
            type="button"
            onClick={close}
            className="text-2xl text-gray-200 cursor-pointer rounded-full hover:text-white"
          >
            x
          </button>
        </div>

        <div className="flex flex-col mt-5">
          <label className="mx-5 mb-1 font-bold" htmlFor="title">
            Titel
          </label>
          <input
            type="text"
            id="title"
            placeholder="Titel des Eintrags.."
            className="focus:outline-2 focus:outline-taupe-700 bg-gray-50 border-2 rounded-xl px-2 py-3 mx-5"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="mx-5 mt-5 mb-1 font-bold" htmlFor="date">
            Datum
          </label>
          <input
            type="date"
            id="date"
            className="focus:outline-2 focus:outline-taupe-700 bg-gray-50 border-2 rounded-xl px-2 py-3 mx-5"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label className="mx-5 mt-5 mb-1 font-bold" htmlFor="url">
            Bild-URL (optional)
          </label>
          <input
            type="url"
            id="url"
            placeholder="https://..."
            className="focus:outline-2 focus:outline-taupe-700 bg-gray-50 border-2 rounded-xl px-2 p-3 mx-5"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />

          <label className="mx-5 mt-5 mb-1 font-bold" htmlFor="content">
            Inhalt
          </label>
          <textarea
            id="content"
            placeholder="Was hast du erlebt, gedacht, gefühlt.."
            className="focus:outline-2 focus:outline-taupe-700 bg-gray-50 border-2 rounded-xl px-2 pt-2 pb-20 mx-5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="flex justify-around my-2">
          <button
            type="button"
            onClick={close}
            className="bg-gray-200 py-2 mx-3 px-20 rounded-2xl my-2 hover:bg-gray-300"
          >
            Abbrechen
          </button>
          <button
            type="submit"
            className="bg-taupe-700 text-white py-2 mx-3 px-20 rounded-2xl my-2 hover:bg-taupe-900 cursor-pointer"
          >
            Eintrag speichern
          </button>
        </div>
      </form>
    </div>
  );
}

export default EntryForm;
