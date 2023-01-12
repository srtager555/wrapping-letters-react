"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process__select_specialWrapp__ = process__select_specialWrapp__;

var _whatIsIt = require("../../../../common/whatIsIt");

function process__select_specialWrapp__(_ref) {
  let {
    wordToSearch,
    structureToAdd,
    spaceBetweenWord
  } = _ref;
  let props = {
    hasCustomWrapp: false,
    hasCustomProps: false,
    wordToWrapp: wordToSearch || new String(),
    wrappToAdd: structureToAdd,
    spaceBetweenWord: spaceBetweenWord || false
  }; // here the code need a check if the attribute... wait a moment

  if ((0, _whatIsIt.whatItIs)(structureToAdd) === "[object Object]") props.wrappToAdd.props.awa = "uwu"; //the container does not process the object, it only returns it when needed

  if (!Array.isArray(props.wordToWrapp)) props.wordToWrapp = [props.wordToWrapp];
  return props;
}