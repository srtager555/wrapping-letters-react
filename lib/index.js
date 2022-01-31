"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WrappingLetters;

require("core-js/modules/es.string.includes.js");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _wrappLetter = require("./wrappLetter.module");

var _specialClass = require("./specialClass.module");

var _excluded = ["letter", "cssClass"];
var __jsx = _react["default"].createElement;

// perWord is a new attribute, its value is a boolean, if true, the every word will be wrapped in a span
function WrappingLetters(_ref) {
  var _ref$word = _ref.word,
      word = _ref$word === void 0 ? "Hello world !!! <3" : _ref$word,
      _ref$wordOptions = _ref.wordOptions,
      wordOptions = _ref$wordOptions === void 0 ? [] : _ref$wordOptions,
      structure = _ref.structure;

  function baseStructure(_ref2) {
    var letter = _ref2.letter,
        cssClass = _ref2.cssClass,
        props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
    return __jsx("span", (0, _extends2["default"])({
      className: cssClass
    }, props), letter);
  }

  var Structure = structure || baseStructure;
  var specialStructure = Structure !== baseStructure ? true : false;

  var isIts = function isIts(it) {
    return Object.prototype.toString.call(it);
  };

  if (isIts(word) !== "[object String]") {
    throw new Error("Word must be a string");
  }

  if (word === "") {
    throw new Error("Word cannot be empty");
  }

  if (isIts(Structure) !== "[object Function]") {
    throw new Error("Structure must be a function(React Component)");
  }

  var text = (0, _toConsumableArray2["default"])(word);
  var wrappedLetters = text.map(function (letter, index) {
    return __jsx(Structure, {
      letter: letter,
      key: "".concat(letter, " ").concat(index, "-").concat(Math.random())
    }); // return React.createElement("span", { key: `letter ${index}` }, letter);
  });

  if (isIts(wordOptions) !== "[object Array]") {
    throw new Error("wordOptions must be an array");
  } else if (wordOptions.length > 0) {
    if (isIts(wordOptions[0]) !== "[object Object]") {
      throw new Error("inside the array of wordOptions there must be an object");
    }

    var wordOptionsKeys = Object.keys(wordOptions[0]);
    var _wordOptions$ = wordOptions[0],
        ClassToAdd = _wordOptions$.ClassToAdd,
        SelectClass = _wordOptions$.SelectClass;

    var verifyWordOptionsKeys = function verifyWordOptionsKeys(value) {
      var valueNb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (wordOptionsKeys.length === valueNb && wordOptionsKeys.includes(value)) return true;else return false;
    };

    if (wordOptions.length > 1) {
      throw new Error("wordOptions must be a single object");
    }

    if (verifyWordOptionsKeys("ClassToAdd")) {
      if (isIts(ClassToAdd) !== "[object String]") {
        throw new Error("ClassToAdd must be a string");
      }

      return (0, _wrappLetter.WrappLetter)({
        SelectClass: {},
        text: text,
        ClassToAdd: ClassToAdd,
        Structure: Structure,
        specialStructure: specialStructure
      });
    }

    if (verifyWordOptionsKeys("SelectClass")) {
      return (0, _specialClass.selectSpecialClass)({
        SelectClass: SelectClass,
        text: text,
        ClassToAdd: "",
        Structure: Structure,
        specialStructure: specialStructure
      });
    }

    if (verifyWordOptionsKeys("ClassToAdd", 2) && verifyWordOptionsKeys("SelectClass", 2)) {
      return (0, _specialClass.selectSpecialClass)({
        SelectClass: SelectClass,
        text: text,
        ClassToAdd: ClassToAdd,
        Structure: Structure,
        specialStructure: specialStructure
      });
    } // ---- warning of empty wordOpting---- //


    if (wordOptionsKeys.length === 0) {
      Structure !== baseStructure ? console.warn('"wordOptions" is empty, returning a simple wrapper with structure') : console.warn('"wordOptions" is empty, returning a simple wrapper of letters');
    } // ---- Leave the process, start normal wrapp ---- //

  }

  return wrappedLetters;
}