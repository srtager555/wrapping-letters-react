"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WrappingLetters;

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

  if (isIts(wordOptions[0].PerWord) !== "[object Boolean]") {
    throw new Error("PerWord must be a boolean");
  }

  var text = wordOptions[0].PerWord ? word.split(" ") : (0, _toConsumableArray2["default"])(word);
  var wrappedLetters = text.map(function (letter, index) {
    var a;

    if (wordOptions[0].PerWord) {
      if (index != text.length - 1) {
        a = letter + " ";
      } else {
        a = letter;
      }
    }

    return __jsx(Structure, {
      letter: a,
      key: "".concat(letter, " ").concat(index, "-").concat(Math.random())
    });
  });

  if (isIts(wordOptions) !== "[object Array]") {
    throw new Error("wordOptions must be an array");
  } else if (wordOptions.length > 0) {
    if (isIts(wordOptions[0]) !== "[object Object]") {
      throw new Error("inside the array of wordOptions there must be an object");
    }

    var _wordOptionsKeys = Object.keys(wordOptions[0]);

    var _wordOptions$ = wordOptions[0],
        ClassToAdd = _wordOptions$.ClassToAdd,
        SelectClass = _wordOptions$.SelectClass,
        PerWord = _wordOptions$.PerWord;

    var verifyWordOptionsKeys = function verifyWordOptionsKeys(value) {
      var valueNb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (_wordOptionsKeys.length === valueNb && _wordOptionsKeys.includes(value)) return true;else return false;
    };

    if (wordOptions.length > 1) {
      throw new Error("wordOptions must be a single object");
    }

    var wl_props = ['ClassToAdd', 'SelectClass', 'PerWord'];

    var containThisProps = function containThisProps(value) {
      return wl_props.includes(value);
    };

    var container = _wordOptionsKeys.every(containThisProps);

    if (!container) {
      throw new Error("wordOptions must contain the following properties: ClassToAdd, SelectClass, PerWord");
    }

    if (isIts(ClassToAdd) !== "[object String]") {
      throw new Error("ClassToAdd must be a string");
    } else if (isIts(PerWord) !== "[object Boolean]") {
      throw new Error("PreWord must be a boolean");
    }

    var wrappProps = {
      SelectClass: SelectClass || {},
      ClassToAdd: ClassToAdd || "",
      perWord: wordOptions[0].PerWord || false,
      text: text,
      Structure: Structure,
      specialStructure: specialStructure
    };

    if (_wordOptionsKeys.includes('SelectClass')) {
      if (isIts(SelectClass) !== "[object Object]") {
        throw new Error("SelectClass must be an object");
      }

      return (0, _specialClass.selectSpecialClass)(wrappProps);
    } else {
      return (0, _wrappLetter.WrappLetter)(wrappProps);
    }
  } // ---- warning of empty wordOpting---- //


  if (wordOptionsKeys.length === 0) {
    Structure !== baseStructure ? console.warn('"wordOptions" is empty, returning a simple wrapper with structure') : console.warn('"wordOptions" is empty, returning a simple wrapper of letters');
  } // ---- Leave the process, start normal wrapp ---- //


  return wrappedLetters;
}