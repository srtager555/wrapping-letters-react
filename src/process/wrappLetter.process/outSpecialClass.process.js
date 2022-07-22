import { __specialArray__ } from "./specialArray.process";

export function outSpecialClass({
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
}) {
  let { hasCustomWrapp, wordToWrapp, wrappToAdd } = SpecialWrapp;

  let cssClass = !specialStructure ? ClassToAdd : "";
  let word = wrappElement;
  let customWrapp = undefined;

  //here is wrapped per word.
  if (PerWord) {
    if (searchWordValue.includes(wrappElement)) {
      // here search the word in the array
      // and add the class
      const INDEX_SPECIAL_CLASS = searchWordValue.indexOf(wrappElement);
      newClass = __specialArray__(specialClass, INDEX_SPECIAL_CLASS);

      cssClass = !specialStructure
        ? [ClassToAdd, newClass].join(" ")
        : newClass;
    }

    if (wordToWrapp === word) {
      hasCustomWrapp = true;
      const WORD_INDEX = wordToWrapp.indexOf(word);

      customWrapp = __specialArray__(wrappToAdd, WORD_INDEX);
    }

    if (index != crumbledText.length - 1) wrappElement = wrappElement + " ";
    else wrappElement = wrappElement;
  } else {
    if (wordToWrapp.some((element) => element === word)) {
      hasCustomWrapp = true;
      const WORD_INDEX = wordToWrapp.indexOf(word);

      customWrapp = __specialArray__(wrappToAdd, WORD_INDEX);
    }
  }

  return [
    {
      letter: wrappElement,
      cssClass: cssClass,
      specialWrapp: {
        hasCustomWrapp,
        NewWrappStructure: customWrapp,
      },
    },
  ];
}
