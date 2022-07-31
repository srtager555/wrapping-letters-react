export function process__select_specialWrapp__({
  wordToSearch,
  structureToAdd,
}) {
  let props = {
    hasCustomWrapp: false,
    wordToWrapp: wordToSearch || new String(),
    wrappToAdd: structureToAdd || undefined,
  };

  if (!Array.isArray(props.wordToWrapp))
    props.wordToWrapp = [props.wordToWrapp];

  return props;
}
