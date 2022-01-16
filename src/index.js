import React from "react";

function WrappLetter(
  { searchWordValue, searchWordValueLength = 0, especialClass },
  text,
  ClassToAdd
) {
  var wrapLetters = text.map((letter, index) => {
    if (searchWordValueLength !== 0 && letter === searchWordValue[0]) {
      if (
        index + searchWordValueLength <= text.length &&
        text.slice(index, index + searchWordValueLength).join("") ===
          searchWordValue.join("")
      ) {
        const newText = text.slice(index, index + searchWordValueLength);
        var wl = newText.map((letter, index) => {
          return React.createElement(
            "span",
            {
              key: `letter ${index}`,
              className: `${ClassToAdd} ${especialClass}`,
            },
            letter
          );
        });
        text.splice(index, searchWordValueLength - 1);
        return wl;
      } else {
        return React.createElement(
          "span",
          { key: `letter ${index}`, className: ClassToAdd },
          letter
        );
      }
    } else {
      return React.createElement(
        "span",
        { key: `letter ${index}`, className: ClassToAdd },
        letter
      );
    }
  });

  return wrapLetters;
}

function errorFilterSpecialClass(wordOptions) {
  const searchWord = Object.keys(wordOptions[0]["SelectClass"]).filter(
    (key) => key === "wordToSearch"
  );
  const searchWordClass = Object.keys(wordOptions[0]["SelectClass"]).filter(
    (key) => key === "classToAdd"
  );
  const searchSBW = Object.keys(wordOptions[0]["SelectClass"]).filter(
    (key) => key === "spaceBetweenWord"
  );

  if (
    searchWord.length === 0 ||
    searchWordClass.length === 0 ||
    searchSBW.length === 0
  ) {
    throw new Error(
      "SelectClass must have 3 keys : wordToSearch, spaceBetweenWord and classToAdd"
    );
  }

  if (
    Object.prototype.toString.call(
      wordOptions[0]["SelectClass"].wordToSearch
    ) !== "[object String]" ||
    Object.prototype.toString.call(
      wordOptions[0]["SelectClass"].spaceBetweenWord
    ) !== "[object Boolean]" ||
    Object.prototype.toString.call(wordOptions[0]["SelectClass"].classToAdd) !==
      "[object String]"
  ) {
    throw new Error(
      "wordToSearch and classToAdd must be a string, spaceBetweenWord must be a boolean"
    );
  }
}

// ====== select special class to add ======
function selectSpecialClass(wordOptions, text, ClassToAdd) {
  if (Object.prototype.toString.call(wordOptions[0]) !== "[object Object]") {
    throw new Error("wordOptions must be an object");
  }
  let searchWordValue;
  let searchWordValueLength;
  let especialClass;

  if (Object.keys(wordOptions[0]["SelectClass"]).length === 3) {
    errorFilterSpecialClass(wordOptions);
    let searchWordValue = [...wordOptions[0]["SelectClass"].wordToSearch];

    if (wordOptions[0]["SelectClass"].spaceBetweenWord === true) {
      searchWordValue.unshift(" ");
      searchWordValue.push(" ");
      text.push(" ");
    }

    let searchWordValueLength = searchWordValue.length;
    let especialClass = wordOptions[0]["SelectClass"].classToAdd;

    return WrappLetter(
      {
        searchWordValue,
        searchWordValueLength,
        especialClass,
      },
      text,
      ClassToAdd
    );
  } else {
    throw new Error(
      "SelectClass must have 3 keys : wordToSearch, spaceBetween and classToAdd"
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

  var wrapLetters = text.map(function (letter, index) {
    return React.createElement("span", { key: `letter ${index}` }, letter);
  });

  if (isIts(wordOptions) !== "[object Array]") {
    throw new Error("wordOptions must be an array");
  } else if (wordOptions.length > 0) {
    let wordOptionsKeys = Object.keys(wordOptions[0]);

    const verifyWordOptionsKeys = (value) => {
      if (wordOptionsKeys.length === 1 && wordOptionsKeys.includes(value))
        return true;
      else return false;
    };

    if (wordOptions.length > 1) {
      throw new Error("wordOptions must be a single object");
    }

    if (verifyWordOptionsKeys("ClassToAdd")) {
      if (
        isIts(wordOptions[0]["ClassToAdd"]) !==
        "[object String]"
      ) {
        throw new Error("ClassToAdd must be a string");
      }
      return WrappLetter({}, text, wordOptions[0]["ClassToAdd"]);
    }

    if (verifyWordOptionsKeys("SelectClass")) {
      return selectSpecialClass(wordOptions, text, "");
    }

    if (wordOptionsKeys.length === 2) {
      if (
        wordOptionsKeys !== ["ClassToAdd", "SelectClass"] ||
        wordOptionsKeys !== ["SelectClass", "ClassToAdd"]
      ) {
        return selectSpecialClass(
          wordOptions,
          text,
          wordOptions[0]["ClassToAdd"]
        );
      }
    }

    // ---- warning of empty wordOpting---- //
    if (Object.keys(wordOptions[0]["SelectClass"]).length === 0) {
      console.warn("wordOptions is empty, return a simple wrapp of letters");
      // ---- wordOptions, normal wrapp ---- //
      return wrapLetters;
    }
  }
  return wrapLetters;
}
