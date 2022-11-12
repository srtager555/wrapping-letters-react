import React from "react";

import { whatItIs } from "../common/whatIsIt";

// here the code will check if has an custom structure anf

class __Structure__process__ {
  constructor(structure) {
    this.structure = structure || baseStructure;
    this.hasSpecialStructure = !Object.is(this.structure, baseStructure);

    if (this.hasSpecialStructure) this.error(this.structure);
  }

  error(structure) {
    if (
      !["[object Object]", "[object Function]"].some(
        (el) => el === whatItIs(structure)
      )
    ) {
      throw new Error(
        "Structure must be a function(React Component) or an Object"
      );
    }
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
