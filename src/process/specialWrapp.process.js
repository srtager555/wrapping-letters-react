import { whatItIs } from "../common/whatIsIt";

export function process__select_specialWrapp__({
  wordToSearch,
  structureToAdd,
}) {
  let props = {
    hasCustomWrapp: false,
    wordToWrapp: wordToSearch || new String(),
  };

  // here the code need a check if the attribute... wait a moment

  // translating the component to an object
  if (whatItIs(structureToAdd) != "[object Object]")
    props.wrappToAdd = [
      {
        structure: structureToAdd || undefined,
        props: { AwAdeUwU: "uwu" },
      },
    ];
  else props.wrappToAdd = [structureToAdd] || undefined;

  if (!Array.isArray(props.wordToWrapp))
    props.wordToWrapp = [props.wordToWrapp];

  return props;
}
