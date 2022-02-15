"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectSpecialClass = selectSpecialClass;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _wrappLetter = require("./wrappLetter.module");

function errorFilterSpecialClass(SelectClass, perWord) {
  var SelectClassKeys = Object.keys(SelectClass);
  var sc_props = ['wordToSearch', 'classToAdd', 'spaceBetweenWord']; // required props 'wordToSearch', 'classToAdd'.

  var containThisProps = function containThisProps(value) {
    return sc_props.includes(value);
  };

  var contain = SelectClassKeys.every(containThisProps);

  if (!contain && !perWord) {
    throw new Error("\"SelectClass\" must contain the following properties: wordToSearch, classToAdd. spaceBetweenWord is optional");
  }

  var requiredProps = function requiredProps(value) {
    return !sc_props.slice(0, 2).includes(value);
  };

  var requiredContain = SelectClassKeys.some(requiredProps);

  if (!requiredContain) {
    throw new Error("\"SelectClass\" must be required the following properties: wordToSearch, classToAdd.");
  }

  var searchSBW = SelectClassKeys.some(function (key) {
    return key === "spaceBetweenWord";
  });

  if (perWord && searchSBW) {
    throw new Error("\"spaceBetweenWord\" is not allowed when perWord is true");
  }

  var wordToSearch = SelectClass.wordToSearch,
      classToAdd = SelectClass.classToAdd,
      spaceBetweenWord = SelectClass.spaceBetweenWord;

  if (typeof wordToSearch != "string") {
    throw new Error("\"wordToSearch\" must be a string");
  }

  if (typeof classToAdd != "string") {
    throw new Error("\"classToAdd\" must be a string");
  }

  if (!perWord && searchSBW && typeof spaceBetweenWord !== "boolean") {
    throw new Error("\"spaceBetweenWord\" must be a boolean");
  }
} // ====== select special class to add ======


function selectSpecialClass(_ref) {
  var SelectClass = _ref.SelectClass,
      text = _ref.text,
      ClassToAdd = _ref.ClassToAdd,
      Structure = _ref.Structure,
      specialStructure = _ref.specialStructure,
      perWord = _ref.perWord;
  errorFilterSpecialClass(SelectClass, perWord);
  var searchWordValue;
  var searchWordValueLength;
  var specialClass;
  searchWordValue = (0, _toConsumableArray2["default"])(SelectClass.wordToSearch);

  if (SelectClass.spaceBetweenWord === true && perWord === false) {
    searchWordValue.unshift(" ");
    searchWordValue.push(" ");
    text.push(" ");
    text.unshift(" ");
  }

  searchWordValueLength = searchWordValue.length;
  specialClass = SelectClass.classToAdd;
  return (0, _wrappLetter.WrappLetter)({
    SelectClass: {
      searchWordValue: searchWordValue,
      searchWordValueLength: searchWordValueLength,
      specialClass: specialClass,
      spaceBetweenWord: SelectClass.spaceBetweenWord
    },
    text: text,
    ClassToAdd: ClassToAdd,
    Structure: Structure,
    specialStructure: specialStructure,
    perWord: perWord
  });
} // ====== select special class to add ======