import AddEntryButton from "../components/UI/AddEntryButton";
import { useEntriesContext } from "../context/EntriesContext";

function Header() {
  const { openCreate } = useEntriesContext();

  return (
    <header className="z-30 fixed top-0 left-0 w-full flex items-center justify-between bg-white/50 backdrop-blur-2xl border-b shadow-md">
      <div className="flex gap-2 px-4 sm-px-4">
        <img
          src="/assets/book.png"
          alt="logo"
          className="py-2 px-2 w-14 sm:w-22 "
        />
        <div className="flex flex-col justify-center">
          <h1 className="font-bold sm:text-2xl text-lg text-taupe-700 font-sans">
            Mein Tagebuch
          </h1>
        </div>
      </div>
      <div className="py-5 px-6 sm:py-5 sm:px-6">
        <AddEntryButton onClick={openCreate} />
      </div>
    </header>
  );
}

export default Header;
