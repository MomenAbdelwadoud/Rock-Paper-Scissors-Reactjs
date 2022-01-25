import React from "react";
import Circle from "../components/Circle";
import Rules from "../components/Rules";
import Header from "../layout/Header";
import { useContext, useEffect, useState } from "react";
import { ChoiceContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
export default function Playing() {
  function generateRandom() {
    return Math.floor(Math.random() * 3);
  }

  const context = useContext(ChoiceContext);
  const choice = context.choice;

  function calculate(user, com) {
    let result;
    if (user === "paper") {
      switch (com) {
        case "rock":
          result = "win";
          break;
        case "scissors":
          result = "lose";
          break;
        default:
          result = "draw";
          break;
      }
    }
    if (user === "scissors") {
      switch (com) {
        case "paper":
          result = "win";
          break;
        case "rock":
          result = "lose";
          break;
        default:
          result = "draw";
          break;
      }
    }
    if (user === "rock") {
      switch (com) {
        case "scissors":
          result = "win";
          break;
        case "paper":
          result = "lose";
          break;
        default:
          result = "draw";
          break;
      }
    }
    return result;
  }

  const choices = ["scissors", "paper", "rock"];
  const [com, setCom] = useState("");
  const [result, setResult] = useState("");

  const play = () => {
    setCom(choices[generateRandom()]);
    setResult(calculate(choice, com));
    console.log(result);
  };

  useEffect(() => {
    play();
    return () => {
      setResult("");
      context.choose("");
    };
  }, []);

  const navigate = useNavigate();
  const playAgain = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col justify-evenly items-center w-full gap-16">
      <Header />
      <section className="flex justify-between p-8 gap-10">
        <div className="flex flex-col items-center justify-between">
          <figure>
            <Circle target={choice} isWinner={result === "win"} />
          </figure>
          <p className="font-bold text-sm mt-4 font-primary tracking-wider">
            YOU PICKED
          </p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <figure>
            <Circle target={com} isWinner={result === "lose"} />
          </figure>
          <p className="font-bold text-sm mt-4 font-primary tracking-wider">
            THE HOUSE PICKED
          </p>
        </div>
      </section>
      <footer className="flex flex-col items-center">
        <section className="font-primary flex flex-col justify-between items-center gap-6">
          <h1 className="text-6xl uppercase">
            {result === "draw" ? "DRAW" : `YOU ${result}`}
          </h1>
          <button
            onClick={playAgain}
            className="px-20 py-3 border border-white rounded-lg bg-white text-secondary-darkText hover:bg-transparent hover:text-white transition ease"
          >
            PLAY AGAIN
          </button>
        </section>
        <Rules></Rules>
      </footer>
    </div>
  );
}
