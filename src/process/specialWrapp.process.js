export function process__select_specialWrapp__(wordToSearch, structureToAdd) {
  return {
    hasModification: false,
    wordToSearch: wordToSearch || new String(),
    structureToAdd: structureToAdd || undefined,
  };
}
