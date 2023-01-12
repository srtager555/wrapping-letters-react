"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process__SelectClass__ = process__SelectClass__;

function process__SelectClass__(_ref) {
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
  let props = {
    searchWordValue: searchWordValue || new String(),
    specialClass: specialClass || new String(),
    spaceBetweenWord: SelectClass.spaceBetweenWord || false
  };
  if (!Array.isArray(props.searchWordValue)) props.searchWordValue = [props.searchWordValue];
  return props;
}