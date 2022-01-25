import WrappingLetters from "../../src";
import React from "react";
import ReactDOM from "react-dom";

function App() {
   return (
      <div className="App">
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
               },
            ]}
            // structure={(letter, cssClass, props) => (
            //    <span className={cssClass} {...props}>
            //       {letter}
            //    </span>
            // )}
         />
      </div>
   );
}

ReactDOM.render(<App />, document.getElementById("root"));
