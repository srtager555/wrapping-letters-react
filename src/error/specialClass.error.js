import { whatItIs } from "../common/whatIsIt";

export function error__Filter_SpecialClass__(SelectClass, PerWord) {
  // first the code need know if SelectClass is an Object
  if (whatItIs(SelectClass) != "[object Object]")
    throw new Error("SelectClass must be an Object!!! :s");

  const SelectClassKeys = Object.keys(SelectClass);

  // If SelectClass an empty Object the filter ends here
  if (SelectClassKeys.length === 0) return;

  const sc_props = ["wordToSearch", "classToAdd", "spaceBetweenWord"];

  // required props 'wordToSearch', 'classToAdd'.
  // comprobation if the object contain a props not in the list

  var containThisProps = function containThisProps(value) {
    return sc_props.includes(value);
  };

  var contain = SelectClassKeys.every(containThisProps);

  // if the object doesn't contain the required props
  if (!contain && !PerWord) {
    throw new Error(
      '"SelectClass" must contain the following properties: wordToSearch, classToAdd. spaceBetweenWord is optional'
    );
  }

  // if the object contain the required props
  var wordToSearchSearch = SelectClassKeys.some(
    (value) => value === "wordToSearch"
  );
  var classToAddSearch = SelectClassKeys.some(
    (value) => value === "classToAdd"
  );

  if (!wordToSearchSearch || !classToAddSearch) {
    throw new Error(
      '"SelectClass" must be required the following properties: wordToSearch, classToAdd.'
    );
  }

  // comprobation of the optional prop 'spaceBetweenWord'
  const searchSBW = SelectClassKeys.some((key) => key === "spaceBetweenWord");

  if (PerWord && searchSBW) {
    throw new Error(
      'SelectClass - "spaceBetweenWord" is not allowed when "PerWord" is true'
    );
  }

  // 'SelectClass' contains the following properties:
  //  wordToSearch, classToAdd. spaceBetweenWord is optional
  const { wordToSearch, classToAdd, spaceBetweenWord } = SelectClass;

  if (typeof wordToSearch != "string" && !Array.isArray(wordToSearch)) {
    throw new Error(
      'SelectClass - "wordToSearch" must be a string or an array'
    );
  }

  // here the code check if the Array inside an Array only has strings
  if (Array.isArray(wordToSearch)) {
    wordToSearch.forEach((el) => {
      if (whatItIs(el) != "[object String]" && !Array.isArray(el)) {
        throw new Error(
          "SelectClass - An Array only can receive strings and another Arrays of strings"
        );
      }

      if (Array.isArray(el)) {
        el.forEach((element) => {
          if (whatItIs(element) != "[object String]")
            throw new Error(
              "SelectClass - An Array inside another Array only can receive strings"
            );
        });
      }
    });
  }

  if (typeof classToAdd != "string" && !Array.isArray(classToAdd)) {
    throw new Error('"classToAdd" must be a string or an array');
  }

  // An Array in a provider only can receive its correct value, in they case are strings
  if (Array.isArray(classToAdd)) {
    classToAdd.forEach((el) => {
      if (whatItIs(el) != "[object String]") {
        throw new Error("SelectClass - An Array only can receive strings");
      }
    });
  }

  if (!PerWord && searchSBW && typeof spaceBetweenWord !== "boolean") {
    throw new Error('"spaceBetweenWord" must be a boolean');
  }
}
