import { whatItIs } from "../common/whatIsIt";

export function process__select_specialWrapp__({
  wordToSearch,
  structureToAdd,
}) {
  let props = {
    hasCustomWrapp: false,
    hasCustomProps: false,
    wordToWrapp: wordToSearch || new String(),
    wrappToAdd: structureToAdd,
  };

  // here the code need a check if the attribute... wait a moment

  if (whatItIs(structureToAdd) === "[object Object]")
    props.wrappToAdd.props.awa = "uwu";

  //the container does not process the object, it only returns it when needed

  // if it's not a function, it's an Object or an Array
  // else props.wrappToAdd = structureToAdd;

  if (!Array.isArray(props.wordToWrapp))
    props.wordToWrapp = [props.wordToWrapp];

  // I need check the wrapper to uncomment this code line
  // if (!Array.isArray(props.wrappToAdd)) props.wrappToAdd = [props.wrappToAdd];

  return props;
}
