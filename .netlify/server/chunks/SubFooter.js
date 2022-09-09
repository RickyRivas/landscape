var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  S: () => SubFooter
});
module.exports = __toCommonJS(stdin_exports);
var import_index = require("./index.js");
const subfooter = "";
const SubFooter = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  return `<div id="${"subfooter"}"><div class="${"container"}"><h2>Wassup Wassup<br>Wassup</h2>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam facilis laboriosam, itaque
			autem commodi assumenda.
		</p>
		<a class="${"btn"}" href="${"/contact"}">Request an Estimate</a></div></div>`;
});
