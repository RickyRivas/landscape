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
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../../chunks/index.js");
var import_page = require("../_page.js");
var import_SubFooter = require("../../../chunks/SubFooter.js");
var import_SubHeader = require("../../../chunks/SubHeader.js");
const portfolio = "";
let pageTitle = "Our Portfolio";
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>${(0, import_chunks.e)(import_page.businessInfo.companyName)} | ${(0, import_chunks.e)(pageTitle)} | ${(0, import_chunks.e)(import_page.businessInfo.cityAndState)}</title>`, ""}`, ""}

${(0, import_chunks.v)(import_SubHeader.S, "SubHeader").$$render($$result, { pageTitle }, {}, {})}
<main id="${"portfolio"}"><div class="${"grid"}"><div class="${"col"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img03.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div>
		<div class="${"col"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div>
		<div class="${"col"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img03.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div></div></main>
${(0, import_chunks.v)(import_SubFooter.S, "SubFooter").$$render($$result, {}, {}, {})}`;
});
