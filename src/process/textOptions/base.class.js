import { __specialArray__, IterateOnAnArray } from "./specialArray.process";
export class Base {
  constructor({ SpecialArray = false, Props = false, __error, __process }) {
    this.__error = __error;
    this.__process = __process;
    this.SpecialArray = SpecialArray;

    if (this.SpecialArray) {
      this.findTarget = (target) => this.#FIND_TARGET(target);
    }

    if (Props) {
      // this.SpecialArray = this.#SPECIAL_ARRAY;
    }
  }

  #FIND_TARGET(target) {
    const SA = this.SpecialArray;

    if (!SA.targets.flat().includes(target)) return undefined;

    const TARGET_INDEX = IterateOnAnArray(SA.targets, target);
    const TARGET_RESULT = __specialArray__(SA.elementsToGive, TARGET_INDEX);

    // custom process if the target is true

    return {
      result: TARGET_RESULT,
      process: SA.process,
    };
  }
}
