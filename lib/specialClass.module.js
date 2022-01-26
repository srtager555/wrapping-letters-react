"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectSpecialClass = selectSpecialClass;

require("core-js/modules/web.dom-collections.iterator.js");

var _wrappLetter = require("./wrappLetter.module");

function errorFilterSpecialClass(SelectClass) {
  const SelectClassKeys = Object.keys(SelectClass);
  const searchWord = SelectClassKeys.some(key => key === "wordToSearch");
  const searchWordClass = SelectClassKeys.some(key => key === "classToAdd");
  const searchSBW = SelectClassKeys.some(key => key === "spaceBetweenWord");

  if (!searchWord && !searchWordClass && !searchSBW) {
    throw new Error("SelectClass must have 3 keys : wordToSearch, spaceBetweenWord and classToAdd");
  }

  if (Object.prototype.toString.call(SelectClass.wordToSearch) !== "[object String]" || Object.prototype.toString.call(SelectClass.spaceBetweenWord) !== "[object Boolean]" || Object.prototype.toString.call(SelectClass.classToAdd) !== "[object String]") {
    throw new Error("wordToSearch and classToAdd must be a string, spaceBetweenWord must be a boolean");
  }
} // ====== select special class to add ======


function selectSpecialClass(_ref) {
  let {
    SelectClass,
    text,
    ClassToAdd,
    Structure,
    specialStructure
  } = _ref;

  if (Object.keys(SelectClass).length !== 3) {
    throw new Error("SelectClass must have 3 keys : wordToSearch, spaceBetween and classToAdd");
  } else {
    let searchWordValue;
    let searchWordValueLength;
    let specialClass;
    errorFilterSpecialClass(SelectClass);
    searchWordValue = [...SelectClass.wordToSearch];

    if (SelectClass.spaceBetweenWord === true) {
      searchWordValue.unshift(" ");
      searchWordValue.push(" ");
      text.push(" ");
    }

    searchWordValueLength = searchWordValue.length;
    specialClass = SelectClass.classToAdd;
    return (0, _wrappLetter.WrappLetter)({
      SelectClass: {
        searchWordValue,
        searchWordValueLength,
        specialClass
      },
      text,
      ClassToAdd,
      Structure,
      specialStructure
    });
  }
} // ====== select special class to add ======