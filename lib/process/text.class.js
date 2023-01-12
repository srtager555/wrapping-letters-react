"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__Text__process__ = void 0;

var _whatIsIt = require("../common/whatIsIt");

// checks to avoid errors
class __Text__process__ {
  constructor(text) {
    this.text = text;

    (function (text) {
      if ((0, _whatIsIt.whatItIs)(text) !== "[object String]") {
        throw new Error("text must be a string");
      }

      if (text === "") {
        throw new Error("text cannot be empty");
      }
    })(this.text);
  }

}

exports.__Text__process__ = __Text__process__;