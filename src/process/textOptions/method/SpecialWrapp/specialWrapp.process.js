import { whatItIs } from "../../../../common/whatIsIt";

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

  if (!Array.isArray(props.wordToWrapp))
    props.wordToWrapp = [props.wordToWrapp];

  return props;
}
