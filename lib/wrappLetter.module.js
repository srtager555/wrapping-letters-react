"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappLetter = WrappLetter;

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

// The function needs to be upgraded for the attribute perWord
function WrappLetter(_ref) {
  var _ref$SelectClass = _ref.SelectClass,
      SelectClass = _ref$SelectClass === void 0 ? {
    searchWordValue: 0,
    searchWordValueLength: 0,
    specialClass: "",
    spaceBetweenWord: false
  } : _ref$SelectClass,
      text = _ref.text,
      ClassToAdd = _ref.ClassToAdd,
      Structure = _ref.Structure,
      _ref$specialStructure = _ref.specialStructure,
      specialStructure = _ref$specialStructure === void 0 ? false : _ref$specialStructure;
  var searchWordValue = SelectClass.searchWordValue,
      searchWordValueLength = SelectClass.searchWordValueLength,
      specialClass = SelectClass.specialClass,
      spaceBetweenWord = SelectClass.spaceBetweenWord;
  var arrElements = text.map(function (wrappElement, index) {
    if (searchWordValue.length > 0 && wrappElement === searchWordValue[0] && index + searchWordValueLength <= text.length && text.slice(index, index + searchWordValueLength).join("") === searchWordValue.join("")) {
      var newText = text.slice(index, spaceBetweenWord ? index + searchWordValueLength - 1 : index + searchWordValueLength);
      var wl = newText.map(function (wrappElement, index) {
        return [// letter or word
        wrappElement, // cssClass
        !specialStructure ? [ClassToAdd, specialClass].join(" ") : specialClass, // Key
        "\"".concat(wrappElement, "\"-").concat(index)];
      });
      text.splice(index, spaceBetweenWord ? searchWordValueLength - 2 : searchWordValueLength - 1);
      return wl;
    } else {
      return [[// letter or word
      wrappElement, // cssClass
      !specialStructure ? ClassToAdd : "", // Key
      "\"".concat(wrappElement, "\"-").concat(index)]];
    }
  }).flat();

  if (arrElements[0][0] === " " && arrElements[arrElements.length - 1][0] === " ") {
    arrElements.pop();
    arrElements.shift();
  }

  var wrappedLetters = arrElements.map(function (wrappElement, index) {
    return __jsx(Structure, {
      letter: wrappElement[0],
      cssClass: wrappElement[1],
      key: wrappElement[2]
    });
  });
  return wrappedLetters;
}