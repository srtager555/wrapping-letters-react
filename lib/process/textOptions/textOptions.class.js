"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__TextOptions__process__ = void 0;

var _whatIsIt = require("../../common/whatIsIt");

var _SelectClass = require("./method/SelectClass/SelectClass.class");

var _SpecialWrapp = require("./method/SpecialWrapp/SpecialWrapp.class");

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _DEFAULT_ATTRIBUTES = /*#__PURE__*/new WeakMap();

var _DEFAULT_SEEKERS_ATTRIBUTES = /*#__PURE__*/new WeakMap();

var _ERRORS_FILTER = /*#__PURE__*/new WeakSet();

var _GET_ATTRIBUTES = /*#__PURE__*/new WeakMap();

class __TextOptions__process__ {
  constructor(textOptions, text) {
    _classPrivateFieldInitSpec(this, _GET_ATTRIBUTES, {
      get: _get_GET_ATTRIBUTES,
      set: void 0
    });

    _classPrivateMethodInitSpec(this, _ERRORS_FILTER);

    _classPrivateFieldInitSpec(this, _DEFAULT_ATTRIBUTES, {
      writable: true,
      value: [["ClassToAdd", ""], ["SelectClass", {}], ["SpecialWrapp", {}], ["PerWord", false]]
    });

    _classPrivateFieldInitSpec(this, _DEFAULT_SEEKERS_ATTRIBUTES, {
      writable: true,
      value: ["SelectClass", "SpecialWrapp"]
    });

    this.textOptions = textOptions;
    this.text = text;

    _classPrivateMethodGet(this, _ERRORS_FILTER, _ERRORS_FILTER2).call(this);
  }

  // Each attribute of TextOption will returned here
  getProcessAttributes(obj) {
    Object.entries(_classPrivateFieldGet(this, _GET_ATTRIBUTES)).forEach(element => {
      obj[element[0]] = this[element[0]].process;
    });
    return obj;
  }

  get takeAttributesTheySeek() {
    return _classPrivateFieldGet(this, _DEFAULT_SEEKERS_ATTRIBUTES).map(el => this[el]);
  }

  get crumbledText() {
    let text;
    if (!this.PerWord.process) text = [" ", ...this.text, " "];else text = this.text.split(" ");
    return text;
  } // here I did put the methods to will process the Attributes from textOptions
  //


  get ClassToAdd() {
    const CLASSTOADD = _classPrivateFieldGet(this, _GET_ATTRIBUTES).ClassToAdd;

    if ((0, _whatIsIt.whatItIs)(CLASSTOADD) !== "[object String]") throw new Error("ClassToAdd must be a string");
    return {
      process: CLASSTOADD
    };
  }

  get SelectClass() {
    const ATTRIBUTES = _classPrivateFieldGet(this, _GET_ATTRIBUTES);

    const SELECT_CLASS = ATTRIBUTES.SelectClass;
    const crumbledText = this.crumbledText;
    return new _SelectClass.SelectClass(SELECT_CLASS, ATTRIBUTES, crumbledText);
  }

  get SpecialWrapp() {
    const SPECIALWRAPPP = _classPrivateFieldGet(this, _GET_ATTRIBUTES).SpecialWrapp;

    return new _SpecialWrapp.SpecialWrapp(SPECIALWRAPPP, _classPrivateFieldGet(this, _GET_ATTRIBUTES).PerWord);
  }

  get PerWord() {
    const PERWORD = _classPrivateFieldGet(this, _GET_ATTRIBUTES).PerWord;

    if ((0, _whatIsIt.whatItIs)(PERWORD) !== "[object Boolean]") throw new Error("PerWord must be a boolean");
    return {
      process: PERWORD
    };
  }

} // delfaut value layout and value comprobations


exports.__TextOptions__process__ = __TextOptions__process__;

function _ERRORS_FILTER2() {
  if ((0, _whatIsIt.whatItIs)(this.textOptions) !== "[object Object]") throw new Error('"textOptions" must be an Object --- wrapping-letters');
  checkCorrectKeys(this.textOptions, _classPrivateFieldGet(this, _DEFAULT_ATTRIBUTES));
}

function _get_GET_ATTRIBUTES() {
  let object = {};

  _classPrivateFieldGet(this, _DEFAULT_ATTRIBUTES).forEach(element => {
    object[element[0]] = this.textOptions[element[0]] || element[1];
  });

  return object;
}

function checkCorrectKeys(textOptions, Default_Attributes) {
  let textOptionsKeys = Object.keys(textOptions); // here the code will declare the default value for each key in textOptions
  // A simple comprobation of correct properties

  const containThisProps = value => Default_Attributes.map(element => element[0] === value);

  const container = textOptionsKeys.every(containThisProps);

  if (!container) {
    const correctProperties = Default_Attributes.map(element => element[0]);
    throw new Error(`textOptions must contain the following properties: ${correctProperties.join(", ")}`);
  }
}