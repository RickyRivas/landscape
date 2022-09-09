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
  default: () => Error2
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
var import_stores = require("../../chunks/stores.js");
const Error2 = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_chunks.b)(import_stores.p, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${(0, import_chunks.e)($page.status)}</h1>

<pre>${(0, import_chunks.e)($page.error.message)}</pre>



${$page.error.frame ? `<pre>${(0, import_chunks.e)($page.error.frame)}</pre>` : ``}
${$page.error.stack ? `<pre>${(0, import_chunks.e)($page.error.stack)}</pre>` : ``}`;
});
