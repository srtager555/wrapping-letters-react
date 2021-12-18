const React = require("react");

module.exports = 

function WrappingLetters({
  word = "Hello world !!! <3",
  wordOptions = [],
}) {
  if (Object.prototype.toString.call(word) !== "[object String]") {
    throw new Error("Word must be a string");
  }

  const [searchWordIndex, setSearchWordIndex] = React.useState(0);
  var text = [...word];

  if (
    wordOptions !== [] &&
    Object.prototype.toString.call(wordOptions) === "[object Array]"
  ) {
    if (wordOptions.length > 1) {
      throw new Error("wordOptions must be a single object");
    }

    if (Object.keys(wordOptions[0]).length !== 2) {
      // console.log(Object.keys(wordOptions));
      throw new Error(
        "wordOptions must have 2 keys : wordToSearch and classToAdd"
      );
    }

    const searchWord = Object.keys(wordOptions[0]).filter(
      (key) => key === "wordToSearch"
    );
    const searchWordClass = Object.keys(wordOptions[0]).filter(
      (key) => key === "wordToSearch"
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

    const searchWordValue = [...wordOptions[0].wordToSearch];
    const searchWordValueLength = searchWordValue.length;
    const especialClass = wordOptions[0].classToAdd;

    console.log(searchWordIndex);
    var wrapLetters = text.map((letter, index) => {
      if (letter === searchWordValue[searchWordIndex]) {
        if (
          index + searchWordValueLength <= text.length &&
          text.slice(index, index + searchWordValueLength).join("") ===
            searchWordValue.join("")
        ) {
          // setSearchWordIndex(searchWordIndex + 1);
          // return React.createElement(
          //   "span",
          //   { key: `letter ${index}`, className: especialClass },
          //   letter
          // );
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
        console.log(letter);
        return <span key={index}>{letter}</span>;
      }
    });
  }

  // var wrapLetters = text.map(function (letter, index) {
  //   return React.createElement("span", { key: `letter ${index}` }, letter);
  // });

  return wrapLetters;
}

// const { wordToSearch } = wordOptions;
// const letters = word.split("");
// const wordToSearchLetters = wordToSearch.split("");
// const lettersToDisplay = letters.map((letter, index) => {
//   const isLetterToSearch = wordToSearchLetters.includes(letter);
//   const isLetterToSearchAndNotFound = isLetterToSearch && !wordToSearchLetters.includes(letter, index + 1);
//   const isLetterToSearchAndFound = isLetterToSearch && wordToSearchLetters.includes(letter, index + 1);
//   const isLetterToSearchAndFoundAndNotLast = isLetterToSearch && wordToSearchLetters.includes(letter, index + 1) && !wordToSearchLetters.includes(letter, index + 2);


// function WrappingLetters({ word = "Hello world !!! <3" }) {
//   if (Object.prototype.toString.call(word) !== "[object String]") {
//     throw new Error("Word must be a string");
//   }

//   var a = [...word];

//   var wrapLetters = a.map(function (letter, index) {
//     return React.createElement("span", { key: `letter ${index}` }, letter);
//   });

//   return wrapLetters;
// };
