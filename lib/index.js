"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _wrappLetter = require("./process/wrappLetter.process");

var _propsFilter = require("./error/props-filter.error");

var _memo = require("./process/memo.process");

var _text = require("./process/text.class");

var _structure = require("./process/structure/structure.class");

var _textOptions = require("./process/textOptions/textOptions.class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WL() {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    text: new String(),
    textOptions: new Object(),
    structure: new Function()
  };
  // Here the code'll verify if the props are correct.
  (0, _propsFilter.error__props_filter__)(props);
  let {
    text = "Hello world!!! <3",
    textOptions = {},
    structure
  } = props;
  text = new _text.__Text__process__(text).text;
  const TEXT_OPTIONS = new _textOptions.__TextOptions__process__(textOptions, text);
  const STRUCTURE = new _structure.__Structure__process__(structure, TEXT_OPTIONS.ClassToAdd);
  return (0, _wrappLetter.WrappLetter)(TEXT_OPTIONS, STRUCTURE);
}
/**
 * @param  {string} text - what do you need wrap? here put your text.
 * @param  {Object} textOptions - Here you'll put the options to wrap
 * @param  {JSX.Element} structure - Here put the component with the JSX syntax that you want out each wrap
 * @returns {JSX.Element} returns multiple React components on JSX
 */


const WrappingLetters = /*#__PURE__*/_react.default.memo(WL, _memo.memo__process);

var _default = WrappingLetters;
exports.default = _default;