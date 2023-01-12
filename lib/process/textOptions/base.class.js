"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = void 0;

var _specialArray = require("./specialArray.process");

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _FIND_TARGET = /*#__PURE__*/new WeakSet();

var _PROCESS = /*#__PURE__*/new WeakSet();

var _ERROR = /*#__PURE__*/new WeakSet();

class Base {
  constructor(_ref) {
    let {
      name = "",
      SpecialArray = false,
      Props = false,
      __error,
      __process
    } = _ref;

    _classPrivateMethodInitSpec(this, _ERROR);

    _classPrivateMethodInitSpec(this, _PROCESS);

    _classPrivateMethodInitSpec(this, _FIND_TARGET);

    // SpecialArray = {
    //   targets: [],
    //   elementsToGive: [],
    //   process: {},
    // }
    this.name = name;
    this.process = _classPrivateMethodGet(this, _PROCESS, _PROCESS2).call(this, __process);
    this.SpecialArray = SpecialArray;

    _classPrivateMethodGet(this, _ERROR, _ERROR2).call(this, __error);

    if (this.SpecialArray) {
      this.findTarget = target => _classPrivateMethodGet(this, _FIND_TARGET, _FIND_TARGET2).call(this, target);
    }

    if (Props) {// this.SpecialArray = this.#SPECIAL_ARRAY;
    }
  }
  /**
   * @param {} target This methode is to search the result of specail array from the target
   */


}

exports.Base = Base;

function _FIND_TARGET2(target) {
  const SA = this.SpecialArray; // if the options empty, the function will stopped

  if (!(SA.target != undefined) && !(SA.elementsToGive != undefined)) return;
  if (!SA.targets.flat().includes(target)) return undefined;
  const TARGET_INDEX = (0, _specialArray.IterateOnAnArray)(SA.targets, target);
  const TARGET_RESULT = (0, _specialArray.__specialArray__)(SA.elementsToGive, TARGET_INDEX);

  const processFun = SA.process && (props => SA.process(props));

  return {
    result: TARGET_RESULT,
    process: processFun
  };
}

function _PROCESS2(customProcess) {
  return customProcess();
}

function _ERROR2(custom) {
  custom();
}