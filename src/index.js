import React from "react";

import { WrappLetter } from "./process/wrappLetter.process";
import { textOptions__process_layout__ } from "./layout";
import { error__main_filter__ } from "./error";
import { error__props_filter__ } from "./error/props-filter.error";

import { process__select_specialClass__ } from "./process/specialClass.process";
import { process__select_specialWrapp__ } from "./process/specialWrapp.process";

import { whatItIs } from "./common/whatIsIt";

export default function WrappingLetters(props) {
  // first need declare the component to return
  function baseStructure({ letter, cssClass, specialWrapp }) {
    // eslint-disable-next-line react/prop-types
    function DEFAULT_COMPONENT({ letter, cssClass }) {
      return <span className={cssClass}>{letter}</span>;
    }

    const {
      hasCustomWrapp,
      NewWrappStructure = () => (
        <DEFAULT_COMPONENT letter={letter} cssClass={cssClass} />
      ),
    } = specialWrapp;

    return hasCustomWrapp ? (
      <NewWrappStructure letter={letter} cssClass={cssClass} />
    ) : (
      <DEFAULT_COMPONENT letter={letter} cssClass={cssClass} />
    );
  }

  // Here the code'll verify if the props are correct.
  error__props_filter__(props);

  const { text = "Hello world !!! <3", textOptions = {}, structure } = props;

  // if the user has a custom structure here it will be changed by it
  const Structure = structure || baseStructure;
  let specialStructure = Structure !== baseStructure ? true : false;

  // checks to avoid errors
  if (whatItIs(text) !== "[object String]") {
    throw new Error("text must be a string");
  }
  if (text === "") {
    throw new Error("text cannot be empty");
  }

  if (whatItIs(Structure) !== "[object Function]") {
    throw new Error("Structure must be a function(React Component)");
  }

  // textOptions must be an Object
  if (whatItIs(textOptions) !== "[object Object]")
    throw new Error('"textOptions" must be an Object --- wrapping-letters');

  let wrappProps = {
    Structure,
    specialStructure,
  };

  // delfaut value layout and value comprobations
  textOptions__process_layout__(textOptions, wrappProps);

  // here the code will cath the errors in the user's code
  error__main_filter__(wrappProps);

  // ClassToAdd, SelectClass,
  const { SpecialWrapp, PerWord } = wrappProps;

  // here the code will declare the crumble text per word or letters
  const crumbledText = PerWord ? text.split(" ") : [...text];

  // Process of the specialClass object
  const SPECIAL_CLASS__INFO_PROCESSED = process__select_specialClass__({
    SelectClass: wrappProps.SelectClass,
    crumbledText,
    PerWord,
  });

  const SPECIAL_WRAPP__INFO_PROCESSED = process__select_specialWrapp__({
    wordToSearch: SpecialWrapp.wordToSearch,
    structureToAdd: SpecialWrapp.structureToAdd,
  });

  wrappProps.SelectClass = SPECIAL_CLASS__INFO_PROCESSED;
  wrappProps.SpecialWrapp = SPECIAL_WRAPP__INFO_PROCESSED;

  // The code will add the last values in the obj.
  wrappProps.crumbledText = crumbledText;

  return WrappLetter(wrappProps);
}
