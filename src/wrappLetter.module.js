import React from "react";

// The function needs to be upgraded for the attribute perWord

export function WrappLetter({
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

   var arrElements = text.map(function (wrappElement, index) {
      if (
         searchWordValue.length > 0 &&
         wrappElement === searchWordValue[0] &&
         index + searchWordValueLength <= text.length &&
         text.slice(index, index + searchWordValueLength).join("") ===
            searchWordValue.join("")
      ) {
         const newText = text.slice(index, index + searchWordValueLength);

         var wl = newText.map((wrappElement) => {
            return [
               // letter or word
               wrappElement,

               // cssClass
               !specialStructure
                  ? [ClassToAdd, specialClass].join(" ")
                  : specialClass,
               ,

               // Key
               `${wrappElement} ${index}-${Math.random()}`,
            ];
         });
         text.splice(index, searchWordValueLength - 1);
         return wl;
      } else {
         return [
            // letter or word
            wrappElement,

            // cssClass
            !specialStructure ? ClassToAdd : "",

            // Key
            `${wrappElement} ${index}-${Math.random()}`,
         ];
      }
   });


   var wrappedLetters = arrElements.map(function (wrappElement, index) {
      
      return (
         <Structure 
            letter={wrappElement[0]}
            cssClass={wrappElement[1]}
            key={wrappElement[2]}
         />
      )

      // github copilot

      // return React.createElement(
      //    "span",
      //    { key: `letter ${index}` },
      //    wrappElement[0],
      //    React.createElement("span", {
      //       className: `${wrappElement[1]}`,
      //       key: `${wrappElement[2]}`,
      //    })
      // );
   });

   //  var wrappedLetters = text.map((letter, index) => {
   //     if (
   //        searchWordValue.length > 0 &&
   //        letter === searchWordValue[0] &&
   //        index + searchWordValueLength <= text.length &&
   //        text.slice(index, index + searchWordValueLength).join("") ===
   //           searchWordValue.join("")
   //     ) {
   //        const newText = text.slice(index, index + searchWordValueLength);

   //        var wl = newText.map((letter) => {
   //           return (
   //              <Structure
   //                 letter={letter}
   //                 cssClass={
   //                    !specialStructure
   //                       ? [ClassToAdd, specialClass].join(" ")
   //                       : specialClass
   //                 }
   //                 key={`${letter} ${index}-${Math.random()}`}
   //              />
   //           );
   //        });
   //        text.splice(index, searchWordValueLength - 1);
   //        return wl;
   //     } else {
   //        return (
   //           <Structure
   //              letter={letter}
   //              cssClass={!specialStructure ? ClassToAdd : ""}
   //              key={`${letter} ${index}-${Math.random()}`}
   //           />
   //        );
   //     }
   //  });

   return wrappedLetters;
}
