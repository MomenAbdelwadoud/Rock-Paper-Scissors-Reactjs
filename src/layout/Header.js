import React, { useContext } from "react";
import { ChoiceContext } from "../context/Context";

export default function Header() {
  // importing context to use score value
  const context = useContext(ChoiceContext);
  return (
    <div className="rounded-lg border-2 border-secondary-headerOutline p-3 flex justify-between items-center gap-32 md:gap-60 ">
      <div className="">
        <img
          className="h-16 md:h-16"
          src={require("../images/logo.svg")}
          alt=""
        />
      </div>
      <div className="rounded bg-white flex flex-col justify-center items-center text-secondary-darkText px-5 md:px-8 py-2 md:py-3">
        <p className="text-sm">SCORE</p>
        <h1 className="text-4xl font-extrabold">{context.score}</h1>
      </div>
    </div>
  );
}
