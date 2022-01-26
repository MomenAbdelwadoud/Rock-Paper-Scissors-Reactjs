import React, { useContext } from "react";
import { ChoiceContext } from "../context/Context";

export default function Header() {
  // importing context to use score value
  const context = useContext(ChoiceContext);
  return (
    <div className="rounded-lg border-2 border-secondary-headerOutline p-3 flex justify-between items-center gap-32 lg:gap-60 ">
      <div className="">
        <img
          className="h-16 lg:h-24"
          src={require("../images/logo.svg")}
          alt=""
        />
      </div>
      <div className="rounded bg-white flex flex-col justify-center items-center text-secondary-darkText px-5 lg:px-8 py-2 lg:py-4">
        <p className="text-sm">SCORE</p>
        <h1 className="text-5xl font-extrabold">{context.score}</h1>
      </div>
    </div>
  );
}
