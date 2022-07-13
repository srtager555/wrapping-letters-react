export function error__Filter_structure__(ClassToAdd, specialStructure) {
   if (specialStructure)
      if (ClassToAdd != "") {
         console.warn(
            "When the component has a 'special structure', 'ClassToAdd' is disabled"
         );
         console.warn("Remove 'ClassToAdd' for disapper this logs");
      }
}
