import { __specialArray__, IterateOnAnArray } from "./specialArray.process";
export class Base {
  constructor({
    name = "",
    SpecialArray = false,
    Props = false,
    __error,
    __process,
  }) {
    // SpecialArray = {
    //   targets: [],
    //   elementsToGive: [],
    //   process: {},
    // }
    this.name = name;
    this.process = this.#PROCESS(__process);
    this.SpecialArray = SpecialArray;

    this.#ERROR(__error);

    if (this.SpecialArray) {
      this.findTarget = (target) => this.#FIND_TARGET(target);
    }

    if (Props) {
      // this.SpecialArray = this.#SPECIAL_ARRAY;
    }
  }

  #FIND_TARGET(target) {
    const SA = this.SpecialArray;

    // if the options empty, the function will stopped
    if (!(SA.target != undefined) && !(SA.elementsToGive != undefined)) return;

    if (!SA.targets.flat().includes(target)) return undefined;

    const TARGET_INDEX = IterateOnAnArray(SA.targets, target);
    const TARGET_RESULT = __specialArray__(SA.elementsToGive, TARGET_INDEX);

    const processFun = SA.process && ((props) => SA.process(props));

    return {
      result: TARGET_RESULT,
      process: processFun,
    };
  }

  #PROCESS(customProcess) {
    return customProcess();
  }

  #ERROR(custom) {
    custom();
  }
}
