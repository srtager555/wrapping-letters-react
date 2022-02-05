import { WrappLetter } from './wrappLetter.module';

function errorFilterSpecialClass(SelectClass, perWord) {
   const SelectClassKeys = Object.keys(SelectClass);

   const sc_props = ['wordToSearch', 'classToAdd', 'spaceBetweenWord'];

   // required props 'wordToSearch', 'classToAdd'.
   const containThisProps = (value) => sc_props.slice(0, 2).includes(value);
   const contain = SelectClassKeys.every(containThisProps);

   if (!contain && !perWord) {
      throw new Error("\"SelectClass\" must contain the following properties: wordToSearch, classToAdd. spaceBetweenWord is optional");
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
   text,
   ClassToAdd,
   Structure,
   specialStructure,
   perWord,
}) {
   if (Object.keys(SelectClass).length !== 3 && false) {
      throw new Error(
         "SelectClass must have 3 keys : wordToSearch, spaceBetween and classToAdd"
      );
   } else {
      let searchWordValue;
      let searchWordValueLength;
      let specialClass;

      errorFilterSpecialClass(SelectClass, perWord);
      searchWordValue = [...SelectClass.wordToSearch];

      if (SelectClass.spaceBetweenWord === true && perWord === false) {
         searchWordValue.unshift(" ");
         searchWordValue.push(" ");
         text.push(" ");

         text.unshift(" ");
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
         text,
         ClassToAdd,
         Structure,
         specialStructure,
         perWord,
      });
   }
}
 // ====== select special class to add ======