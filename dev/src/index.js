import WrappingLetters from "../../src";
// import WrappingLetters from "../../lib";
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
      <>
      <WrappingLetters
         word="Carlos is a good person, but Carlos is a bad person"
         wordOptions={[
            {
               ClassToAdd: "class",
               SelectClass: {
                  wordToSearch: "Carlos is",
                  classToAdd: "special-class",
                  // spaceBetweenWord: true,
               },
               PerWord: false,   
            },
         ]}
         // structure={devStructure}
      />
   </>
   );
}

ReactDOM.render(<App />, document.getElementById("root"));
