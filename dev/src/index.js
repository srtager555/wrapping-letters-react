import WrappingLetters from "../../src";
import React from "react";
import ReactDOM from "react-dom";

function devStructure({ letter, cssClass, ...props }) {
   const styles = {
      display: "block",
   }
   return (
      <span style={styles} className={cssClass} {...props}>
         {`LETTER: ${letter}, CLASS: ${cssClass}`} 
      </span>
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
