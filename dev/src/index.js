import WrappingLetters from "../../src";
// import WrappingLetters from "../../lib";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { whatItIs } from "../../src/common/whatIsIt";

function specialTag({ letter, cssClass }) {
  return <span className={cssClass}>{letter}</span>;
}


function structure({ letter }) {
  const Default = <span>{letter}</span>;
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
            text="Hello <3"
            textOptions={
              {
                // SelectClass: {
                //   wordToSearch: ["Hello", "<3"],
                //   classToAdd: ["aloh", "a"],
                // },
                // SpecialWrapp: {
                //   wordToSearch: ["Hello", "<3"],
                //   structureToAdd: [
                //     {
                //       structureToAdd: specialTag,
                //       props: { color: "." },
                //     },
                //     {
                //       structureToAdd: specialTag,
                //       props: { color: "2" },
                //     },
                //   ],
                // },
              }
            }
            structure={structure}
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
