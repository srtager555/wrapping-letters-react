"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WrappingLetters;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireDefault(require("react"));

var _wrappLetter = require("./wrappLetter.module");

var _specialClass = require("./specialClass.module");

const _excluded = ["letter", "cssClass"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function WrappingLetters(_ref) {
  let {
    word = "Hello world !!! <3",
    wordOptions = [],
    structure
  } = _ref;

  function baseStructure(_ref2) {
    let {
      letter,
      cssClass
    } = _ref2,
        props = _objectWithoutProperties(_ref2, _excluded);

    return /*#__PURE__*/_react.default.createElement("span", _extends({
      className: cssClass
    }, props), letter);
  }

  const Structure = structure || baseStructure;
  let specialStructure = Structure !== baseStructure ? true : false;

  const isIts = it => {
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

  let text = [...word];
  var wrappedLetters = text.map(function (letter, index) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: "letter ".concat(index)
    }, letter);
  });

  if (isIts(wordOptions) !== "[object Array]") {
    throw new Error("wordOptions must be an array");
  } else if (wordOptions.length > 0) {
    if (isIts(wordOptions[0]) !== "[object Object]") {
      throw new Error("inside the array of wordOptions there must be an object");
    }

    let wordOptionsKeys = Object.keys(wordOptions[0]);
    let {
      ClassToAdd,
      SelectClass
    } = wordOptions[0];

    const verifyWordOptionsKeys = function verifyWordOptionsKeys(value) {
      let valueNb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
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
        text,
        ClassToAdd,
        Structure,
        specialStructure
      });
    }

    if (verifyWordOptionsKeys("SelectClass")) {
      return (0, _specialClass.selectSpecialClass)({
        SelectClass,
        text,
        ClassToAdd: "",
        Structure,
        specialStructure
      });
    }

    if (verifyWordOptionsKeys("ClassToAdd", 2) && verifyWordOptionsKeys("SelectClass", 2)) {
      return (0, _specialClass.selectSpecialClass)({
        SelectClass,
        text,
        ClassToAdd,
        Structure,
        specialStructure
      });
    } // ---- warning of empty wordOpting---- //


    if (wordOptionsKeys.length === 0) {
      console.warn('"wordOptions" is empty, returning a simple wrapper of letters');
    } // ---- Leave the process, start normal wrapp ---- //

  }

  return wrappedLetters;
}