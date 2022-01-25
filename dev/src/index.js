import WrappingLetters from "../../src";
import React from "react";

function App() {
   return (
      <div className="App">
         <WrappingLetters
            word="Hello world !!! <3"
            wordOptions={[
               {
                  classToAdd: "special-class",
                  SelectClass: {
                     wordToSearch: "Hello",
                     spaceBetweenWord: true,
                     classToAdd: "special-class",
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
