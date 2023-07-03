"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error__Filter_SpecialWrapp__ = error__Filter_SpecialWrapp__;

var _whatIsIt = require("../../../../common/whatIsIt");

var _baseErrorSeekers = require("../../../../error/baseError-seekers.error");

function error__Filter_SpecialWrapp__(SpecialWrapp, PerWord) {
  (0, _baseErrorSeekers.BaseErrorSeekers)({
    entry: {
      name: "SpecialWrapp",
      values: SpecialWrapp
    },
    Attributes: ["structureToAdd"],
    PerWord,
    customError: () => custom()
  });

  function custom() {
    const {
      structureToAdd
    } = SpecialWrapp; // from now on the code will check if
    // the attribute has the correct conditions

    if ((0, _whatIsIt.whatItIs)(structureToAdd) != "[object Object]" && (0, _whatIsIt.whatItIs)(structureToAdd) != "[object Function]" && !Array.isArray(structureToAdd)) {
      throw new Error('SpecialWrapp --- "structureToAdd" must be an Array, Object or Function');
    } // here the code will verify that the object has the correct attributes


    if ((0, _whatIsIt.whatItIs)(structureToAdd) === "[object Object]") __comprobation_correct_attributes__(structureToAdd); // here the code will check each element from an Array

    if (Array.isArray(structureToAdd)) {
      // here the will iterate the elements
      structureToAdd.forEach(element => {
        // here the code will know if the element has the correct element inside it
        if ((0, _whatIsIt.whatItIs)(element) != "[object Object]" && (0, _whatIsIt.whatItIs)(element) != "[object Function]") {
          var err = `SpecialWrapp --- The Elements on the Array from "structureToAdd" must be an Object or Component, You did put an ${(0, _whatIsIt.whatItIs)(element)}`;
          throw new Error(err);
        }

        if ((0, _whatIsIt.whatItIs)(element) === "[object Object]") __comprobation_correct_attributes__(element);
      });
    }
  }
}

function __comprobation_correct_attributes__(element) {
  // If SelectClass an empty Object the filter ends here
  if (element.length === 0) throw new Error('SpecialWrapp - The Wrapper can process empty objects on strutureToAdd from SpecialWrapp "{}"');

  if (!element["structureToAdd"]) {
    throw new Error('"SpecialWrapp" - if you want send props to you wrap, the object need the Attribute `structureToAdd<Component>`');
  }

  if (!element["props"]) {
    throw new Error('"SpecialWrapp" - if you want send props to you wrap, the object need the Attribute `props<Object>`');
  }

  if ((0, _whatIsIt.whatItIs)(element.structureToAdd) != "[object Function]") {
    let err = `SpecialWrapp - "structureToAdd" from an Object must be a Component/function `;
    throw new Error(err);
  }

  if ((0, _whatIsIt.whatItIs)(element.props) != "[object Object]") {
    let err = `SpecialWrapp - "props" from an Object must be an Object `;
    throw new Error(err);
  }
}