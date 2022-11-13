import { whatItIs } from "../common/whatIsIt";

export class __TextOptions__process__ {
  constructor(textOptions) {
    this.textOptions = textOptions;

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
