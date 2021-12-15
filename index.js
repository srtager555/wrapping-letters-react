var React = require('react');

function useWrappingLetters(word) {
  if (Object.prototype.toString.call(word) !== "[object String]") {
    throw new Error("Word must be a string");
  }
  var a = [...word];

  var wrapLetters = a.map(function (letter, index) {
    React.createElement('span', { key: index }, letter);
  });

  return wrapLetters;
}

module.exports = useWrappingLetters;
