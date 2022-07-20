"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process__select_specialWrapp__ = process__select_specialWrapp__;

function process__select_specialWrapp__(wordToSearch, structureToAdd) {
  return {
    hasModification: false,
    wordToSearch: wordToSearch || new String(),
    structureToAdd: structureToAdd || undefined
  };
}