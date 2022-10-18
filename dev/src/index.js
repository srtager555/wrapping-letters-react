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

function structure({ letter, cssClass, owo, awita, sex }) {
  const Default = (
    <span>
      {letter} - {owo}
      {awita.a}
      {sex}{" "}
    </span>
  );
  return Default;
}

function App() {
  return (
    <>
      <WrappingLetters
        textOptions={{
          SelectClass: {
            wordToSearch: "Hello",
            classToAdd: "aloh",
          },
          //   SpecialWrapp: {
          //     wordToSearch: "Hello",
          //     structureToAdd: { struc: specialTag, props: { uwu: "uwu" } },
          //   },
        }}
        structure={{
          structure: undefined,
          props: { owo: "owo", awita: { a: "a " }, sex: "uwu" },
        }}
      />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
