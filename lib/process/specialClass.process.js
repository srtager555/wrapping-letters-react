"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process__select_specialClass__ = process__select_specialClass__;

function process__select_specialClass__(_ref) {
  let {
    SelectClass,
    crumbledText,
    PerWord
  } = _ref;
  // Here the code will transform the user's code
  // to useful information to the code Xd
  let searchWordValue = SelectClass.wordToSearch;
  let specialClass; // comprobation for search within words

  if (SelectClass.spaceBetweenWord === true && PerWord === false) {
    crumbledText.push(" ");
    crumbledText.unshift(" ");
  }

  specialClass = SelectClass.classToAdd;
  return {
    searchWordValue: searchWordValue || new String(),
    specialClass: specialClass || new String(),
    spaceBetweenWord: SelectClass.spaceBetweenWord || false
  };
}