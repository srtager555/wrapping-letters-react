import { Base } from "../../base.class";

import { error__Filter_SelectClass__ } from "./specialClass.error";
import { process__SelectClass__ } from "./specialClass.process";

export class SelectClass extends Base {
  constructor(SELECT_CLASS, ATTRIBUTES, crumbledText) {
    function Process({ specialStructure, ClassToAdd, newClass }) {
      return !specialStructure ? [ClassToAdd, newClass].join(" ") : newClass;
    }

    super({
      name: "SelectClass",
      SpecialArray: {
        targets: SELECT_CLASS.wordToSearch,
        elementsToGive: SELECT_CLASS.classToAdd,
        process: (props) => Process(props),
      },
      __process: () =>
        process__SelectClass__({
          SelectClass: ATTRIBUTES.SelectClass,
          PerWord: ATTRIBUTES.PerWord,
          crumbledText: crumbledText,
        }),
      __error: () =>
        error__Filter_SelectClass__(ATTRIBUTES.SelectClass, ATTRIBUTES.PerWord),
    });
  }
}
