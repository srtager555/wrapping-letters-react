export function process__select_specialWrapp__({
  wordToSearch,
  structureToAdd,
}) {
  return {
    hasCustomWrapp: false,
    wordToWrapp: wordToSearch || new String(),
    wrappToAdd: structureToAdd || undefined,
  };
}
