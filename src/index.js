import React from "react";

import { WrappLetter } from "./process/wrappLetter.process";
import { textOptions__process_layout__ } from "./layout";
import { error__main_filter__ } from "./error";
import { error__props_filter__ } from "./error/props-filter.error";

import { process__select_specialClass__ } from "./process/specialClass.process";
import { process__select_specialWrapp__ } from "./process/specialWrapp.process";

import { whatItIs } from "./common/whatIsIt";
import { process__structure__ } from "./process/structure.process";

/**
 * @param  {string} text - what do you need wrap? here put your text.
 * @param  {Object} textOptions - Here you'll put the options to wrap
 * @param  {JSX.Element} structure - Here put the component with the JSX syntax that you want out each wrap
 * @returns {JSX.Element} returns multiple React components on JSX
 */
export default function WrappingLetters(
  props = {
    text: new String(),
    textOptions: new Object(),
    structure: new Function(),
  }
) {
  // first need declare the component to return
  function baseStructure({ letter, cssClass, specialWrapp }) {
    // eslint-disable-next-line react/prop-types
    function DEFAULT_COMPONENT({ letter, cssClass }) {
      return <span className={cssClass}>{letter}</span>;
    }

    const {
      hasCustomWrapp,
      // the code is crashed because it can receive an object instead of a component
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
  let { text = "Hello world!!! <3", textOptions = {}, structure } = props;

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

  if (
    !["[object Object]", "[object Function]"].some(
      (el) => el === whatItIs(Structure)
    )
  ) {
    throw new Error(
      "Structure must be a function(React Component) or an Object"
    );
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

  const STRUCTURE__INFO_PROCESS = process__structure__(Structure);

  wrappProps.SelectClass = SPECIAL_CLASS__INFO_PROCESSED;
  wrappProps.SpecialWrapp = SPECIAL_WRAPP__INFO_PROCESSED;
  wrappProps.Structure = STRUCTURE__INFO_PROCESS;

  // The code will add the last values in the obj.
  wrappProps.crumbledText = crumbledText;

  return WrappLetter(wrappProps);
}
