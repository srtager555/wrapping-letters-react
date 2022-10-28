import { whatItIs } from "../common/whatIsIt";

export function memo__process(prevV, nextV) {
  const TEXT_OPTIONS_PREV = prevV.textOptions;
  const TEXT_OPTIONS_NEXT = nextV.textOptions;

  let conditions = [
    prevV.text === nextV.text,
    TEXT_OPTIONS_PREV.ClassToAdd === TEXT_OPTIONS_NEXT.ClassToAdd,
  ];

  if (TEXT_OPTIONS_PREV === TEXT_OPTIONS_NEXT) return true;

  const PERWORD_PREV = TEXT_OPTIONS_PREV.PerWord;
  const PERWORD_NEXT = TEXT_OPTIONS_NEXT.PerWord;

  function __basic_comprobation__(prevValue, nextValue) {
    if (whatItIs(prevValue) != whatItIs(nextValue)) {
      conditions.push(false);
    } else if (Array.isArray(prevValue) && Array.isArray(nextValue)) {
      // I can optimize the code a lot but for now it's enough
      prevValue.forEach((element, index) => {
        if (
          whatItIs(element) === "[object Object]" &&
          whatItIs(nextValue[index]) === "[object Object]"
        ) {
          if (element.structureToAdd != nextValue[index].structureToAdd)
            conditions.push(false);
        } else if (element != nextValue[index]) conditions.push(false);
      });
    } else if (
      whatItIs(prevValue) === "[object String]" &&
      whatItIs(nextValue) === "[object String]"
    ) {
      !conditions.push(prevValue != nextValue);
    }
  }

  // here the code will check if SpecialWrapp changed
  // firts check is wordToSearch
  if (TEXT_OPTIONS_PREV.SelectClass || TEXT_OPTIONS_NEXT.SelectClass) {
    __basic_comprobation__(
      TEXT_OPTIONS_PREV.SelectClass.wordToSearch,
      TEXT_OPTIONS_NEXT.SelectClass.wordToSearch
    );

    // second to check is classToAdd
    __basic_comprobation__(
      TEXT_OPTIONS_PREV.SelectClass.classToAdd,
      TEXT_OPTIONS_NEXT.SelectClass.classToAdd
    );

    // SPW comprobation
    if (
      TEXT_OPTIONS_PREV.SelectClass.spaceBetweenWord !=
      TEXT_OPTIONS_NEXT.SelectClass.spaceBetweenWord
    )
      conditions.push(false);
  }

  if (TEXT_OPTIONS_PREV.SpecialWrapp || TEXT_OPTIONS_NEXT.SpecialWrapp) {
    // here the code will check if SpecialWrapp changed
    __basic_comprobation__(
      TEXT_OPTIONS_PREV.SpecialWrapp.wordToSearch,
      TEXT_OPTIONS_NEXT.SpecialWrapp.wordToSearch
    );

    __basic_comprobation__(
      TEXT_OPTIONS_PREV.SpecialWrapp.structureToAdd,
      TEXT_OPTIONS_NEXT.SpecialWrapp.structureToAdd
    );
  }

  // perWord comprobation
  if (PERWORD_NEXT != PERWORD_PREV) conditions.push(false);

  // Here the code will comprobate if structure has been changed
  const prevStruc = prevV.structure;
  const nextStruc = nextV.structure;

  if (whatItIs(prevStruc) != whatItIs(nextStruc)) conditions.push(false);
  else if (
    whatItIs(prevStruc) === "[object Object]" &&
    whatItIs(nextStruc) === "[object Object]"
  ) {
    if (prevStruc.structure != nextStruc.structure) conditions.push(false);
  } else if (
    whatItIs(prevStruc) === "[object Function]" &&
    whatItIs(nextStruc) === "[object Function]"
  ) {
    if (prevStruc != nextStruc) conditions.push(false);
  }

  return conditions.every((el) => el === true);
}
