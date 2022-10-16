"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WrappingLetters;

var _react = _interopRequireDefault(require("react"));

var _wrappLetter = require("./process/wrappLetter.process");

var _layout = require("./layout");

var _error = require("./error");

var _propsFilter = require("./error/props-filter.error");

var _specialClass = require("./process/specialClass.process");

var _specialWrapp = require("./process/specialWrapp.process");

var _whatIsIt = require("./common/whatIsIt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param  {string} text - what do you need wrap? here put your text.
 * @param  {Object} textOptions - Here you'll put the options to wrap
 * @param  {JSX.Element} structure - Here put the component with the JSX syntax that you want out each wrap
 * @returns {JSX.Element} returns multiple React components on JSX
 */
function WrappingLetters() {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    text: new String(),
    textOptions: new Object(),
    structure: new Function()
  };

  // first need declare the component to return
  function baseStructure(_ref) {
    let {
      letter,
      cssClass,
      specialWrapp
    } = _ref;

    // eslint-disable-next-line react/prop-types
    function DEFAULT_COMPONENT(_ref2) {
      let {
        letter,
        cssClass
      } = _ref2;
      return /*#__PURE__*/_react.default.createElement("span", {
        className: cssClass
      }, letter);
    }

    const {
      hasCustomWrapp,
      NewWrappStructure = () => /*#__PURE__*/_react.default.createElement(DEFAULT_COMPONENT, {
        letter: letter,
        cssClass: cssClass
      })
    } = specialWrapp;
    return hasCustomWrapp ? /*#__PURE__*/_react.default.createElement(NewWrappStructure, {
      letter: letter,
      cssClass: cssClass
    }) : /*#__PURE__*/_react.default.createElement(DEFAULT_COMPONENT, {
      letter: letter,
      cssClass: cssClass
    });
  } // Here the code'll verify if the props are correct.


  (0, _propsFilter.error__props_filter__)(props);
  let {
    text = "Hellos world!!! <3",
    textOptions = {},
    structure
  } = props; // if the user has a custom structure here it will be changed by it

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


  if ((0, _whatIsIt.whatItIs)(textOptions) !== "[object Object]") throw new Error('"textOptions" must be an Object --- wrapping-letters');
  let wrappProps = {
    Structure,
    specialStructure
  }; // delfaut value layout and value comprobations

  (0, _layout.textOptions__process_layout__)(textOptions, wrappProps); // here the code will cath the errors in the user's code

  (0, _error.error__main_filter__)(wrappProps); // ClassToAdd, SelectClass,

  const {
    SpecialWrapp,
    PerWord
  } = wrappProps; // here the code will declare the crumble text per word or letters

  const crumbledText = PerWord ? text.split(" ") : [...text]; // Process of the specialClass object

  const SPECIAL_CLASS__INFO_PROCESSED = (0, _specialClass.process__select_specialClass__)({
    SelectClass: wrappProps.SelectClass,
    crumbledText,
    PerWord
  });
  const SPECIAL_WRAPP__INFO_PROCESSED = (0, _specialWrapp.process__select_specialWrapp__)({
    wordToSearch: SpecialWrapp.wordToSearch,
    structureToAdd: SpecialWrapp.structureToAdd
  });
  wrappProps.SelectClass = SPECIAL_CLASS__INFO_PROCESSED;
  wrappProps.SpecialWrapp = SPECIAL_WRAPP__INFO_PROCESSED; // The code will add the last values in the obj.

  wrappProps.crumbledText = crumbledText;
  return (0, _wrappLetter.WrappLetter)(wrappProps);
}