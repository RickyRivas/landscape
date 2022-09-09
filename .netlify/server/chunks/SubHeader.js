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
  S: () => SubHeader
});
module.exports = __toCommonJS(stdin_exports);
var import_index = require("./index.js");
const subheading = "";
const SubHeader = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  let { pageTitle } = $$props;
  if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle !== void 0)
    $$bindings.pageTitle(pageTitle);
  return `<section id="${"subheader"}"><img aria-hidden="${"true"}" src="${"/twig.png"}" alt="${"twig"}" class="${"abs-head"}" width="${"100"}" height="${"139"}">
	<h1>${(0, import_index.e)(pageTitle)}</h1>
	<picture><source media="${"(max-width: 600px)"}" srcset="${"/img08m.webp"}">
		<source media="${"(min-width: 601px)"}" srcset="${"/img08l.webp"}">
		<img aria-hidden="${"true"}" decoding="${"async"}" src="${"/img08.png"}" alt="${""}" width="${"276"}" height="${"132"}"></picture>
	<div class="${"overlay"}"></div></section>`;
});
