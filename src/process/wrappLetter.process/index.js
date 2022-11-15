import React from "react";

import { SelectClass } from "../textOptions/method/SelectClass/SelectClass.class";
import { SpecialWrapp } from "../textOptions/method/SpecialWrapp/SpecialWrapp.class";

import { outSpecialClass } from "./outSpecialClass.process";
import { __specialWorld_PerLetters__ } from "./specialWordPerLetters.process";

export function WrappLetter(props) {
  const {
    crumbledText,
    SelectClass: { searchWordValue, specialClass, spaceBetweenWord },
    ClassToAdd,
    SpecialWrapp,
    Structure,
    specialStructure = false,
    PerWord = false,
    test = false,
  } = props;

  const CustomComponent = Structure.structure;
  const CustomProps = Structure.props;
  const searchWordValueWithoutArrays = searchWordValue.flat();

  var arrElements = crumbledText
    .map((wrappElement, index) => {
      const WrappingLetters = new LettersWrapping(wrappElement, index, props);

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

      const COMPROBATIONS = WrappingLetters.Comprobation(
        PerWord,
        searchWordValueWithoutArrays
      );

      if (!COMPROBATIONS) return outSpecialClass(outSpecialClassProps);

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

class LettersWrapping {
  constructor(wrappingElement, index, props) {
    this.wrappingElement = wrappingElement;
    this.index = index;
    this.props = props;
  }

  Comprobation(PerWord, arrayToComprobate) {
    const arrComprobations = [
      !PerWord,
      // if the array is empty, return the false
      arrayToComprobate.length > 0,
      // the wrappElement has to have same first letter of an Element
      arrayToComprobate.some((element) => this.wrappingElement === element[0]),
      // the element can't be longer than crumbledText
      arrayToComprobate.some(
        (element) =>
          this.index + element.length <= this.props.crumbledText.length
      ),
      // Here the code will check if an element is same with a slice of its length
      arrayToComprobate.some(
        (element) =>
          this.props.crumbledText
            .slice(this.index, this.index + element.length)
            .join("") === element
      ),
    ];

    return arrComprobations.every((currentValue) => currentValue === true);
  }
}
