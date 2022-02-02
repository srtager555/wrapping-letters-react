import WrappingLetters from "../../src";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function devStructure({ letter, cssClass, ...prop }) {
   return (
      <>
         <div {...prop} className="container">
            <span>{`LETTER: ${letter}, `}</span>
            <span>{`CLASS: ${cssClass}`}</span>
            <span>{`KEY: ${prop.key}`}</span>
         </div>
      </>
   );
}

function App() {
   return (
      <WrappingLetters
         word="Hello world !!! <3"
         wordOptions={[
            {
               ClassToAdd: "class",
               SelectClass: {
                  wordToSearch: "Hello",
                  classToAdd: "special-class",
                  spaceBetweenWord: false,
               },
               PerWord: true,
            },
         ]}
      // structure={devStructure}
      />
   );
}

ReactDOM.render(<App />, document.getElementById("root"));
