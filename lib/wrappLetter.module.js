"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappLetter = WrappLetter;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WrappLetter(_ref) {
  let {
    SelectClass = {
      searchWordValue: 0,
      searchWordValueLength: 0,
      specialClass: ""
    },
    text,
    ClassToAdd,
    Structure,
    specialStructure = false
  } = _ref;
  let {
    searchWordValue,
    searchWordValueLength,
    specialClass
  } = SelectClass;
  var wrappedLetters = text.map((letter, index) => {
    if (searchWordValue.length > 0 && letter === searchWordValue[0] && index + searchWordValueLength <= text.length && text.slice(index, index + searchWordValueLength).join("") === searchWordValue.join("")) {
      const newText = text.slice(index, index + searchWordValueLength);
      var wl = newText.map(letter => {
        return /*#__PURE__*/_react.default.createElement(Structure, {
          letter: letter,
          cssClass: !specialStructure ? [ClassToAdd, specialClass].join(" ") : specialClass,
          key: "".concat(letter, " ").concat(index, "-").concat(Math.random())
        });
      });
      text.splice(index, searchWordValueLength - 1);
      return wl;
    } else {
      return /*#__PURE__*/_react.default.createElement(Structure, {
        letter: letter,
        cssClass: !specialStructure ? ClassToAdd : "",
        key: "".concat(letter, " ").concat(index, "-").concat(Math.random())
      });
    }
  });
  return wrappedLetters;
}