import WrappingLetters from "../../src";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function devStructure({ letter, cssClass, ...props }) {
   return (
      <div className="container" {...props}>
         <span>
            {`LETTER: ${letter}, `}
         </span>
         <span>
            {`CLASS: ${cssClass}`}
         </span>
      </div>
   );
}

function App() {
   return (
      <div className="App">
         <WrappingLetters
            word="Hello world !!! <3"
            wordOptions={[
               {
                  // ClassToAdd: "class",
                  SelectClass: {
                     wordToSearch: "Hello",
                     classToAdd: "special-class",
                     spaceBetweenWord: true,
                  },
               },
            ]}
            structure={devStructure}
         />
      </div>
   );
}

ReactDOM.render(<App />, document.getElementById("root"));
