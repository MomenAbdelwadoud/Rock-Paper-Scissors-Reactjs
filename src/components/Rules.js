import React from "react";
import { useState } from "react";
import "../index.css";

// This component contains the rules button + rules component
export default function Rules() {
  // opening & closing the rules
  const [isHidden, setIsHidden] = useState(true);
  function closeRules() {
    setIsHidden(true);
  }
  function openRules() {
    setIsHidden(false);
  }

  return (
    <div>
      <footer className="fixed bottom-20 lg:bottom-10 right-1/2 lg:right-10 transform translate-x-1/2 lg:translate-x-0">
        <button
          onClick={openRules}
          className="rounded-lg border border-white px-12 py-3 text-lg hover:bg-white hover:text-secondary-darkText transition ease"
        >
          RULES
        </button>
      </footer>
      <article
        className={`flex flex-col bg-white py-28 px-6 lg:p-5  w-full h-full lg:w-1/3 lg:h-1/2 fixed top-0 left-0 lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 items-center lg:items-baseline gap-36 lg:gap-8 ${
          isHidden ? "hidden" : "block"
        } lg:rounded lg:shadow-2xl`}
      >
        <h1 className="text-3xl text-secondary-darkText font-extrabold">
          RULES
        </h1>
        <img
          className="lg:w-80 lg:mx-auto"
          src={require("../images/image-rules.svg")}
          alt=""
        />
        <button
          className="lg:absolute lg:top-6 lg:right-6"
          onClick={closeRules}
        >
          <img className="" src={require("../images/icon-close.svg")} alt="" />
        </button>
      </article>
    </div>
  );
}
