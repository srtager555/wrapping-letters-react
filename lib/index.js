"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WrappingLetters;

var _react = _interopRequireDefault(require("react"));

var _wrappLetter = require("./wrappLetter.module");

var _specialClass = require("./specialClass.module");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WrappingLetters(_ref) {
  let {
    text = "Hello world !!! <3",
    textOptions = {},
    structure
  } = _ref;

  // first need declare the component to return
  function baseStructure(_ref2) {
    let {
      letter,
      cssClass,
      specialStructure = {}
    } = _ref2;

    function DEFAULT_COMPONENT(_ref3) {
      let {
        letter,
        cssClass
      } = _ref3;
      return /*#__PURE__*/_react.default.createElement("span", {
        className: cssClass
      }, letter);
    }

    const {
      hasModification = false,
      NewTagStructure = () => /*#__PURE__*/_react.default.createElement(DEFAULT_COMPONENT, {
        letter: letter,
        cssClass: cssClass
      })
    } = specialStructure;
    return hasModification ? /*#__PURE__*/_react.default.createElement(NewTagStructure, null) : /*#__PURE__*/_react.default.createElement(DEFAULT_COMPONENT, {
      letter: letter,
      cssClass: cssClass
    });
  } // if the user has a custom structure here it will be changed by it


  const Structure = structure || baseStructure;
  let specialStructure = Structure !== baseStructure ? true : false; // now destructure the props

  const {
    PerWord = false,
    ClassToAdd = new String(),
    SelectClass = {},
    customWrapp = {}
  } = textOptions; // This function is to know what it is.

  const whatItIs = it => {
    return Object.prototype.toString.call(it);
  };

  if (whatItIs(text) !== "[object String]") {
    throw new Error("text must be a string");
  }

  if (text === "") {
    throw new Error("text cannot be empty");
  }

  if (whatItIs(Structure) !== "[object Function]") {
    throw new Error("Structure must be a function(React Component)");
  }

  if (whatItIs(PerWord) !== "[object Boolean]") {
    throw new Error("PerWord must be a boolean");
  } // here the code will make a simple wrapp for to return


  let crumbledText = PerWord ? text.split(" ") : [...text];
  var wrappedLetters = crumbledText.map(function (letter, index) {
    var a = letter;

    if (PerWord) {
      if (index != crumbledText.length - 1) {
        a = letter + " ";
      } else {
        a = letter;
      }
    }

    return /*#__PURE__*/_react.default.createElement(Structure, {
      letter: a,
      key: `'${letter}'-${index}}`
    });
  });
  const WHATIS_TEXTOPTIONS = whatItIs(textOptions); // textOptions must be an Object

  if ( // WHATIS_TEXTOPTIONS !== "[object Array]" &&
  WHATIS_TEXTOPTIONS !== "[object Object]") {
    // Come soon the code will work an array.
    console.warn('"textOptions" must be an Object --- wrapping-letters');
    console.warn("The component now is returning a simple wrapp --- wrapping-letters"); // here is a simple wrapp

    return wrappedLetters;
  } // textOptions can't be empty


  if (whatItIs(textOptions) === "[object Object]" && Object.keys(textOptions).length === 0) {
    // here is a simple wrapp
    return wrappedLetters;
  } // if (whatItIs(textOptions) !== "[object Array]") {
  //    throw new Error("textOptions must be an array");
  // } else
  //  if (textOptions.length > 0) {
  // if (whatItIs(textOptions[0]) !== "[object Object]") {
  //    throw new Error(
  //       "inside the array of textOptions there must be an object"
  //    );
  // }


  let textOptionsKeys = Object.keys(textOptions);

  const verifytextOptionsKeys = function (value) {
    let valueNb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    if (textOptionsKeys.length === valueNb && textOptionsKeys.includes(value)) return true;else return false;
  };

  if (textOptions.length > 1) {
    throw new Error("textOptions must be a single object");
  }

  const wl_props = ["ClassToAdd", "SelectClass", "SpecialStructure", "PerWord"];

  const containThisProps = value => wl_props.includes(value);

  const container = textOptionsKeys.every(containThisProps);

  if (!container) {
    throw new Error(`textOptions must contain the following properties: ${wl_props.join(" ")}`);
  }

  if (whatItIs(ClassToAdd) !== "[object String]") {
    throw new Error("ClassToAdd must be a string");
  } else if (whatItIs(PerWord) !== "[object Boolean]") {
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

  if (textOptionsKeys.includes("SelectClass")) {
    if (whatItIs(SelectClass) !== "[object Object]") {
      throw new Error("SelectClass must be an object");
    }

    return (0, _specialClass.selectSpecialClass)(wrappProps);
  } else {
    return (0, _wrappLetter.WrappLetter)(wrappProps);
  } // }
  // ---- warning of empty textOpting---- //
  // if (textOptionsKeys.length === 0) {
  //    Structure !== baseStructure
  //       ? console.warn(
  //            '"textOptions" is empty, returning a simple wrapper with structure'
  //         )
  //       : console.warn(
  //            '"textOptions" is empty, returning a simple wrapper of letters'
  //         );
  // } // ---- Leave the process, start normal wrapp ---- //
  // return wrappedLetters;

}