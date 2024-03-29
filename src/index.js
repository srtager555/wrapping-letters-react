import React from "react";

import { WrappLetter } from "./process/wrappLetter.process";
import { error__props_filter__ } from "./error/props-filter.error";

import { memo__process } from "./process/memo.process";
import { __Text__process__ } from "./process/text.class";
import { __Structure__process__ } from "./process/structure/structure.class";
import { __TextOptions__process__ } from "./process/textOptions/textOptions.class";

function WL(
  props = {
    text: new String(),
    textOptions: new Object(),
    structure: new Function(),
  }
) {
  // Here the code'll verify if the props are correct.
  error__props_filter__(props);

  let { text = "Hello world!!! <3", textOptions = {}, structure } = props;

  text = new __Text__process__(text).text;
  const TEXT_OPTIONS = new __TextOptions__process__(textOptions, text);
  const STRUCTURE = new __Structure__process__(
    structure,
    TEXT_OPTIONS.ClassToAdd
  );

  return WrappLetter(TEXT_OPTIONS, STRUCTURE);
}

/**
 * @param  {string} text - what do you need wrap? here put your text.
 * @param  {Object} textOptions - Here you'll put the options to wrap
 * @param  {JSX.Element} structure - Here put the component with the JSX syntax that you want out each wrap
 * @returns {JSX.Element} returns multiple React components on JSX
 */

const WrappingLetters = React.memo(WL, memo__process);

export default WrappingLetters;
