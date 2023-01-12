"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecialWrapp = void 0;

var _base = require("../../base.class");

var _specialWrapp = require("./specialWrapp.process");

var _specialWrapp2 = require("./specialWrapp.error");

class SpecialWrapp extends _base.Base {
  constructor(SpecialWrapp, PerWord) {
    super({
      name: "SpecialWrapp",
      SpecialArray: {
        targets: SpecialWrapp.wordToSearch,
        elementsToGive: SpecialWrapp.structureToAdd
      },
      __process: () => (0, _specialWrapp.process__select_specialWrapp__)({
        wordToSearch: SpecialWrapp.wordToSearch,
        structureToAdd: SpecialWrapp.structureToAdd,
        spaceBetweenWord: SpecialWrapp.spaceBetweenWord
      }),
      __error: () => (0, _specialWrapp2.error__Filter_SpecialWrapp__)(SpecialWrapp, PerWord)
    });
  }

}

exports.SpecialWrapp = SpecialWrapp;