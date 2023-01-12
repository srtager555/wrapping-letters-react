"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectClass = void 0;

var _base = require("../../base.class");

var _specialClass = require("./specialClass.error");

var _specialClass2 = require("./specialClass.process");

class SelectClass extends _base.Base {
  constructor(SELECT_CLASS, ATTRIBUTES, crumbledText) {
    function Process(_ref) {
      let {
        specialStructure,
        ClassToAdd,
        newClass
      } = _ref;
      return !specialStructure ? [ClassToAdd, newClass].join(" ") : newClass;
    }

    super({
      name: "SelectClass",
      SpecialArray: {
        targets: SELECT_CLASS.wordToSearch,
        elementsToGive: SELECT_CLASS.classToAdd,
        process: props => Process(props)
      },
      __process: () => (0, _specialClass2.process__SelectClass__)({
        SelectClass: ATTRIBUTES.SelectClass,
        PerWord: ATTRIBUTES.PerWord,
        crumbledText: crumbledText
      }),
      __error: () => (0, _specialClass.error__Filter_SelectClass__)(ATTRIBUTES.SelectClass, ATTRIBUTES.PerWord)
    });
  }

}

exports.SelectClass = SelectClass;