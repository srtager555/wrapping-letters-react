"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectSpecialClass = selectSpecialClass;

var _wrappLetter = require("./wrappLetter.module");

function errorFilterSpecialClass(SelectClass, perWord) {
  const SelectClassKeys = Object.keys(SelectClass);
  const sc_props = ["wordToSearch", "classToAdd", "spaceBetweenWord"]; // required props 'wordToSearch', 'classToAdd'.
  // comprobation if the object contain a props not in the list

  var containThisProps = function containThisProps(value) {
    return sc_props.includes(value);
  };

  var contain = SelectClassKeys.every(containThisProps); // if the object doesn't contain the required props

  if (!contain && !perWord) {
    throw new Error('"SelectClass" must contain the following properties: wordToSearch, classToAdd. spaceBetweenWord is optional');
  } // if the object contain the required props


  var wordToSearchSearch = SelectClassKeys.some(value => value === "wordToSearch");
  var classToAddSearch = SelectClassKeys.some(value => value === "classToAdd");

  if (!wordToSearchSearch || !classToAddSearch) {
    throw new Error('"SelectClass" must be required the following properties: wordToSearch, classToAdd.');
  } // comprobation of the optional prop 'spaceBetweenWord'


  const searchSBW = SelectClassKeys.some(key => key === "spaceBetweenWord");

  if (perWord && searchSBW) {
    throw new Error('"spaceBetweenWord" is not allowed when perWord is true');
  } // 'SelectClass' contains the following properties:
  //  wordToSearch, classToAdd. spaceBetweenWord is optional


  const {
    wordToSearch,
    classToAdd,
    spaceBetweenWord
  } = SelectClass;

  if (typeof wordToSearch != "string" && !Array.isArray(wordToSearch)) {
    throw new Error('"wordToSearch" must be a string or an array');
  }

  if (typeof classToAdd != "string" && !Array.isArray(classToAdd)) {
    throw new Error('"classToAdd" must be a string or an array');
  }

  if (!perWord && searchSBW && typeof spaceBetweenWord !== "boolean") {
    throw new Error('"spaceBetweenWord" must be a boolean');
  }
} // ====== select special class to add ======


function selectSpecialClass(_ref) {
  let {
    SelectClass,
    crumbledText,
    ClassToAdd,
    Structure,
    specialStructure,
    perWord
  } = _ref;
  errorFilterSpecialClass(SelectClass, perWord);
  let searchWordValue = SelectClass.wordToSearch;
  let searchWordValueLength;
  let specialClass; // comprobation for search within words

  if (SelectClass.spaceBetweenWord === true && perWord === false) {
    // searchWordValue = searchWordValue.map((element) => {
    //    return ` ${element} `;
    // })
    crumbledText.push(" ");
    crumbledText.unshift(" ");
  }

  searchWordValueLength = searchWordValue.length;
  specialClass = SelectClass.classToAdd;
  return (0, _wrappLetter.WrappLetter)({
    SelectClass: {
      searchWordValue,
      searchWordValueLength,
      specialClass,
      spaceBetweenWord: SelectClass.spaceBetweenWord
    },
    crumbledText,
    ClassToAdd,
    Structure,
    specialStructure,
    perWord
  });
} // ====== select special class to add ======