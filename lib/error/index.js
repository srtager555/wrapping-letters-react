"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.error__main_filter__ = error__main_filter__;

var _whatIsIt = require("../common/whatIsIt");

var _specialClass = require("./specialClass.error");

var _structure = require("./structure.error");

function error__main_filter__(wrappProps) {
  const { ClassToAdd, SelectClass, SpecialWrapp, specialStructure, PerWord } =
    wrappProps;
  if ((0, _whatIsIt.whatItIs)(ClassToAdd) !== "[object String]")
    throw new Error("ClassToAdd must be a string");
  if ((0, _whatIsIt.whatItIs)(PerWord) !== "[object Boolean]")
    throw new Error("PerWord must be a boolean");
  (0, _specialClass.error__Filter_SpecialClass__)(SelectClass, PerWord);
  (0, _structure.error__Filter_structure__)(ClassToAdd, specialStructure);
}
