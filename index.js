const React = require("react");

const React = require("react");

function WrappLetter(
  searchWordValue,
  searchWordValueLength,
  especialClass,
  text
) {
  var wrapLetters = text.map((letter, index) => {
    if (letter === searchWordValue[0]) {
      if (
        index + searchWordValueLength <= text.length &&
        text.slice(index, index + searchWordValueLength).join("") ===
          searchWordValue.join("")
      ) {
        const newText = text.slice(index, index + searchWordValueLength);
        var wl = newText.map((letter, index) => {
          return React.createElement(
            "span",
            { key: `letter ${index}`, className: especialClass },
            letter
          );
        });
        text.splice(index, searchWordValueLength - 1);
        return wl;
      }
    } else {
      return <span key={index}>{letter}</span>;
    }
  });

  return wrapLetters;
}

function errorFilterOutspaceBetweenWord(wordOptions) {
  const searchWord = Object.keys(wordOptions[0]).filter(
    (key) => key === "wordToSearch"
  );
  const searchWordClass = Object.keys(wordOptions[0]).filter(
    (key) => key === "classToAdd"
  );
  const searchSBW = Object.keys(wordOptions[0]).filter(
    (key) => key === "spaceBetweenWord"
  );

  if (
    searchWord.length === 0 ||
    searchWordClass.length === 0 ||
    searchSBW.length === 0
  ) {
    throw new Error(
      "wordOptions must have 3 keys : wordToSearch, spaceBetweenWord and classToAdd"
    );
  }

  if (
    Object.prototype.toString.call(wordOptions[0].wordToSearch) !==
      "[object String]" ||
    Object.prototype.toString.call(wordOptions[0].spaceBetweenWord) !==
      "[object Boolean]" ||
    Object.prototype.toString.call(wordOptions[0].classToAdd) !==
      "[object String]"
  ) {
    throw new Error(
      "wordToSearec and classToAdd must be a string, spaceBetweenWord must be a boolean"
    );
  }
}

function errorFilterWithspaceBetweenWord(wordOptions) {
  const searchWord = Object.keys(wordOptions[0]).filter(
    (key) => key === "wordToSearch"
  );
  const searchWordClass = Object.keys(wordOptions[0]).filter(
    (key) => key === "classToAdd"
  );

  if (searchWord.length === 0 || searchWordClass.length === 0) {
    throw new Error(
      "wordOptions must have 2 keys : wordToSearch and classToAdd"
    );
  }

  if (
    Object.prototype.toString.call(wordOptions[0].wordToSearch) !==
      "[object String]" ||
    Object.prototype.toString.call(wordOptions[0].classToAdd) !==
      "[object String]"
  ) {
    throw new Error("wordToSearec and classToAdd must be a string");
  }
}

module.exports = function WrappingLetters({
  word = "Hello world !!! <3",
  wordOptions = [],
}) {
  if (Object.prototype.toString.call(word) !== "[object String]") {
    throw new Error("Word must be a string");
  }

  let text = [...word];
  console.log(text);

  if (
    wordOptions.length > 0 &&
    Object.prototype.toString.call(wordOptions) === "[object Array]"
  ) {
    let searchWordValue;
    let searchWordValueLength;
    let especialClass;

    if (wordOptions.length > 1) {
      throw new Error("wordOptions must be a single object");
    }

    if (Object.keys(wordOptions[0]).length === 2) {
      // -- error filter outSpaceBetweenWord -- //
      errorFilterOutspaceBetweenWord(wordOptions);

      let searchWordValue = [...wordOptions[0].wordToSearch];
      let searchWordValueLength = searchWordValue.length;
      let especialClass = wordOptions[0].classToAdd;

      WrappLetter(searchWordValue, searchWordValueLength, especialClass, text);
    } else if (Object.keys(wordOptions[0]).length === 3) {
      errorFilterWithspaceBetweenWord(wordOptions);

      if (wordOptions[0].spaceBetweenWord === true) {
        let searchWordValue = [...wordOptions[0].wordToSearch];
        // searchWordValue.unshift(" ");
        // searchWordValue.push(" ");

        let searchWordValueLength = searchWordValue.length;
        let especialClass = wordOptions[0].classToAdd;

        return WrappLetter(
          searchWordValue,
          searchWordValueLength,
          especialClass,
          text
        );
      } else {
        let searchWordValue = [...wordOptions[0].wordToSearch];
        let searchWordValueLength = searchWordValue.length;
        let especialClass = wordOptions[0].classToAdd;

        //-- WrappingLetters 🌟
        return WrappLetter(
          searchWordValue,
          searchWordValueLength,
          especialClass,
          text
        );
      }
    } else {
      throw new Error(
        "wordOptions must have 2 keys : wordToSearch and classToAdd"
      );
    }
  } else if (Object.prototype.toString.call(wordOptions) !== "[object Array]") {
    // ---- wordOption only accept array ---- //
    throw new Error("wordOptions must be a array");
  }

  // ---- warning of empty wordOpting---- //
  if (Object.keys(wordOptions[0]).length === 0) {
    console.warn("wordOptions is empty, return a simple wrapp of letters");
  }

  // ---- wordOptions, normal wrapp ---- //

  var wrapLetters = text.map(function (letter, index) {
    return React.createElement("span", { key: `letter ${index}` }, letter);
  });

  return wrapLetters;
}
