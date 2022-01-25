import { createContext, useState } from "react";
import React from "react";

export const ChoiceContext = createContext({
  choice: "",
  choose: (target) => {},
});

export default function Context(props) {
  const [choice, setChoice] = useState("");
  function choose(target) {
    setChoice(target);
  }
  let context = { choice, choose };
  return (
    <ChoiceContext.Provider value={context}>
      {props.children}
    </ChoiceContext.Provider>
  );
}
