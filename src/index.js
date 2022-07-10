import React from "react";

import { WrappLetter } from "./wrappLetter.module";

import { selectSpecialClass } from "./specialClass.module";

export default function WrappingLetters({
   text = "Hello world !!! <3",
   textOptions = [{}],
   structure,
}) {
   function baseStructure({ letter, cssClass }) {
      return (
         <span className={cssClass}>
            {letter}
         </span>
      );
   }
   const Structure = structure || baseStructure;
   let specialStructure = Structure !== baseStructure ? true : false;

   const { PerWord = false, ClassToAdd = new String(), SelectClass = {} } =  textOptions[0]

   const isIts = (it) => {
      return Object.prototype.toString.call(it);
   };

   if (isIts(text) !== "[object String]") {
      throw new Error("text must be a string");
   }
   if (text === "") {
      throw new Error("text cannot be empty");
   }

   if (isIts(Structure) !== "[object Function]") {
      throw new Error("Structure must be a function(React Component)");
   }

   if (isIts(PerWord) !== "[object Boolean]") {
      throw new Error("PerWord must be a boolean");
   }

   let crumbledText = (PerWord ? text.split(" ") : [...text])

   var wrappedLetters = crumbledText.map(function (letter, index) {
      var a;
      if(PerWord) {
         if(index != crumbledText.length - 1) {
            a = letter + " ";  
         } else {
            a = letter;
         }
      }
      return (
         <Structure
            letter={a}
            key={`${letter} ${index}-${Math.random()}`}
         />
      );
   });

   if (isIts(textOptions) !== "[object Array]") {
      throw new Error("textOptions must be an array");
   } else if (textOptions.length > 0) {
      if (isIts(textOptions[0]) !== "[object Object]") {
         throw new Error(
            "inside the array of textOptions there must be an object"
         );
      }

      let textOptionsKeys = Object.keys(textOptions[0]);

      const verifytextOptionsKeys = (value, valueNb = 1) => {
         if (
            textOptionsKeys.length === valueNb &&
            textOptionsKeys.includes(value)
         )
            return true;
         else return false;
      };

      if (textOptions.length > 1) {
         throw new Error("textOptions must be a single object");
      }

      const wl_props = ['ClassToAdd', 'SelectClass', 'PerWord'];
      const containThisProps = (value) => wl_props.includes(value);
      const container  = textOptionsKeys.every(containThisProps);
      
      if(!container) {
         throw new Error("textOptions must contain the following properties: ClassToAdd, SelectClass, PerWord");
      }

      if (isIts(ClassToAdd) !== "[object String]") {
         throw new Error("ClassToAdd must be a string");
      } else if (isIts(PerWord) !== "[object Boolean]") {
         throw new Error("PerWord must be a boolean");
      }

      const wrappProps = {
         SelectClass,
         ClassToAdd,
         perWord: PerWord,
         crumbledText,
         Structure,
         specialStructure,
      }

      if(textOptionsKeys.includes('SelectClass')) {
         if (isIts(SelectClass) !== "[object Object]") {
            throw new Error("SelectClass must be an object");
         }
         return selectSpecialClass(wrappProps);
      } else {
         return WrappLetter(wrappProps);
      }
   }
   // ---- warning of empty textOpting---- //
   if (textOptionsKeys.length === 0) {
      Structure !== baseStructure
         ? console.warn(
              '"textOptions" is empty, returning a simple wrapper with structure'
           )
         : console.warn(
              '"textOptions" is empty, returning a simple wrapper of letters'
           );
   } // ---- Leave the process, start normal wrapp ---- //
   return wrappedLetters;
}
