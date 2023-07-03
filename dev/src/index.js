import WrappingLetters from "../../src";
// import WrappingLetters from "../../lib";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { whatItIs } from "../../src/common/whatIsIt";

function specialTag({ letter, cssClass, a }) {
  return (
    <span className={`gray ${cssClass}`}>
      {letter}1{a}
    </span>
  );
}
function specialTag1({ letter, cssClass }) {
  return <span className={`blue ${cssClass}`}>{letter}2</span>;
}

function structure(props) {
  const { letter, cssClass, awita } = props;
  // console.log(props);
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
        <WrappingLetters
          text="Hello <3 uwu pan con quesocon XD"
          textOptions={{
            SelectClass: {
              wordToSearch: [["Hello", "uwu"], "<3", ["pan", "con"]],
              classToAdd: ["aloh", "a", "xd"],
              // spaceBetweenWord: false,
            },
            SpecialWrapp: {
              wordToSearch: [
                ["Hello", "pan"],
                ["uwu", "con"],
                "<3",
                "XD",
                "queso",
              ],
              structureToAdd: { structureToAdd: specialTag, props: { a: "a" } },
              // structureToAdd: [specialTag, specialTag1],
              // spaceBetweenWord: true,
            },
            PerWord: true,
          }}
          // structure={structure}
          // structure={{
          //   structure: structure,
          //   props: { owo: "owo", awita: { a: "a " }, sex: "uwu" },
          // }}
        />
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
