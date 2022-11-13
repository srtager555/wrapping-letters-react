import { whatItIs } from "../common/whatIsIt";

import { error__Filter_SelectClass__ } from "./specialClass.error";
import { error__Filter_structure__ } from "./structure.error";
import { error__Filter_SpecialWrapp__ } from "./specialWrapp.error";

export function error__main_filter__(wrappProps) {
  const {
    ClassToAdd,
    SelectClass,
    SpecialWrapp,
    specialStructure,
    Structure,
    PerWord,
  } = wrappProps;

  if (whatItIs(ClassToAdd) !== "[object String]")
    throw new Error("ClassToAdd must be a string");

  if (whatItIs(PerWord) !== "[object Boolean]")
    throw new Error("PerWord must be a boolean");

  error__Filter_SelectClass__(SelectClass, PerWord);

  error__Filter_SpecialWrapp__(SpecialWrapp);

  error__Filter_structure__(ClassToAdd, specialStructure, Structure);
}
