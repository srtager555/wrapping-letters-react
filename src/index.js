import React from "react";

function WrappLetter({
   SelectClass = {
      searchWordValue: 0,
      searchWordValueLength: 0,
      specialClass: "",
   },
   text,
   ClassToAdd,
   Structure,
   specialStructure = false,
}) {
   let { searchWordValue, searchWordValueLength, specialClass } = SelectClass;

   var wrappedLetters = text.map((letter, index) => {
      if (
         searchWordValue.length > 0 &&
         letter === searchWordValue[0] &&
         index + searchWordValueLength <= text.length &&
         text.slice(index, index + searchWordValueLength).join("") ===
            searchWordValue.join("")
      ) {
         const newText = text.slice(index, index + searchWordValueLength);

         var wl = newText.map((letter) => {
            return (
               <Structure
                  letter={letter}
                  cssClass={
                     !specialStructure
                        ? [ClassToAdd, specialClass].join(" ")
                        : specialClass
                  }
                  key={`${letter} ${index}-${Math.random()}`}
               />
            );
         });
         text.splice(index, searchWordValueLength - 1);
         return wl;
      } else {
         return (
            <Structure
               letter={letter}
               cssClass={!specialStructure ? ClassToAdd : ""}
               key={`${letter} ${index}-${Math.random()}`}
            />
         );
      }
   });

   return wrappedLetters;
}

function errorFilterSpecialClass(SelectClass) {
   const SelectClassKeys = Object.keys(SelectClass);

   const searchWord = SelectClassKeys.some((key) => key === "wordToSearch");
   const searchWordClass = SelectClassKeys.some((key) => key === "classToAdd");
   const searchSBW = SelectClassKeys.some((key) => key === "spaceBetweenWord");

   if (!searchWord && !searchWordClass && !searchSBW) {
      throw new Error(
         "SelectClass must have 3 keys : wordToSearch, spaceBetweenWord and classToAdd"
      );
   }

   if (
      Object.prototype.toString.call(SelectClass.wordToSearch) !==
         "[object String]" ||
      Object.prototype.toString.call(SelectClass.spaceBetweenWord) !==
         "[object Boolean]" ||
      Object.prototype.toString.call(SelectClass.classToAdd) !==
         "[object String]"
   ) {
      throw new Error(
         "wordToSearch and classToAdd must be a string, spaceBetweenWord must be a boolean"
      );
   }
}

// ====== select special class to add ======
function selectSpecialClass({
   SelectClass,
   text,
   ClassToAdd,
   Structure,
   specialStructure,
}) {
   if (Object.keys(SelectClass).length !== 3) {
      throw new Error(
         "SelectClass must have 3 keys : wordToSearch, spaceBetween and classToAdd"
      );
   } else {
      let searchWordValue;
      let searchWordValueLength;
      let specialClass;

      errorFilterSpecialClass(SelectClass);
      searchWordValue = [...SelectClass.wordToSearch];

      if (SelectClass.spaceBetweenWord === true) {
         searchWordValue.unshift(" ");
         searchWordValue.push(" ");
         text.push(" ");
      }

      searchWordValueLength = searchWordValue.length;
      specialClass = SelectClass.classToAdd;

      return WrappLetter({
         SelectClass: {
            searchWordValue,
            searchWordValueLength,
            specialClass,
         },
         text,
         ClassToAdd,
         Structure,
         specialStructure,
      });
   }
}
// ====== select special class to add ======

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
