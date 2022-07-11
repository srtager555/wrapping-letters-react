import React from "react";

import { WrappLetter } from "./wrappLetter.module";

import { selectSpecialClass } from "./specialClass.module";

export default function WrappingLetters({
   text = "Hello world !!! <3",
   textOptions = {},
   structure,
}) {
   // first need declare the component to return
   function baseStructure({ letter, cssClass, specialStructure = {} }) {
      function DEFAULT_COMPONENT({ letter, cssClass }) {
         return <span className={cssClass}>{letter}</span>;
      }

      const {
         hasModification = false,
         NewTagStructure = () => (
            <DEFAULT_COMPONENT letter={letter} cssClass={cssClass} />
         ),
      } = specialStructure;

      return hasModification ? (
         <NewTagStructure />
      ) : (
         <DEFAULT_COMPONENT letter={letter} cssClass={cssClass} />
      );
   }

   // if the user has a custom structure here it will be changed by it
   const Structure = structure || baseStructure;
   let specialStructure = Structure !== baseStructure ? true : false;

   // now destructure the props
   const {
      PerWord = false,
      ClassToAdd = new String(),
      SelectClass = {},
      customWrapp = {},
   } = textOptions;

   // This function is to know what it is.
   const whatItIs = (it) => {
      return Object.prototype.toString.call(it);
   };

   if (whatItIs(text) !== "[object String]") {
      throw new Error("text must be a string");
   }
   if (text === "") {
      throw new Error("text cannot be empty");
   }

   if (whatItIs(Structure) !== "[object Function]") {
      throw new Error("Structure must be a function(React Component)");
   }

   if (whatItIs(PerWord) !== "[object Boolean]") {
      throw new Error("PerWord must be a boolean");
   }

   // here the code will make a simple wrapp for to return
   let crumbledText = PerWord ? text.split(" ") : [...text];

   var wrappedLetters = crumbledText.map(function (letter, index) {
      var a = letter;
      if (PerWord) {
         if (index != crumbledText.length - 1) {
            a = letter + " ";
         } else {
            a = letter;
         }
      }
      return <Structure letter={a} key={`'${letter}'-${index}}`} />;
   });


   const WHATIS_TEXTOPTIONS = whatItIs(textOptions);

   // textOptions must be an Object
   if (
      // WHATIS_TEXTOPTIONS !== "[object Array]" &&
      WHATIS_TEXTOPTIONS !== "[object Object]"
   ) {
      // Come soon the code will work an array.

      console.warn('"textOptions" must be an Object --- wrapping-letters');
      console.warn("The component now is returning a simple wrapp --- wrapping-letters");

      // here is a simple wrapp
      return wrappedLetters;
   }

   // textOptions can't be empty
   if (
      whatItIs(textOptions) === "[object Object]" &&
      Object.keys(textOptions).length === 0
   ) {
      // here is a simple wrapp
      return wrappedLetters;
   }

   // if (whatItIs(textOptions) !== "[object Array]") {
   //    throw new Error("textOptions must be an array");
   // } else
   //  if (textOptions.length > 0) {
   // if (whatItIs(textOptions[0]) !== "[object Object]") {
   //    throw new Error(
   //       "inside the array of textOptions there must be an object"
   //    );
   // }

   let textOptionsKeys = Object.keys(textOptions);

   const verifytextOptionsKeys = (value, valueNb = 1) => {
      if (textOptionsKeys.length === valueNb && textOptionsKeys.includes(value))
         return true;
      else return false;
   };

   if (textOptions.length > 1) {
      throw new Error("textOptions must be a single object");
   }

   const wl_props = [
      "ClassToAdd",
      "SelectClass",
      "SpecialStructure",
      "PerWord",
   ];
   const containThisProps = (value) => wl_props.includes(value);
   const container = textOptionsKeys.every(containThisProps);

   if (!container) {
      throw new Error(
         `textOptions must contain the following properties: ${wl_props.join(
            " "
         )}`
      );
   }

   if (whatItIs(ClassToAdd) !== "[object String]") {
      throw new Error("ClassToAdd must be a string");
   } else if (whatItIs(PerWord) !== "[object Boolean]") {
      throw new Error("PerWord must be a boolean");
   }

   const wrappProps = {
      SelectClass,
      ClassToAdd,
      perWord: PerWord,
      crumbledText,
      Structure,
      specialStructure,
   };

   if (textOptionsKeys.includes("SelectClass")) {
      if (whatItIs(SelectClass) !== "[object Object]") {
         throw new Error("SelectClass must be an object");
      }
      return selectSpecialClass(wrappProps);
   } else {
      return WrappLetter(wrappProps);
   }
   // }
   // ---- warning of empty textOpting---- //
   // if (textOptionsKeys.length === 0) {
   //    Structure !== baseStructure
   //       ? console.warn(
   //            '"textOptions" is empty, returning a simple wrapper with structure'
   //         )
   //       : console.warn(
   //            '"textOptions" is empty, returning a simple wrapper of letters'
   //         );
   // } // ---- Leave the process, start normal wrapp ---- //
   // return wrappedLetters;
}
