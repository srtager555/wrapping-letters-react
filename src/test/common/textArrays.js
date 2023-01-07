import React from "react";

const sentenceToTest = "This is a sentence!!!";

const sentencePerWord = sentenceToTest.split(" ");

const sentencePerLetter = [...sentenceToTest];

// eslint-disable-next-line react/prop-types
function CustomStructure({ letter, cssClass }) {
  return <span className={cssClass}>{`LETTER: "${letter}", `}</span>;
}
// eslint-disable-next-line react/prop-types
function CustomStructure1({ letter, cssClass }) {
  return <span className={cssClass}>{`LETTER: "${letter}", `}</span>;
}

export {
  sentenceToTest,
  sentencePerWord,
  sentencePerLetter,
  CustomStructure,
  CustomStructure1,
};
