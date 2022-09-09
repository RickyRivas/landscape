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
const about = "";
let pageTitle = "About Us";
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>${(0, import_chunks.e)(import_page.businessInfo.companyName)} | ${(0, import_chunks.e)(pageTitle)} | ${(0, import_chunks.e)(import_page.businessInfo.cityAndState)}</title>`, ""}`, ""}




${(0, import_chunks.v)(import_SubHeader.S, "SubHeader").$$render($$result, { pageTitle }, {}, {})}
<main id="${"about"}">
	
	
	<div class="${"container"}"><div class="${"img-container"}"><img class="${""}" src="${"/about/owner.webp"}" alt="${"Owner"}" width="${"500"}" height="${"750"}" loading="${"lazy"}" decoding="${"async"}">
			<div class="${"name"}"><p>Richard Smith</p>
				<span>Owner</span></div></div>
		<div class="${"content"}"><div class="${"flex"}"><img class="${""}" src="${"/about/grass.svg"}" alt="${""}" width="${"25"}" height="${"25"}" loading="${"lazy"}" decoding="${"async"}">
				<span>Our Story</span></div>
			<h2>Who we are</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
				officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				pariatur harum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, suscipit
				laborum est perferendis illo, totam, itaque dolores nulla debitis impedit reiciendis
				repellendus in id. Consectetur placeat quis dolores voluptatem quibusdam?
			</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
				officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				pariatur harum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, suscipit
				laborum est perferendis illo, totam, itaque dolores nulla debitis impedit reiciendis
				repellendus in id. Consectetur placeat quis dolores voluptatem quibusdam?
			</p>
			<div class="${"btns"}"><a href="${"/"}">Contact Us</a></div></div></div></main>



${(0, import_chunks.v)(import_SubFooter.S, "SubFooter").$$render($$result, {}, {}, {})}`;
});
