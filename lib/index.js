"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = WrappingLetters;

var _react = _interopRequireDefault(require("react"));

var _layout = require("./layout");

var _wrappLetter = require("./wrappLetter.module");

var _specialClass = require("./specialClass.process");

var _error = require("./error");

var _whatIsIt = require("./common/whatIsIt");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function WrappingLetters(_ref) {
  let { text = "Hello world !!! <3", textOptions = {}, structure } = _ref;

  // first need declare the component to return
  function baseStructure(_ref2) {
    let { letter, cssClass, specialStructure = {} } = _ref2;

    function DEFAULT_COMPONENT(_ref3) {
      let { letter, cssClass } = _ref3;
      return /*#__PURE__*/ _react.default.createElement(
        "span",
        {
          className: cssClass,
        },
        letter
      );
    }

    const {
      hasModification = false,
      NewTagStructure = () =>
        /*#__PURE__*/ _react.default.createElement(DEFAULT_COMPONENT, {
          letter: letter,
          cssClass: cssClass,
        }),
    } = specialStructure;
    return hasModification
      ? /*#__PURE__*/ _react.default.createElement(NewTagStructure, null)
      : /*#__PURE__*/ _react.default.createElement(DEFAULT_COMPONENT, {
          letter: letter,
          cssClass: cssClass,
        });
  } // if the user has a custom structure here it will be changed by it

  const Structure = structure || baseStructure;
  let specialStructure = Structure !== baseStructure ? true : false; // checks to avoid errors

  if ((0, _whatIsIt.whatItIs)(text) !== "[object String]") {
    throw new Error("text must be a string");
  }

  if (text === "") {
    throw new Error("text cannot be empty");
  }

  if ((0, _whatIsIt.whatItIs)(Structure) !== "[object Function]") {
    throw new Error("Structure must be a function(React Component)");
  } // textOptions must be an Object

  if ((0, _whatIsIt.whatItIs)(textOptions) !== "[object Object]")
    throw new Error('"textOptions" must be an Object --- wrapping-letters');
  let wrappProps = {
    Structure,
    specialStructure,
  }; // delfaut value layout and value comprobations

  (0, _layout.textOptions__process_layout__)(textOptions, wrappProps); // here the code will cath the errors in the user's code

  (0, _error.error__main_filter__)(wrappProps);
  const { ClassToAdd, SelectClass, SpecialWrapp, PerWord } = wrappProps; // here the code will declare the crumble text per word or letters

  const crumbledText = PerWord ? text.split(" ") : [...text]; // Process of the specialClass object

  const SPECIAL_CLASS__INFO_PROCESSED = (0,
  _specialClass.process__select_specialClass__)({
    SelectClass: wrappProps.SelectClass,
    crumbledText,
    PerWord,
  });
  wrappProps.SelectClass = SPECIAL_CLASS__INFO_PROCESSED; // The code will add the last values in the obj.

  wrappProps.crumbledText = crumbledText;
  return (0, _wrappLetter.WrappLetter)(wrappProps);
}
