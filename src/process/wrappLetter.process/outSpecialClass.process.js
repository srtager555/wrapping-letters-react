import { __specialArray__ } from "./specialArray.process";
import { __specialWorld_PerLetters__ } from "./specialWordPerLetters.process.js";

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

  if (!Array.isArray(wordToWrapp)) wordToWrapp = [wordToWrapp];

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

    if (wordToWrapp.some((element) => element === word)) {
      hasCustomWrapp = true;
      const WORD_INDEX = wordToWrapp.indexOf(word);

      customWrapp = __specialArray__(wrappToAdd, WORD_INDEX);
    }

    if (index != crumbledText.length - 1) wrappElement = wrappElement + " ";
  }
  // if the property SpecialWrapp is different to the
  // default values, this conprobations search the
  // word with a especial wrapp

  if (wrappToAdd !== undefined && wordToWrapp !== new String()) {
    const arrComprobations = [
      // basicly is the same comprobations in the index of this
      // folder
      wordToWrapp.length > 0,
      wordToWrapp.some((element) => wrappElement === element[0]),
      wordToWrapp.some(
        (element) => index + element.length <= crumbledText.length
      ),
      wordToWrapp.some(
        (element) =>
          crumbledText.slice(index, index + element.length).join("") === element
      ),
    ];
    if (arrComprobations.every((currentValue) => currentValue === true))
      return __specialWorld_PerLetters__({
        index,
        arrayOfWords: wordToWrapp,
        crumbledText,
        SpecialWrapp,
        word,
        specialStructure,
        newClass,
        ClassToAdd,
        specialClass,
      });
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
