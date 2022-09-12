export function __error__props_filter__(props) {
  const oficialProperties = ["text", "textOptions", "structure"];
  const propsKeys = Object.keys(props);

  propsKeys.forEach((el) => {
    let oficialProperty = oficialProperties.some((element) => element === el);

    if (!oficialProperty) {
      throw new Error(`${el} isn't a registered property.`);
    }
  });
}
