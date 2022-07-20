"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappLetter = WrappLetter;

var _react = _interopRequireDefault(require("react"));

var _outSpecialClass = require("./outSpecialClass.process");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WrappLetter(_ref) {
  let {
    SelectClass,
    crumbledText,
    ClassToAdd,
    Structure,
    specialStructure = false,
    PerWord = false,
    test = false
  } = _ref;
  let {
    searchWordValue,
    specialClass,
    spaceBetweenWord
  } = SelectClass; // comprobation if searchWordValue is an array

  if (!Array.isArray(searchWordValue)) {
    searchWordValue = [searchWordValue];
  }

  var arrElements = crumbledText.map(function (wrappElement, index) {
    // ********* !IMPORTANT *********
    // the code wil use this var for the function "specialArray"
    let newClass = specialClass; //.
    //.
    //.

    const outSpecialClassProps = {
      wrappElement,
      newClass,
      ClassToAdd,
      specialArray,
      specialStructure,
      searchWordValue,
      index,
      crumbledText,
      PerWord
    }; // This function has the work find the specialClass with the index

    function specialArray(INDEX_SPECIAL_CLASS) {
      if (Array.isArray(specialClass)) if (INDEX_SPECIAL_CLASS > specialClass.length - 1) {
        return newClass = specialClass[0];
      } else {
        return newClass = specialClass[INDEX_SPECIAL_CLASS];
      }
    } //.
    //.
    //.
    //.
    //.
    //.
    //.
    // Here the code will start the comprobations
    //.


    const arrComprobations = [!PerWord, // if the array is empty, return the false
    searchWordValue.length > 0, // the wrappElement has to have same first letter of an Element
    searchWordValue.some(element => wrappElement === element[0]), // the element can't be longer than crumbledText
    searchWordValue.some(element => index + element.length <= crumbledText.length), // Here the code will check if an element is same with a slice
    // of its length
    searchWordValue.some(element => crumbledText.slice(index, index + element.length).join("") === element)];
    if (!arrComprobations.every(currentValue => currentValue === true)) return (0, _outSpecialClass.outSpecialClass)(outSpecialClassProps); //.
    //.
    //.
    //.
    //.
    //.
    // here the code will comprobate if the first letter is the start
    // of a special word

    if (spaceBetweenWord) {
      // if SBW (spaceBetweenWord) is true, the code need see the before and after
      // element beacause these element need be whitespace
      if (!searchWordValue.some(element => {
        let firstWhiteSpace = crumbledText[index - 1];
        let lastWhiteSpace = crumbledText.indexOf(" ", index);
        let choppedWordCoditional = crumbledText.slice(index, lastWhiteSpace).join("") === element;
        return choppedWordCoditional && firstWhiteSpace === " " && crumbledText[lastWhiteSpace] === " ";
      })) // if this "word" is false, it means it is a false positive
        // the code will return a simple wrapp
        return (0, _outSpecialClass.outSpecialClass)(outSpecialClassProps);
    } //.
    //.
    //.
    //.
    //.
    //.
    // here the code will filter the correct special "word"
    // after the "word" will return within an Array


    let newCrumbledText = searchWordValue.filter(element => {
      // here the code will cut the "word" from the array
      let choppedWord = crumbledText.slice(index, index + element.length).join("");

      if (spaceBetweenWord) {
        // here the code will checks if the "word" has whitespace
        // before and after
        if (crumbledText[index - 1] !== " ") return false;
        if (crumbledText[index + element.length] !== " ") return false;
      }

      return choppedWord === element;
    }); //.
    // end of the comprobation
    //.
    //.
    //.
    //.
    //.
    //.
    //.

    newCrumbledText = [...newCrumbledText[0]]; // here the code will create magic
    // with the before information the code can wrapp the elements

    var wl = newCrumbledText.map(wrappElement => {
      const INDEX_SPECIAL_CLASS = searchWordValue.indexOf(newCrumbledText.join(""));
      specialArray(INDEX_SPECIAL_CLASS);
      return [wrappElement, !specialStructure ? [ClassToAdd, newClass].join(" ") : newClass];
    }); // here it'll slice the current "word" from the crumbledText

    crumbledText.splice(index, newCrumbledText.length - 1);
    return wl;
  }) // [[[]], [[]], ...]
  .flat(); // [[], [] ...]
  //.
  //.
  //.
  //.
  //.
  //.
  //.
  //.

  if (arrElements[0][0] === " " && arrElements[arrElements.length - 1][0] === " ") {
    arrElements.pop();
    arrElements.shift();
  } // Switch for test files


  if (test) return arrElements;
  var wrappedLetters = arrElements.map(function (wrappElement, index) {
    return /*#__PURE__*/_react.default.createElement(Structure, {
      letter: wrappElement[0],
      cssClass: wrappElement[1],
      key: `'${wrappElement[0]}'-${index}`
    });
  });
  return wrappedLetters;
}