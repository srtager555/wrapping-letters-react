import { WrappLetter } from "./wrappLetter.module";

export function selectSpecialClass({
   SelectClass,
   crumbledText,
   ClassToAdd,
   Structure,
   specialStructure,
   perWord,
}) {

   let searchWordValue = SelectClass.wordToSearch;
   let searchWordValueLength;
   let specialClass;

   // comprobation for search within words
   if (SelectClass.spaceBetweenWord === true && perWord === false) {
      // searchWordValue = searchWordValue.map((element) => {
      //    return ` ${element} `;
      // })
      crumbledText.push(" ");

      crumbledText.unshift(" ");
   }

   searchWordValueLength = searchWordValue.length;
   specialClass = SelectClass.classToAdd;

   return WrappLetter({
      SelectClass: {
         searchWordValue,
         searchWordValueLength,
         specialClass,
         spaceBetweenWord: SelectClass.spaceBetweenWord,
      },
      crumbledText,
      ClassToAdd,
      Structure,
      specialStructure,
      perWord,
   });
}
// ====== select special class to add ======
