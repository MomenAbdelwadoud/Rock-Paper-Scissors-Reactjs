import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Playing from "./pages/Playing";
import Context from "./context/Context";

// wrapping everything with the context to share the user choice and the score
// using react-router to split the app into 2 main pages
// Used TailwindCSS for styling
// Tried to add comments as I can
function App() {
  return (
    <div>
      <Context>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/playing" element={<Playing />}></Route>
        </Routes>
      </Context>
    </div>
  );
}

export default App;
