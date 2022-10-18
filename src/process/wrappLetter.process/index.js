import React from "react";

import { outSpecialClass } from "./outSpecialClass.process";
import { __specialWorld_PerLetters__ } from "./specialWordPerLetters.process";

export function WrappLetter({
  crumbledText,
  SelectClass,
  ClassToAdd,
  SpecialWrapp,
  Structure,
  specialStructure = false,
  PerWord = false,
  test = false,
}) {
  let { searchWordValue, specialClass, spaceBetweenWord } = SelectClass;
  const CustomComponent = Structure.structure;
  const CustomProps = Structure.props;

  var arrElements = crumbledText
    .map(function (wrappElement, index) {
      // ********* !IMPORTANT *********
      // the code wil use this var for the function "__specialArray__"
      let newClass = specialClass;

      //.
      //.
      //.

      const outSpecialClassProps = {
        wrappElement,
        newClass,
        ClassToAdd,
        SpecialWrapp,
        specialStructure,
        specialClass,
        searchWordValue,
        index,
        crumbledText,
        PerWord,
      };

      // This function has the work find the specialClass with the index

      //.
      // Here the code will start the comprobations
      //.
      const arrComprobations = [
        !PerWord,
        // if the array is empty, return the false
        searchWordValue.length > 0,
        // the wrappElement has to have same first letter of an Element
        searchWordValue.some((element) => wrappElement === element[0]),
        // the element can't be longer than crumbledText
        searchWordValue.some(
          (element) => index + element.length <= crumbledText.length
        ),
        // Here the code will check if an element is same with a slice
        // of its length
        searchWordValue.some(
          (element) =>
            crumbledText.slice(index, index + element.length).join("") ===
            element
        ),
      ];

      if (!arrComprobations.every((currentValue) => currentValue === true))
        return outSpecialClass(outSpecialClassProps);

      //.
      //.

      // here the code will comprobate if the first letter is the start
      // of a special word
      if (spaceBetweenWord) {
        // if SBW (spaceBetweenWord) is true, the code need see the before and after
        // element beacause these element need be whitespace
        if (
          !searchWordValue.some((element) => {
            let firstWhiteSpace = crumbledText[index - 1];
            let lastWhiteSpace = crumbledText.indexOf(" ", index);
            let choppedWordCoditional =
              crumbledText.slice(index, lastWhiteSpace).join("") === element;

            return (
              choppedWordCoditional &&
              firstWhiteSpace === " " &&
              crumbledText[lastWhiteSpace] === " "
            );
          })
        )
          // if this "word" is false, it means it is a false positive
          // the code will return a simple wrapp
          return outSpecialClass(outSpecialClassProps);
      }

      return __specialWorld_PerLetters__({
        index,
        arrayOfWords: searchWordValue,
        crumbledText,
        SpecialWrapp,
        searchWordValue,
        spaceBetweenWord,
        specialStructure,
        newClass,
        ClassToAdd,
        specialClass,
      });
    })
    // [[[]], [[]], ...]
    .flat();
  // [[], [] ...]

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
        letter={wrappElement.letter}
        cssClass={wrappElement.cssClass}
        specialWrapp={wrappElement.specialWrapp}
        index={index}
        key={`'${wrappElement.letter}'-${index}`}
        {...CustomProps}
      />
    );
  });

  return wrappedLetters;
}
