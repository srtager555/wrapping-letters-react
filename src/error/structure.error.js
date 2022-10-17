import stringSimilarity from "string-similarity";

export function error__Filter_structure__(ClassToAdd, specialStructure) {
  if (specialStructure) {
    if (typeof specialStructure === "object") {
      const STRUCTURE_KEYS = Object.keys(specialStructure);
      const AVAILABLE_ATTRIBUTES = ["structure", "props"];

      STRUCTURE_KEYS.forEach((element) => {
        const CONDITIONAL = AVAILABLE_ATTRIBUTES.some((el) => el === element);

        if (!CONDITIONAL) {
          const SS = stringSimilarity.findBestMatch(
            element,
            AVAILABLE_ATTRIBUTES
          );

          throw new Error(
            `"${element}" isn't a registered property. Did you mean "${SS.bestMatch.target}"?`
          );
        }
      });
    }
    if (ClassToAdd != "") {
      console.warn(
        "When the component has a 'special structure', 'ClassToAdd' is disabled"
      );
      console.warn("Remove 'ClassToAdd' for disapper this logs");
    }
  }
}
