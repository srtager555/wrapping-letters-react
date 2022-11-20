import { whatItIs } from "../../../../common/whatIsIt";

export function error__Filter_SpecialWrapp__(SpecialWrapp) {
  if (whatItIs(SpecialWrapp) != "[object Object]")
    throw new Error("SpecialWrapp must be an Object --- Wrapping Letters");

  if (Object.keys(SpecialWrapp).length === 0) return;

  const { wordToSearch, structureToAdd } = SpecialWrapp;

  // missing the check if the object has the 2 correct attributes

  if (
    whatItIs(wordToSearch) != "[object String]" &&
    !Array.isArray(wordToSearch)
  ) {
    throw new Error(
      'SpecialWrapp --- "wordToSearch" must be an Array or String'
    );
  }

  // from now on the code will check if
  // the attribute has the correct conditions

  if (
    whatItIs(structureToAdd) != "[object Object]" &&
    whatItIs(structureToAdd) != "[object Function]" &&
    !Array.isArray(structureToAdd)
  ) {
    throw new Error(
      'SpecialWrapp --- "structureToAdd" must be an Array, Object or Function'
    );
  }

  // here the code will verify that the object has the correct attributes
  if (whatItIs(structureToAdd) === "[object Object]")
    __comprobation_correct_attributes__(structureToAdd);

  // here the code will check each element from an Array
  if (Array.isArray(structureToAdd)) {
    // here the will iterate the elements
    structureToAdd.forEach((element) => {
      const __CONDITIONS__ = (target) => [
        whatItIs(target) != "[object Object]",
        whatItIs(target) != "[object Function]",
      ];

      // here the code will know if the element has the correct element inside it
      if (__CONDITIONS__(element).every((el) => el)) {
        var err = `SpecialWrapp --- The Elements on "structureToAdd" must be an Array, Object or Function, You did put an ${whatItIs(
          element
        )}`;
        throw new Error(err);
      }
    });
  }
}

// ♻️ recicle code,
function __comprobation_correct_attributes__(element) {
  const ElementKeys = Object.keys(element);

  // If SelectClass an empty Object the filter ends here
  if (ElementKeys.length === 0)
    throw new Error(
      'SpecialWrapp - The Wrapper can process empty objects on strutureToAdd from SpecialWrapp "{}"'
    );

  const sc_props = ["structureToAdd", "props"];

  // required props 'structureToAdd', 'props'.
  // comprobation if the object contain a props not in the list

  let containThisProps = function containThisProps(value) {
    return sc_props.includes(value);
  };

  let contain = ElementKeys.every(containThisProps);

  // if the object doesn't contain the required props
  if (!contain) {
    throw new Error(
      '"SelectClass" must contain the following properties: structureToAdd, props'
    );
  }

  // if the object contain the required props
  let wordToSearchSearch = ElementKeys.some(
    (value) => value === "structureToAdd"
  );
  let classToAddSearch = ElementKeys.some((value) => value === "props");

  if (!wordToSearchSearch || !classToAddSearch) {
    throw new Error(
      '"SelectClass" must be required the following properties: structureToAdd, props'
    );
  }

  if (whatItIs(element.structureToAdd) != "[object Function]") {
    let err = `SpecialWrapp - "structureToAdd" from an Object must be a Component/function `;
    throw new Error(err);
  }

  if (whatItIs(element.props) != "[object Object]") {
    let err = `SpecialWrapp - "props" from an Object must be an Object `;
    throw new Error(err);
  }
}
