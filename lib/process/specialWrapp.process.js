"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process__select_specialWrapp__ = process__select_specialWrapp__;

function process__select_specialWrapp__(_ref) {
  let {
    wordToSearch,
    structureToAdd
  } = _ref;
  let props = {
    hasCustomWrapp: false,
    wordToWrapp: wordToSearch || new String(),
    wrappToAdd: structureToAdd || undefined
  };
  if (!Array.isArray(props.wordToWrapp)) props.wordToWrapp = [props.wordToWrapp];
  return props;
}