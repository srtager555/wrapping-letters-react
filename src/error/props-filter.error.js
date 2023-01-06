import stringSimilarity from "string-similarity";

export function error__props_filter__(props, defaultProperties) {
  const MAIN_PROPS = ["text", "textOptions", "structure"];

  const oficialProperties = (defaultProperties.attributes ??= MAIN_PROPS);

  const propsKeys = Object.keys(props);

  propsKeys.forEach((el) => {
    let oficialProperty = oficialProperties.some((element) => element === el);

    if (!oficialProperty) {
      const SS = stringSimilarity.findBestMatch(el, oficialProperties);

      const VALUES = oficialProperties != MAIN_PROPS;

      if (SS.bestMatch.rating > 0.5) {
        throw new Error(
          `${
            VALUES ? `${defaultProperties.name} - ` : ""
          }"${el}" isn't a registered property. Did you mean "${
            SS.bestMatch.target
          }"?`
        );
      } else
        throw new Error(
          `${
            VALUES ? `${defaultProperties.name} - ` : "Wrapping Letters"
          } must contain the following properties: ${oficialProperties.join(
            ", "
          )}`
        );
    }
  });
}
