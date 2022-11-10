import WrappingLetters from "../../src";
// import WrappingLetters from "../../lib";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { whatItIs } from "../../src/common/whatIsIt";

function specialTag({ letter, cssClass }) {
  return <span className={cssClass}>{letter}.</span>;
}

function structure({ letter, cssClass }) {
  const Default = <span className={cssClass}>{letter}</span>;
  return Default;
}

function App() {
  const [color, setColor] = useState(false);
  // const [value, setValue] = useState(structure);

  const handleHover = () => {
    setColor(!color);
    // setValue(specialTag);
  };

  return (
    <>
      <div
        className={`container ${color ? "blue" : ""}`}
        onMouseEnter={handleHover}
      >
        <span>letter </span>
        <span>
          <WrappingLetters
            text="Hello <3 uwu pan con queso XD"
            textOptions={{
              SelectClass: {
                wordToSearch: [["Hello", "uwu"], "<3", ["pan", "con"]],
                classToAdd: ["aloh", "a", "xd"],
              },
              SpecialWrapp: {
                wordToSearch: [["Hello", "pan"], "<3"],
                structureToAdd: specialTag,
              },
              PerWord: true,
            }}
            // structure={structure}
            // structure={{
            //   structure: structure,
            //   props: { owo: "owo", awita: { a: "a " }, sex: "uwu" },
            // }}
          />
        </span>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
