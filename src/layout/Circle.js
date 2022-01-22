import React from "react";
import "../index.css";

export default function Circle(props) {
  function showTarget(target) {
    const targetList = {
      scissors: "icon-scissors.svg",
      rock: "icon-rock.svg",
      paper: "icon-paper.svg",
    };
    return targetList[target];
  }
  const targetImg = showTarget(props.target);
  return (
    <div
      className={`p-4 w-36 h-36 rounded-full bg-gradient-to-b from-primary-${props.color1} to-primary-${props.color2} shadow-black shadow-xl`}
    >
      <div className="rounded-full bg-white p-6 min-h-full flex items-center justify-center">
        <img src={require(`../images/${targetImg}`)} alt="" />
      </div>
    </div>
  );
}
