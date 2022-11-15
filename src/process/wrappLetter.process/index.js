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

      let outSpecialClassProps = {
        ...props,
        wrappElement,
        newClass,
        index,
        searchWordValue,
        specialClass,
        spaceBetweenWord,
      };

      delete outSpecialClassProps.SelectClass;

      // This function has the work find the specialClass with the index
      // Here the code will start the comprobations
      const COMPROBATIONS = WrappingLetters.Comprobation(
        PerWord,
        searchWordValueWithoutArrays
      );

      if (!COMPROBATIONS) return outSpecialClass(outSpecialClassProps);

      // here the code will comprobate if the first letter is the start
      // of a special word
      if (WrappingLetters.SPW(spaceBetweenWord))
        return outSpecialClass(outSpecialClassProps);
      // if this "word" is false, it means it is a false positive
      // the code will return a simple wrapp

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

class LettersWrapping {
  constructor(wrappingElement, index, props) {
    this.wrappingElement = wrappingElement;
    this.index = index;
    this.props = props;
  }

  Comprobation(PerWord, arrayToComprobate) {
    const arrComprobations = [
      !PerWord,
      arrayToComprobate.length > 0,
      arrayToComprobate.some((element) => this.wrappingElement === element[0]),
      arrayToComprobate.some(
        (element) =>
          this.index + element.length <= this.props.crumbledText.length
      ),
      // Here the code will check if an element is same with a slice of its length
      arrayToComprobate.some(
        (el) =>
          this.props.crumbledText
            .slice(this.index, this.index + el.length)
            .join("") === el
      ),
    ];

    return arrComprobations.every((currentValue) => currentValue === true);
  }

  // check if the element has white space before and after it when spw is true
  SPW(spw) {
    if (spw) {
      let firstWhiteSpace = this.props.crumbledText[this.index - 1] === " ";
      let lastWhiteSpace = this.props.crumbledText.indexOf(" ", this.index);
      let choppedWord = this.props.crumbledText
        .slice(this.index, lastWhiteSpace)
        .join("");

      return !this.props.SelectClass.searchWordValue.some((element) => {
        let choppedWordCoditional = choppedWord === element;

        return (
          choppedWordCoditional &&
          firstWhiteSpace &&
          this.props.crumbledText[lastWhiteSpace] === " "
        );
      });
    }
  }
}
