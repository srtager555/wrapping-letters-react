import { whatItIs } from "../common/whatIsIt";

export function error__Filter_SpecialWrapp__(SpecialWrapp) {
  if (whatItIs(SpecialWrapp) != "[object Object]")
    throw new Error("SpecialWrapp must be an Object --- Wrapping Letters");

  if (Object.keys(SpecialWrapp).length === 0) return;

  const { wordToSearch, structureToAdd } = SpecialWrapp;

  // missing the check if the object has the 2 correct attributes

  if (
    whatItIs(wordToSearch) != "[object String]" &&
    !Array.isArray(wordToSearch)
  ) {
    throw new Error(
      'SpecialWrapp --- "wordToSearch" must be an Array or String'
    );
  }

  // from now on the code will check if
  // the attribute has the correct conditions

  if (
    whatItIs(structureToAdd) != "[object Object]" &&
    !Array.isArray(structureToAdd)
  ) {
    throw new Error(
      'SpecialWrapp --- "structureToAdd" must be an Array or Object'
    );
  }

  if (whatItIs(structureToAdd) != "[object Array]") 
}
