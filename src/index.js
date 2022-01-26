import React from "react";

import { WrappLetter } from "./wrappLetter.module";

import { selectSpecialClass } from "./specialClass.module";

export default function WrappingLetters({
   word = "Hello world !!! <3",
   wordOptions = [],
   structure,
}) {
   function baseStructure({ letter, cssClass, ...props }) {
      return (
         <span className={cssClass} {...props}>
            {letter}
         </span>
      );
   }
   const Structure = structure || baseStructure;
   let specialStructure = Structure !== baseStructure ? true : false;

   const isIts = (it) => {
      return Object.prototype.toString.call(it);
   };

   if (isIts(word) !== "[object String]") {
      throw new Error("Word must be a string");
   }
   if (word === "") {
      throw new Error("Word cannot be empty");
   }

   if (isIts(Structure) !== "[object Function]") {
      throw new Error("Structure must be a function(React Component)");
   }

   let text = [...word];

   var wrappedLetters = text.map(function (letter, index) {
      return React.createElement("span", { key: `letter ${index}` }, letter);
   });

   if (isIts(wordOptions) !== "[object Array]") {
      throw new Error("wordOptions must be an array");
   } else if (wordOptions.length > 0) {
      if (isIts(wordOptions[0]) !== "[object Object]") {
         throw new Error(
            "inside the array of wordOptions there must be an object"
         );
      }

      let wordOptionsKeys = Object.keys(wordOptions[0]);
      let { ClassToAdd, SelectClass } = wordOptions[0];

      const verifyWordOptionsKeys = (value, valueNb = 1) => {
         if (
            wordOptionsKeys.length === valueNb &&
            wordOptionsKeys.includes(value)
         )
            return true;
         else return false;
      };

      if (wordOptions.length > 1) {
         throw new Error("wordOptions must be a single object");
      }

      if (verifyWordOptionsKeys("ClassToAdd")) {
         if (isIts(ClassToAdd) !== "[object String]") {
            throw new Error("ClassToAdd must be a string");
         }
         return WrappLetter({
            SelectClass: {},
            text,
            ClassToAdd,
            Structure,
            specialStructure,
         });
      }

      if (verifyWordOptionsKeys("SelectClass")) {
         return selectSpecialClass({
            SelectClass,
            text,
            ClassToAdd: "",
            Structure,
            specialStructure,
         });
      }

      if (
         verifyWordOptionsKeys("ClassToAdd", 2) &&
         verifyWordOptionsKeys("SelectClass", 2)
      ) {
         return selectSpecialClass({
            SelectClass,
            text,
            ClassToAdd,
            Structure,
            specialStructure,
         });
      }

      // ---- warning of empty wordOpting---- //
      if (wordOptionsKeys.length === 0) {
         console.warn(
            '"wordOptions" is empty, returning a simple wrapper of letters'
         );
      } // ---- Leave the process, start normal wrapp ---- //
   }
   return wrappedLetters;
}
