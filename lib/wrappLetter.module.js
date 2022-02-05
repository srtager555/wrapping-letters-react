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
    searchWordValue: "",
    searchWordValueLength: 0,
    specialClass: "",
    spaceBetweenWord: false
  } : _ref$SelectClass,
      text = _ref.text,
      ClassToAdd = _ref.ClassToAdd,
      Structure = _ref.Structure,
      _ref$specialStructure = _ref.specialStructure,
      specialStructure = _ref$specialStructure === void 0 ? false : _ref$specialStructure,
      _ref$perWord = _ref.perWord,
      perWord = _ref$perWord === void 0 ? false : _ref$perWord;
  var searchWordValue = SelectClass.searchWordValue,
      searchWordValueLength = SelectClass.searchWordValueLength,
      specialClass = SelectClass.specialClass,
      spaceBetweenWord = SelectClass.spaceBetweenWord;
  var arrElements = text.map(function (wrappElement, index) {
    if (!perWord && searchWordValue.length > 0 && wrappElement[0] === searchWordValue[0] && index + searchWordValueLength <= text.length && text.slice(index, index + searchWordValueLength).join("") === searchWordValue.join("")) {
      var newText = text.slice(index, spaceBetweenWord ? index + searchWordValueLength - 1 : index + searchWordValueLength);
      var wl = newText.map(function (wrappElement, index) {
        return [// letter or word
        wrappElement, // cssClass
        !specialStructure ? [ClassToAdd, specialClass].join(" ") : specialClass];
      });
      text.splice(index, spaceBetweenWord ? searchWordValueLength - 2 : searchWordValueLength - 1);
      return wl;
    } else {
      var cssClass = !specialStructure ? ClassToAdd : "";

      if (perWord) {
        if (index != text.length - 1) {
          wrappElement = wrappElement + " ";
        } else {
          wrappElement = wrappElement;
        }

        if (wrappElement === searchWordValue.join("")) {
          cssClass = !specialStructure ? [ClassToAdd, specialClass].join(" ") : specialClass;
        }
      }

      return [[// letter or word
      wrappElement, // cssClass
      cssClass]];
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
      key: "".concat(wrappElement[0], "-").concat(index)
    });
  });
  return wrappedLetters;
}