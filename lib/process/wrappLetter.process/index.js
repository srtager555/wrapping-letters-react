"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappLetter = WrappLetter;

var _react = _interopRequireDefault(require("react"));

var _WrappingLetters = require("./WrappingLetters.class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function WrappLetter(TEXT_OPTIONS, STRUCTURE) {
  const test = false;
  const {
    crumbledText,
    ClassToAdd,
    SelectClass,
    PerWord
  } = TEXT_OPTIONS;
  const CustomComponent = STRUCTURE.getStructure.structure;
  const CustomProps = STRUCTURE.getStructure.props;
  var arrElements = crumbledText.map((wrappElement, index) => {
    const WL = new _WrappingLetters.LettersWrapping(wrappElement, crumbledText, index, TEXT_OPTIONS);
    let newCrumbledText; // This block code has the work find the Special Data with the index

    const VALUES_TO_ADD = Object.fromEntries(TEXT_OPTIONS.takeAttributesTheySeek.map(el => {
      let value = WL.getSpecialArrayResults(el);
      if (!value) newCrumbledText = [wrappElement];else if (PerWord.process) {
        newCrumbledText = [value + " "];
      } else {
        newCrumbledText = value ? [...value] : "";
        value = value ? value : "";
      }
      return [el.name, el.findTarget(value ? value : "")];
    }));
    const SelectClassProps = {
      specialStructure: STRUCTURE.current.hasSpecialStructure,
      ClassToAdd: ClassToAdd.process,
      newClass: VALUES_TO_ADD.SelectClass ? VALUES_TO_ADD.SelectClass.result : ""
    };
    const wl = newCrumbledText.map(el => {
      var _VALUES_TO_ADD$Specia, _VALUES_TO_ADD$Specia2;

      return {
        letter: el,
        cssClass: VALUES_TO_ADD.SelectClass ? VALUES_TO_ADD.SelectClass.process(SelectClassProps) : SelectClass.SpecialArray.process(SelectClassProps),
        specialWrapp: {
          hasCustomWrapp: ((_VALUES_TO_ADD$Specia = VALUES_TO_ADD.SpecialWrapp) === null || _VALUES_TO_ADD$Specia === void 0 ? void 0 : _VALUES_TO_ADD$Specia.result) && true,
          NewWrappStructure: (_VALUES_TO_ADD$Specia2 = VALUES_TO_ADD.SpecialWrapp) === null || _VALUES_TO_ADD$Specia2 === void 0 ? void 0 : _VALUES_TO_ADD$Specia2.result
        }
      };
    });

    if (!PerWord.process) {
      crumbledText.splice(index, newCrumbledText.length - 1);
    }

    return wl;
  }).flat();

  if (arrElements[0].letter === " " && arrElements[arrElements.length - 1].letter === " ") {
    arrElements.pop();
    arrElements.shift();
  } // Switch for test files


  if (test) return arrElements;
  var wrappedLetters = arrElements.map(function (wrappElement, index) {
    return /*#__PURE__*/_react.default.createElement(CustomComponent, _extends({
      index: index,
      key: `'${wrappElement.letter}'-${index}`
    }, wrappElement, CustomProps));
  });
  return wrappedLetters;
}