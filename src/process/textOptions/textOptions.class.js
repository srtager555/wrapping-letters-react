import { Base } from "./base.class";
import { whatItIs } from "../../common/whatIsIt";

import {
  checkCorrectKeys,
  error__Filter_SelectClass__,
} from "../../error/specialClass.error";
import { error__Filter_SpecialWrapp__ } from "../../error/specialWrapp.error";

import { process__SelectClass__ } from "./specialClass.process";
import { process__select_specialWrapp__ } from "./specialWrapp.process";

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

  // Each attribute of TextOption will returned here
  getProcessAttributes(obj) {
    Object.entries(this.#GET_ATTRIBUTES).forEach((element) => {
      obj[element[0]] = this[element[0]];
    });

    return obj;
  }

  get #GET_ATTRIBUTES() {
    let object = {};

    this.#DEFAULT_ATTRIBUTES.forEach((element) => {
      object[element[0]] = this.textOptions[element[0]] || element[1];
    });

    return object;
  }

  get crumbledText() {
    return this.PerWord ? this.text.split(" ") : [...this.text];
  }

  // here I did put the methods to will process the Attributes from textOptions
  //
  get ClassToAdd() {
    const CLASSTOADD = this.#GET_ATTRIBUTES.ClassToAdd;

    if (whatItIs(CLASSTOADD) !== "[object String]")
      throw new Error("ClassToAdd must be a string");

    return CLASSTOADD;
  }

  get SelectClass() {
    const ATTRIBUTES = this.#GET_ATTRIBUTES;

    error__Filter_SelectClass__(ATTRIBUTES.SelectClass, ATTRIBUTES.PerWord);

    const processe__data = process__SelectClass__({
      SelectClass: ATTRIBUTES.SelectClass,
      PerWord: ATTRIBUTES.PerWord,
      crumbledText: this.crumbledText,
    });

    return processe__data;
  }

  get SpecialWrapp() {
    const SPECIALWRAPPP = this.#GET_ATTRIBUTES.SpecialWrapp;

    error__Filter_SpecialWrapp__(SPECIALWRAPPP);

    const process__data = process__select_specialWrapp__({
      wordToSearch: SPECIALWRAPPP.wordToSearch,
      structureToAdd: SPECIALWRAPPP.structureToAdd,
    });

    return process__data;
  }

  get PerWord() {
    const PERWORD = this.#GET_ATTRIBUTES.PerWord;

    if (whatItIs(PERWORD) !== "[object Boolean]")
      throw new Error("PerWord must be a boolean");

    return PERWORD;
  }
}
