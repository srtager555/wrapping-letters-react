"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectSpecialClass = selectSpecialClass;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _wrappLetter = require("./wrappLetter.module");

function errorFilterSpecialClass(SelectClass) {
  var SelectClassKeys = Object.keys(SelectClass);
  var searchWord = SelectClassKeys.some(function (key) {
    return key === "wordToSearch";
  });
  var searchWordClass = SelectClassKeys.some(function (key) {
    return key === "classToAdd";
  });
  var searchSBW = SelectClassKeys.some(function (key) {
    return key === "spaceBetweenWord";
  });

  if (!searchWord && !searchWordClass && !searchSBW) {
    throw new Error("SelectClass must have 3 keys : wordToSearch, spaceBetweenWord and classToAdd");
  }

  if (Object.prototype.toString.call(SelectClass.wordToSearch) !== "[object String]" || Object.prototype.toString.call(SelectClass.spaceBetweenWord) !== "[object Boolean]" || Object.prototype.toString.call(SelectClass.classToAdd) !== "[object String]") {
    throw new Error("wordToSearch and classToAdd must be a string, spaceBetweenWord must be a boolean");
  }
} // ====== select special class to add ======


function selectSpecialClass(_ref) {
  var SelectClass = _ref.SelectClass,
      text = _ref.text,
      ClassToAdd = _ref.ClassToAdd,
      Structure = _ref.Structure,
      specialStructure = _ref.specialStructure;

  if (Object.keys(SelectClass).length !== 3) {
    throw new Error("SelectClass must have 3 keys : wordToSearch, spaceBetween and classToAdd");
  } else {
    var searchWordValue;
    var searchWordValueLength;
    var specialClass;
    errorFilterSpecialClass(SelectClass);
    searchWordValue = (0, _toConsumableArray2["default"])(SelectClass.wordToSearch);

    if (SelectClass.spaceBetweenWord === true) {
      searchWordValue.unshift(" ");
      searchWordValue.push(" ");
      text.push(" "); // temporary solution

      text.unshift(" ");
    }

    searchWordValueLength = searchWordValue.length;
    specialClass = SelectClass.classToAdd;
    return (0, _wrappLetter.WrappLetter)({
      SelectClass: {
        searchWordValue: searchWordValue,
        searchWordValueLength: searchWordValueLength,
        specialClass: specialClass,
        spaceBetweenWord: SelectClass.spaceBetweenWord
      },
      text: text,
      ClassToAdd: ClassToAdd,
      Structure: Structure,
      specialStructure: specialStructure
    });
  }
} // ====== select special class to add ======