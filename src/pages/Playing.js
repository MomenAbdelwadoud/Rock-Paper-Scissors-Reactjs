import React from "react";
import Circle from "../components/Circle";
import Rules from "../components/Rules";
import Header from "../layout/Header";

export default function Playing() {
  return (
    <div className="flex flex-col justify-evenly items-center w-full gap-16">
      <Header />
      <section className="flex justify-between p-8 gap-10">
        <div className="flex flex-col items-center justify-between">
          <figure>
            <Circle target={"rock"} isWinner={true} />
          </figure>
          <p className="font-bold text-sm mt-4 font-primary tracking-wider">
            YOU PICKED
          </p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <figure>
            <Circle target={"placeholder"} />
          </figure>
          <p className="font-bold text-sm mt-4 font-primary tracking-wider">
            THE HOUSE PICKED
          </p>
        </div>
      </section>
      <footer className="flex flex-col items-center">
        <section className="font-primary flex flex-col justify-between items-center gap-6">
          <h1 className="text-6xl ">YOU WIN</h1>
          <button className="px-20 py-3 border border-white rounded-lg bg-white text-secondary-darkText hover:bg-transparent hover:text-white transition ease">
            PLAY AGAIN
          </button>
        </section>
        <Rules></Rules>
      </footer>
    </div>
  );
}
