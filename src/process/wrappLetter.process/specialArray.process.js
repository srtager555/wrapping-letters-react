export function IterateOnAnArray(array, w) {
  return array
    .map((element, index) => {
      if (Array.isArray(element)) {
        if (
          element.some((el) => {
            return el === w;
          })
        ) {
          return index;
        }
      }

      if (element === w) return index;

      return -1;
    })
    .find((el) => el != -1);
}

export function __specialArray__(specialArray, SPECIAL_INDEX) {
  if (Array.isArray(specialArray)) {
    if (SPECIAL_INDEX > specialArray.length - 1) {
      return specialArray[0];
    } else {
      return specialArray[SPECIAL_INDEX];
    }
  } else return specialArray;
}
