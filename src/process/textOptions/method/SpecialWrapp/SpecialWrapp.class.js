import { Base } from "../../base.class";
import { process__select_specialWrapp__ } from "./specialWrapp.process";
import { error__Filter_SpecialWrapp__ } from "./specialWrapp.error";

export class SpecialWrapp extends Base {
  constructor(SpecialWrapp) {
    super({
      SpecialArray: {
        targets: SpecialWrapp.wordToSearch,
        elementsToGive: SpecialWrapp.structureToAdd,
        process: {},
      },
      __process: () =>
        process__select_specialWrapp__({
          wordToSearch: SpecialWrapp.wordToSearch,
          structureToAdd: SpecialWrapp.structureToAdd,
        }),
      __error: () => error__Filter_SpecialWrapp__(SpecialWrapp),
    });
  }
}