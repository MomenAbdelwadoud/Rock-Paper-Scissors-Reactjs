import { createContext, useState } from "react";
import React from "react";

export const ChoiceContext = createContext({
  choice: "",
  choose: (target) => {},
  score: 0,
  incScore: () => {},
  decScore: () => {},
});

export default function Context(props) {
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);

  function choose(target) {
    setChoice(target);
  }

  function incScore() {
    setScore((prev) => prev + 1);
  }

  function decScore() {
    setScore((prev) => prev - 1);
  }

  let context = { choice, choose, score, incScore, decScore };
  return (
    <ChoiceContext.Provider value={context}>
      {props.children}
    </ChoiceContext.Provider>
  );
}
