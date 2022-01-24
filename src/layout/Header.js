import React from "react";

export default function Header() {
  return (
    <div className="rounded-lg border-2 border-secondary-headerOutline p-3 flex justify-between items-center gap-20 ">
      <div className="">
        <img className="h-16" src={require("../images/logo.svg")} alt="" />
      </div>
      <div className="rounded bg-white flex flex-col justify-center items-center text-secondary-darkText px-4 py-2">
        <p className="text-sm">SCORE</p>
        <h1 className="text-4xl font-extrabold">10</h1>
      </div>
    </div>
  );
}
