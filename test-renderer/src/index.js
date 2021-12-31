import React from "react";
import { render } from "react-dom";
import NewWrappingLetters from "../../src";
import LastWrappingLetters from "../../src/index.last";

const WrappingLetters = (props) => {
  return (
    <>
      <div>
        <NewWrappingLetters {...props} />
      </div>
      <div>
        <LastWrappingLetters {...props} />
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <WrappingLetters />
      <WrappingLetters
        word="Carlos is a good person, buthe is not a good person"
        wordOptions={[
          {
            ClassToAdd: "letter-c",
            SelectClass: {
              wordToSearch: "the",
              classToAdd: "my-class",
              spaceBetweenWord: false,
            },
          },
        ]}
      />
      <WrappingLetters
        word="Custom word"
        wordOptions={[
          {
            ClassToAdd: "letter-c",
            SelectClass: {
              wordToSearch: "word",
              classToAdd: "my-class",
              spaceBetweenWord: false,
            },
          },
        ]}
      />
      <WrappingLetters
        word="Custom word"
        wordOptions={[
          {
            ClassToAdd: "letter-c",
            SelectClass: {
              wordToSearch: "word",
              classToAdd: "my-class",
              spaceBetweenWord: true,
            },
          },
        ]}
      />
    </>
  );
};

render(<App />, document.getElementById("app"));
