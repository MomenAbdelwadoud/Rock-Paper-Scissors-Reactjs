import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Playing from "./pages/Playing";
import Context from "./context/Context";

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
