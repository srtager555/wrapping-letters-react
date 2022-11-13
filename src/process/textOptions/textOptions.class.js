import { whatItIs } from "../../common/whatIsIt";

import {
  checkCorrectKeys,
  error__Filter_SelectClass__,
} from "../../error/specialClass.error";

import { process__SelectClass__ } from "./specialClass.process";

export class __TextOptions__process__ {
  constructor(textOptions, text) {
    this.textOptions = textOptions;
    this.text = text;

    this.#ERRORS_FILTER();
  }

  #DEFAULT_ATTRIBUTES = [
    ["ClassToAdd", ""],
    ["SelectClass", {}],
    ["SpecialWrapp", {}],
    ["PerWord", false],
  ];

  #ERRORS_FILTER() {
    if (whatItIs(this.textOptions) !== "[object Object]")
      throw new Error('"textOptions" must be an Object --- wrapping-letters');

    checkCorrectKeys(this.textOptions, this.#DEFAULT_ATTRIBUTES);
  }

  getAttributes(object) {
    this.#DEFAULT_ATTRIBUTES.forEach((element) => {
      object[element[0]] = this.textOptions[element[0]] || element[1];
    });

    return object;
  }

  get crumbledText() {
    return this.PerWord ? this.text.split(" ") : [...this.text];
  }

  get SelectClass() {
    class SelectClass extends baseFeature {}

    const ATTRIBUTES = this.getAttributes({});

    error__Filter_SelectClass__(ATTRIBUTES.SelectClass, ATTRIBUTES.PerWord);

    const processe__data = process__SelectClass__({
      SelectClass: ATTRIBUTES.SelectClass,
      PerWord: ATTRIBUTES.PerWord,
      crumbledText: this.crumbledText,
    });

    return processe__data;
  }

  get PerWord() {
    const PERWORD = this.getAttributes({}).PerWord;

    if (whatItIs(PERWORD) !== "[object Boolean]")
      throw new Error("PerWord must be a boolean");

    return PERWORD;
  }
}
