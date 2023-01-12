"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error__Filter_SelectClass__ = error__Filter_SelectClass__;

var _whatIsIt = require("../../../../common/whatIsIt");

var _baseErrorSeekers = require("../../../../error/baseError-seekers.error");

function error__Filter_SelectClass__(SelectClass, PerWord) {
  (0, _baseErrorSeekers.BaseErrorSeekers)({
    entry: {
      name: "SelectClass",
      values: SelectClass
    },
    Attributes: ["classToAdd"],
    PerWord,
    customError: () => custom()
  }); // here the code will check if classToAdd is correct

  function custom() {
    const {
      classToAdd
    } = SelectClass;

    if (!classToAdd) {
      throw new Error('"SelectClass" - "classToAdd" is a required attribute to this feature');
    }

    if (typeof classToAdd != "string" && !Array.isArray(classToAdd)) {
      throw new Error('"classToAdd" must be a string or an array');
    } // An Array in a provider only can receive its correct value, in they case are strings


    if (Array.isArray(classToAdd)) {
      classToAdd.forEach(el => {
        if ((0, _whatIsIt.whatItIs)(el) != "[object String]") {
          throw new Error("SelectClass - An Array only can receive strings");
        }
      });
    }
  }
}