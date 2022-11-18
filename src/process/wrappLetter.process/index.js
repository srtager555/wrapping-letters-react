import React from "react";

import { LettersWrapping } from "./WrappingLetters.class";

export function WrappLetter(TEXT_OPTIONS, STRUCTURE) {
  const test = false;
  const { crumbledText, ClassToAdd, SelectClass, PerWord } = TEXT_OPTIONS;

  const CustomComponent = STRUCTURE.getStructure.structure;
  const CustomProps = STRUCTURE.getStructure.props;

  var arrElements = crumbledText
    .map((wrappElement, index) => {
      const WL = new LettersWrapping(
        wrappElement,
        crumbledText,
        index,
        TEXT_OPTIONS
      );
      let newCrumbledText;

      // This block code has the work find the Special Data with the index
      const VALUES_TO_ADD = Object.fromEntries(
        TEXT_OPTIONS.takeAttributesTheySeek.map((el) => {
          let value = WL.getSpecialArrayResults(el);

          if (PerWord.process) newCrumbledText = [value];
          else {
            newCrumbledText = value ? [...value[0]] : "";
            value = value ? value[0] : "";
          }

          return [el.name, el.findTarget(value ? value : "")];
        })
      );

      if (!newCrumbledText[0]) newCrumbledText = [wrappElement];

      const SelectClassProps = {
        specialStructure: STRUCTURE.current.hasSpecialStructure,
        ClassToAdd: ClassToAdd.process,
        newClass: VALUES_TO_ADD.SelectClass
          ? VALUES_TO_ADD.SelectClass.result
          : "",
      };

      const wl = newCrumbledText.map((el) => {
        return {
          letter: el,
          cssClass: VALUES_TO_ADD.SelectClass
            ? VALUES_TO_ADD.SelectClass.process(SelectClassProps)
            : SelectClass.SpecialArray.process(SelectClassProps),
          specialWrapp: {
            hasCustomWrapp: VALUES_TO_ADD.SpecialWrapp?.result && true,
            NewWrappStructure: VALUES_TO_ADD.SpecialWrapp?.result,
          },
        };
      });

      if (!PerWord.process) {
        crumbledText.splice(index, newCrumbledText.length - 1);
      }

      return wl;
    })
    .flat();

  // console.log(arrElements);

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
