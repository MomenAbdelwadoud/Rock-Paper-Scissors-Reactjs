import React from "react";
import { useState } from "react";
import "../index.css";

export default function Rules() {
  const [isHidden, setIsHidden] = useState(true);
  function closeRules() {
    setIsHidden(true);
  }
  function openRules() {
    setIsHidden(false);
  }
  return (
    <div>
      <footer className="fixed bottom-20 left-1/2 transform -translate-x-1/2">
        <button
          onClick={openRules}
          className="rounded-lg border border-white px-12 py-3 text-lg hover:bg-white hover:text-secondary-darkText transition ease"
        >
          RULES
        </button>
      </footer>
      <article
        className={` flex flex-col bg-white py-28 px-6 w-full h-full fixed top-0 left-0 z-20 items-center gap-36 ${
          isHidden ? "hidden" : "block"
        } transition ease 1s`}
      >
        <h1 className="text-3xl text-secondary-darkText font-extrabold">
          RULES
        </h1>
        <img className="" src={require("../images/image-rules.svg")} alt="" />
        <button onClick={closeRules}>
          <img className="" src={require("../images/icon-close.svg")} alt="" />
        </button>
      </article>
    </div>
  );
}
