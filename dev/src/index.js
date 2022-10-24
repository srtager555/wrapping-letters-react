import WrappingLetters from "../../src";
// import WrappingLetters from "../../lib";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function specialTag({ letter, cssClass, color }) {
  return (
    <span className={cssClass}>
      {letter}
      {color}
    </span>
  );
}

function structure({ letter, cssClass }) {
  const Default = <span className={cssClass}>{letter}</span>;
  return Default;
}

function App() {
  return (
    <>
      <WrappingLetters
        text="Hello <3"
        textOptions={{
          SelectClass: {
            wordToSearch: ["Hello", "<3"],
            classToAdd: ["aloh", "a"],
          },
          SpecialWrapp: {
            wordToSearch: ["Hello", "<3"],
            structureToAdd: [
              {
                structureToAdd: specialTag,
                props: { color: "." },
              },
              {
                structureToAdd: specialTag,
                props: { color: "2" },
              },
            ],
          },
        }}
        // structure={structure}
        // structure={{
        //   structure: structure,
        //   props: { owo: "owo", awita: { a: "a " }, sex: "uwu" },
        // }}
      />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
