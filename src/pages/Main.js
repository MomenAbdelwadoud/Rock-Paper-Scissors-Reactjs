import React from "react";
import Header from "../layout/Header";
import Circle from "../components/Circle";
import "../index.css";
import Rules from "../components/Rules";
import { ChoiceContext } from "../context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const context = useContext(ChoiceContext);
  const navigate = useNavigate();

  // when user choose rock/paper/scissors
  const onChoose = (target) => {
    context.choose(target);
    navigate("playing", { replace: true });
  };

  // Passing the corresponding target to the above function
  function scissors() {
    onChoose("scissors");
  }
  function paper() {
    onChoose("paper");
  }
  function rock() {
    onChoose("rock");
  }
  return (
    <div className="flex flex-col justify-evenly items-center w-full lg:p-2">
      <header>
        <Header />
      </header>
      <section className="flex flex-col items-center justify-between relative my-28">
        <div className="absolute p-6 top-8 -z-10">
          <img src={require("../images/bg-triangle.svg")} alt="" />
        </div>
        <div className="flex justify-between gap-8 lg:gap-16 z-10">
          <button onClick={paper}>
            <Circle target="paper" />
          </button>
          <button onClick={scissors}>
            <Circle target="scissors" />
          </button>
        </div>
        <div className="mt-10 z-10">
          <button onClick={rock}>
            <Circle target="rock" />
          </button>
        </div>
      </section>

      <Rules></Rules>
    </div>
  );
}
