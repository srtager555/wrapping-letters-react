import React from "react";

function WrappLetter(
  { searchWordValue, searchWordValueLength = 0, especialClass },
  text,
  ClassToAdd
) {
  var wrappedLetters = text.map((letter, index) => {
    if (
      searchWordValue.length > 0 &&
      letter === searchWordValue[0] &&
      index + searchWordValueLength <= text.length &&
      text.slice(index, index + searchWordValueLength).join("") ===
        searchWordValue.join("")
    ) {
      const newText = text.slice(index, index + searchWordValueLength);
      var wl = newText.map((letter, index) => {
        return (
          <span
            key={`letter ${index}`}
            className={`${ClassToAdd} ${especialClass}`}
          >
            {letter}
          </span>
        );
      });
      text.splice(index, searchWordValueLength - 1);
      return wl;
    } else {
      return (
        <span key={`letter ${index}`} className={ClassToAdd}>
          {letter}
        </span>
      );
    }
  });

  return wrappedLetters;
}

function errorFilterSpecialClass(SelectClass) {
  const SelectClassKeys = Object.keys(SelectClass);

  const searchWord = SelectClassKeys.some((key) => key === "wordToSearch");
  const searchWordClass = SelectClassKeys.some((key) => key === "classToAdd");
  const searchSBW = SelectClassKeys.some((key) => key === "spaceBetweenWord");

  if (!searchWord && !searchWordClass && !searchSBW) {
    throw new Error(
      "SelectClass must have 3 keys : wordToSearch, spaceBetweenWord and classToAdd"
    );
  }

  if (
    Object.prototype.toString.call(SelectClass.wordToSearch) !==
      "[object String]" ||
    Object.prototype.toString.call(SelectClass.spaceBetweenWord) !==
      "[object Boolean]" ||
    Object.prototype.toString.call(SelectClass.classToAdd) !== "[object String]"
  ) {
    throw new Error(
      "wordToSearch and classToAdd must be a string, spaceBetweenWord must be a boolean"
    );
  }
}

// ====== select special class to add ======
function selectSpecialClass(SelectClass, text, ClassToAdd) {
  if (Object.keys(SelectClass).length !== 3) {
    throw new Error(
      "SelectClass must have 3 keys : wordToSearch, spaceBetween and classToAdd"
    );
  } else {
    let searchWordValue;
    let searchWordValueLength;
    let especialClass;

    errorFilterSpecialClass(SelectClass);
    searchWordValue = [...SelectClass.wordToSearch];

    if (SelectClass.spaceBetweenWord === true) {
      searchWordValue.unshift(" ");
      searchWordValue.push(" ");
      text.push(" ");
    }

    searchWordValueLength = searchWordValue.length;
    especialClass = SelectClass.classToAdd;

    return WrappLetter(
      {
        searchWordValue,
        searchWordValueLength,
        especialClass,
      },
      text,
      ClassToAdd
    );
  }
}
// ====== select special class to add ======

export default function WrappingLetters({
  word = "Hello world !!! <3",
  wordOptions = [],
}) {
  const isIts = (it) => {
    return Object.prototype.toString.call(it);
  };

  if (isIts(word) !== "[object String]") {
    throw new Error("Word must be a string");
  }
  if (word === "") {
    throw new Error("Word cannot be empty");
  }

  let text = [...word];

  var wrappedLetters = text.map(function (letter, index) {
    return React.createElement("span", { key: `letter ${index}` }, letter);
  });

  if (isIts(wordOptions) !== "[object Array]") {
    throw new Error("wordOptions must be an array");
  } else if (wordOptions.length > 0) {
    if (isIts(wordOptions[0]) !== "[object Object]") {
      throw new Error(
        "inside the array of wordOptions there must be an object"
      );
    }

    let wordOptionsKeys = Object.keys(wordOptions[0]);
    let { ClassToAdd, SelectClass } = wordOptions[0];

    const verifyWordOptionsKeys = (value, valueNb = 1) => {
      if (wordOptionsKeys.length === valueNb && wordOptionsKeys.includes(value))
        return true;
      else return false;
    };

    if (wordOptions.length > 1) {
      throw new Error("wordOptions must be a single object");
    }

    if (verifyWordOptionsKeys("ClassToAdd")) {
      if (isIts(ClassToAdd) !== "[object String]") {
        throw new Error("ClassToAdd must be a string");
      }
      return WrappLetter({}, text, ClassToAdd);
    }

    if (verifyWordOptionsKeys("SelectClass")) {
      return selectSpecialClass(SelectClass, text, "");
    }

    if (wordOptionsKeys.length === 2) {
      if (
        verifyWordOptionsKeys("ClassToAdd", 2) &&
        verifyWordOptionsKeys("SelectClass", 2)
      ) {
        return selectSpecialClass(SelectClass, text, ClassToAdd);
      }
    }

    // ---- warning of empty wordOpting---- //
    if (wordOptionsKeys.length === 0) {
      console.warn(
        '"wordOptions" is empty, returning a simple wrapper of letters'
      );
    } // ---- Leave the process, start normal wrapp ---- //
  }
  return wrappedLetters;
}
