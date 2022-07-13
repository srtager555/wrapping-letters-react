"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textOptions__process_layout__ = textOptions__process_layout__;

function textOptions__process_layout__(textOptions, wrappProps) {
  let textOptionsKeys = Object.keys(textOptions); // here the code will declare the default valou for each key in textOptions

  const wl_props = [["ClassToAdd", ""], ["SelectClass", {}], ["SpecialStructure", {}], ["PerWord", false]]; // A simple comprobation of correct properties

  const containThisProps = value => wl_props.map(element => element[0] === value);

  const container = textOptionsKeys.every(containThisProps);

  if (!container) {
    const correctProperties = wl_props.map(element => element[0]);
    throw new Error(`textOptions must contain the following properties: ${correctProperties.join(", ")}`);
  } // here the code will add the properties in "wrappProps"


  wl_props.forEach(element => {
    wrappProps[element[0]] = textOptions[element[0]] || element[1];
  });
  return wrappProps;
}