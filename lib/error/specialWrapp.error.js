"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error__Filter_SpecialWrapp__ = error__Filter_SpecialWrapp__;

var _whatIsIt = require("../common/whatIsIt");

function error__Filter_SpecialWrapp__(SpecialWrapp) {
  if ((0, _whatIsIt.whatItIs)(SpecialWrapp) != "[object Object]") throw new Error("SpecialWrapp must be an Object --- Wrapping Letters");
  if (Object.keys(SpecialWrapp).length === 0) return;
  const {
    wordToSearch,
    structureToAdd
  } = SpecialWrapp;

  if ((0, _whatIsIt.whatItIs)(wordToSearch) != "[object String]" && !Array.isArray(wordToSearch)) {
    throw new Error('SpecialWrapp --- "wordToSearch" must be an Array or String');
  }

  if ((0, _whatIsIt.whatItIs)(structureToAdd) != "[object Function]" && !Array.isArray(structureToAdd)) {
    throw new Error('SpecialWrapp --- "structureToAdd" must be an Array or Function(component)');
  }
}