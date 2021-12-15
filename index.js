const React = require("react");

module.exports = function WrappingLetters({ word = "Hello world !!! <3" }) {
  if (Object.prototype.toString.call(word) !== "[object String]") {
    throw new Error("Word must be a string");
  }

  var a = [...word];

  var wrapLetters = a.map(function (letter, index) {
    return React.createElement("span", { key: `letter ${index}` }, letter);
  });

  return wrapLetters;
};
