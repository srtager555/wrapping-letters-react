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

   const { PerWord = false, ClassToAdd = new String(), SelectClass = {} } =  wordOptions[0]

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

   if (isIts(PerWord) !== "[object Boolean]") {
      throw new Error("PerWord must be a boolean");
   }

   let text = (PerWord ? word.split(" ") : [...word])

   var wrappedLetters = text.map(function (letter, index) {
      var a;
      if(PerWord) {
         if(index != text.length - 1) {
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

   if (isIts(wordOptions) !== "[object Array]") {
      throw new Error("wordOptions must be an array");
   } else if (wordOptions.length > 0) {
      if (isIts(wordOptions[0]) !== "[object Object]") {
         throw new Error(
            "inside the array of wordOptions there must be an object"
         );
      }

      let wordOptionsKeys = Object.keys(wordOptions[0]);

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

      const wl_props = ['ClassToAdd', 'SelectClass', 'PerWord'];
      const containThisProps = (value) => wl_props.includes(value);
      const container  = wordOptionsKeys.every(containThisProps);
      
      if(!container) {
         throw new Error("wordOptions must contain the following properties: ClassToAdd, SelectClass, PerWord");
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
         text,
         Structure,
         specialStructure,
      }

      if(wordOptionsKeys.includes('SelectClass')) {
         if (isIts(SelectClass) !== "[object Object]") {
            throw new Error("SelectClass must be an object");
         }
         return selectSpecialClass(wrappProps);
      } else {
         return WrappLetter(wrappProps);
      }
   }
   // ---- warning of empty wordOpting---- //
   if (wordOptionsKeys.length === 0) {
      Structure !== baseStructure
         ? console.warn(
              '"wordOptions" is empty, returning a simple wrapper with structure'
           )
         : console.warn(
              '"wordOptions" is empty, returning a simple wrapper of letters'
           );
   } // ---- Leave the process, start normal wrapp ---- //
   return wrappedLetters;
}
