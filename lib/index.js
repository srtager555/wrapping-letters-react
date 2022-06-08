"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WrappingLetters;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _wrappLetter = require("./wrappLetter.module");

var _specialClass = require("./specialClass.module");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function WrappingLetters(_ref) {
  let {
    text = "Hello world !!! <3",
    textOptions = [{}],
    structure
  } = _ref;

  function baseStructure(_ref2) {
    let {
      letter,
      cssClass,
      ...props
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement("span", _extends({
      className: cssClass
    }, props), letter);
  }

  const Structure = structure || baseStructure;
  let specialStructure = Structure !== baseStructure ? true : false;
  const {
    PerWord = false,
    ClassToAdd = new String(),
    SelectClass = {}
  } = textOptions[0];

  const isIts = it => {
    return Object.prototype.toString.call(it);
  };

  if (isIts(text) !== "[object String]") {
    throw new Error("text must be a string");
  }

  if (text === "") {
    throw new Error("text cannot be empty");
  }

  if (isIts(Structure) !== "[object Function]") {
    throw new Error("Structure must be a function(React Component)");
  }

  if (isIts(PerWord) !== "[object Boolean]") {
    throw new Error("PerWord must be a boolean");
  }

  let crumbledText = PerWord ? text.split(" ") : [...text];
  var wrappedLetters = crumbledText.map(function (letter, index) {
    var a;

    if (PerWord) {
      if (index != crumbledText.length - 1) {
        a = letter + " ";
      } else {
        a = letter;
      }
    }

    return /*#__PURE__*/_react.default.createElement(Structure, {
      letter: a,
      key: `${letter} ${index}-${Math.random()}`
    });
  });

  if (isIts(textOptions) !== "[object Array]") {
    throw new Error("textOptions must be an array");
  } else if (textOptions.length > 0) {
    if (isIts(textOptions[0]) !== "[object Object]") {
      throw new Error("inside the array of textOptions there must be an object");
    }

    let textOptionsKeys = Object.keys(textOptions[0]);

    const verifytextOptionsKeys = function (value) {
      let valueNb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (textOptionsKeys.length === valueNb && textOptionsKeys.includes(value)) return true;else return false;
    };

    if (textOptions.length > 1) {
      throw new Error("textOptions must be a single object");
    }

    const wl_props = ['ClassToAdd', 'SelectClass', 'PerWord'];

    const containThisProps = value => wl_props.includes(value);

    const container = textOptionsKeys.every(containThisProps);

    if (!container) {
      throw new Error("textOptions must contain the following properties: ClassToAdd, SelectClass, PerWord");
    }

    if (isIts(ClassToAdd) !== "[object String]") {
      throw new Error("ClassToAdd must be a string");
    } else if (isIts(PerWord) !== "[object Boolean]") {
      throw new Error("PerWord must be a boolean");
    }

    const wrappProps = {
      SelectClass,
      ClassToAdd,
      perWord: PerWord,
      crumbledText,
      Structure,
      specialStructure
    };

    if (textOptionsKeys.includes('SelectClass')) {
      if (isIts(SelectClass) !== "[object Object]") {
        throw new Error("SelectClass must be an object");
      }

      return (0, _specialClass.selectSpecialClass)(wrappProps);
    } else {
      return (0, _wrappLetter.WrappLetter)(wrappProps);
    }
  } // ---- warning of empty textOpting---- //


  if (textOptionsKeys.length === 0) {
    Structure !== baseStructure ? console.warn('"textOptions" is empty, returning a simple wrapper with structure') : console.warn('"textOptions" is empty, returning a simple wrapper of letters');
  } // ---- Leave the process, start normal wrapp ---- //


  return wrappedLetters;
}