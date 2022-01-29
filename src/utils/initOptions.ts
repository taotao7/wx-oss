import { optionsType } from "../types/optionsType";
export default function (this: any, options: optionsType) {
  this.options = Object.assign(this.options, options);
}
