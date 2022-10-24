import { whatItIs } from "../../common/whatIsIt";
import { __specialArray__ } from "./specialArray.process";

export function __specialWorld_PerLetters__({
  index,
  arrayOfWords,
  crumbledText,
  SpecialWrapp,
  searchWordValue,
  spaceBetweenWord = false,
  specialStructure,
  newClass,
  ClassToAdd,
  specialClass,
}) {
  let customWrapp = undefined;
  let cssClass = !specialStructure ? ClassToAdd : "";

  let { hasCustomWrapp, wordToWrapp, wrappToAdd, hasCustomProps } =
    SpecialWrapp;

  // here the code will filter the correct special "word"
  // after the "word" will return within an Array
  let newCrumbledText = arrayOfWords.filter((element) => {
    // here the code will cut the "word" from the array

    let choppedWord = crumbledText
      .slice(index, index + element.length)
      .join("");

    if (spaceBetweenWord) {
      // here the code will checks if the "word" has whitespace
      // before and after
      if (crumbledText[index - 1] !== " ") return false;

      if (crumbledText[index + element.length] !== " ") return false;
    }

    return choppedWord === element;
  });

  // here is the full word
  let word = newCrumbledText[0];

  // the code need the word separate per letter
  newCrumbledText = [...newCrumbledText[0]];

  if (searchWordValue.includes(word)) {
    // here search the word in the array
    // and add the class
    const INDEX_SPECIAL_CLASS = searchWordValue.indexOf(word);
    newClass = __specialArray__(specialClass, INDEX_SPECIAL_CLASS);

    cssClass = !specialStructure ? [ClassToAdd, newClass].join(" ") : newClass;
  }

  if (wordToWrapp.some((element) => element === word)) {
    // here search the word in the array for
    // add the customWrapp
    hasCustomWrapp = true;
    const WORD_INDEX = arrayOfWords.indexOf(word);

    customWrapp = __specialArray__(wrappToAdd, WORD_INDEX);

    if (whatItIs(customWrapp) === "[object Object]") hasCustomProps = true;
  }

  // here the code will create magic
  // with the before information the code can wrapp the elements
  var wl = newCrumbledText.map((wrappElement) => {
    const INDEX_SPECIAL_CLASS = arrayOfWords.indexOf(newCrumbledText.join(""));

    newClass = __specialArray__(specialClass, INDEX_SPECIAL_CLASS);

    return {
      letter: wrappElement,
      cssClass: cssClass,
      specialWrapp: {
        hasCustomWrapp,
        hasCustomProps,
        NewWrappStructure: customWrapp,
      },
    };
  });

  // here it'll slice the current "word" from the crumbledText
  crumbledText.splice(index, newCrumbledText.length - 1);

  return wl;
}
