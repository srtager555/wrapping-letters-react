export function outSpecialClass({
  wrappElement,
  newClass,
  specialArray,
  specialStructure,
  searchWordValue,
  index,
  crumbledText,
  PerWord,
}) {
  //here is wrapped per word.
  let cssClass = !specialStructure ? ClassToAdd : "";

  if (PerWord) {
    if (searchWordValue.includes(wrappElement)) {
      // here search the word in the array
      // and add the class
      const INDEX_SPECIAL_CLASS = searchWordValue.indexOf(wrappElement);
      specialArray(INDEX_SPECIAL_CLASS);

      cssClass = !specialStructure
        ? [ClassToAdd, newClass].join(" ")
        : newClass;
    }

    if (index != crumbledText.length - 1) {
      wrappElement = wrappElement + " ";
    } else {
      wrappElement = wrappElement;
    }
  }
  return [[wrappElement, cssClass]];
}
