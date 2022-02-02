import React from "react";

// The function needs to be upgraded for the attribute perWord

export function WrappLetter({
   SelectClass = {
      searchWordValue: "",
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
   let { searchWordValue, searchWordValueLength, specialClass, spaceBetweenWord } = SelectClass;
   console.log(searchWordValue);

   var arrElements = text.map(function (wrappElement, index) {
      console.log(wrappElement);
      wrappElement = [...wrappElement];
      console.log(wrappElement);
      if (
         //    perWord &&
         //    !spaceBetweenWord &&
         //    wrappElement === searchWordValue.join("")
         searchWordValue.length > 0 &&
         wrappElement[0] === searchWordValue[0] &&
         index + searchWordValueLength <= text.length &&
         text.slice(index, index + searchWordValueLength).join("") ===
         searchWordValue.join("")
      ) {
         if (perWord) {
            console.log("test")
            console.log(wrappElement.join(""));

            wrappElement = wrappElement.join("")
            return [[
               // letter or word
               wrappElement,

               // cssClass
               !specialStructure
                  ? [ClassToAdd, specialClass].join(" ")
                  : specialClass
               ,

               // Key
               `"${wrappElement}"-${index}`,
            ]];
         } else {
            console.log("test1")
            const newText = text.slice(index, spaceBetweenWord ? index + searchWordValueLength - 1 : index + searchWordValueLength);

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

            text.splice(index, spaceBetweenWord ? searchWordValueLength - 2 : searchWordValueLength - 1);

            return wl;
         }

      } else {
         wrappElement = wrappElement.join("")
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

   if (arrElements[0][0] === " " && arrElements[arrElements.length - 1][0] === " ") {
      arrElements.pop();
      arrElements.shift();
   }
   console.log(arrElements);
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
