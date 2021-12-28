import React from "react";

export default function WrappingLetters({
  word = "Hello world !!! <3",
  wordOptions = [],
}) {
  if (typeof word === "string") {
    if (word.trim() === "") {
      throw new Error("Word cannot be empty");
    }
  } else {
    throw new Error("Word must be a string");
  }

  let words = [];

  if (!Array.isArray(wordOptions)) {
    throw new Error("wordOptions must be an array");
  } else if (wordOptions.length > 1) {
    throw new Error("wordOptions must be a single object");
  } else if (wordOptions.length == 1) {
    let [{ SelectClass, ClassToAdd } = {}] = wordOptions;

    if (ClassToAdd !== undefined) {
      if (typeof ClassToAdd !== "string") {
        throw new Error("ClassToAdd must be a string");
      }
      words = [[word, { className: ClassToAdd }]];
    }

    if (SelectClass !== undefined) {
      const keys = Object.keys(SelectClass);

      if (keys.length !== 3) {
        throw new Error(
          "SelectClass must have 3 keys : wordToSearch, spaceBetween and classToAdd"
        );
      }

      const { wordToSearch, spaceBetweenWord, classToAdd } = SelectClass;

      if (
        typeof wordToSearch !== "string" ||
        typeof spaceBetweenWord !== "boolean" ||
        typeof classToAdd !== "string"
      ) {
        throw new Error(
          "wordToSearch and classToAdd must be a string, spaceBetweenWord must be a boolean"
        );
      }

      words = word.split(/\s+/)
      .map((word, index, arr) => {
        if(spaceBetweenWord){
          if(index !== 0) {
            word = " " + word;
          }
        } else {
         if(index !== arr.length - 1) {
            word = word + " ";
          }
        }

        if (word.indexOf(wordToSearch) !== -1) {
          return [
            spaceBetweenWord ? " " + word.trim() + " " : word,
            { className: [ClassToAdd || "", classToAdd || ""].join(" ") },
          ];
        }
        return [word, { className: ClassToAdd || "" }];
      });
    }
  } else {
    words = [[word, {}]];
  }

  return (
    <>
      {words.map(([word, props]) => {
        return Array.prototype.map.call(word, (letter, index) => {
          return (
            <span {...props} key={`letter-${index}`}>
              {letter}
            </span>
          );
        });
      })}
    </>
  );
}
