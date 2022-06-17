import React from "react";

// The function needs to be upgraded for the attribute perWord

export function WrappLetter({
   SelectClass = {
      searchWordValue,
      searchWordValueLength,
      specialClass,
      spaceBetweenWord,
   },
   crumbledText,
   ClassToAdd,
   Structure,
   specialStructure = false,
   perWord = false,
}) {
   let {
      searchWordValue = "",
      searchWordValueLength = 0,
      specialClass = new String(),
      spaceBetweenWord = false,
   } = SelectClass;

   // comprobation if searchWordValue is an array
   if (!Array.isArray(searchWordValue)) {
      searchWordValue = [searchWordValue];
      console.log(searchWordValue);
   }

   var arrElements = crumbledText
      .map(function (wrappElement, index) {
         console.log(wrappElement);
         console.log(
            searchWordValue.some((element) => element.length > 0),
            "length"
         );
         console.log(
            searchWordValue.some((element) => wrappElement === element[0]),
            "first letter"
         );
         console.log(
            searchWordValue.some(
               (element) => index + element.length <= crumbledText.length
            ),
            "letter not overflow"
         );

         console.log(
            searchWordValue.some(
               (element) =>
                  crumbledText.slice(index, index + element.length).join("") ===
                  element
            ),
            "letter match"
         );
         console.log("---");

         if (
            !perWord &&
            searchWordValue.some((element) => element.length > 0) &&
            searchWordValue.some((element) => wrappElement === element[0]) &&
            searchWordValue.some(
               (element) => index + element.length <= crumbledText.length
            ) &&
            searchWordValue.some(
               (element) =>
                  crumbledText.slice(index, index + element.length).join("") ===
                  element
            )
         ) {
            // here made a new  string varible
            // for a map to add the class
            let newCrumbledText = searchWordValue.filter((element) => {
               let cutted = crumbledText
                  .slice(index, index + element.length)
                  .join("");
               console.log(searchWordValue);
               console.log(element);
               console.log(cutted);
               return cutted === element;
            });
            newCrumbledText = [...newCrumbledText[0]];

            console.log(newCrumbledText, "new crumbledText");

            // const INDEX_SPECIAL_CLASS = newCrumbledText.indexOf(
            //    searchWordValue[0]
            // );
            // console.log(specialClass);
            // console.log(INDEX_SPECIAL_CLASS);

            var wl = newCrumbledText.map((wrappElement) => {
               return [
                  // letter
                  wrappElement,

                  // cssClass
                  !specialStructure
                     ? [ClassToAdd, specialClass].join(" ")
                     : specialClass,
               ];
            });

            // here it'll slice the searching word from the crumbledText
            console.log(newCrumbledText.length, "newCrumbledText.length");
            crumbledText.splice(index, newCrumbledText.length - 1);
            console.log(crumbledText, "crumbledText");

            return wl;
         } else {
            //here is wrapped per word.
            let cssClass = !specialStructure ? ClassToAdd : "";

            if (perWord) {
               if (searchWordValue.includes(wrappElement)) {
                  cssClass = !specialStructure
                     ? [ClassToAdd, specialClass].join(" ")
                     : specialClass;
               }

               if (index != crumbledText.length - 1) {
                  wrappElement = wrappElement + " ";
               } else {
                  wrappElement = wrappElement;
               }
            }
            return [
               [
                  // letter or word
                  wrappElement,

                  // cssClass
                  cssClass,
               ],
            ];
         }
      })
      .flat();

   if (
      arrElements[0][0] === " " &&
      arrElements[arrElements.length - 1][0] === " "
   ) {
      arrElements.pop();
      arrElements.shift();
   }

   var wrappedLetters = arrElements.map(function (wrappElement, index) {
      return (
         <Structure
            letter={wrappElement[0]}
            cssClass={wrappElement[1]}
            key={`${wrappElement[0]}-${index}`}
         />
      );
   });

   return wrappedLetters;
}
