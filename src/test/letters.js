class Letter {
  /**
   * @param  {string} letter
   * @param  {string} classes
   * @param  {function} NewWrappStructure
   * @param  {boolean} uppercase
   */
  constructor(letter, classes = "", NewWrappStructure = undefined) {
    return {
      letter: letter,
      cssClass: `class ${classes}`,
      specialWrapp: {
        hasCustomWrapp: NewWrappStructure ? true : undefined,
        NewWrappStructure: NewWrappStructure,
      },
    };
  }
}

export { Letter };
