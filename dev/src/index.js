import WrappingLetters from "../../src";
// import WrappingLetters from "../../lib";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function specialTag({ letter, cssClass }) {
  return (
    <a
      className={cssClass}
      href="https://ttager.page/"
      target="_blank"
      rel="noreferrer"
    >
      {letter}
    </a>
  );
}

function specialTag1({ letter, cssClass }) {
  return (
    <a
      className={cssClass}
      href="https://ttager.page/"
      target="_blank"
      rel="noreferrer"
    >
      :D{letter}
    </a>
  );
}

function devStructure({ letter, cssClass, specialWrapp, index }) {
  const { hasCustomWrapp, NewWrappStructure } = specialWrapp;

  // eslint-disable-next-line react/prop-types
  const Default = ({ letter, cssClass }) => (
    <div className="container">
      <span className={cssClass}>{letter}</span>
    </div>
  );

  // eslint-disable-next-line react/prop-types
  const CustomComponent = ({ letter, cssClass }) => (
    <div className="container">
      {hasCustomWrapp ? (
        <NewWrappStructure letter={letter} cssClass={cssClass} />
      ) : null}
    </div>
  );

  return hasCustomWrapp ? (
    <CustomComponent letter={letter} cssClass={cssClass} />
  ) : (
    <Default letter={letter} cssClass={cssClass} />
  );
}

function structure({ letter, cssClass }) {
  const Default = (
    <div className="container">
      <span className={cssClass}>{`LETTER: "${letter}", `}</span>
      <span className={cssClass}>{`CLASS: "${cssClass}"`}</span>
    </div>
  );
  return Default;
}

function App() {
  return (
    <>
      <WrappingLetters
        text="This is a short sentence for an example test OwO"
        textOptions={{
          // ClassToAdd: "class",
          // SelectClass: {
          //   // new object with the class to add []
          //   wordToSearch: [
          //     "a",
          //     "OwO",
          //     "sentence",
          //     "sent",
          //     "short",
          //     "example",
          //     "This",
          //     "is",
          //   ],
          //   classToAdd: [
          //     "special-class-1",
          //     "special-class-2",
          //     "special-class-3",
          //   ],
          //   spaceBetweenWord: true,
          // },
          SpecialWrapp: {
            wordToSearch: ["for", "an", "test"],
            structureToAdd: [specialTag, specialTag1],
          },
          // PerWord: true,
        }}
        structure={devStructure}
      />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
