import { whatItIs } from "../common/whatIsIt";

// checks to avoid errors
class __Text__process__ {
  constructor(text) {
    this.text = text;

    (function (text) {
      if (whatItIs(text) !== "[object String]") {
        throw new Error("text must be a string");
      }
      if (text === "") {
        throw new Error("text cannot be empty");
      }
    })(this.text);
  }
}

export { __Text__process__ };
