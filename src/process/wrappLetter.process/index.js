import React from "react";

import { outSpecialClass } from "./outSpecialClass.process";

export function WrappLetter({
  SelectClass,
  crumbledText,
  ClassToAdd,
  Structure,
  specialStructure = false,
  PerWord = false,
  test = false,
}) {
  let { searchWordValue, specialClass, spaceBetweenWord } = SelectClass;

  // comprobation if searchWordValue is an array
  if (!Array.isArray(searchWordValue)) {
    searchWordValue = [searchWordValue];
  }

  var arrElements = crumbledText
    .map(function (wrappElement, index) {
      // here declare the variable for the specialClass
      let newClass = specialClass;
      // And here verify if is an array or a string
      // for to add the correct class to the element

      const outSpecialClassProps = {
        wrappElement,
        newClass,
        ClassToAdd,
        specialArray,
        specialStructure,
        searchWordValue,
        index,
        crumbledText,
        PerWord,
      };

      function specialArray(INDEX_SPECIAL_CLASS) {
        if (Array.isArray(specialClass))
          if (INDEX_SPECIAL_CLASS > specialClass.length - 1) {
            newClass = specialClass[0];
          } else {
            newClass = specialClass[INDEX_SPECIAL_CLASS];
          }
      }

      //.
      //.
      //.
      //.
      //.
      //.
      //.
      // Here the code will start the comprobations
      const arrComprobations = [
        !PerWord,
        // if the array is empty, return the false
        searchWordValue.length > 0,
        searchWordValue.some((element) => wrappElement === element[0]),
        searchWordValue.some(
          (element) => index + element.length <= crumbledText.length
        ),
        searchWordValue.some(
          (element) =>
            crumbledText.slice(index, index + element.length).join("") ===
            element
        ),
      ];

      if (!arrComprobations.every((currentValue) => currentValue === true))
        return outSpecialClass(outSpecialClassProps);

      if (spaceBetweenWord) {
        // these variables indicate the position of the first " " and the las " " beetwen word
        let firstWhiteSpace = crumbledText[index - 1];
        let lastWhiteSpace = crumbledText.indexOf(" ", index);

        if (
          firstWhiteSpace === " " &&
          lastWhiteSpace === " " &&
          !searchWordValue.some((element) => {
            return crumbledText.slice(index, lastWhiteSpace) === element;
          })
        )
          return outSpecialClass(outSpecialClassProps);
      }

      // here made a new string varible
      // for a map to add the class
      let newCrumbledText = searchWordValue.filter((element) => {
        let cutted = crumbledText.slice(index, index + element.length).join("");

        if (spaceBetweenWord) {
          if (crumbledText[index - 1] !== " ") return false;

          if (crumbledText[index + element.length] !== " ") return false;
        }

        return cutted === element;
      });

      // If the code can't find the special word, it will return a simple wrapp
      if (newCrumbledText.length === 0)
        return outSpecialClass(outSpecialClassProps);

      // end of the comprobation
      //.
      //.
      //.
      //.
      //.
      //.
      //.

      newCrumbledText = [...newCrumbledText[0]];

      var wl = newCrumbledText.map((wrappElement) => {
        const INDEX_SPECIAL_CLASS = searchWordValue.indexOf(
          newCrumbledText.join("")
        );

        specialArray(INDEX_SPECIAL_CLASS);

        return [
          wrappElement,
          !specialStructure ? [ClassToAdd, newClass].join(" ") : newClass,
        ];
      });

      // here it'll slice the searching word from the crumbledText
      crumbledText.splice(index, newCrumbledText.length - 1);

      return wl;
    })
    .flat();

  if (
    arrElements[0][0] === " " &&
    arrElements[arrElements.length - 1][0] === " "
  ) {
    arrElements.pop();
    arrElements.shift();
  }

  if (test) return arrElements;

  var wrappedLetters = arrElements.map(function (wrappElement, index) {
    return (
      <Structure
        letter={wrappElement[0]}
        cssClass={wrappElement[1]}
        key={`'${wrappElement[0]}'-${index}`}
      />
    );
  });

  return wrappedLetters;
}
