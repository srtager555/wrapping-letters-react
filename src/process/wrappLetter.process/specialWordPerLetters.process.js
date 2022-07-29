import { __specialArray__ } from "./specialArray.process";

export function __specialWorld_PerLetters__({
  index,
  arrayOfWords,
  crumbledText,
  SpecialWrapp,
  word,
  specialStructure,
  newClass,
  ClassToAdd,
  specialClass,
}) {
  let customWrapp = undefined;
  let { hasCustomWrapp, wordToWrapp, wrappToAdd } = SpecialWrapp;

  let newCrumbledText = arrayOfWords.filter((element) => {
    // here the code will cut the "word" from the array
    let choppedWord = crumbledText
      .slice(index, index + element.length)
      .join("");

    return choppedWord === element;
  });

  newCrumbledText = [...newCrumbledText[0]];

  word = newCrumbledText.join("");

  if (arrayOfWords.some((element) => element === word)) {
    hasCustomWrapp = true;
    const WORD_INDEX = arrayOfWords.indexOf(word);

    customWrapp = __specialArray__(wrappToAdd, WORD_INDEX);
  }

  var wl = newCrumbledText.map((wrappElement) => {
    const INDEX_SPECIAL_CLASS = arrayOfWords.indexOf(newCrumbledText.join(""));

    newClass = __specialArray__(specialClass, INDEX_SPECIAL_CLASS);

    return {
      letter: wrappElement,
      cssClass: !specialStructure ? [ClassToAdd, newClass].join(" ") : newClass,
      specialWrapp: {
        hasCustomWrapp,
        NewWrappStructure: customWrapp,
      },
    };
  });

  // here it'll slice the current "word" from the crumbledText
  crumbledText.splice(index, newCrumbledText.length - 1);

  return wl;
}
