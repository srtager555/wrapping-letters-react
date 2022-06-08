import { WrappLetter } from './wrappLetter.module';

function errorFilterSpecialClass(SelectClass, perWord) {
   const SelectClassKeys = Object.keys(SelectClass);

   const sc_props = ['wordToSearch', 'classToAdd', 'spaceBetweenWord'];

   // required props 'wordToSearch', 'classToAdd'.

   var containThisProps = function containThisProps(value) {
      return sc_props.includes(value);
   };

   var contain = SelectClassKeys.every(containThisProps);

   if (!contain && !perWord) {
      throw new Error("\"SelectClass\" must contain the following properties: wordToSearch, classToAdd. spaceBetweenWord is optional");
   }

   var wordToSearchSearch = SelectClassKeys.some((value) => value === 'wordToSearch');
   var classToAddSearch = SelectClassKeys.some((value) => value === 'classToAdd');;

   if (!wordToSearchSearch || !classToAddSearch) {
      throw new Error("\"SelectClass\" must be required the following properties: wordToSearch, classToAdd.");
   }

   const searchSBW = SelectClassKeys.some((key) => key === "spaceBetweenWord");

   if (perWord && searchSBW) {
      throw new Error("\"spaceBetweenWord\" is not allowed when perWord is true");
   }

   const { wordToSearch, classToAdd, spaceBetweenWord } = SelectClass;

   if (typeof wordToSearch != "string") {
      throw new Error("\"wordToSearch\" must be a string");
   }
   if (typeof classToAdd != "string") {
      throw new Error("\"classToAdd\" must be a string");
   }
   if (!perWord && searchSBW && typeof spaceBetweenWord !== "boolean") {
      throw new Error("\"spaceBetweenWord\" must be a boolean");
   }
}

// ====== select special class to add ======
export function selectSpecialClass({
   SelectClass,
   crumbledText,
   ClassToAdd,
   Structure,
   specialStructure,
   perWord,
}) {
   errorFilterSpecialClass(SelectClass, perWord);

   let searchWordValue;
   let searchWordValueLength;
   let specialClass;

   searchWordValue = [...SelectClass.wordToSearch];

   if (SelectClass.spaceBetweenWord === true && perWord === false) {
      searchWordValue.unshift(" ");
      searchWordValue.push(" ");
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