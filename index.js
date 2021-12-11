import React from "react";

export function useWrappingLetters(word) {
  if (Object.prototype.toString.call(word) !== "[object String]") {
    throw new Error("Word must be a string");
  }
  var a = [...word];

  var wrapLetters = a.map(function (letter, index) {
    <span key={index + " " + letter}>{letter}</span>;
  });

  return wrapLetters;
}


