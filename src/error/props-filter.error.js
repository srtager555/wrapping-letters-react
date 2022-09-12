import stringSimilarity from "string-similarity";

export function error__props_filter__(props) {
  const oficialProperties = ["text", "textOptions", "structure"];
  const propsKeys = Object.keys(props);

  propsKeys.forEach((el) => {
    let oficialProperty = oficialProperties.some((element) => element === el);

    if (!oficialProperty) {
      const SS = stringSimilarity.findBestMatch(el, oficialProperties);

      throw new Error(
        `"${el}" isn't a registered property. Did you mean "${SS.bestMatch.target}"?`
      );
    }
  });
}
