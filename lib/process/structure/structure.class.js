"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__Structure__process__ = void 0;

var _react = _interopRequireDefault(require("react"));

var _whatIsIt = require("../../common/whatIsIt");

var _structure2 = require("./structure.error");

var _structure3 = require("./structure.process");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _ERROR = /*#__PURE__*/new WeakSet();

var _STRUCTURE = /*#__PURE__*/new WeakSet();

// here the code will check if has an custom structure anf
class __Structure__process__ {
  constructor() {
    let _structure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : baseStructure;

    let _ClassToAdd = arguments.length > 1 ? arguments[1] : undefined;

    _classPrivateMethodInitSpec(this, _STRUCTURE);

    _classPrivateMethodInitSpec(this, _ERROR);

    this.current = {
      structure: _structure,
      hasSpecialStructure: !Object.is(_structure, baseStructure)
    };
    this.getStructure = _classPrivateMethodGet(this, _STRUCTURE, _STRUCTURE2).call(this, _structure);
    if (this.hasSpecialStructure) _classPrivateMethodGet(this, _ERROR, _ERROR2).call(this, this.current, _ClassToAdd);
  }

}

exports.__Structure__process__ = __Structure__process__;

function _ERROR2(current, ClassToAdd) {
  if (!["[object Object]", "[object Function]"].some(el => el === (0, _whatIsIt.whatItIs)(current.structure))) {
    throw new Error("Structure must be a function(React Component) or an Object");
  }

  (0, _structure2.error__Filter_structure__)(ClassToAdd, current.hasSpecialStructure, current.structure);
}

function _STRUCTURE2(structure) {
  return (0, _structure3.process__structure__)(structure);
}

function baseStructure(_ref) {
  let {
    letter,
    cssClass,
    specialWrapp
  } = _ref;

  // eslint-disable-next-line react/prop-types
  function DEFAULT_COMPONENT(_ref2) {
    let {
      letter,
      cssClass
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement("span", {
      className: cssClass
    }, letter);
  }

  const {
    hasCustomWrapp,
    hasCustomProps,
    NewWrappStructure
  } = specialWrapp;
  let props = {
    letter,
    cssClass
  }; // if the variable has a default value, the "hasCustomWrapp" not is required

  let Component = specialWrapp.NewWrappStructure || function () {
    return /*#__PURE__*/_react.default.createElement(DEFAULT_COMPONENT, props);
  };

  if (hasCustomProps) {
    Component = NewWrappStructure.structureToAdd;
    return /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, NewWrappStructure.props));
  }

  return /*#__PURE__*/_react.default.createElement(Component, props);
}