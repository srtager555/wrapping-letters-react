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
    whatItIs(structureToAdd) != "[object Function]" &&
    !Array.isArray(structureToAdd)
  ) {
    throw new Error(
      'SpecialWrapp --- "structureToAdd" must be an Array, Object or Function'
    );
  }

  if (whatItIs(structureToAdd) === "[object Object]")
    __comprobation_correct_attributes__(structureToAdd);

  // here the code will check each element from an Array
  if (Array.isArray(structureToAdd)) {
    // here the will iterate the elements
    structureToAdd.forEach((element) => {
      const __CONDITIONS__ = (target) => {
        return [
          whatItIs(target) != "[object Object]",
          whatItIs(target) != "[object Function]",
          !Array.isArray(target),
        ];
      };

      if (__CONDITIONS__(element).every((el) => el)) {
        throw new Error(
          `SpecialWrapp --- The Elements on "structureToAdd" must be an Array, Object or Function, You did put an ${whatItIs(
            element
          )}`
        );
      }

      if (Array.isArray(element)) {
        element.forEach((el) => {
          const CONDITIONS = __CONDITIONS__(el).pop();

          if (CONDITIONS.every((el) => el)) {
            throw new Error(
              `SpecialWrapp --- The Elements from an Array on "structureToAdd" must be an  Object or Function, You did put an ${whatItIs(
                element
              )}`
            );
          }

          if (whatItIs(el) === "[object Object]")
            __comprobation_correct_attributes__(el);
        });
      }
    });
  }
}

function __comprobation_correct_attributes__(element) {}
