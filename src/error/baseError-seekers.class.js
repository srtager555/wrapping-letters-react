import { whatItIs } from "../common/whatIsIt";
import { error__props_filter__ } from "./props-filter.error";

export class BaseErrorSeekers {
  /**
   * @param  {} entry
   * @param  {} Attributes
   * @param  {} customError
   */
  constructor({ entry, Attributes, PerWord, customError }) {
    BaseErrorFilter(entry, Attributes, PerWord);

    if (customError) customError();
  }
}

function BaseErrorFilter(entry, Attributes, PerWord) {
  if (whatItIs(entry) != "[object Object]")
    throw new Error(`${entry.name} must be an Object!!! :s`);

  const KEYS_VALUES = Object.keys(entry.values);
  const WORD_TO_SEARCH = entry.values["wordToSearch"];

  // If SelectClass an empty Object the filter ends here
  if (KEYS_VALUES.length === 0) return;

  // Adding default and optional value
  Attributes.push("spaceBetweenWord");

  // here the code will if contains the correct props
  error__props_filter__(entry.values, Attributes);

  //  ****** WTS comprobations ******
  if (!WORD_TO_SEARCH) {
    throw new Error(
      `"${entry.name}" must be contain wordToSearch to search the targets o.O`
    );
  }

  if (typeof WORD_TO_SEARCH != "string" && !Array.isArray(WORD_TO_SEARCH)) {
    throw new Error(
      `${entry.name} - "wordToSearch" must be a String or an Array`
    );
  }

    // here the code check if the Array inside an Array only has strings
  if (Array.isArray(WORD_TO_SEARCH)) {
    WORD_TO_SEARCH.forEach((el) => {
      if (whatItIs(el) != "[object String]" && !Array.isArray(el)) {
        throw new Error(
          `${entry.name} - wordToSearch - An Array only can receive strings and another Arrays of strings`
        );
      }

      if (Array.isArray(el)) {
        el.forEach((element) => {
          if (whatItIs(element) != "[object String]")
            throw new Error(
              `${entry.name} - wordToSearch - An Array inside another Array only can receive strings`
            );
        });
      }
    });

  //  ****** WTS comprobations - END ******

  if (PerWord && entry.values.spaceBetweenWord) {
    // eslint-disable-next-line no-console
    console.warn(
      `${entry.name} - "spaceBetweenWord" is disable when "PerWord" is true, turn SBW to false to resolve this warn`
    );
  }
}
