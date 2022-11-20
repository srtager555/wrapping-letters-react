import React from "react";

import { whatItIs } from "../../common/whatIsIt";
import { error__Filter_structure__ } from "./structure.error";
import { process__structure__ } from "./structure.process";

// here the code will check if has an custom structure anf

class __Structure__process__ {
  constructor(structure = baseStructure, ClassToAdd) {
    this.current = {
      structure: structure,
      hasSpecialStructure: !Object.is(structure, baseStructure),
    };

    this.getStructure = this.#STRUCTURE(structure);

    if (this.hasSpecialStructure) this.#ERROR(this.current, ClassToAdd);
  }

  #ERROR(current, ClassToAdd) {
    if (
      !["[object Object]", "[object Function]"].some(
        (el) => el === whatItIs(current.structure)
      )
    ) {
      throw new Error(
        "Structure must be a function(React Component) or an Object"
      );
    }

    error__Filter_structure__(
      ClassToAdd,
      current.hasSpecialStructure,
      current.structure
    );
  }

  #STRUCTURE(structure) {
    return process__structure__(structure);
  }
}

function baseStructure({ letter, cssClass, specialWrapp }) {
  // eslint-disable-next-line react/prop-types
  function DEFAULT_COMPONENT({ letter, cssClass }) {
    return <span className={cssClass}>{letter}</span>;
  }

  const { hasCustomWrapp, hasCustomProps, NewWrappStructure } = specialWrapp;

  let props = {
    letter,
    cssClass,
  };

  // if the variable has a default value, the "hasCustomWrapp" not is required
  let Component =
    specialWrapp.NewWrappStructure ||
    function () {
      return <DEFAULT_COMPONENT {...props} />;
    };

  if (hasCustomProps) {
    Component = NewWrappStructure.structureToAdd;

    return <Component {...props} {...NewWrappStructure.props} />;
  }

  return <Component {...props} />;
}

export { __Structure__process__ };
