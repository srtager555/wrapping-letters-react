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
        const start = word.indexOf(wordToSearch);
        const chunkSpace = (index !== arr.length - 1  ? " " : "")
        if(!spaceBetweenWord && start !== -1) {
          // Agrega un espacio al inicio y divide la palabra a partir de la
          // palabra a buscar
          return [
            word.slice(0, start),
            word.slice(start, start + wordToSearch.length),
            word.slice(start + wordToSearch.length) + chunkSpace
          ];
        }
        // Simplemente retorna la palabra con un espacio al final, si no es él último elemento
        return word + chunkSpace;
      })
      //Esto elimina los arrays aninados, y sólo debería quedar un array
      .flat()
      .map((word) => {
        if (word.trim() == wordToSearch) {
          return [
            word,
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
