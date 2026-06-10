import React from "react";
import AddEntryButton from "../components/UI/AddEntryButton";

function Header({ openModal }) {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between   bg-white/50 backdrop-blur-xs border-b border-white/30 shadow-md">
      <div className="flex gap-2 ">
        <img
          src="public/assets/pencilandbook_black.png"
          alt="logo"
          className="py-2 px-2"
        />
        <div className="flex flex-col justify-center">
          <h1 className="font-bold">Mein Tagebuch</h1>
          <p className="">Placholder</p>
        </div>
      </div>
      <div className="py-5 px-6">
        <AddEntryButton openModal={openModal} />
      </div>
    </header>
  );
}

export default Header;
