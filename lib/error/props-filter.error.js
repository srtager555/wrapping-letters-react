"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error__props_filter__ = error__props_filter__;

var _stringSimilarity = _interopRequireDefault(require("string-similarity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function error__props_filter__(props, defaultProperties) {
  const MAIN_PROPS = ["text", "textOptions", "structure"];
  const oficialProperties = defaultProperties ??= MAIN_PROPS;
  const propsKeys = Object.keys(props);
  propsKeys.forEach(el => {
    let oficialProperty = oficialProperties.some(element => element === el);

    if (!oficialProperty) {
      const SS = _stringSimilarity.default.findBestMatch(el, oficialProperties);

      const VALUES = oficialProperties != MAIN_PROPS;

      if (SS.bestMatch.rating > 0.5) {
        throw new Error(`${VALUES ? `${defaultProperties.name} - ` : ""}"${el}" isn't a registered property. Did you mean "${SS.bestMatch.target}"?`);
      } else throw new Error(`${VALUES ? `${defaultProperties.name} - ` : "Wrapping Letters"} must contain the following properties: ${oficialProperties.join(", ")}`);
    }
  });
}