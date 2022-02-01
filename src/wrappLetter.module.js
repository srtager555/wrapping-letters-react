import React from "react";

// The function needs to be upgraded for the attribute perWord

export function WrappLetter({
   SelectClass = {
      searchWordValue: 0,
      searchWordValueLength: 0,
      specialClass: "",
      spaceBetweenWord: false,
   },
   text,
   ClassToAdd,
   Structure,
   specialStructure = false,
   perWord = false,
}) {
   let { searchWordValue, searchWordValueLength, specialClass, spaceBetweenWord} = SelectClass;

   var arrElements = text.map(function (wrappElement, index) {
      if (
         searchWordValue.length > 0 &&
         wrappElement === searchWordValue[0] &&
         index + searchWordValueLength <= text.length &&
         text.slice(index, index + searchWordValueLength).join("") ===
            searchWordValue.join("")
      ) {
         const newText = text.slice(index, spaceBetweenWord? index + searchWordValueLength - 1 : index + searchWordValueLength);

         var wl = newText.map((wrappElement, index) => {
            return [
               // letter or word
               wrappElement,

               // cssClass
               !specialStructure
                  ? [ClassToAdd, specialClass].join(" ")
                  : specialClass
               ,

               // Key
               `"${wrappElement}"-${index}`,
            ];
         });
         text.splice(index, spaceBetweenWord? searchWordValueLength - 2 : searchWordValueLength - 1);
         return wl;
      } else {
         return [[
            // letter or word
            wrappElement,

            // cssClass
            !specialStructure ? ClassToAdd : "",

            // Key
            `"${wrappElement}"-${index}`,
         ]];
      }
   }).flat();

   if(arrElements[0][0] === " " && arrElements[arrElements.length - 1][0] === " ") {
      arrElements.pop();
      arrElements.shift();
   }

   var wrappedLetters = arrElements.map(function (wrappElement, index) {
      return (
         <Structure 
            letter={wrappElement[0]}
            cssClass={wrappElement[1]}
            key={wrappElement[2]}
         />
      )
   });

   return wrappedLetters;
}
