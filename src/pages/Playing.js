import React from "react";
import Circle from "../components/Circle";
import Rules from "../components/Rules";
import Header from "../layout/Header";
import { useContext, useEffect, useState } from "react";
import { ChoiceContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

// This is a very long file, I should've broke it into smaller components :)
export default function Playing() {
  // Generate random index as com choice
  const choices = ["scissors", "paper", "rock"];
  function generateRandom() {
    return Math.floor(Math.random() * 3);
  }

  // Getting user choice from the main page
  const context = useContext(ChoiceContext);
  const choice = context.choice;

  // Basic Rock Paper Scissors logic
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

  // Initial value for com choice so a blank circle will show for 1sec and the the result
  let com = "placeholder";
  const [result, setResult] = useState("");
  const [comstate, setComstate] = useState("placeholder"); // used a variable then a state with the var value, using only the state and skipping the var doesn't work (setState takes some time to exec)

  // Triggers after 1sec of showing this page
  const play = () => {
    com = choices[generateRandom()];
    setComstate(com);
    let res = calculate(choice, com);
    setResult(res);
  };

  // Because setResult takes time so change the score after we get the result
  useEffect(() => {
    if (result === "win") {
      context.incScore();
    }
    if (result === "lose") {
      context.decScore();
    }
  }, [result]);

  // useEffect so it executes only when the page is rendered for the first time and wait 1sec to exec just as a cool effect O.O!
  useEffect(() => {
    setTimeout(() => {
      play();
    }, 1000);
  }, []);

  // Play again functionality
  const navigate = useNavigate();
  const playAgain = () => {
    navigate("/", { replace: false });
  };

  return (
    <div className="flex flex-col justify-evenly items-center w-full gap-16 lg:p-2">
      <Header />
      <section className="flex justify-between p-8 gap-10 lg:gap-20">
        <div className="flex flex-col items-center justify-between lg:flex-col-reverse lg:text-xl lg:gap-4">
          <figure>
            {/* Shows cool shadow around the winner */}
            <Circle target={choice} isWinner={result === "win"} />
          </figure>
          <p className="font-bold text-sm mt-4 font-primary tracking-wider">
            YOU PICKED
          </p>
        </div>
        <div className="flex flex-col items-center justify-between lg:flex-col-reverse lg:text-xl lg:gap-4">
          <figure>
            {/* Shows cool shadow around the winner */}
            <Circle target={comstate} isWinner={result === "lose"} />
          </figure>
          <p className="font-bold text-sm mt-4 font-primary tracking-wider">
            THE HOUSE PICKED
          </p>
        </div>
      </section>
      <footer
        className={`${result ? "block" : "hidden"} flex flex-col items-center`}
      >
        {/* Only show footer when we get the result(1sec) */}
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
