import React from "react";
import "../index.css";

// The Component used to render the circles
export default function Circle({ target, isWinner }) {
  // object containing custom color configs for TailwindCSS
  const colors = {
    scissors: ["scissorsGrad", "scissorsGradTo"],
    rock: ["rockGrad", "rockGradTo"],
    paper: ["paperGrad", "paperGradTo"],
  };

  // Path of each icon
  const figures = {
    scissors: "icon-scissors.svg",
    rock: "icon-rock.svg",
    paper: "icon-paper.svg",
  };

  // Render an empty circle for short time first
  if (target === "placeholder") {
    return (
      <div
        className={`p-3 w-28 h-28 md:w-32 md:h-32 rounded-full bg-transparent`}
      >
        <div className="rounded-full bg-secondary-bgGrad p-5 min-h-full"></div>
      </div>
    );
  } else {
    // The component takes the target and render the corresponding circle
    return (
      <div
        className={`p-3 md:p-4 w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-b from-primary-${
          colors[target][0]
        } to-primary-${colors[target][1]} ${
          isWinner ? "shadow-winner" : "" //winner shadow is a circular shadow around the circle(check css configs)
        }`}
      >
        <div className="rounded-full bg-white md:p-5 md:px-2 min-h-full flex items-center justify-center shadow-circle shadow-black">
          <img src={require(`../images/${figures[target]}`)} alt="" />
        </div>
      </div>
    );
  }
}
