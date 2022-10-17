import WrappingLetters from "../../src";
// import WrappingLetters from "../../lib";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function specialTag({ letter, cssClass }) {
  return (
    <a
      className={cssClass}
      href="https://ttager.page/"
      target="_blank"
      rel="noreferrer"
    >
      {letter}
    </a>
  );
}

function specialTag1({ letter, cssClass }) {
  return (
    <a
      className={cssClass}
      href="https://ttager.page/"
      target="_blank"
      rel="noreferrer"
    >
      :D{letter}
    </a>
  );
}

function structure({ letter, cssClass }) {
  const Default = (
    <div className="container">
      <span className={cssClass}>{`LETTER: "${letter}", `}</span>
      <span className={cssClass}>{`CLASS: "${cssClass}"`}</span>
    </div>
  );
  return Default;
}

function App() {
  return (
    <>
      <WrappingLetters
        textOptions={{
          SpecialWrapp: {
            wordToSearch: "Hello",
            structureToAdd: { struc: specialTag, props: { uwu: "uwu" } },
          },
        }}
        structure={{ wrapp: structure, props: { owo: "owo" } }}
      />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
