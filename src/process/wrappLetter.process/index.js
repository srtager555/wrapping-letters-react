import React from "react";

import { LettersWrapping } from "./WrappingLetters.class";

import { outSpecialClass } from "./outSpecialClass.process";
import { __specialWorld_PerLetters__ } from "./specialWordPerLetters.process";

export function WrappLetter(TEXT_OPTIONS, STRUCTURE) {
  const test = false;
  const { crumbledText, ClassToAdd, SelectClass, SpecialWrapp, PerWord } =
    TEXT_OPTIONS;

  const CustomComponent = STRUCTURE.currrent.structure.structure;
  const CustomProps = STRUCTURE.current.props;
  const searchWordValueWithoutArrays = searchWordValue.flat();

  var arrElements = crumbledText
    .map((wrappElement, index) => {
      const WL = new LettersWrapping(wrappElement, index, TEXT_OPTIONS);
      let newClass = specialClass;
      let word;

      // This function has the work find the specialClass with the index; Here the code will start the comprobations
      const COMPROBATIONS = WL.Comprobation(
        PerWord,
        searchWordValueWithoutArrays
      );

      if (COMPROBATIONS && WL.SPW(SelectClass.process.spaceBetweenWord)) {
        word; // = neCrumbletText
      } else {
        word = wrappElement;
      }
    })
    .flat();

  if (
    arrElements[0][0] === " " &&
    arrElements[arrElements.length - 1][0] === " "
  ) {
    arrElements.pop();
    arrElements.shift();
  }

  // Switch for test files
  if (test) return arrElements;

  var wrappedLetters = arrElements.map(function (wrappElement, index) {
    return (
      <CustomComponent
        index={index}
        key={`'${wrappElement.letter}'-${index}`}
        {...wrappElement}
        {...CustomProps}
      />
    );
  });

  return wrappedLetters;
}
