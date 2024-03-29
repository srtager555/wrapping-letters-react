"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseErrorSeekers = BaseErrorSeekers;

var _whatIsIt = require("../common/whatIsIt");

var _propsFilter = require("./props-filter.error");

function BaseErrorSeekers(_ref) {
  let {
    entry,
    Attributes,
    PerWord,
    customError
  } = _ref;
  const NEXT_FILTER = BaseErrorFilter(entry, Attributes, PerWord);
  if (NEXT_FILTER && customError) customError();
}

function BaseErrorFilter(entry, Attributes, PerWord) {
  if ((0, _whatIsIt.whatItIs)(entry) != "[object Object]") throw new Error(`${entry.name} must be an Object!!! :s`);
  const KEYS_VALUES = Object.keys(entry.values);
  const WORD_TO_SEARCH = entry.values["wordToSearch"]; // If SelectClass an empty Object the filter ends here

  if (KEYS_VALUES.length === 0) return false; // Adding default and optional value

  Attributes.push("spaceBetweenWord", "wordToSearch"); // here the code will if contains the correct props

  (0, _propsFilter.error__props_filter__)(entry.values, Attributes); //  ****** WTS comprobations ******

  if (!WORD_TO_SEARCH) {
    throw new Error(`"${entry.name}" must be contain wordToSearch to search the targets o.O`);
  }

  if (typeof WORD_TO_SEARCH != "string" && !Array.isArray(WORD_TO_SEARCH)) {
    throw new Error(`${entry.name} - "wordToSearch" must be a String or an Array`);
  } // here the code check if the Array inside an Array only has strings


  if (Array.isArray(WORD_TO_SEARCH)) {
    WORD_TO_SEARCH.forEach(el => {
      if ((0, _whatIsIt.whatItIs)(el) != "[object String]" && !Array.isArray(el)) {
        throw new Error(`${entry.name} - wordToSearch - An Array only can receive strings and another Arrays of strings`);
      }

      if (Array.isArray(el)) {
        el.forEach(element => {
          if ((0, _whatIsIt.whatItIs)(element) != "[object String]") throw new Error(`${entry.name} - wordToSearch - An Array inside another Array only can receive strings`);
        });
      }
    }); //  ****** WTS comprobations - END ******

    const SBW = entry.values.spaceBetweenWord;
    if ((0, _whatIsIt.whatItIs)(SBW) != "[object Boolean]" && typeof SBW != "undefined") throw new Error(`${entry.name} - spaceBetweenWord must be a boolean or an undefiend`);

    if (PerWord && SBW) {
      // eslint-disable-next-line no-console
      console.warn(`${entry.name} - "spaceBetweenWord" is disable when "PerWord" is true, turn SBW to false to resolve this warn`);
    }

    return true;
  }
}