"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__specialArray__ = __specialArray__;

function __specialArray__(specialArray, SPECIAL_INDEX) {
  if (Array.isArray(specialArray)) {
    if (SPECIAL_INDEX > specialArray.length - 1) {
      return specialArray[0];
    } else {
      return specialArray[SPECIAL_INDEX];
    }
  } else return specialArray;
}