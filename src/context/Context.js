import { createContext, useState } from "react";
import React from "react";

// It's named choice context but it holds also the score value
export const ChoiceContext = createContext({
  choice: "",
  choose: (target) => {},
  score: 0,
  incScore: () => {},
  decScore: () => {},
}); //passing these values is optional, just for IDE completion

export default function Context(props) {
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);

  // This triggers when user chooses an option
  function choose(target) {
    setChoice(target);
  }

  // Increasing/Decreasing the score
  function incScore() {
    setScore((prev) => prev + 1);
  }

  function decScore() {
    setScore((prev) => prev - 1);
  }

  // passing the defined values/functions to our context as initial values
  let context = { choice, choose, score, incScore, decScore };
  return (
    <ChoiceContext.Provider value={context}>
      {props.children}
    </ChoiceContext.Provider>
  );
}
