import React from "react";

function ScrollToTopBtn() {
  const scrollUpEvent = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="absolute top-27 right-15 ">
      <div className="fixed">
        <button
          onClick={scrollUpEvent}
          className="cursor-pointer hover:bg-blue-200/50 rounded-full shadow-2xl"
        >
          <img src="public/assets/scroll-up.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default ScrollToTopBtn;
