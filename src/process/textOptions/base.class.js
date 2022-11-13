export class Base {
  constructor({ SpecialArray = false, Props = false, __error, __process }) {
    this.Props = Props || false;
    this.__error = __error;
    this.__process = __process;

    if (SpecialArray) {
      this.SpecialArray = this.#SpecialArray;
    }

    if (Props) {
      this.SpecialArray = this.#SpecialArray;
    }
  }

  #SpecialArray() {
    console.log("a");
  }
}
