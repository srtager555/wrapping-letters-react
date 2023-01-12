"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process__structure__ = process__structure__;

var _whatIsIt = require("../../common/whatIsIt");

function process__structure__(Structure) {
  if ((0, _whatIsIt.whatItIs)(Structure) === "[object Object]") return Structure;
  return {
    structure: Structure,
    props: {
      awadeawa: "a"
    }
  };
}