import { whatItIs } from "../../common/whatIsIt";

import { SelectClass } from "./method/SelectClass/SelectClass.class";
import { SpecialWrapp } from "./method/SpecialWrapp/SpecialWrapp.class";

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
    const SELECT_CLASS = ATTRIBUTES.SelectClass;
    const crumbledText = this.crumbledText;

    return new SelectClass(SELECT_CLASS, ATTRIBUTES, crumbledText);
  }

  get SpecialWrapp() {
    const SPECIALWRAPPP = this.#GET_ATTRIBUTES.SpecialWrapp;

    return new SpecialWrapp(SPECIALWRAPPP);
  }

  get PerWord() {
    const PERWORD = this.#GET_ATTRIBUTES.PerWord;

    if (whatItIs(PERWORD) !== "[object Boolean]")
      throw new Error("PerWord must be a boolean");

    return PERWORD;
  }
}

// delfaut value layout and value comprobations
function checkCorrectKeys(textOptions, Default_Attributes) {
  let textOptionsKeys = Object.keys(textOptions);

  // here the code will declare the default valou for each key in textOptions

  // A simple comprobation of correct properties
  const containThisProps = (value) =>
    Default_Attributes.map((element) => element[0] === value);

  const container = textOptionsKeys.every(containThisProps);

  if (!container) {
    const correctProperties = Default_Attributes.map((element) => element[0]);

    throw new Error(
      `textOptions must contain the following properties: ${correctProperties.join(
        ", "
      )}`
    );
  }
}
