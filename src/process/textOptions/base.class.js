export class Base {
  constructor({ SpecialArray, Props, __error, __process }) {
    this.SpecialArray = SpecialArray || false;
    this.Props = Props || false;
    this.__error = __error;
    this.__process = __process;
  }
}
