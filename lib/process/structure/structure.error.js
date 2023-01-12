"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error__Filter_structure__ = error__Filter_structure__;

var _whatIsIt = require("../../common/whatIsIt");

var _stringSimilarity = _interopRequireDefault(require("string-similarity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function error__Filter_structure__(ClassToAdd, specialStructure, Structure) {
  if (specialStructure) {
    // the check if it is not a correct element is in the index.js
    if ((0, _whatIsIt.whatItIs)(_whatIsIt.whatItIs) === "[object Object]") {
      const STRUCTURE_KEYS = Object.keys(Structure);
      const AVAILABLE_ATTRIBUTES = ["structure", "props"]; // here the code will iterate to search typing errors on the attributes

      STRUCTURE_KEYS.forEach(element => {
        const CONDITIONAL = AVAILABLE_ATTRIBUTES.some(el => el === element);

        if (!CONDITIONAL) {
          const SS = _stringSimilarity.default.findBestMatch(element, AVAILABLE_ATTRIBUTES);

          throw new Error(`"${element}" isn't a registered attribute in the prop "structure" when is an Object. Did you mean "${SS.bestMatch.target}"?`);
        }
      }); // here the code will check if the attribute has the correct values

      if ((0, _whatIsIt.whatItIs)(Structure.structure) != "[object Function]") throw new Error(`structure from the Object structure can't receive an ${(0, _whatIsIt.whatItIs)(Structure.structure)} as a value, the attribute structure should be a function/React Component`);
      if ((0, _whatIsIt.whatItIs)(Structure.props) != "[object Object]") throw new Error("props from the Object structure must be an Object");
      if (Object.keys(Structure.props).length === 0) throw new Error("the attribute props from the Object structure is empty!!! if you don't want send props just need send the structure without an object");
    } // here the code will check if textOptions has the attribute ClassToAdd


    if (ClassToAdd != "") {
      console.warn("When the component has a 'special structure', 'ClassToAdd' is disabled");
      console.warn("Remove 'ClassToAdd' for disapper this logs");
    }
  }
}