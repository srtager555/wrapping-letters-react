import WrappingLetters from "../../src";
// import WrappingLetters from "../../lib";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function devStructure({ letter, cssClass, ...prop }) {
   // console.log(prop)
   return (
      <>
         <div {...prop} className="container">
            <span className={cssClass}>{`LETTER: ${letter}, `}</span>
            <span className={cssClass}>{`CLASS: ${cssClass}`}</span>
            <span className={cssClass}>{`KEY: ${prop}`}</span>
         </div>
      </>
   );
}

function App() {
   return (
      <>
         <WrappingLetters
            text="Carlos is a good person, This a Carlosproblemisitagoodperson, but Carlos is a bad person, Yeah, he is Carlos"
            textOptions={[
               {
                  ClassToAdd: "class",
                  SelectClass: {
                     // new object with the class to add []
                     wordToSearch: [ "is", "Carlos", "person,", "h", "a", "good", ],
                     classToAdd: ["special-class-1", "special-class-2", "special-class-3",],
                     // spaceBetweenWord: true,
                  },
                  PerWord: true,
               },
            ]}
            // structure={devStructure}
         />
      </>
   );
}

ReactDOM.render(<App />, document.getElementById("root"));
