import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Result from "./pages/Result";
import Playing from "./pages/Playing";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/playing" element={<Playing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
