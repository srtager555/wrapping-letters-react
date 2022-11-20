import { whatItIs } from "../../common/whatIsIt";

export function process__structure__(Structure) {
  if (whatItIs(Structure) === "[object Object]") return Structure;

  return { structure: Structure, props: { awadeawa: "a" } };
}
