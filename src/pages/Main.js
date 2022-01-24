import React from "react";
import Header from "../layout/Header";
import Circle from "../components/Circle";
import "../index.css";
import Rules from "../components/Rules";

export default function Main() {
  return (
    <div className="flex flex-col justify-evenly items-center w-full">
      <header>
        <Header />
      </header>
      <section className="flex flex-col items-center justify-between relative my-28">
        <div className="absolute p-6 top-8 -z-10">
          <img src={require("../images/bg-triangle.svg")} alt="" />
        </div>
        <div className="flex justify-between gap-8 z-10">
          <Circle color1="paperGrad" color2="paperGradTo" target="paper" />
          <Circle
            color1="scissorsGrad"
            color2="scissorsGradTo"
            target="scissors"
          />
        </div>
        <div className="mt-10 z-10">
          <Circle color1="rockGrad" color2="rockGradTo" target="rock" />
        </div>
      </section>

      <Rules></Rules>
    </div>
  );
}
