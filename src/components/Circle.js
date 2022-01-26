import React from "react";
import "../index.css";

export default function Circle({ target, isWinner }) {
  const colors = {
    scissors: ["scissorsGrad", "scissorsGradTo"],
    rock: ["rockGrad", "rockGradTo"],
    paper: ["paperGrad", "paperGradTo"],
  };
  const figures = {
    scissors: "icon-scissors.svg",
    rock: "icon-rock.svg",
    paper: "icon-paper.svg",
  };

  if (target === "placeholder") {
    return (
      <div
        className={`p-3 w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-transparent`}
      >
        <div className="rounded-full bg-secondary-bgGrad p-5 min-h-full"></div>
      </div>
    );
  } else {
    return (
      <div
        className={`p-3 lg:p-4 w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-b from-primary-${
          colors[target][0]
        } to-primary-${colors[target][1]} shadow-black shadow-xl ${
          isWinner ? "shadow-winner" : ""
        }`}
      >
        <div className="rounded-full bg-white p-5  min-h-full flex items-center justify-center shadow-circle shadow-black">
          <img src={require(`../images/${figures[target]}`)} alt="" />
        </div>
      </div>
    );
  }
}
