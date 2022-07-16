"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.error__Filter_structure__ = error__Filter_structure__;

function error__Filter_structure__(ClassToAdd, specialStructure) {
  if (specialStructure)
    if (ClassToAdd != "") {
      console.warn(
        "When the component has a 'special structure', 'ClassToAdd' is disabled"
      );
      console.warn("Remove 'ClassToAdd' for disapper this logs");
    }
}
