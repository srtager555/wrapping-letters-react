import React from "react";

import { LettersWrapping } from "./WrappingLetters.class";

export function WrappLetter(TEXT_OPTIONS, STRUCTURE, test = false) {
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
          let SATarget = WL.getSpecialArrayTarget(el);

          if (PerWord.process) newCrumbledText = [wrappElement + " "];
          else {
            if (!newCrumbledText) {
              newCrumbledText = [...SATarget];
            }

            // here the code will comprobate if find a specil result from specialWrapp
            if (newCrumbledText.length < SATarget.length) {
              // if the `newCrumbledText.length` is 1, that's because SelectClass didn't find a target
              if (newCrumbledText.length === 1) newCrumbledText = [...SATarget];
            }
          }

          return [el.name, el.findTarget(SATarget)];
        })
      );

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

  if (
    arrElements[0].letter === " " &&
    arrElements[arrElements.length - 1].letter === " "
  ) {
    arrElements.pop();
    arrElements.shift();
  }

  if (PerWord.process) {
    const LAST_EL = arrElements[arrElements.length - 1].letter;

    let newArr = LAST_EL.split("");

    newArr.pop();
    newArr = newArr.join("");

    arrElements[arrElements.length - 1].letter = newArr;
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
