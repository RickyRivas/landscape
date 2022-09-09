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
const misc = "";
let pageTitle = "Testimonials";
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>${(0, import_chunks.e)(import_page.businessInfo.companyName)} | ${(0, import_chunks.e)(pageTitle)} | ${(0, import_chunks.e)(import_page.businessInfo.cityAndState)}</title>`, ""}`, ""}

${(0, import_chunks.v)(import_SubHeader.S, "SubHeader").$$render($$result, { pageTitle }, {}, {})}
<main id="${"services"}"><div class="${"container"}">${(0, import_chunks.f)(import_page.reviews, ({ review, testifier }, i) => {
    return `<div class="${"item"}"><div class="${"stars"}">${(0, import_chunks.f)({ length: 5 }, (_) => {
      return `<svg width="${"30"}" height="${"30"}" viewBox="${"0 0 30 30"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" aria-hidden="${"true"}" role="${"img"}"><path d="${"M30 11.5908L19.0993 10.8741L14.994 0.560669L10.8888 10.8741L0 11.5908L8.3516 18.6821L5.61105 29.4393L14.994 23.5084L24.3771 29.4393L21.6365 18.6821L30 11.5908Z"}" fill="${"currentcolor"}"></path></svg>`;
    })}</div>
				<p>${(0, import_chunks.e)(review)}</p>
				<div class="${"info"}"><img src="${"/reviews/user.svg"}" alt="${"testifier"}" width="${"40"}" height="${"40"}">
					<div><h4>${(0, import_chunks.e)(testifier)}</h4>
						<p>Homeowner</p>
					</div></div>
			</div>`;
  })}</div></main>
${(0, import_chunks.v)(import_SubFooter.S, "SubFooter").$$render($$result, {}, {}, {})}`;
});
