import { whatItIs } from "../common/whatIsIt";
import { error__Filter_structure__ } from "./structure.error";

export function error__main_filter__(wrappProps) {
  const { ClassToAdd, specialStructure, Structure } = wrappProps;

  if (whatItIs(ClassToAdd) !== "[object String]")
    throw new Error("ClassToAdd must be a string");

  error__Filter_structure__(ClassToAdd, specialStructure, Structure);
}
