// import WrappingLetters from "../../src";
import WrappingLetters from "../../lib";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function specialTag(element) {
   return (
      <a href="https://ttager.page/" target="_blank">
         {element}
      </a>
   );
}

function devStructure({ letter, cssClass, specilStructure }) {
   const [Component, SetComponent] = React.useState()

   const Default = (
      <div className="container">
         <span className={cssClass}>{`LETTER: ${letter}, `}</span>
         <span className={cssClass}>{`CLASS: ${cssClass}`}</span>
      </div>
   );
   const Good = (
      <div className="container">
         <a href="htp..." className={cssClass}>{`LETTER: ${letter}, `}</a>
         <span className={cssClass}>{`CLASS: ${cssClass}`}</span>
      </div>
   );

   React.useEffect(() => {
      if (specilStructure.Good) {
         //...
      } else {
         //...
      }
   }, []);

   return <Component />
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
                     wordToSearch: [
                        "is",
                        "Carlos",
                        "person,",
                        "h",
                        "a",
                        "good",
                     ],
                     classToAdd: [
                        "special-class-1",
                        "special-class-2",
                        "special-class-3",
                     ],
                     // spaceBetweenWord: true,
                  },
                  // specialStructure: {
                  //    wordToSearch: "good",
                  //    structureToAdd: specialTag,
                  // },
                  PerWord: true,
               },
            ]}
            // structure={devStructure}
         />
      </>
   );
}

ReactDOM.render(<App />, document.getElementById("root"));
