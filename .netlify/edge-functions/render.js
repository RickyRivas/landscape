var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component8) {
  current_component = component8;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component8, name) {
  if (!component8 || !component8.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component8;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize3;
    var decode = decodeURIComponent;
    var encode2 = encodeURIComponent;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var pairs = str.split(";");
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var index8 = pair.indexOf("=");
        if (index8 < 0) {
          continue;
        }
        var key2 = pair.substring(0, index8).trim();
        if (void 0 == obj[key2]) {
          var val = pair.substring(index8 + 1, pair.length).trim();
          if (val[0] === '"') {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize3(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie3 = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie3.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie3.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie3.secure = true;
        } else if (key2 === "httponly") {
          cookie3.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie3.sameSite = value2;
        } else {
          cookie3[key2] = value2;
        }
      });
      return cookie3;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key2) {
          return key2.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          );
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie3 = parseString2(str, options);
          cookies2[cookie3.name] = cookie3;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/hooks.js
var hooks_exports = {};
__export(hooks_exports, {
  handle: () => handle
});
var cookie, handle;
var init_hooks = __esm({
  ".svelte-kit/output/server/chunks/hooks.js"() {
    cookie = __toESM(require_cookie(), 1);
    handle = async ({ event, resolve: resolve2 }) => {
      const cookies = cookie.parse(event.request.headers.get("cookie") || "");
      event.locals.userid = cookies["userid"] || crypto.randomUUID();
      const response = await resolve2(event);
      if (!cookies["userid"]) {
        response.headers.set(
          "set-cookie",
          cookie.serialize("userid", event.locals.userid, {
            path: "/",
            httpOnly: true
          })
        );
      }
      return response;
    };
  }
});

// .svelte-kit/output/server/chunks/stores.js
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
var getStores, page;
var init_stores = __esm({
  ".svelte-kit/output/server/chunks/stores.js"() {
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      const readonly_stores = {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
      Object.defineProperties(readonly_stores, {
        preloading: {
          get() {
            console.error("stores.preloading is deprecated; use stores.navigating instead");
            return {
              subscribe: stores.navigating.subscribe
            };
          },
          enumerable: false
        },
        session: {
          get() {
            removed_session();
            return {};
          },
          enumerable: false
        }
      });
      return readonly_stores;
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/entries/pages/_page.js
var page_exports = {};
__export(page_exports, {
  businessInfo: () => businessInfo,
  mainServices: () => mainServices,
  reasons: () => reasons,
  reviews: () => reviews,
  services: () => services,
  subReviews: () => subReviews
});
var businessInfo, services, mainServices, reasons, reviews, subReviews;
var init_page = __esm({
  ".svelte-kit/output/server/entries/pages/_page.js"() {
    businessInfo = {
      companyName: "Tulsa Landscape",
      cityAndState: "Tulsa, Ok",
      industry: "Construction",
      phone: "(123)456-7890",
      fullAddress: "1234 East Tulsa, Ok",
      email: "/",
      googleLink: "/",
      businessHours: {
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: ""
      },
      socials: [
        {
          platform: "facebook",
          url: "/"
        },
        {
          platform: "google",
          url: "/"
        },
        {
          platform: "tiktok",
          url: "/"
        },
        {
          platform: "instagram",
          url: "/"
        },
        {
          platform: "twitter",
          url: ""
        },
        {
          platform: "youtube",
          url: ""
        }
      ],
      ftServices: [
        {
          service: "Service One"
        },
        {
          service: "Service Two"
        },
        {
          service: "Service Three"
        },
        {
          service: "Service Four"
        },
        {
          service: "Service Five"
        }
      ]
    };
    services = [
      {
        name: "Maintenance",
        description: `Keep your landscape completely flawless without you having to touch a spec of dirt. Our experts know exactly how to keep your surrounding space perfect all year round.`
      },
      {
        name: "Urban",
        description: `Add value to your home by crafting the perfect green surroundings, and give your backyard and lawn the renovation they need to draw a smile on your face every time you\u2019re out in the morning.`
      },
      {
        name: "Gardens",
        description: `Optimize your soil for growing your own plants, and let us help you enjoy the growing and farming experience with the right plants, fertilizers, and more.`
      }
    ];
    mainServices = [
      {
        title: "Design Concept Assistance",
        description: "Our 3 decades of experience give us enough knowledge of the science that goes behind landscaping, which is why we can help you make use of the space you have in the most practical, cost-effective, and aesthetically-pleasing way.",
        iconPath: "/home/planning.svg"
      },
      {
        title: "Tree, Shrub, And Plant Installation",
        description: `Whether you need 1 tree installed in your backyard for a new treehouse, or you're looking to surround a large property with plants hand-picked to suit your needs and general theme, Lawncare can guarantee flawless installation on a timeframe you can trust.`,
        iconPath: "/home/plant.svg"
      },
      {
        title: "New Grass And Sod Installation",
        description: `No matter how large or small your lawn is, we can help you cover it completely with high-quality sod sourced from the best suppliers in the country, guaranteeing the exact results you're after, brought to life by our Lawncare professionals.`,
        iconPath: "/home/plant-pot.svg"
      },
      {
        title: "Driveways, Patios, And Walkways",
        description: `If you're looking for pathways, driveways, and walkways that last a lifetime without any cracks, splits, or fading in sight, Lawncare is where you need to be. We help you find the right choices for your needs and carry out the installation process, all without disrupting your day-to-day routine.`,
        iconPath: "/home/brick-wall.svg"
      }
    ];
    reasons = [
      {
        title: "Quality",
        description: "An unmatched fit and finish in every detail."
      },
      {
        title: "Always On Time",
        description: "No delays, inconveniences, or downtime."
      },
      {
        title: "Experienced",
        description: "We help bring your vision to reality."
      }
    ];
    reviews = [
      {
        testifier: "Ricky Rivas",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim."
      },
      {
        testifier: "Valued Customer",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim."
      },
      {
        testifier: "Valued Customer",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim."
      },
      {
        testifier: "Valued Customer",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim."
      },
      {
        testifier: "Valued Customer",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim."
      },
      {
        testifier: "Valued Customer",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim."
      }
    ];
    subReviews = [];
    subReviews.push(reviews[0], reviews[1], reviews[2]);
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Header, Footer, css, ToTop, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_chunks();
    init_stores();
    init_page();
    Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `

<header${add_attribute("class", "", 0)}><nav><a href="${"/"}" class="${"logo"}"><svg width="${"352"}" height="${"71"}" viewBox="${"0 0 352 71"}" fill="${"currentcolor"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M0.899994 2.00002V37H26.85V29.65H9.49999V2.00002H0.899994ZM35.6219 36.4C36.9885 37.0667 38.5385 37.4 40.2719 37.4C41.6385 37.4 42.8885 37.2 44.0219 36.8C45.1552 36.3667 46.2885 35.6834 47.4219 34.75V37H55.4219V20.5C55.4219 17.4334 54.4219 15.05 52.4219 13.35C50.4552 11.65 47.6885 10.8 44.1219 10.8C40.3885 10.8 36.4385 11.7334 32.2719 13.6L35.0719 19.25C36.5719 18.6167 37.9052 18.1667 39.0719 17.9C40.2719 17.6 41.3552 17.45 42.3219 17.45C44.0552 17.45 45.3385 17.7667 46.1719 18.4C47.0052 19 47.4219 19.9334 47.4219 21.2V23.3C46.2885 22.8667 45.2385 22.5667 44.2719 22.4C43.3052 22.2 42.3552 22.1 41.4219 22.1C39.3219 22.1 37.5219 22.4 36.0219 23C34.5219 23.5667 33.3719 24.4167 32.5719 25.55C31.7719 26.65 31.3719 28 31.3719 29.6C31.3719 31.1334 31.7385 32.4834 32.4719 33.65C33.2385 34.8167 34.2885 35.7334 35.6219 36.4ZM39.8719 31.4C39.1719 30.9334 38.8219 30.2834 38.8219 29.45C38.8219 28.6167 39.1719 27.9834 39.8719 27.55C40.6052 27.1167 41.6385 26.9 42.9719 26.9C43.7385 26.9 44.4885 26.95 45.2219 27.05C45.9552 27.15 46.6885 27.2834 47.4219 27.45V30.75C46.7219 31.1834 45.9885 31.5167 45.2219 31.75C44.4552 31.95 43.6385 32.05 42.7719 32.05C41.5385 32.05 40.5719 31.8334 39.8719 31.4ZM61.5269 11.2V37H69.6269V19.3C70.1936 18.5667 70.8269 18.0334 71.5269 17.7C72.2603 17.3334 73.0603 17.15 73.9269 17.15C75.2269 17.15 76.2603 17.5834 77.0269 18.45C77.827 19.3167 78.2269 20.4834 78.2269 21.95V37H86.3269V19.6C86.3269 17.8667 85.9603 16.35 85.2269 15.05C84.4936 13.7167 83.4769 12.6834 82.1769 11.95C80.9103 11.1834 79.4436 10.8 77.7769 10.8C76.1103 10.8 74.577 11.2 73.1769 12C71.8103 12.7667 70.6269 13.9 69.6269 15.4V11.2H61.5269ZM96.9352 35.4C98.6685 36.5667 100.585 37.15 102.685 37.15C104.218 37.15 105.652 36.8334 106.985 36.2C108.352 35.5667 109.452 34.7167 110.285 33.65V37H118.285V0.150024L110.185 1.40003V14.15C109.318 13.15 108.285 12.3834 107.085 11.85C105.918 11.3167 104.652 11.05 103.285 11.05C101.052 11.05 99.0185 11.6334 97.1852 12.8C95.3851 13.9667 93.9518 15.5334 92.8851 17.5C91.8185 19.4334 91.2851 21.6167 91.2851 24.05C91.2851 26.45 91.7851 28.65 92.7851 30.65C93.8185 32.6167 95.2018 34.2 96.9352 35.4ZM108.035 29.95C107.235 30.2834 106.352 30.45 105.385 30.45C104.218 30.45 103.168 30.1834 102.235 29.65C101.302 29.0834 100.568 28.3167 100.035 27.35C99.5018 26.3834 99.2352 25.3 99.2352 24.1C99.2352 22.8667 99.5018 21.7667 100.035 20.8C100.568 19.8334 101.302 19.0834 102.235 18.55C103.168 17.9834 104.218 17.7 105.385 17.7C106.318 17.7 107.185 17.8667 107.985 18.2C108.818 18.5334 109.552 19.0334 110.185 19.7V28.4C109.552 29.0667 108.835 29.5834 108.035 29.95ZM127.764 36.7C129.797 37.2334 131.981 37.5 134.314 37.5C136.447 37.5 138.347 37.1167 140.014 36.35C141.681 35.5834 142.997 34.5334 143.964 33.2C144.931 31.8334 145.414 30.3167 145.414 28.65C145.414 26.6834 144.764 25.0667 143.464 23.8C142.164 22.5334 140.231 21.6667 137.664 21.2L132.814 20.3C131.814 20.1334 131.114 19.9167 130.714 19.65C130.347 19.3834 130.164 18.9834 130.164 18.45C130.164 17.8834 130.431 17.45 130.964 17.15C131.531 16.85 132.297 16.7 133.264 16.7C134.464 16.7 135.664 16.8834 136.864 17.25C138.097 17.5834 139.364 18.1334 140.664 18.9L144.364 13.75C142.697 12.7834 140.981 12.05 139.214 11.55C137.447 11.05 135.664 10.8 133.864 10.8C131.631 10.8 129.697 11.1334 128.064 11.8C126.464 12.4667 125.231 13.4334 124.364 14.7C123.497 15.9334 123.064 17.4334 123.064 19.2C123.064 21.2 123.697 22.8334 124.964 24.1C126.264 25.3667 128.164 26.2334 130.664 26.7L135.614 27.6C136.447 27.7334 137.047 27.95 137.414 28.25C137.814 28.55 138.014 28.95 138.014 29.45C138.014 30.0834 137.681 30.6 137.014 31C136.381 31.3667 135.481 31.55 134.314 31.55C133.081 31.55 131.847 31.3667 130.614 31C129.414 30.6 127.881 29.9167 126.014 28.95L122.464 34.35C123.964 35.3834 125.731 36.1667 127.764 36.7ZM155.745 35.75C157.779 36.9167 160.045 37.5 162.545 37.5C164.679 37.5 166.679 37.1 168.545 36.3C170.412 35.4667 171.995 34.2834 173.295 32.75L168.345 27.8C167.512 28.7667 166.662 29.4834 165.795 29.95C164.929 30.3834 163.945 30.6 162.845 30.6C161.779 30.6 160.812 30.3167 159.945 29.75C159.112 29.1834 158.445 28.4167 157.945 27.45C157.479 26.4834 157.245 25.3834 157.245 24.15C157.245 22.9167 157.479 21.8167 157.945 20.85C158.445 19.8834 159.112 19.1167 159.945 18.55C160.812 17.9834 161.779 17.7 162.845 17.7C163.945 17.7 164.929 17.9334 165.795 18.4C166.662 18.8334 167.512 19.5334 168.345 20.5L173.295 15.55C171.995 14.0167 170.412 12.85 168.545 12.05C166.679 11.2167 164.679 10.8 162.545 10.8C160.045 10.8 157.779 11.4 155.745 12.6C153.745 13.7667 152.145 15.35 150.945 17.35C149.779 19.35 149.195 21.6167 149.195 24.15C149.195 26.65 149.779 28.9167 150.945 30.95C152.145 32.95 153.745 34.55 155.745 35.75ZM180.348 36.4C181.715 37.0667 183.265 37.4 184.998 37.4C186.365 37.4 187.615 37.2 188.748 36.8C189.882 36.3667 191.015 35.6834 192.148 34.75V37H200.148V20.5C200.148 17.4334 199.148 15.05 197.148 13.35C195.182 11.65 192.415 10.8 188.848 10.8C185.115 10.8 181.165 11.7334 176.998 13.6L179.798 19.25C181.298 18.6167 182.632 18.1667 183.798 17.9C184.998 17.6 186.082 17.45 187.048 17.45C188.782 17.45 190.065 17.7667 190.898 18.4C191.732 19 192.148 19.9334 192.148 21.2V23.3C191.015 22.8667 189.965 22.5667 188.998 22.4C188.032 22.2 187.082 22.1 186.148 22.1C184.048 22.1 182.248 22.4 180.748 23C179.248 23.5667 178.098 24.4167 177.298 25.55C176.498 26.65 176.098 28 176.098 29.6C176.098 31.1334 176.465 32.4834 177.198 33.65C177.965 34.8167 179.015 35.7334 180.348 36.4ZM184.598 31.4C183.898 30.9334 183.548 30.2834 183.548 29.45C183.548 28.6167 183.898 27.9834 184.598 27.55C185.332 27.1167 186.365 26.9 187.698 26.9C188.465 26.9 189.215 26.95 189.948 27.05C190.682 27.15 191.415 27.2834 192.148 27.45V30.75C191.448 31.1834 190.715 31.5167 189.948 31.75C189.182 31.95 188.365 32.05 187.498 32.05C186.265 32.05 185.298 31.8334 184.598 31.4ZM206.254 11.2V47.45H214.354V34.15C215.22 35.1167 216.237 35.8667 217.404 36.4C218.604 36.9 219.904 37.15 221.304 37.15C223.537 37.15 225.554 36.5667 227.354 35.4C229.187 34.2334 230.637 32.6667 231.704 30.7C232.77 28.7334 233.304 26.55 233.304 24.15C233.304 21.7167 232.787 19.5167 231.754 17.55C230.754 15.5834 229.387 14.0167 227.654 12.85C225.954 11.65 224.037 11.05 221.904 11.05C220.37 11.05 218.92 11.3834 217.554 12.05C216.22 12.7167 215.12 13.6334 214.254 14.8V11.2H206.254ZM222.354 29.7C221.454 30.2334 220.404 30.5 219.204 30.5C218.27 30.5 217.387 30.3167 216.554 29.95C215.72 29.5834 214.987 29.0834 214.354 28.45V19.85C215.02 19.15 215.737 18.6334 216.504 18.3C217.304 17.9334 218.204 17.75 219.204 17.75C220.37 17.75 221.42 18.0334 222.354 18.6C223.287 19.1334 224.02 19.8834 224.554 20.85C225.087 21.7834 225.354 22.8667 225.354 24.1C225.354 25.3334 225.087 26.4334 224.554 27.4C224.02 28.3667 223.287 29.1334 222.354 29.7ZM243.981 35.75C246.048 36.9167 248.348 37.5 250.881 37.5C253.048 37.5 254.981 37.1834 256.681 36.55C258.381 35.8834 260.065 34.8167 261.731 33.35L256.381 28.9C255.815 29.6 255.081 30.1334 254.181 30.5C253.315 30.8667 252.348 31.05 251.281 31.05C250.315 31.05 249.415 30.85 248.581 30.45C247.748 30.05 247.048 29.4834 246.481 28.75C245.915 28.0167 245.498 27.1667 245.231 26.2H262.981V24.45C262.981 21.7834 262.431 19.4334 261.331 17.4C260.265 15.3334 258.781 13.7167 256.881 12.55C254.981 11.3834 252.781 10.8 250.281 10.8C247.815 10.8 245.598 11.4 243.631 12.6C241.665 13.7667 240.115 15.35 238.981 17.35C237.848 19.35 237.281 21.6167 237.281 24.15C237.281 26.65 237.881 28.9167 239.081 30.95C240.315 32.95 241.948 34.55 243.981 35.75ZM255.481 21.6H245.231C245.465 20.6334 245.798 19.8167 246.231 19.15C246.698 18.4834 247.265 17.9834 247.931 17.65C248.631 17.2834 249.398 17.1 250.231 17.1C251.098 17.1 251.881 17.2834 252.581 17.65C253.281 18.0167 253.881 18.5334 254.381 19.2C254.881 19.8667 255.248 20.6667 255.481 21.6ZM289.063 36.2C291.297 37.1 293.713 37.55 296.313 37.55C298.18 37.55 299.997 37.2834 301.763 36.75C303.563 36.1834 305.213 35.3834 306.713 34.35C308.247 33.3167 309.513 32.1167 310.513 30.75L304.713 25.25C303.58 26.7834 302.313 27.95 300.913 28.75C299.513 29.5167 297.98 29.9 296.313 29.9C294.947 29.9 293.68 29.65 292.513 29.15C291.38 28.6167 290.38 27.8834 289.513 26.95C288.647 25.9834 287.963 24.8834 287.463 23.65C286.997 22.3834 286.763 21 286.763 19.5C286.763 18 286.997 16.6334 287.463 15.4C287.963 14.1334 288.647 13.0334 289.513 12.1C290.38 11.1334 291.38 10.4 292.513 9.90002C293.68 9.36669 294.947 9.10003 296.313 9.10003C297.98 9.10003 299.513 9.48336 300.913 10.25C302.313 11.0167 303.58 12.1834 304.713 13.75L310.513 8.25002C309.513 6.85002 308.247 5.65002 306.713 4.65003C305.213 3.61669 303.563 2.83336 301.763 2.30003C299.997 1.73336 298.18 1.45003 296.313 1.45003C293.713 1.45003 291.297 1.91669 289.063 2.85003C286.83 3.75003 284.863 5.01669 283.163 6.65002C281.497 8.28336 280.197 10.2 279.263 12.4C278.33 14.5667 277.863 16.9334 277.863 19.5C277.863 22.0334 278.33 24.4 279.263 26.6C280.197 28.8 281.497 30.7167 283.163 32.35C284.863 33.9834 286.83 35.2667 289.063 36.2ZM319.467 35.75C321.501 36.9167 323.801 37.5 326.367 37.5C328.901 37.5 331.167 36.9167 333.167 35.75C335.201 34.5834 336.801 33 337.967 31C339.167 28.9667 339.767 26.6834 339.767 24.15C339.767 21.6167 339.167 19.35 337.967 17.35C336.801 15.3167 335.201 13.7167 333.167 12.55C331.167 11.3834 328.884 10.8 326.317 10.8C323.784 10.8 321.501 11.3834 319.467 12.55C317.434 13.7167 315.817 15.3167 314.617 17.35C313.451 19.35 312.867 21.6167 312.867 24.15C312.867 26.6834 313.451 28.9667 314.617 31C315.817 33 317.434 34.5834 319.467 35.75ZM329.217 29.9C328.384 30.4667 327.417 30.75 326.317 30.75C325.251 30.75 324.284 30.4667 323.417 29.9C322.584 29.3334 321.934 28.55 321.467 27.55C321.001 26.55 320.767 25.4167 320.767 24.15C320.767 22.85 321.001 21.7167 321.467 20.75C321.934 19.75 322.584 18.9667 323.417 18.4C324.284 17.8334 325.251 17.55 326.317 17.55C327.417 17.55 328.384 17.8334 329.217 18.4C330.051 18.9667 330.701 19.75 331.167 20.75C331.634 21.7167 331.867 22.85 331.867 24.15C331.867 25.4167 331.634 26.55 331.167 27.55C330.701 28.55 330.051 29.3334 329.217 29.9ZM344.044 36.15C344.944 37.0834 346.011 37.55 347.244 37.55C348.511 37.55 349.577 37.0834 350.444 36.15C351.344 35.2167 351.794 34.1 351.794 32.8C351.794 31.5 351.344 30.3834 350.444 29.45C349.577 28.5167 348.511 28.05 347.244 28.05C346.011 28.05 344.944 28.5167 344.044 29.45C343.144 30.3834 342.694 31.5 342.694 32.8C342.694 34.1 343.144 35.2167 344.044 36.15ZM121.17 56.5V67H128.955V64.795H123.75V56.5H121.17ZM132.072 66.625C132.682 66.975 133.372 67.15 134.142 67.15C134.902 67.15 135.582 66.975 136.182 66.625C136.792 66.275 137.272 65.8 137.622 65.2C137.982 64.59 138.162 63.905 138.162 63.145C138.162 62.385 137.982 61.705 137.622 61.105C137.272 60.495 136.792 60.015 136.182 59.665C135.582 59.315 134.897 59.14 134.127 59.14C133.367 59.14 132.682 59.315 132.072 59.665C131.462 60.015 130.977 60.495 130.617 61.105C130.267 61.705 130.092 62.385 130.092 63.145C130.092 63.905 130.267 64.59 130.617 65.2C130.977 65.8 131.462 66.275 132.072 66.625ZM134.997 64.87C134.747 65.04 134.457 65.125 134.127 65.125C133.807 65.125 133.517 65.04 133.257 64.87C133.007 64.7 132.812 64.465 132.672 64.165C132.532 63.865 132.462 63.525 132.462 63.145C132.462 62.755 132.532 62.415 132.672 62.125C132.812 61.825 133.007 61.59 133.257 61.42C133.517 61.25 133.807 61.165 134.127 61.165C134.457 61.165 134.747 61.25 134.997 61.42C135.247 61.59 135.442 61.825 135.582 62.125C135.722 62.415 135.792 62.755 135.792 63.145C135.792 63.525 135.722 63.865 135.582 64.165C135.442 64.465 135.247 64.7 134.997 64.87ZM139.71 59.26V67H142.14V62.11C142.34 61.82 142.595 61.59 142.905 61.42C143.215 61.24 143.55 61.15 143.91 61.15C144.12 61.15 144.325 61.17 144.525 61.21C144.725 61.25 144.9 61.31 145.05 61.39V59.305C144.9 59.225 144.77 59.175 144.66 59.155C144.55 59.135 144.41 59.12 144.24 59.11C143.78 59.11 143.375 59.265 143.025 59.575C142.685 59.885 142.39 60.365 142.14 61.015V59.26H139.71ZM147.776 66.625C148.396 66.975 149.086 67.15 149.846 67.15C150.496 67.15 151.076 67.055 151.586 66.865C152.096 66.665 152.601 66.345 153.101 65.905L151.496 64.57C151.326 64.78 151.106 64.94 150.836 65.05C150.576 65.16 150.286 65.215 149.966 65.215C149.676 65.215 149.406 65.155 149.156 65.035C148.906 64.915 148.696 64.745 148.526 64.525C148.356 64.305 148.231 64.05 148.151 63.76H153.476V63.235C153.476 62.435 153.311 61.73 152.981 61.12C152.661 60.5 152.216 60.015 151.646 59.665C151.076 59.315 150.416 59.14 149.666 59.14C148.926 59.14 148.261 59.32 147.671 59.68C147.081 60.03 146.616 60.505 146.276 61.105C145.936 61.705 145.766 62.385 145.766 63.145C145.766 63.895 145.946 64.575 146.306 65.185C146.676 65.785 147.166 66.265 147.776 66.625ZM151.226 62.38H148.151C148.221 62.09 148.321 61.845 148.451 61.645C148.591 61.445 148.761 61.295 148.961 61.195C149.171 61.085 149.401 61.03 149.651 61.03C149.911 61.03 150.146 61.085 150.356 61.195C150.566 61.305 150.746 61.46 150.896 61.66C151.046 61.86 151.156 62.1 151.226 62.38ZM154.988 59.26V67H157.418V61.645C157.728 61.245 158.108 61.045 158.558 61.045C158.908 61.045 159.188 61.165 159.398 61.405C159.608 61.635 159.713 61.945 159.713 62.335V67H162.143V61.855V61.75V61.63C162.303 61.43 162.473 61.285 162.653 61.195C162.843 61.095 163.048 61.045 163.268 61.045C163.618 61.045 163.898 61.165 164.108 61.405C164.318 61.635 164.423 61.945 164.423 62.335V67H166.853V61.855C166.853 61.325 166.748 60.855 166.538 60.445C166.338 60.035 166.053 59.715 165.683 59.485C165.323 59.255 164.903 59.14 164.423 59.14C163.893 59.14 163.413 59.265 162.983 59.515C162.553 59.755 162.188 60.11 161.888 60.58C161.698 60.14 161.413 59.79 161.033 59.53C160.653 59.27 160.213 59.14 159.713 59.14C159.243 59.14 158.813 59.255 158.423 59.485C158.043 59.715 157.708 60.05 157.418 60.49V59.26H154.988ZM171.907 59.26V67H174.337V59.26H171.907ZM172.162 57.67C172.432 57.94 172.752 58.075 173.122 58.075C173.502 58.075 173.822 57.94 174.082 57.67C174.352 57.4 174.487 57.08 174.487 56.71C174.487 56.33 174.352 56.01 174.082 55.75C173.822 55.48 173.502 55.345 173.122 55.345C172.752 55.345 172.432 55.48 172.162 55.75C171.892 56.01 171.757 56.33 171.757 56.71C171.757 57.08 171.892 57.4 172.162 57.67ZM176.228 59.26V70.135H178.658V66.145C178.918 66.435 179.223 66.66 179.573 66.82C179.933 66.97 180.323 67.045 180.743 67.045C181.413 67.045 182.018 66.87 182.558 66.52C183.108 66.17 183.543 65.7 183.863 65.11C184.183 64.52 184.343 63.865 184.343 63.145C184.343 62.415 184.188 61.755 183.878 61.165C183.578 60.575 183.168 60.105 182.648 59.755C182.138 59.395 181.563 59.215 180.923 59.215C180.463 59.215 180.028 59.315 179.618 59.515C179.218 59.715 178.888 59.99 178.628 60.34V59.26H176.228ZM181.058 64.81C180.788 64.97 180.473 65.05 180.113 65.05C179.833 65.05 179.568 64.995 179.318 64.885C179.068 64.775 178.848 64.625 178.658 64.435V61.855C178.858 61.645 179.073 61.49 179.303 61.39C179.543 61.28 179.813 61.225 180.113 61.225C180.463 61.225 180.778 61.31 181.058 61.48C181.338 61.64 181.558 61.865 181.718 62.155C181.878 62.435 181.958 62.76 181.958 63.13C181.958 63.5 181.878 63.83 181.718 64.12C181.558 64.41 181.338 64.64 181.058 64.81ZM186.842 66.91C187.452 67.07 188.107 67.15 188.807 67.15C189.447 67.15 190.017 67.035 190.517 66.805C191.017 66.575 191.412 66.26 191.702 65.86C191.992 65.45 192.137 64.995 192.137 64.495C192.137 63.905 191.942 63.42 191.552 63.04C191.162 62.66 190.582 62.4 189.812 62.26L188.357 61.99C188.057 61.94 187.847 61.875 187.727 61.795C187.617 61.715 187.562 61.595 187.562 61.435C187.562 61.265 187.642 61.135 187.802 61.045C187.972 60.955 188.202 60.91 188.492 60.91C188.852 60.91 189.212 60.965 189.572 61.075C189.942 61.175 190.322 61.34 190.712 61.57L191.822 60.025C191.322 59.735 190.807 59.515 190.277 59.365C189.747 59.215 189.212 59.14 188.672 59.14C188.002 59.14 187.422 59.24 186.932 59.44C186.452 59.64 186.082 59.93 185.822 60.31C185.562 60.68 185.432 61.13 185.432 61.66C185.432 62.26 185.622 62.75 186.002 63.13C186.392 63.51 186.962 63.77 187.712 63.91L189.197 64.18C189.447 64.22 189.627 64.285 189.737 64.375C189.857 64.465 189.917 64.585 189.917 64.735C189.917 64.925 189.817 65.08 189.617 65.2C189.427 65.31 189.157 65.365 188.807 65.365C188.437 65.365 188.067 65.31 187.697 65.2C187.337 65.08 186.877 64.875 186.317 64.585L185.252 66.205C185.702 66.515 186.232 66.75 186.842 66.91ZM194.713 66.79C195.103 67.01 195.548 67.12 196.048 67.12C196.548 67.12 197.003 67.005 197.413 66.775C197.833 66.535 198.193 66.19 198.493 65.74V67H200.923V59.26H198.493V64.57C198.323 64.79 198.128 64.955 197.908 65.065C197.698 65.165 197.463 65.215 197.203 65.215C196.813 65.215 196.498 65.085 196.258 64.825C196.028 64.555 195.913 64.205 195.913 63.775V59.26H193.483V64.48C193.483 65 193.593 65.46 193.813 65.86C194.033 66.25 194.333 66.56 194.713 66.79ZM202.815 59.26V67H205.245V61.645C205.555 61.245 205.935 61.045 206.385 61.045C206.735 61.045 207.015 61.165 207.225 61.405C207.435 61.635 207.54 61.945 207.54 62.335V67H209.97V61.855V61.75V61.63C210.13 61.43 210.3 61.285 210.48 61.195C210.67 61.095 210.875 61.045 211.095 61.045C211.445 61.045 211.725 61.165 211.935 61.405C212.145 61.635 212.25 61.945 212.25 62.335V67H214.68V61.855C214.68 61.325 214.575 60.855 214.365 60.445C214.165 60.035 213.88 59.715 213.51 59.485C213.15 59.255 212.73 59.14 212.25 59.14C211.72 59.14 211.24 59.265 210.81 59.515C210.38 59.755 210.015 60.11 209.715 60.58C209.525 60.14 209.24 59.79 208.86 59.53C208.48 59.27 208.04 59.14 207.54 59.14C207.07 59.14 206.64 59.255 206.25 59.485C205.87 59.715 205.535 60.05 205.245 60.49V59.26H202.815Z"}" fill="${"currentcolor"}"></path></svg></a>

		<ul class="${"links " + escape("", true)}"><li class="${["link", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a href="${"/"}">Home</a></li>
			<li class="${["link", $page.url.pathname === "/testimonials" ? "active" : ""].join(" ").trim()}"><a href="${"/testimonials"}">Testimonials</a></li>
			<li class="${["link", $page.url.pathname === "/portfolio" ? "active" : ""].join(" ").trim()}"><a href="${"/portfolio"}">Portfolio</a></li>
			<li class="${["link", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a href="${"/about"}">About</a></li>
			<li class="${["link", $page.url.pathname === "/contact" ? "active" : ""].join(" ").trim()}"><a href="${"/contact"}">Contact</a></li>
			<li class="${"link social"}"><a href="${"/"}"><img class="${""}" src="${"/social/instagram.svg"}" alt="${"instagram"}" width="${"25"}" height="${"25"}" loading="${"lazy"}" decoding="${"async"}">
					<p>Instagram</p></a>
				<a href="${"/"}"><img class="${""}" src="${"/social/facebook.svg"}" alt="${"facebook"}" width="${"25"}" height="${"25"}" loading="${"lazy"}" decoding="${"async"}">
					<p>Facebook</p></a></li></ul>

		<button class="${"hamburger hamburger--squeeze " + escape("", true)}" aria-label="${"toggle"}"><span class="${"hamburger-box"}"><span class="${"hamburger-inner"}"></span></span></button></nav>
	<div class="${"nav-overlay " + escape("", true)}"></div></header>

`;
    });
    Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<footer><div class="${"container"}"><div class="${"item"}"><a class="${"logo"}" href="${"/"}"><svg width="${"352"}" height="${"71"}" viewBox="${"0 0 352 71"}" fill="${"currentcolor"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M0.899994 2.00002V37H26.85V29.65H9.49999V2.00002H0.899994ZM35.6219 36.4C36.9885 37.0667 38.5385 37.4 40.2719 37.4C41.6385 37.4 42.8885 37.2 44.0219 36.8C45.1552 36.3667 46.2885 35.6834 47.4219 34.75V37H55.4219V20.5C55.4219 17.4334 54.4219 15.05 52.4219 13.35C50.4552 11.65 47.6885 10.8 44.1219 10.8C40.3885 10.8 36.4385 11.7334 32.2719 13.6L35.0719 19.25C36.5719 18.6167 37.9052 18.1667 39.0719 17.9C40.2719 17.6 41.3552 17.45 42.3219 17.45C44.0552 17.45 45.3385 17.7667 46.1719 18.4C47.0052 19 47.4219 19.9334 47.4219 21.2V23.3C46.2885 22.8667 45.2385 22.5667 44.2719 22.4C43.3052 22.2 42.3552 22.1 41.4219 22.1C39.3219 22.1 37.5219 22.4 36.0219 23C34.5219 23.5667 33.3719 24.4167 32.5719 25.55C31.7719 26.65 31.3719 28 31.3719 29.6C31.3719 31.1334 31.7385 32.4834 32.4719 33.65C33.2385 34.8167 34.2885 35.7334 35.6219 36.4ZM39.8719 31.4C39.1719 30.9334 38.8219 30.2834 38.8219 29.45C38.8219 28.6167 39.1719 27.9834 39.8719 27.55C40.6052 27.1167 41.6385 26.9 42.9719 26.9C43.7385 26.9 44.4885 26.95 45.2219 27.05C45.9552 27.15 46.6885 27.2834 47.4219 27.45V30.75C46.7219 31.1834 45.9885 31.5167 45.2219 31.75C44.4552 31.95 43.6385 32.05 42.7719 32.05C41.5385 32.05 40.5719 31.8334 39.8719 31.4ZM61.5269 11.2V37H69.6269V19.3C70.1936 18.5667 70.8269 18.0334 71.5269 17.7C72.2603 17.3334 73.0603 17.15 73.9269 17.15C75.2269 17.15 76.2603 17.5834 77.0269 18.45C77.827 19.3167 78.2269 20.4834 78.2269 21.95V37H86.3269V19.6C86.3269 17.8667 85.9603 16.35 85.2269 15.05C84.4936 13.7167 83.4769 12.6834 82.1769 11.95C80.9103 11.1834 79.4436 10.8 77.7769 10.8C76.1103 10.8 74.577 11.2 73.1769 12C71.8103 12.7667 70.6269 13.9 69.6269 15.4V11.2H61.5269ZM96.9352 35.4C98.6685 36.5667 100.585 37.15 102.685 37.15C104.218 37.15 105.652 36.8334 106.985 36.2C108.352 35.5667 109.452 34.7167 110.285 33.65V37H118.285V0.150024L110.185 1.40003V14.15C109.318 13.15 108.285 12.3834 107.085 11.85C105.918 11.3167 104.652 11.05 103.285 11.05C101.052 11.05 99.0185 11.6334 97.1852 12.8C95.3851 13.9667 93.9518 15.5334 92.8851 17.5C91.8185 19.4334 91.2851 21.6167 91.2851 24.05C91.2851 26.45 91.7851 28.65 92.7851 30.65C93.8185 32.6167 95.2018 34.2 96.9352 35.4ZM108.035 29.95C107.235 30.2834 106.352 30.45 105.385 30.45C104.218 30.45 103.168 30.1834 102.235 29.65C101.302 29.0834 100.568 28.3167 100.035 27.35C99.5018 26.3834 99.2352 25.3 99.2352 24.1C99.2352 22.8667 99.5018 21.7667 100.035 20.8C100.568 19.8334 101.302 19.0834 102.235 18.55C103.168 17.9834 104.218 17.7 105.385 17.7C106.318 17.7 107.185 17.8667 107.985 18.2C108.818 18.5334 109.552 19.0334 110.185 19.7V28.4C109.552 29.0667 108.835 29.5834 108.035 29.95ZM127.764 36.7C129.797 37.2334 131.981 37.5 134.314 37.5C136.447 37.5 138.347 37.1167 140.014 36.35C141.681 35.5834 142.997 34.5334 143.964 33.2C144.931 31.8334 145.414 30.3167 145.414 28.65C145.414 26.6834 144.764 25.0667 143.464 23.8C142.164 22.5334 140.231 21.6667 137.664 21.2L132.814 20.3C131.814 20.1334 131.114 19.9167 130.714 19.65C130.347 19.3834 130.164 18.9834 130.164 18.45C130.164 17.8834 130.431 17.45 130.964 17.15C131.531 16.85 132.297 16.7 133.264 16.7C134.464 16.7 135.664 16.8834 136.864 17.25C138.097 17.5834 139.364 18.1334 140.664 18.9L144.364 13.75C142.697 12.7834 140.981 12.05 139.214 11.55C137.447 11.05 135.664 10.8 133.864 10.8C131.631 10.8 129.697 11.1334 128.064 11.8C126.464 12.4667 125.231 13.4334 124.364 14.7C123.497 15.9334 123.064 17.4334 123.064 19.2C123.064 21.2 123.697 22.8334 124.964 24.1C126.264 25.3667 128.164 26.2334 130.664 26.7L135.614 27.6C136.447 27.7334 137.047 27.95 137.414 28.25C137.814 28.55 138.014 28.95 138.014 29.45C138.014 30.0834 137.681 30.6 137.014 31C136.381 31.3667 135.481 31.55 134.314 31.55C133.081 31.55 131.847 31.3667 130.614 31C129.414 30.6 127.881 29.9167 126.014 28.95L122.464 34.35C123.964 35.3834 125.731 36.1667 127.764 36.7ZM155.745 35.75C157.779 36.9167 160.045 37.5 162.545 37.5C164.679 37.5 166.679 37.1 168.545 36.3C170.412 35.4667 171.995 34.2834 173.295 32.75L168.345 27.8C167.512 28.7667 166.662 29.4834 165.795 29.95C164.929 30.3834 163.945 30.6 162.845 30.6C161.779 30.6 160.812 30.3167 159.945 29.75C159.112 29.1834 158.445 28.4167 157.945 27.45C157.479 26.4834 157.245 25.3834 157.245 24.15C157.245 22.9167 157.479 21.8167 157.945 20.85C158.445 19.8834 159.112 19.1167 159.945 18.55C160.812 17.9834 161.779 17.7 162.845 17.7C163.945 17.7 164.929 17.9334 165.795 18.4C166.662 18.8334 167.512 19.5334 168.345 20.5L173.295 15.55C171.995 14.0167 170.412 12.85 168.545 12.05C166.679 11.2167 164.679 10.8 162.545 10.8C160.045 10.8 157.779 11.4 155.745 12.6C153.745 13.7667 152.145 15.35 150.945 17.35C149.779 19.35 149.195 21.6167 149.195 24.15C149.195 26.65 149.779 28.9167 150.945 30.95C152.145 32.95 153.745 34.55 155.745 35.75ZM180.348 36.4C181.715 37.0667 183.265 37.4 184.998 37.4C186.365 37.4 187.615 37.2 188.748 36.8C189.882 36.3667 191.015 35.6834 192.148 34.75V37H200.148V20.5C200.148 17.4334 199.148 15.05 197.148 13.35C195.182 11.65 192.415 10.8 188.848 10.8C185.115 10.8 181.165 11.7334 176.998 13.6L179.798 19.25C181.298 18.6167 182.632 18.1667 183.798 17.9C184.998 17.6 186.082 17.45 187.048 17.45C188.782 17.45 190.065 17.7667 190.898 18.4C191.732 19 192.148 19.9334 192.148 21.2V23.3C191.015 22.8667 189.965 22.5667 188.998 22.4C188.032 22.2 187.082 22.1 186.148 22.1C184.048 22.1 182.248 22.4 180.748 23C179.248 23.5667 178.098 24.4167 177.298 25.55C176.498 26.65 176.098 28 176.098 29.6C176.098 31.1334 176.465 32.4834 177.198 33.65C177.965 34.8167 179.015 35.7334 180.348 36.4ZM184.598 31.4C183.898 30.9334 183.548 30.2834 183.548 29.45C183.548 28.6167 183.898 27.9834 184.598 27.55C185.332 27.1167 186.365 26.9 187.698 26.9C188.465 26.9 189.215 26.95 189.948 27.05C190.682 27.15 191.415 27.2834 192.148 27.45V30.75C191.448 31.1834 190.715 31.5167 189.948 31.75C189.182 31.95 188.365 32.05 187.498 32.05C186.265 32.05 185.298 31.8334 184.598 31.4ZM206.254 11.2V47.45H214.354V34.15C215.22 35.1167 216.237 35.8667 217.404 36.4C218.604 36.9 219.904 37.15 221.304 37.15C223.537 37.15 225.554 36.5667 227.354 35.4C229.187 34.2334 230.637 32.6667 231.704 30.7C232.77 28.7334 233.304 26.55 233.304 24.15C233.304 21.7167 232.787 19.5167 231.754 17.55C230.754 15.5834 229.387 14.0167 227.654 12.85C225.954 11.65 224.037 11.05 221.904 11.05C220.37 11.05 218.92 11.3834 217.554 12.05C216.22 12.7167 215.12 13.6334 214.254 14.8V11.2H206.254ZM222.354 29.7C221.454 30.2334 220.404 30.5 219.204 30.5C218.27 30.5 217.387 30.3167 216.554 29.95C215.72 29.5834 214.987 29.0834 214.354 28.45V19.85C215.02 19.15 215.737 18.6334 216.504 18.3C217.304 17.9334 218.204 17.75 219.204 17.75C220.37 17.75 221.42 18.0334 222.354 18.6C223.287 19.1334 224.02 19.8834 224.554 20.85C225.087 21.7834 225.354 22.8667 225.354 24.1C225.354 25.3334 225.087 26.4334 224.554 27.4C224.02 28.3667 223.287 29.1334 222.354 29.7ZM243.981 35.75C246.048 36.9167 248.348 37.5 250.881 37.5C253.048 37.5 254.981 37.1834 256.681 36.55C258.381 35.8834 260.065 34.8167 261.731 33.35L256.381 28.9C255.815 29.6 255.081 30.1334 254.181 30.5C253.315 30.8667 252.348 31.05 251.281 31.05C250.315 31.05 249.415 30.85 248.581 30.45C247.748 30.05 247.048 29.4834 246.481 28.75C245.915 28.0167 245.498 27.1667 245.231 26.2H262.981V24.45C262.981 21.7834 262.431 19.4334 261.331 17.4C260.265 15.3334 258.781 13.7167 256.881 12.55C254.981 11.3834 252.781 10.8 250.281 10.8C247.815 10.8 245.598 11.4 243.631 12.6C241.665 13.7667 240.115 15.35 238.981 17.35C237.848 19.35 237.281 21.6167 237.281 24.15C237.281 26.65 237.881 28.9167 239.081 30.95C240.315 32.95 241.948 34.55 243.981 35.75ZM255.481 21.6H245.231C245.465 20.6334 245.798 19.8167 246.231 19.15C246.698 18.4834 247.265 17.9834 247.931 17.65C248.631 17.2834 249.398 17.1 250.231 17.1C251.098 17.1 251.881 17.2834 252.581 17.65C253.281 18.0167 253.881 18.5334 254.381 19.2C254.881 19.8667 255.248 20.6667 255.481 21.6ZM289.063 36.2C291.297 37.1 293.713 37.55 296.313 37.55C298.18 37.55 299.997 37.2834 301.763 36.75C303.563 36.1834 305.213 35.3834 306.713 34.35C308.247 33.3167 309.513 32.1167 310.513 30.75L304.713 25.25C303.58 26.7834 302.313 27.95 300.913 28.75C299.513 29.5167 297.98 29.9 296.313 29.9C294.947 29.9 293.68 29.65 292.513 29.15C291.38 28.6167 290.38 27.8834 289.513 26.95C288.647 25.9834 287.963 24.8834 287.463 23.65C286.997 22.3834 286.763 21 286.763 19.5C286.763 18 286.997 16.6334 287.463 15.4C287.963 14.1334 288.647 13.0334 289.513 12.1C290.38 11.1334 291.38 10.4 292.513 9.90002C293.68 9.36669 294.947 9.10003 296.313 9.10003C297.98 9.10003 299.513 9.48336 300.913 10.25C302.313 11.0167 303.58 12.1834 304.713 13.75L310.513 8.25002C309.513 6.85002 308.247 5.65002 306.713 4.65003C305.213 3.61669 303.563 2.83336 301.763 2.30003C299.997 1.73336 298.18 1.45003 296.313 1.45003C293.713 1.45003 291.297 1.91669 289.063 2.85003C286.83 3.75003 284.863 5.01669 283.163 6.65002C281.497 8.28336 280.197 10.2 279.263 12.4C278.33 14.5667 277.863 16.9334 277.863 19.5C277.863 22.0334 278.33 24.4 279.263 26.6C280.197 28.8 281.497 30.7167 283.163 32.35C284.863 33.9834 286.83 35.2667 289.063 36.2ZM319.467 35.75C321.501 36.9167 323.801 37.5 326.367 37.5C328.901 37.5 331.167 36.9167 333.167 35.75C335.201 34.5834 336.801 33 337.967 31C339.167 28.9667 339.767 26.6834 339.767 24.15C339.767 21.6167 339.167 19.35 337.967 17.35C336.801 15.3167 335.201 13.7167 333.167 12.55C331.167 11.3834 328.884 10.8 326.317 10.8C323.784 10.8 321.501 11.3834 319.467 12.55C317.434 13.7167 315.817 15.3167 314.617 17.35C313.451 19.35 312.867 21.6167 312.867 24.15C312.867 26.6834 313.451 28.9667 314.617 31C315.817 33 317.434 34.5834 319.467 35.75ZM329.217 29.9C328.384 30.4667 327.417 30.75 326.317 30.75C325.251 30.75 324.284 30.4667 323.417 29.9C322.584 29.3334 321.934 28.55 321.467 27.55C321.001 26.55 320.767 25.4167 320.767 24.15C320.767 22.85 321.001 21.7167 321.467 20.75C321.934 19.75 322.584 18.9667 323.417 18.4C324.284 17.8334 325.251 17.55 326.317 17.55C327.417 17.55 328.384 17.8334 329.217 18.4C330.051 18.9667 330.701 19.75 331.167 20.75C331.634 21.7167 331.867 22.85 331.867 24.15C331.867 25.4167 331.634 26.55 331.167 27.55C330.701 28.55 330.051 29.3334 329.217 29.9ZM344.044 36.15C344.944 37.0834 346.011 37.55 347.244 37.55C348.511 37.55 349.577 37.0834 350.444 36.15C351.344 35.2167 351.794 34.1 351.794 32.8C351.794 31.5 351.344 30.3834 350.444 29.45C349.577 28.5167 348.511 28.05 347.244 28.05C346.011 28.05 344.944 28.5167 344.044 29.45C343.144 30.3834 342.694 31.5 342.694 32.8C342.694 34.1 343.144 35.2167 344.044 36.15ZM121.17 56.5V67H128.955V64.795H123.75V56.5H121.17ZM132.072 66.625C132.682 66.975 133.372 67.15 134.142 67.15C134.902 67.15 135.582 66.975 136.182 66.625C136.792 66.275 137.272 65.8 137.622 65.2C137.982 64.59 138.162 63.905 138.162 63.145C138.162 62.385 137.982 61.705 137.622 61.105C137.272 60.495 136.792 60.015 136.182 59.665C135.582 59.315 134.897 59.14 134.127 59.14C133.367 59.14 132.682 59.315 132.072 59.665C131.462 60.015 130.977 60.495 130.617 61.105C130.267 61.705 130.092 62.385 130.092 63.145C130.092 63.905 130.267 64.59 130.617 65.2C130.977 65.8 131.462 66.275 132.072 66.625ZM134.997 64.87C134.747 65.04 134.457 65.125 134.127 65.125C133.807 65.125 133.517 65.04 133.257 64.87C133.007 64.7 132.812 64.465 132.672 64.165C132.532 63.865 132.462 63.525 132.462 63.145C132.462 62.755 132.532 62.415 132.672 62.125C132.812 61.825 133.007 61.59 133.257 61.42C133.517 61.25 133.807 61.165 134.127 61.165C134.457 61.165 134.747 61.25 134.997 61.42C135.247 61.59 135.442 61.825 135.582 62.125C135.722 62.415 135.792 62.755 135.792 63.145C135.792 63.525 135.722 63.865 135.582 64.165C135.442 64.465 135.247 64.7 134.997 64.87ZM139.71 59.26V67H142.14V62.11C142.34 61.82 142.595 61.59 142.905 61.42C143.215 61.24 143.55 61.15 143.91 61.15C144.12 61.15 144.325 61.17 144.525 61.21C144.725 61.25 144.9 61.31 145.05 61.39V59.305C144.9 59.225 144.77 59.175 144.66 59.155C144.55 59.135 144.41 59.12 144.24 59.11C143.78 59.11 143.375 59.265 143.025 59.575C142.685 59.885 142.39 60.365 142.14 61.015V59.26H139.71ZM147.776 66.625C148.396 66.975 149.086 67.15 149.846 67.15C150.496 67.15 151.076 67.055 151.586 66.865C152.096 66.665 152.601 66.345 153.101 65.905L151.496 64.57C151.326 64.78 151.106 64.94 150.836 65.05C150.576 65.16 150.286 65.215 149.966 65.215C149.676 65.215 149.406 65.155 149.156 65.035C148.906 64.915 148.696 64.745 148.526 64.525C148.356 64.305 148.231 64.05 148.151 63.76H153.476V63.235C153.476 62.435 153.311 61.73 152.981 61.12C152.661 60.5 152.216 60.015 151.646 59.665C151.076 59.315 150.416 59.14 149.666 59.14C148.926 59.14 148.261 59.32 147.671 59.68C147.081 60.03 146.616 60.505 146.276 61.105C145.936 61.705 145.766 62.385 145.766 63.145C145.766 63.895 145.946 64.575 146.306 65.185C146.676 65.785 147.166 66.265 147.776 66.625ZM151.226 62.38H148.151C148.221 62.09 148.321 61.845 148.451 61.645C148.591 61.445 148.761 61.295 148.961 61.195C149.171 61.085 149.401 61.03 149.651 61.03C149.911 61.03 150.146 61.085 150.356 61.195C150.566 61.305 150.746 61.46 150.896 61.66C151.046 61.86 151.156 62.1 151.226 62.38ZM154.988 59.26V67H157.418V61.645C157.728 61.245 158.108 61.045 158.558 61.045C158.908 61.045 159.188 61.165 159.398 61.405C159.608 61.635 159.713 61.945 159.713 62.335V67H162.143V61.855V61.75V61.63C162.303 61.43 162.473 61.285 162.653 61.195C162.843 61.095 163.048 61.045 163.268 61.045C163.618 61.045 163.898 61.165 164.108 61.405C164.318 61.635 164.423 61.945 164.423 62.335V67H166.853V61.855C166.853 61.325 166.748 60.855 166.538 60.445C166.338 60.035 166.053 59.715 165.683 59.485C165.323 59.255 164.903 59.14 164.423 59.14C163.893 59.14 163.413 59.265 162.983 59.515C162.553 59.755 162.188 60.11 161.888 60.58C161.698 60.14 161.413 59.79 161.033 59.53C160.653 59.27 160.213 59.14 159.713 59.14C159.243 59.14 158.813 59.255 158.423 59.485C158.043 59.715 157.708 60.05 157.418 60.49V59.26H154.988ZM171.907 59.26V67H174.337V59.26H171.907ZM172.162 57.67C172.432 57.94 172.752 58.075 173.122 58.075C173.502 58.075 173.822 57.94 174.082 57.67C174.352 57.4 174.487 57.08 174.487 56.71C174.487 56.33 174.352 56.01 174.082 55.75C173.822 55.48 173.502 55.345 173.122 55.345C172.752 55.345 172.432 55.48 172.162 55.75C171.892 56.01 171.757 56.33 171.757 56.71C171.757 57.08 171.892 57.4 172.162 57.67ZM176.228 59.26V70.135H178.658V66.145C178.918 66.435 179.223 66.66 179.573 66.82C179.933 66.97 180.323 67.045 180.743 67.045C181.413 67.045 182.018 66.87 182.558 66.52C183.108 66.17 183.543 65.7 183.863 65.11C184.183 64.52 184.343 63.865 184.343 63.145C184.343 62.415 184.188 61.755 183.878 61.165C183.578 60.575 183.168 60.105 182.648 59.755C182.138 59.395 181.563 59.215 180.923 59.215C180.463 59.215 180.028 59.315 179.618 59.515C179.218 59.715 178.888 59.99 178.628 60.34V59.26H176.228ZM181.058 64.81C180.788 64.97 180.473 65.05 180.113 65.05C179.833 65.05 179.568 64.995 179.318 64.885C179.068 64.775 178.848 64.625 178.658 64.435V61.855C178.858 61.645 179.073 61.49 179.303 61.39C179.543 61.28 179.813 61.225 180.113 61.225C180.463 61.225 180.778 61.31 181.058 61.48C181.338 61.64 181.558 61.865 181.718 62.155C181.878 62.435 181.958 62.76 181.958 63.13C181.958 63.5 181.878 63.83 181.718 64.12C181.558 64.41 181.338 64.64 181.058 64.81ZM186.842 66.91C187.452 67.07 188.107 67.15 188.807 67.15C189.447 67.15 190.017 67.035 190.517 66.805C191.017 66.575 191.412 66.26 191.702 65.86C191.992 65.45 192.137 64.995 192.137 64.495C192.137 63.905 191.942 63.42 191.552 63.04C191.162 62.66 190.582 62.4 189.812 62.26L188.357 61.99C188.057 61.94 187.847 61.875 187.727 61.795C187.617 61.715 187.562 61.595 187.562 61.435C187.562 61.265 187.642 61.135 187.802 61.045C187.972 60.955 188.202 60.91 188.492 60.91C188.852 60.91 189.212 60.965 189.572 61.075C189.942 61.175 190.322 61.34 190.712 61.57L191.822 60.025C191.322 59.735 190.807 59.515 190.277 59.365C189.747 59.215 189.212 59.14 188.672 59.14C188.002 59.14 187.422 59.24 186.932 59.44C186.452 59.64 186.082 59.93 185.822 60.31C185.562 60.68 185.432 61.13 185.432 61.66C185.432 62.26 185.622 62.75 186.002 63.13C186.392 63.51 186.962 63.77 187.712 63.91L189.197 64.18C189.447 64.22 189.627 64.285 189.737 64.375C189.857 64.465 189.917 64.585 189.917 64.735C189.917 64.925 189.817 65.08 189.617 65.2C189.427 65.31 189.157 65.365 188.807 65.365C188.437 65.365 188.067 65.31 187.697 65.2C187.337 65.08 186.877 64.875 186.317 64.585L185.252 66.205C185.702 66.515 186.232 66.75 186.842 66.91ZM194.713 66.79C195.103 67.01 195.548 67.12 196.048 67.12C196.548 67.12 197.003 67.005 197.413 66.775C197.833 66.535 198.193 66.19 198.493 65.74V67H200.923V59.26H198.493V64.57C198.323 64.79 198.128 64.955 197.908 65.065C197.698 65.165 197.463 65.215 197.203 65.215C196.813 65.215 196.498 65.085 196.258 64.825C196.028 64.555 195.913 64.205 195.913 63.775V59.26H193.483V64.48C193.483 65 193.593 65.46 193.813 65.86C194.033 66.25 194.333 66.56 194.713 66.79ZM202.815 59.26V67H205.245V61.645C205.555 61.245 205.935 61.045 206.385 61.045C206.735 61.045 207.015 61.165 207.225 61.405C207.435 61.635 207.54 61.945 207.54 62.335V67H209.97V61.855V61.75V61.63C210.13 61.43 210.3 61.285 210.48 61.195C210.67 61.095 210.875 61.045 211.095 61.045C211.445 61.045 211.725 61.165 211.935 61.405C212.145 61.635 212.25 61.945 212.25 62.335V67H214.68V61.855C214.68 61.325 214.575 60.855 214.365 60.445C214.165 60.035 213.88 59.715 213.51 59.485C213.15 59.255 212.73 59.14 212.25 59.14C211.72 59.14 211.24 59.265 210.81 59.515C210.38 59.755 210.015 60.11 209.715 60.58C209.525 60.14 209.24 59.79 208.86 59.53C208.48 59.27 208.04 59.14 207.54 59.14C207.07 59.14 206.64 59.255 206.25 59.485C205.87 59.715 205.535 60.05 205.245 60.49V59.26H202.815Z"}" fill="${"black"}"></path></svg></a>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda id sint</p></div>
		<div class="${"item"}"><h3>Sitemap</h3>
			<ul><li class="${["link", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a href="${"/"}">Home</a></li>
				<li class="${["link", $page.url.pathname === "/testimonials" ? "active" : ""].join(" ").trim()}"><a href="${"/testimonials"}">Testimonials</a></li>
				<li class="${["link", $page.url.pathname === "/portfolio" ? "active" : ""].join(" ").trim()}"><a href="${"/portfolio"}">Portfolio</a></li>
				<li class="${["link", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a href="${"/about"}">About</a></li>
				<li class="${["link", $page.url.pathname === "/contact" ? "active" : ""].join(" ").trim()}"><a href="${"/contact"}">Contact</a></li></ul></div>
		<div class="${"item"}"><h3>Services</h3>
			<ul>${each(businessInfo.ftServices, ({ service }) => {
        return `<li><a href="${"/"}">${escape(service)}</a>
					</li>`;
      })}</ul></div>
		<div class="${"item"}"><div class="${"subitem"}"><h3>Keep in touch</h3>
				<div class="${"socialmedia"}">${each(businessInfo.socials, (social) => {
        return `${social.url.length >= 1 ? `<a${add_attribute("class", social.platform, 0)}${add_attribute("aria-label", social.platform, 0)}${add_attribute("href", social.url, 0)}><img class="${""}" src="${"/social/" + escape(social.platform, true) + ".svg"}" alt="${""}" width="${"40"}" height="${"34"}" loading="${"lazy"}" decoding="${"async"}">
							</a>` : ``}`;
      })}</div></div>
			<div class="${"subitem"}"><h3>Contact Us</h3>
				<ul><li><a href="${"mailto:" + escape(businessInfo.email, true)}">Click to Email</a></li>
					<li><a href="${"tel:" + escape(businessInfo.phone, true)}"><span>Phone:</span> ${escape(businessInfo.phone)}</a></li>
					<li><a${add_attribute("href", businessInfo.googleLink, 0)}><span>Location:</span> ${escape(businessInfo.fullAddress)}</a></li></ul></div></div></div></footer>
<div class="${"credit"}"><p>\xA92022 ${escape(businessInfo.companyName)}.<br> Custom coded and designed By
		<a href="${"/"}">Ricky Rivas</a></p></div>`;
    });
    css = {
      code: ".fixed.svelte-y390hs.svelte-y390hs{position:fixed;bottom:1em;right:0.5em;display:flex;flex-direction:column;z-index:500}.top-link.svelte-y390hs.svelte-y390hs{transition:all 0.25s ease-in-out;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:50%;padding:1px;width:2.5rem;height:2.5rem;background:var(--accent-color);border:0;position:relative}.top-link.svelte-y390hs img.svelte-y390hs{width:1em;height:1em;filter:invert(1)}.top-link.hide.svelte-y390hs.svelte-y390hs{visibility:hidden;opacity:0}.top-link.show.svelte-y390hs.svelte-y390hs{visibility:visible;opacity:1}.screen-reader-text.svelte-y390hs.svelte-y390hs{position:absolute;clip-path:inset(50%);margin:-1px;border:0;padding:0;width:1px;height:1px;overflow:hidden;word-wrap:normal !important;clip:rect(1px, 1px, 1px, 1px)}.screen-reader-text.svelte-y390hs.svelte-y390hs:focus{display:block;top:5px;left:5px;z-index:100000;clip-path:none;background-color:#eee;padding:15px 23px 14px;width:auto;height:auto;text-decoration:none;line-height:normal;color:#444;font-size:1em;clip:auto !important}",
      map: null
    };
    ToTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { y } = $$props;
      if ($$props.y === void 0 && $$bindings.y && y !== void 0)
        $$bindings.y(y);
      $$result.css.add(css);
      return `
<div class="${"fixed svelte-y390hs"}"><button class="${"top-link " + escape(y >= 100 ? "show" : "hide", true) + " svelte-y390hs"}" id="${"js-top"}"><img src="${"/up-chevron.svg"}" alt="${"up arrow"}" class="${" svelte-y390hs"}" width="${"25"}" height="${"25"}">
		<span class="${"screen-reader-text svelte-y390hs"}">Back to top</span></button>
</div>`;
    });
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
${validate_component(ToTop, "ToTop").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/pages/_layout.svelte-7a976f45.js";
    imports = ["_app/immutable/components/pages/_layout.svelte-7a976f45.js", "_app/immutable/chunks/index-8c4849df.js", "_app/immutable/chunks/stores-05b01a6d.js", "_app/immutable/chunks/singletons-8ed36db9.js", "_app/immutable/chunks/_page-006eb137.js"];
    stylesheets = ["_app/immutable/assets/_layout-034dab42.css"];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2
});
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_chunks();
    init_stores();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1>

<pre>${escape($page.error.message)}</pre>



${$page.error.frame ? `<pre>${escape($page.error.frame)}</pre>` : ``}
${$page.error.stack ? `<pre>${escape($page.error.stack)}</pre>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/components/error.svelte-11bc072b.js";
    imports2 = ["_app/immutable/components/error.svelte-11bc072b.js", "_app/immutable/chunks/index-8c4849df.js", "_app/immutable/chunks/stores-05b01a6d.js", "_app/immutable/chunks/singletons-8ed36db9.js"];
    stylesheets2 = [];
  }
});

// .svelte-kit/output/server/chunks/SubFooter.js
var SubFooter;
var init_SubFooter = __esm({
  ".svelte-kit/output/server/chunks/SubFooter.js"() {
    init_chunks();
    SubFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div id="${"subfooter"}"><div class="${"container"}"><h2>Wassup Wassup<br>Wassup</h2>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam facilis laboriosam, itaque
			autem commodi assumenda.
		</p>
		<a class="${"btn"}" href="${"/contact"}">Request an Estimate</a></div></div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    init_page();
    init_SubFooter();
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>${escape(businessInfo.companyName)} | ${escape(businessInfo.industry)} | ${escape(businessInfo.cityAndState)}</title>`, ""}`, ""}

<main id="${"home"}">
	
	
	<section id="${"landing"}"><picture><source media="${"(max-width: 600px)"}" srcset="${"/home/img02m.webp"}">
			<source media="${"(min-width: 601px)"}" srcset="${"/home/img02.webp"}">
			<img aria-hidden="${"true"}" decoding="${"async"}" src="${"/home/img02.jpeg"}" alt="${"hero"}" width="${"276"}" height="${"132"}"></picture>
		<div class="${"overlay"}"></div>
		<div class="${"content"}"><h1>We Specialize In Creating Outstanding Sceneries For Homeowners And Commercial Purposes.
			</h1>
			<p>Armed with world-class equipment and years of experience in the field, we&#39;re the go-to
				experts for landscaping services you can trust. No job is too big or small for our experts,
				call us today to get started!
			</p>
			<div class="${"btns"}"><a href="${"/contact"}" class="${"btn"}">Free Consultation</a></div></div></section>
	
	
	
	<section id="${"mini-services"}"><div class="${"container"}">${each(services, ({ name, description }, i) => {
        return `<div class="${"item"}"><div class="${"icon"}"><img class="${""}" src="${"/home/0" + escape(i + 1, true) + ".svg"}" alt="${""}" width="${"100"}" height="${"100"}" loading="${"lazy"}" decoding="${"async"}"></div>
					<h2>${escape(name)}</h2>
					<p>${escape(description)}</p>
				</div>`;
      })}</div></section>
	
	
	
	<section id="${"layout01"}"><div class="${"container"}"><div class="${"img-container"}"><img class="${""}" src="${"/home/about.webp"}" alt="${"Owner"}" width="${"500"}" height="${"750"}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"content"}"><h2>Landscaping Experts With An Eye For Aesthetics And Practicality.</h2>
				<p>Based in Tulsa, Oklahoma, Lawncare started as a step up for the landscaping services in
					the area as a whole. Fast forward to 30 years, and today we stand as one of the
					highest-rated landscapers in the state, giving every client solutions that fit their needs
					like a glove
				</p>
				<p>Our priorities are efficiency, safety, and quality, if these 3 boxes aren\u2019t checked off,
					then our work is yet to be completed. We provide you with the best results in record time,
					giving you a punctual, professional experience with no unwanted downtime or delays!
				</p>
				<p class="${"list-head"}"><strong>Lorem ipsum dolor sit.</strong></p>
				<ul>${each({ length: 3 }, (_) => {
        return `<li><svg width="${"25"}" height="${"25"}" viewBox="${"0 0 683 683"}" fill="${"currentcolor"}" xmlns="${"http://www.w3.org/2000/svg"}"><g clip-path="${"url(#clip0_102_2)"}"><path d="${"M592.234 86.6666L244.406 409.349L97.3073 252.37L-1.52588e-05 343.552L237.646 597.161L682.667 184.693L592.234 86.6666Z"}" fill="${"currentcolor"}"></path></g></svg>
							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non eligendi
								facilis ipsa.</span>
						</li>`;
      })}</ul>
				<div class="${"btns"}"><a class="${"btn"}" href="${"/contact"}">Contact Us</a></div></div></div></section>
	
	
	
	<section id="${"layout02"}"><div class="${"container"}"><div class="${"content"}"><h2>Trusted Landscapers for Tulsa for over 20 years</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
					officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				</p>
				<p class="${"list-head"}"><strong>Lorem ipsum dolor sit amet.</strong></p>
				<ul>${each({ length: 4 }, (_) => {
        return `<li><svg width="${"25"}" height="${"25"}" viewBox="${"0 0 683 683"}" fill="${"currentcolor"}" xmlns="${"http://www.w3.org/2000/svg"}"><g clip-path="${"url(#clip0_102_2)"}"><path d="${"M592.234 86.6666L244.406 409.349L97.3073 252.37L-1.52588e-05 343.552L237.646 597.161L682.667 184.693L592.234 86.6666Z"}" fill="${"currentcolor"}"></path></g></svg>

							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid qui quasi!</span>
						</li>`;
      })}</ul>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
					officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				</p>
				<div class="${"btns"}"><a href="${"/contact"}" class="${"btn"}">Contact Us</a></div></div>
			<div class="${"img-container"}"><img class="${""}" src="${"/home/about.webp"}" alt="${"Owner"}" width="${"500"}" height="${"750"}" loading="${"lazy"}" decoding="${"async"}"></div></div></section>
	
	
	
	<img class="${"main-img"}" src="${"/home/servicemain.jpg"}" alt="${"beautiful landscape"}" width="${"1920"}" height="${"1100"}" loading="${"lazy"}" decoding="${"async"}">
	<section id="${"services"}"><div class="${"header"}"><h2>Residential<br> Landscaping Services</h2>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt eius nihil, commodi
				reiciendis at aperiam voluptatibus fuga doloremque, aspernatur quam, perferendis hic. Iusto
				iste, sequi mollitia alias ipsa quam.
			</p></div>
		<div class="${"container"}">${each(mainServices, ({ title, description, iconPath }) => {
        return `<div class="${"item"}"><img class="${""}"${add_attribute("src", iconPath, 0)} alt="${"icon"}" width="${"40"}" height="${"40"}" loading="${"lazy"}" decoding="${"async"}">
					<h3>${escape(title)}</h3>
					<p>${escape(description)}</p>
					<a class="${"link"}" href="${"/contact"}">Request Quote</a>
				</div>`;
      })}</div></section>
	
	
	
	<section id="${"why"}"><div class="${"container"}"><h2>Why Should You <br>Choose Us?</h2>
			<p>The answer is simple: Experience. We&#39;re passionate about what we do, which to our customers
				means that we bring our A-game to every single project. With Lawncare, you&#39;re investing in
				quality, punctuality, and flawless execution, with landscaping solutions that withstand the
				test of time.
			</p>
			<div class="${"items"}">${each(reasons, ({ title, description }) => {
        return `<div class="${"item"}"><div class="${"circle"}"><img class="${""}" src="${"/home/quality.svg"}" alt="${"icon"}" width="${"25"}" height="${"25"}" loading="${"lazy"}" decoding="${"async"}"></div>
						<h3>${escape(title)}</h3>
						<p>${escape(description)}</p>
					</div>`;
      })}</div>
			<img class="${"decor"}" src="${"/home/img06.webp"}" alt="${""}" width="${"500"}" height="${"749"}" loading="${"lazy"}" decoding="${"async"}" aria-hidden="${"true"}"></div></section>
	
	
	
	<section id="${"portfolio"}"><div class="${"header"}"><h2>Some of<br> Our Latest Projects</h2></div>
		<div class="${"grid"}"><div class="${"col"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/portfolio/img03.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div>
			<div class="${"col"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div>
			<div class="${"col"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/portfolio/img03.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div></div></section>
	
	
	
	<div id="${"misc"}"><div class="${"container"}"><div class="${"item"}"><h2><span>30</span> Years
				</h2>
				<p>Experienced professionals who know how to build long-lasting landscaping solutions.</p></div>
			<div class="${"item"}"><h2><span>Local</span> Business
				</h2>
				<p>Lawncare has been trusted and highly rated in the state for years, and for good reason.
				</p></div>
			<div class="${"item"}"><h2><span>15</span> Workers
				</h2>
				<p>No job is too big or small for Lawncare. No matter your needs, we can cover them
					flawlessly
				</p></div></div></div>
	
	
	
	<section id="${"test"}"><div class="${"container"}"><div class="${"header"}"><h2>What Our Clients Say</h2></div>
			<div class="${"items"}">${each(subReviews, ({ review, testifier }) => {
        return `<div class="${"item"}"><div class="${"stars"}">${each({ length: 5 }, (_) => {
          return `<svg width="${"30"}" height="${"30"}" viewBox="${"0 0 30 30"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" aria-hidden="${"true"}" role="${"img"}"><path d="${"M30 11.5908L19.0993 10.8741L14.994 0.560669L10.8888 10.8741L0 11.5908L8.3516 18.6821L5.61105 29.4393L14.994 23.5084L24.3771 29.4393L21.6365 18.6821L30 11.5908Z"}" fill="${"currentcolor"}"></path></svg>`;
        })}</div>
						<p>${escape(review)}</p>
						<div class="${"info"}"><img src="${"/reviews/user.svg"}" alt="${"testifier"}" width="${"40"}" height="${"40"}">
							<div><h4>${escape(testifier)}</h4>
								<p>Homeowner</p>
							</div></div>
					</div>`;
      })}</div>
			<a class="${"btn"}" href="${"/testimonials"}">View All Reviews</a></div></section></main>



${validate_component(SubFooter, "SubFooter").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  imports: () => imports3,
  index: () => index3,
  shared: () => page_exports,
  stylesheets: () => stylesheets3
});
var index3, component3, file3, imports3, stylesheets3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_page();
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file3 = "_app/immutable/components/pages/_page.svelte-c520bd5e.js";
    imports3 = ["_app/immutable/components/pages/_page.svelte-c520bd5e.js", "_app/immutable/chunks/index-8c4849df.js", "_app/immutable/chunks/_page-006eb137.js", "_app/immutable/chunks/SubFooter-490270c1.js", "_app/immutable/modules/pages/_page.js-f59cdd42.js", "_app/immutable/chunks/_page-006eb137.js"];
    stylesheets3 = ["_app/immutable/assets/_page-4721c1d3.css", "_app/immutable/assets/SubFooter-82a995cf.css"];
  }
});

// .svelte-kit/output/server/entries/pages/about/_page.js
var page_exports2 = {};
var init_page2 = __esm({
  ".svelte-kit/output/server/entries/pages/about/_page.js"() {
  }
});

// .svelte-kit/output/server/chunks/SubHeader.js
var SubHeader;
var init_SubHeader = __esm({
  ".svelte-kit/output/server/chunks/SubHeader.js"() {
    init_chunks();
    SubHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { pageTitle: pageTitle5 } = $$props;
      if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle5 !== void 0)
        $$bindings.pageTitle(pageTitle5);
      return `<section id="${"subheader"}"><img aria-hidden="${"true"}" src="${"/twig.png"}" alt="${"twig"}" class="${"abs-head"}" width="${"100"}" height="${"139"}">
	<h1>${escape(pageTitle5)}</h1>
	<picture><source media="${"(max-width: 600px)"}" srcset="${"/img08m.webp"}">
		<source media="${"(min-width: 601px)"}" srcset="${"/img08l.webp"}">
		<img aria-hidden="${"true"}" decoding="${"async"}" src="${"/img08.png"}" alt="${""}" width="${"276"}" height="${"132"}"></picture>
	<div class="${"overlay"}"></div></section>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/about/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
var pageTitle, Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/about/_page.svelte.js"() {
    init_chunks();
    init_page();
    init_SubFooter();
    init_SubHeader();
    pageTitle = "About Us";
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>${escape(businessInfo.companyName)} | ${escape(pageTitle)} | ${escape(businessInfo.cityAndState)}</title>`, ""}`, ""}




${validate_component(SubHeader, "SubHeader").$$render($$result, { pageTitle }, {}, {})}
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



${validate_component(SubFooter, "SubFooter").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  file: () => file4,
  imports: () => imports4,
  index: () => index4,
  shared: () => page_exports2,
  stylesheets: () => stylesheets4
});
var index4, component4, file4, imports4, stylesheets4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_page2();
    index4 = 3;
    component4 = async () => (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    file4 = "_app/immutable/components/pages/about/_page.svelte-d394a164.js";
    imports4 = ["_app/immutable/components/pages/about/_page.svelte-d394a164.js", "_app/immutable/chunks/index-8c4849df.js", "_app/immutable/chunks/_page-006eb137.js", "_app/immutable/chunks/SubFooter-490270c1.js", "_app/immutable/chunks/SubHeader-cccd547f.js", "_app/immutable/modules/pages/about/_page.js-64880ea0.js"];
    stylesheets4 = ["_app/immutable/assets/_page-5988facb.css", "_app/immutable/assets/SubFooter-82a995cf.css", "_app/immutable/assets/SubHeader-fb13526b.css"];
  }
});

// .svelte-kit/output/server/entries/pages/contact/_page.js
var page_exports3 = {};
var init_page3 = __esm({
  ".svelte-kit/output/server/entries/pages/contact/_page.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/contact/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page3
});
var pageTitle2, Page3;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/contact/_page.svelte.js"() {
    init_chunks();
    init_page();
    init_SubHeader();
    pageTitle2 = "Contact Us";
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>${escape(businessInfo.companyName)} | ${escape(pageTitle2)} | ${escape(businessInfo.cityAndState)}</title>`, ""}`, ""}

${validate_component(SubHeader, "SubHeader").$$render($$result, { pageTitle: pageTitle2 }, {}, {})}
<main id="${"contact"}"><div class="${"container"}"><div class="${"info-container"}">
			<h2>Contact us for your landscaping needs.</h2>
			<div class="${"para"}"><p>Feel free to contact us for any construction services. Give us a call for immediate help.
				</p></div>
			<ul><li><img src="${"/contact/phone-callg.svg"}" alt="${"Phone Icon"}" height="${"50"}" width="${"50"}">
					<div><p>Give Us a Call</p>
						<a href="${"tel:" + escape(businessInfo.phone, true)}" class="${"phone"}">${escape(businessInfo.phone)}</a></div></li>
				<li><img src="${"/contact/locationg.svg"}" alt="${"Phone Icon"}" height="${"50"}" width="${"50"}">
					<div><p>Our Location</p>
						<a${add_attribute("href", businessInfo.googleLink, 0)} class="${"location"}">${escape(businessInfo.fullAddress)}</a></div></li>
				<li><img src="${"/contact/emailg.svg"}" alt="${"Phone Icon"}" height="${"50"}" width="${"50"}">
					<div><p>Business Hours</p>
						<a href="${"/"}" class="${"phone"}">Monday - Friday: 8:00am-5:00pm</a></div></li></ul></div>
		<div class="${"form-container"}"><form name="${"Contact Form"}" id="${"contact-form"}" method="${"POST"}" data-netlify="${"true"}"><div class="${"flex"}"><div class="${"form-control dropdown"}"><p>How did you hear about us?</p>
						<select name="${"contact-reason"}" form="${"contact-form"}" aria-label="${"contact reason"}" required><option value="${""}" disabled selected>Select an option</option><option value="${"option"}">Option 1</option><option value="${"optiontwo"}">Option 2</option><option value="${"option3"}">Option 3</option></select></div>
					<div class="${"form-control"}"><p>Your Name:</p>
						<input type="${"text"}" name="${"name"}" aria-label="${"Your name"}" placeholder="${"Name"}" required></div></div>
				<div class="${"flex"}"><div class="${"form-control"}"><p>Your Email:</p>
						<input type="${"email"}" name="${"email"}" aria-label="${"Your email"}" placeholder="${"Email"}" required></div>
					<div class="${"form-control"}"><p>Your Phone:</p>
						<input type="${"number"}" name="${"number"}" aria-label="${"Your phone number"}" placeholder="${"Phone"}" required></div></div>
				<div class="${"form-control"}"><p>How can we help?</p>
					<textarea aria-label="${"message"}" placeholder="${"Your Message"}" name="${"message"}" required></textarea></div>
				<button type="${"submit"}" class="${"btn btn-primary"}">Send Message</button></form></div></div>
	<div class="${"map"}"><iframe title="${"Business Location"}" id="${"map"}" src="${"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206181.47982743487!2d-95.87801045!3d36.1523015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b692b8ddd12e8f%3A0xe76910c81bd96af7!2sTulsa%2C%20OK!5e0!3m2!1sen!2sus!4v1661391546906!5m2!1sen!2sus"}" allowfullscreen="${""}" loading="${"lazy"}" referrerpolicy="${"no-referrer-when-downgrade"}"></iframe></div></main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  file: () => file5,
  imports: () => imports5,
  index: () => index5,
  shared: () => page_exports3,
  stylesheets: () => stylesheets5
});
var index5, component5, file5, imports5, stylesheets5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    init_page3();
    index5 = 4;
    component5 = async () => (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    file5 = "_app/immutable/components/pages/contact/_page.svelte-4f84817f.js";
    imports5 = ["_app/immutable/components/pages/contact/_page.svelte-4f84817f.js", "_app/immutable/chunks/index-8c4849df.js", "_app/immutable/chunks/_page-006eb137.js", "_app/immutable/chunks/SubHeader-cccd547f.js", "_app/immutable/modules/pages/contact/_page.js-3b1d8c82.js"];
    stylesheets5 = ["_app/immutable/assets/_page-9ca8c39e.css", "_app/immutable/assets/SubHeader-fb13526b.css"];
  }
});

// .svelte-kit/output/server/entries/pages/portfolio/_page.js
var page_exports4 = {};
var init_page4 = __esm({
  ".svelte-kit/output/server/entries/pages/portfolio/_page.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/portfolio/_page.svelte.js
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: () => Page4
});
var pageTitle3, Page4;
var init_page_svelte4 = __esm({
  ".svelte-kit/output/server/entries/pages/portfolio/_page.svelte.js"() {
    init_chunks();
    init_page();
    init_SubFooter();
    init_SubHeader();
    pageTitle3 = "Our Portfolio";
    Page4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>${escape(businessInfo.companyName)} | ${escape(pageTitle3)} | ${escape(businessInfo.cityAndState)}</title>`, ""}`, ""}

${validate_component(SubHeader, "SubHeader").$$render($$result, { pageTitle: pageTitle3 }, {}, {})}
<main id="${"portfolio"}"><div class="${"grid"}"><div class="${"col"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img03.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div>
		<div class="${"col"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div>
		<div class="${"col"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img03.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div></div></main>
${validate_component(SubFooter, "SubFooter").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  file: () => file6,
  imports: () => imports6,
  index: () => index6,
  shared: () => page_exports4,
  stylesheets: () => stylesheets6
});
var index6, component6, file6, imports6, stylesheets6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    init_page4();
    index6 = 5;
    component6 = async () => (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default;
    file6 = "_app/immutable/components/pages/portfolio/_page.svelte-344aa8de.js";
    imports6 = ["_app/immutable/components/pages/portfolio/_page.svelte-344aa8de.js", "_app/immutable/chunks/index-8c4849df.js", "_app/immutable/chunks/_page-006eb137.js", "_app/immutable/chunks/SubFooter-490270c1.js", "_app/immutable/chunks/SubHeader-cccd547f.js", "_app/immutable/modules/pages/portfolio/_page.js-bfdc5dc5.js"];
    stylesheets6 = ["_app/immutable/assets/_page-7b6ef292.css", "_app/immutable/assets/SubFooter-82a995cf.css", "_app/immutable/assets/SubHeader-fb13526b.css"];
  }
});

// .svelte-kit/output/server/entries/pages/testimonials/_page.js
var page_exports5 = {};
var init_page5 = __esm({
  ".svelte-kit/output/server/entries/pages/testimonials/_page.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/testimonials/_page.svelte.js
var page_svelte_exports5 = {};
__export(page_svelte_exports5, {
  default: () => Page5
});
var pageTitle4, Page5;
var init_page_svelte5 = __esm({
  ".svelte-kit/output/server/entries/pages/testimonials/_page.svelte.js"() {
    init_chunks();
    init_page();
    init_SubFooter();
    init_SubHeader();
    pageTitle4 = "Testimonials";
    Page5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>${escape(businessInfo.companyName)} | ${escape(pageTitle4)} | ${escape(businessInfo.cityAndState)}</title>`, ""}`, ""}

${validate_component(SubHeader, "SubHeader").$$render($$result, { pageTitle: pageTitle4 }, {}, {})}
<main id="${"services"}"><div class="${"container"}">${each(reviews, ({ review, testifier }, i) => {
        return `<div class="${"item"}"><div class="${"stars"}">${each({ length: 5 }, (_) => {
          return `<svg width="${"30"}" height="${"30"}" viewBox="${"0 0 30 30"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" aria-hidden="${"true"}" role="${"img"}"><path d="${"M30 11.5908L19.0993 10.8741L14.994 0.560669L10.8888 10.8741L0 11.5908L8.3516 18.6821L5.61105 29.4393L14.994 23.5084L24.3771 29.4393L21.6365 18.6821L30 11.5908Z"}" fill="${"currentcolor"}"></path></svg>`;
        })}</div>
				<p>${escape(review)}</p>
				<div class="${"info"}"><img src="${"/reviews/user.svg"}" alt="${"testifier"}" width="${"40"}" height="${"40"}">
					<div><h4>${escape(testifier)}</h4>
						<p>Homeowner</p>
					</div></div>
			</div>`;
      })}</div></main>
${validate_component(SubFooter, "SubFooter").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component7,
  file: () => file7,
  imports: () => imports7,
  index: () => index7,
  shared: () => page_exports5,
  stylesheets: () => stylesheets7
});
var index7, component7, file7, imports7, stylesheets7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    init_page5();
    index7 = 6;
    component7 = async () => (await Promise.resolve().then(() => (init_page_svelte5(), page_svelte_exports5))).default;
    file7 = "_app/immutable/components/pages/testimonials/_page.svelte-fabe4ad9.js";
    imports7 = ["_app/immutable/components/pages/testimonials/_page.svelte-fabe4ad9.js", "_app/immutable/chunks/index-8c4849df.js", "_app/immutable/chunks/_page-006eb137.js", "_app/immutable/chunks/SubFooter-490270c1.js", "_app/immutable/chunks/SubHeader-cccd547f.js", "_app/immutable/modules/pages/testimonials/_page.js-6ba93edd.js"];
    stylesheets7 = ["_app/immutable/assets/_page-a6567f91.css", "_app/immutable/assets/SubFooter-82a995cf.css", "_app/immutable/assets/SubHeader-fb13526b.css"];
  }
});

// .svelte-kit/output/server/entries/endpoints/sitemap.xml/_server.js
var server_exports = {};
__export(server_exports, {
  GET: () => GET
});
async function GET() {
  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <!-- <url> elements go here https://www.xml-sitemaps.com/ -->
    </urlset>`.trim(),
    {
      headers: {
        "Content-Type": "application/xml"
      }
    }
  );
}
var init_server = __esm({
  ".svelte-kit/output/server/entries/endpoints/sitemap.xml/_server.js"() {
  }
});

// .svelte-kit/output/server/index.js
init_chunks();

// node_modules/devalue/devalue.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var DevalueError = class extends Error {
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!is_primitive(thing)) {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== object_proto_names) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map(
          (v, i) => i in thing ? stringify(v) : ""
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function is_primitive(thing) {
  return Object(thing) !== thing;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_string(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

// .svelte-kit/output/server/index.js
var cookie2 = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { errors } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, errors }, {}, {
    default: () => {
      return `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, errors }, {}, {})}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, errors }, {}, {})}`}

${``}`;
});
var HttpError = class {
  constructor(status, message) {
    __publicField(this, "name", "HttpError");
    __publicField(this, "stack");
    this.status = status;
    this.message = message ?? `Error: ${status}`;
  }
  toString() {
    return this.message;
  }
};
var Redirect = class {
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
var DATA_SUFFIX = "/__data.js";
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function serialize_error(error2, get_stack) {
  return JSON.stringify(error_to_pojo(error2, get_stack));
}
function error_to_pojo(error2, get_stack) {
  if (error2 instanceof HttpError) {
    return {
      message: error2.message,
      status: error2.status,
      __is_http_error: true
    };
  }
  const {
    name,
    message,
    stack,
    cause,
    ...custom
  } = error2;
  const object = { name, message, stack: get_stack(error2) };
  if (cause)
    object.cause = error_to_pojo(cause, get_stack);
  for (const key2 in custom) {
    object[key2] = custom[key2];
  }
  return object;
}
function check_method_names(mod) {
  ["get", "post", "put", "patch", "del"].forEach((m) => {
    if (m in mod) {
      const replacement = m === "del" ? "DELETE" : m.toUpperCase();
      throw Error(
        `Endpoint method "${m}" has changed to "${replacement}". See https://github.com/sveltejs/kit/discussions/5359 for more information.`
      );
    }
  });
}
var GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return new Response(`${method} method not allowed`, {
    status: 405,
    headers: {
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function data_response(data) {
  try {
    return new Response(`window.__sveltekit_data = ${devalue(data)}`, {
      headers: {
        "content-type": "application/javascript"
      }
    });
  } catch (e) {
    const error2 = e;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error2.path);
    const message = match ? `${error2.message} (data.${match[2]})` : error2.message;
    return new Response(`throw new Error(${JSON.stringify(message)})`, {
      headers: {
        "content-type": "application/javascript"
      }
    });
  }
}
function get_option(nodes, option) {
  return nodes.reduce((value, node) => {
    var _a, _b;
    for (const thing of [node == null ? void 0 : node.server, node == null ? void 0 : node.shared]) {
      if (thing && ("router" in thing || "hydrate" in thing)) {
        throw new Error(
          "`export const hydrate` and `export const router` have been replaced with `export const csr`. See https://github.com/sveltejs/kit/pull/6446"
        );
      }
    }
    return ((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a[option]) ?? ((_b = node == null ? void 0 : node.server) == null ? void 0 : _b[option]) ?? value;
  }, void 0);
}
function static_error_page(options, status, message) {
  return new Response(options.error_template({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
function handle_fatal_error(event, options, error2) {
  let status = 500;
  if (error2 instanceof HttpError) {
    status = error2.status;
  } else {
    options.handle_error(error2, event);
  }
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.url.pathname.endsWith(DATA_SUFFIX) || type === "application/json") {
    return new Response(serialize_error(error2, options.get_stack), {
      status,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  return static_error_page(options, status, error2.message);
}
async function render_endpoint(event, mod, state) {
  const method = event.request.method;
  check_method_names(mod);
  let handler2 = mod[method];
  if (!handler2 && method === "HEAD") {
    handler2 = mod.GET;
  }
  if (!handler2) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    throw new Error(`${event.routeId} is not prerenderable`);
  }
  try {
    const response = await handler2(
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-routeid", event.routeId);
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (error2) {
    if (error2 instanceof Redirect) {
      return new Response(void 0, {
        status: error2.status,
        headers: { location: error2.location }
      });
    }
    throw error2;
  }
}
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, prerendering = false) {
  const safe_payload = JSON.stringify(fetched.response).replace(
    pattern,
    (match) => replacements[match]
  );
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.body) {
    attrs.push(`data-hash=${escape_html_attr(hash(fetched.body))}`);
  }
  if (!prerendering && fetched.method === "GET") {
    const cache_control = fetched.response.headers["cache-control"];
    if (cache_control) {
      const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
      if (match) {
        const age = fetched.response.headers["age"] ?? "0";
        const ttl = +match[1] - +age;
        attrs.push(`data-ttl="${ttl}"`);
      }
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  constructor(use_hashes, directives, nonce, dev) {
    __privateAdd(this, _use_hashes, void 0);
    __privateAdd(this, _script_needs_csp, void 0);
    __privateAdd(this, _style_needs_csp, void 0);
    __privateAdd(this, _directives, void 0);
    __privateAdd(this, _script_src, void 0);
    __privateAdd(this, _style_src, void 0);
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, dev ? { ...directives } : directives);
    const d = __privateGet(this, _directives);
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev) {
    var _a, _b;
    super(use_hashes, directives, nonce, dev);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = ((_a = directives["report-to"]) == null ? void 0 : _a.length) ?? 0 > 0;
      const has_report_uri = ((_b = directives["report-uri"]) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  constructor({ mode, directives, reportOnly }, { prerender, dev }) {
    __publicField(this, "nonce", generate_nonce());
    __publicField(this, "csp_provider");
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  cookies,
  options,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  validation_errors
}) {
  var _a;
  if (state.prerendering) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options.manifest._;
  const stylesheets8 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const stack = error2 instanceof HttpError ? void 0 : error2 == null ? void 0 : error2.stack;
  if (error2 && options.dev && !(error2 instanceof HttpError)) {
    error2.stack = options.get_stack(error2);
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      components: await Promise.all(branch.map(({ node }) => node.component()))
    };
    let data = {};
    for (let i = 0; i < branch.length; i += 1) {
      data = { ...data, ...branch[i].data };
      props[`data_${i}`] = data;
    }
    props.page = {
      error: error2,
      params: event.params,
      routeId: event.routeId,
      status,
      url: event.url,
      data
    };
    if (validation_errors) {
      props.errors = validation_errors;
    }
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    rendered = options.root.render(props);
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets8.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let { head, html: body } = rendered;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body);
  let assets2;
  if (options.paths.assets) {
    assets2 = options.paths.assets;
  } else if ((_a = state.prerendering) == null ? void 0 : _a.fallback) {
    assets2 = options.paths.base;
  } else {
    const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
    assets2 = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => path.startsWith("/") ? path : `${assets2}/${path}`;
  const serialized = { data: "", errors: "null" };
  try {
    serialized.data = devalue(branch.map(({ server_data }) => server_data));
  } catch (e) {
    const error3 = e;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error3.path);
    if (match)
      throw new Error(`${error3.message} (data.${match[2]})`);
    throw error3;
  }
  if (validation_errors) {
    try {
      serialized.errors = devalue(validation_errors);
    } catch (e) {
      const error3 = e;
      if (error3.path)
        throw new Error(`${error3.message} (errors.${error3.path})`);
      throw error3;
    }
  }
  const init_app = `
		import { start } from ${s(prefixed(entry.file))};

		start({
			env: ${s(options.public_env)},
			hydrate: ${page_config.ssr ? `{
				status: ${status},
				error: ${error2 && serialize_error(error2, (e) => e.stack)},
				node_ids: [${branch.map(({ node }) => node.index).join(", ")}],
				params: ${devalue(event.params)},
				routeId: ${s(event.routeId)},
				data: ${serialized.data},
				errors: ${serialized.errors}
			}` : "null"},
			paths: ${s(options.paths)},
			target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
			trailing_slash: ${s(options.trailing_slash)}
		});
	`;
  const init_service_worker = `
		if ('serviceWorker' in navigator) {
			addEventListener('load', function () {
				navigator.serviceWorker.register('${options.service_worker}');
			});
		}
	`;
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets8) {
    const path = prefixed(dep);
    const attributes = [];
    if (csp.style_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
      link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
    }
    attributes.unshift('rel="stylesheet"');
    head += `
	<link href="${path}" ${attributes.join(" ")}>`;
  }
  if (page_config.csr) {
    for (const dep of modulepreloads) {
      const path = prefixed(dep);
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (state.prerendering) {
        head += `
	<link rel="modulepreload" href="${path}">`;
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
  }
  if (page_config.ssr && page_config.csr) {
    body += `
	${fetched.map((item) => serialize_data(item, !!state.prerendering)).join("\n	")}`;
  }
  if (options.service_worker) {
    csp.add_script(init_service_worker);
    head += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  const html = await resolve_opts.transformPageChunk({
    html: options.app_template({ head, body, assets: assets2, nonce: csp.nonce }),
    done: true
  }) || "";
  const headers = new Headers({
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    for (const new_cookie of cookies) {
      const { name, value, ...options2 } = new_cookie;
      headers.append("set-cookie", cookie2.serialize(name, value, options2));
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  if (error2 && options.dev && !(error2 instanceof HttpError)) {
    error2.stack = stack;
  }
  return new Response(html, {
    status,
    headers
  });
}
var absolute = /^([a-z]+:)?\/?\//;
var scheme = /^[a-z]+:/;
function resolve(base2, path) {
  if (scheme.test(path))
    return path;
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix2 = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix2}${baseparts.join("/")}`;
}
function is_root_relative(path) {
  return path[0] === "/" && path[1] !== "/";
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
    return inspect(url, opts);
  };
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
async function load_server_data({ event, state, node, parent }) {
  var _a;
  if (!(node == null ? void 0 : node.server))
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await ((_a = node.server.load) == null ? void 0 : _a.call(null, {
    ...event,
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[key2];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    url
  }));
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses: {
      dependencies: uses.dependencies.size > 0 ? Array.from(uses.dependencies) : void 0,
      params: uses.params.size > 0 ? Array.from(uses.params) : void 0,
      parent: uses.parent ? 1 : void 0,
      url: uses.url ? 1 : void 0
    }
  };
}
async function load_data({ event, fetcher, node, parent, server_data_promise }) {
  var _a;
  const server_data_node = await server_data_promise;
  if (!((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a.load)) {
    return (server_data_node == null ? void 0 : server_data_node.data) ?? null;
  }
  const load_event = {
    url: event.url,
    params: event.params,
    data: (server_data_node == null ? void 0 : server_data_node.data) ?? null,
    routeId: event.routeId,
    fetch: fetcher,
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  };
  Object.defineProperties(load_event, {
    session: {
      get() {
        throw new Error(
          "session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
        );
      },
      enumerable: false
    }
  });
  const data = await node.shared.load.call(null, load_event);
  return data ? unwrap_promises(data) : null;
}
async function unwrap_promises(object) {
  const unwrapped = {};
  for (const key2 in object) {
    unwrapped[key2] = await object[key2];
  }
  return unwrapped;
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return error2;
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function create_fetch({ event, options, state, route, prerender_default }) {
  const fetched = [];
  const initial_cookies = cookie2.parse(event.request.headers.get("cookie") || "");
  const cookies = [];
  const fetcher = async (resource, opts = {}) => {
    let requested;
    if (typeof resource === "string" || resource instanceof URL) {
      requested = resource.toString();
    } else {
      requested = resource.url;
      opts = {
        method: resource.method,
        headers: resource.headers,
        body: resource.body,
        mode: resource.mode,
        credentials: resource.credentials,
        cache: resource.cache,
        redirect: resource.redirect,
        referrer: resource.referrer,
        integrity: resource.integrity,
        ...opts
      };
    }
    opts.headers = new Headers(opts.headers);
    for (const [key2, value] of event.request.headers) {
      if (key2 !== "authorization" && key2 !== "connection" && key2 !== "content-length" && key2 !== "cookie" && key2 !== "host" && key2 !== "if-none-match" && !opts.headers.has(key2)) {
        opts.headers.set(key2, value);
      }
    }
    const resolved = resolve(event.url.pathname, requested.split("?")[0]);
    let response;
    let dependency;
    const prefix2 = options.paths.assets || options.paths.base;
    const filename = decodeURIComponent(
      resolved.startsWith(prefix2) ? resolved.slice(prefix2.length) : resolved
    ).slice(1);
    const filename_html = `${filename}/index.html`;
    const is_asset = options.manifest.assets.has(filename);
    const is_asset_html = options.manifest.assets.has(filename_html);
    if (is_asset || is_asset_html) {
      const file8 = is_asset ? filename : filename_html;
      if (options.read) {
        const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
        response = new Response(options.read(file8), {
          headers: type ? { "content-type": type } : {}
        });
      } else {
        response = await fetch(`${event.url.origin}/${file8}`, opts);
      }
    } else if (is_root_relative(resolved)) {
      if (opts.credentials !== "omit") {
        const authorization = event.request.headers.get("authorization");
        const combined_cookies = { ...initial_cookies };
        for (const cookie3 of cookies) {
          if (!domain_matches(event.url.hostname, cookie3.domain))
            continue;
          if (!path_matches(resolved, cookie3.path))
            continue;
          combined_cookies[cookie3.name] = cookie3.value;
        }
        const cookie22 = Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
        if (cookie22) {
          opts.headers.set("cookie", cookie22);
        }
        if (authorization && !opts.headers.has("authorization")) {
          opts.headers.set("authorization", authorization);
        }
      }
      if (opts.body && typeof opts.body !== "string") {
        throw new Error("Request body must be a string");
      }
      response = await respond(
        new Request(new URL(requested, event.url).href, { ...opts }),
        options,
        {
          prerender_default,
          ...state,
          initiator: route
        }
      );
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(resolved, dependency);
      }
    } else {
      if (resolved.startsWith("//")) {
        requested = event.url.protocol + requested;
      }
      if (`.${new URL(requested).hostname}`.endsWith(`.${event.url.hostname}`) && opts.credentials !== "omit") {
        const cookie22 = event.request.headers.get("cookie");
        if (cookie22)
          opts.headers.set("cookie", cookie22);
      }
      opts.headers.delete("connection");
      const external_request = new Request(requested, opts);
      response = await options.hooks.externalFetch.call(null, external_request);
    }
    const set_cookie = response.headers.get("set-cookie");
    if (set_cookie) {
      cookies.push(
        ...set_cookie_parser.splitCookiesString(set_cookie).map((str) => set_cookie_parser.parseString(str))
      );
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text() {
          const body = await response2.text();
          const headers = {};
          for (const [key3, value] of response2.headers) {
            if (key3 !== "set-cookie" && key3 !== "etag") {
              headers[key3] = value;
            }
          }
          if (!opts.body || typeof opts.body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: requested,
              method: opts.method || "GET",
              body: opts.body,
              response: {
                status: status_number,
                statusText: response2.statusText,
                headers,
                body
              }
            });
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    return proxy;
  };
  return { fetcher, fetched, cookies };
}
async function respond_with_error({ event, options, state, status, error: error2, resolve_opts }) {
  const { fetcher, fetched, cookies } = create_fetch({
    event,
    options,
    state,
    route: GENERIC_ERROR
  });
  try {
    const branch = [];
    const default_layout = await options.manifest._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    if (ssr) {
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetcher,
        node: default_layout,
        parent: async () => ({}),
        server_data_promise,
        state
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await options.manifest._.nodes[1](),
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: error2,
      branch,
      fetched,
      cookies,
      event,
      resolve_opts,
      validation_errors: void 0
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return static_error_page(options, 500, error3.message);
  }
}
function error(status, message) {
  return new HttpError(status, message);
}
function json(data, init2) {
  const headers = new Headers(init2 == null ? void 0 : init2.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init2,
    headers
  });
}
function compact(arr) {
  return arr.filter((val) => val != null);
}
async function render_page(event, route, page2, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  const accept = negotiate(event.request.headers.get("accept") || "text/html", [
    "text/html",
    "application/json"
  ]);
  if (accept === "application/json" && event.request.method !== "GET" && event.request.method !== "HEAD") {
    const node = await options.manifest._.nodes[page2.leaf]();
    if (node.server) {
      return handle_json_request(event, options, node.server);
    }
  }
  try {
    const nodes = await Promise.all([
      ...page2.layouts.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()),
      options.manifest._.nodes[page2.leaf]()
    ]);
    const leaf_node = nodes.at(-1);
    let status = 200;
    let mutation_error;
    let validation_errors;
    if (leaf_node.server && event.request.method !== "GET" && event.request.method !== "HEAD") {
      try {
        const method = event.request.method;
        const handler2 = leaf_node.server[method];
        if (handler2) {
          const result = await handler2.call(null, event);
          if (result == null ? void 0 : result.errors) {
            validation_errors = result.errors;
            status = result.status ?? 400;
          }
          if (event.request.method === "POST" && (result == null ? void 0 : result.location)) {
            return redirect_response(303, result.location);
          }
        } else {
          event.setHeaders({
            allow: allowed_methods(leaf_node.server).join(", ")
          });
          mutation_error = error(405, "Method not allowed");
        }
      } catch (e) {
        if (e instanceof Redirect) {
          return redirect_response(e.status, e.location);
        }
        mutation_error = e;
      }
    }
    const should_prerender_data = nodes.some((node) => node == null ? void 0 : node.server);
    const data_pathname = event.url.pathname.replace(/\/$/, "") + DATA_SUFFIX;
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod && (mod.POST || mod.PUT || mod.DELETE || mod.PATCH)) {
        throw new Error("Cannot prerender pages that have mutative methods");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    const { fetcher, fetched, cookies } = create_fetch({
      event,
      options,
      state,
      route,
      prerender_default: should_prerender
    });
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        validation_errors: void 0,
        fetched,
        cookies,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && mutation_error) {
            throw mutation_error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetcher,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            server_data_promise: server_promises[i],
            state
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const error2 = normalize_error(e);
          if (error2 instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = `window.__sveltekit_data = ${JSON.stringify({
                type: "redirect",
                location: error2.location
              })}`;
              state.prerendering.dependencies.set(data_pathname, {
                response: new Response(body),
                body
              });
            }
            return redirect_response(error2.status, error2.location);
          }
          if (!(error2 instanceof HttpError)) {
            options.handle_error(error2, event);
          }
          const status2 = error2 instanceof HttpError ? error2.status : 500;
          while (i--) {
            if (page2.errors[i]) {
              const index8 = page2.errors[i];
              const node2 = await options.manifest._.nodes[index8]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched,
                cookies,
                validation_errors: void 0
              });
            }
          }
          return static_error_page(
            options,
            status2,
            error2.message
          );
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      const body = `window.__sveltekit_data = ${devalue({
        type: "data",
        nodes: branch.map((branch_node) => branch_node == null ? void 0 : branch_node.server_data)
      })}`;
      state.prerendering.dependencies.set(data_pathname, {
        response: new Response(body),
        body
      });
    }
    return await render_response({
      event,
      options,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      validation_errors,
      fetched,
      cookies
    });
  } catch (error2) {
    options.handle_error(error2, event);
    return await respond_with_error({
      event,
      options,
      state,
      status: 500,
      error: error2,
      resolve_opts
    });
  }
}
async function handle_json_request(event, options, mod) {
  const method = event.request.method;
  const handler2 = mod[method];
  if (!handler2) {
    return method_not_allowed(mod, method);
  }
  try {
    const result = await handler2.call(null, event);
    if (result == null ? void 0 : result.errors) {
      return json({ errors: result.errors }, { status: result.status || 400 });
    }
    return new Response(void 0, {
      status: 204,
      headers: (result == null ? void 0 : result.location) ? { location: result.location } : void 0
    });
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return redirect_response(error2.status, error2.location);
    }
    if (!(error2 instanceof HttpError)) {
      options.handle_error(error2, event);
    }
    return json(error_to_pojo(error2, options.get_stack), {
      status: error2 instanceof HttpError ? error2.status : 500
    });
  }
}
function redirect_response(status, location) {
  return new Response(void 0, {
    status,
    headers: { location }
  });
}
function exec(match, names, types, matchers) {
  const params = {};
  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    const type = types[i];
    const value = match[i + 1] || "";
    if (type) {
      const matcher = matchers[type];
      if (!matcher)
        throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value))
        return;
    }
    params[name] = value;
  }
  return params;
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
async function render_data(event, route, options, state) {
  var _a;
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = ((_a = event.url.searchParams.get("__invalid")) == null ? void 0 : _a.split("").map((x) => x === "y")) ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(
      url.pathname.slice(0, -DATA_SUFFIX.length),
      options.trailing_slash
    );
    url.searchParams.delete("__invalid");
    url.searchParams.delete("__id");
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return {
              type: "skip"
            };
          }
          const node = n == void 0 ? n : await options.manifest._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await functions[j]();
                if (parent) {
                  Object.assign(data, parent.data);
                }
              }
              return data;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return {
          type: "skip"
        };
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch((e) => {
          const error2 = normalize_error(e);
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          if (error2 instanceof HttpError) {
            return {
              type: "error",
              httperror: { ...error2 }
            };
          }
          options.handle_error(error2, event);
          return {
            type: "error",
            error: error_to_pojo(error2, options.get_stack)
          };
        })
      )
    );
    const server_data = {
      type: "data",
      nodes: nodes.slice(0, length)
    };
    return data_response(server_data);
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      const server_data = {
        type: "redirect",
        location: error2.location
      };
      return data_response(server_data);
    } else {
      return data_response(error_to_pojo(error2, options.get_stack));
    }
  }
}
var default_transform = ({ html }) => html;
async function respond(request, options, state) {
  var _a, _b, _c, _d, _e;
  let url = new URL(request.url);
  if (options.csrf.check_origin) {
    const type = (_a = request.headers.get("content-type")) == null ? void 0 : _a.split(";")[0];
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url.origin && (type === "application/x-www-form-urlencoded" || type === "multipart/form-data");
    if (forbidden) {
      return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
        status: 403
      });
    }
  }
  const { parameter, allowed } = options.method_override;
  const method_override = (_b = url.searchParams.get(parameter)) == null ? void 0 : _b.toUpperCase();
  if (method_override) {
    if (request.method === "POST") {
      if (allowed.includes(method_override)) {
        request = new Proxy(request, {
          get: (target, property, _receiver) => {
            if (property === "method")
              return method_override;
            return Reflect.get(target, property, target);
          }
        });
      } else {
        const verb = allowed.length === 0 ? "enabled" : "allowed";
        const body = `${parameter}=${method_override} is not ${verb}. See https://kit.svelte.dev/docs/configuration#methodoverride`;
        return new Response(body, {
          status: 400
        });
      }
    } else {
      throw new Error(`${parameter}=${method_override} is only allowed with POST requests`);
    }
  }
  let decoded;
  try {
    decoded = decodeURI(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request)
    decoded = decoded.slice(0, -DATA_SUFFIX.length) || "/";
  if (!((_d = state.prerendering) == null ? void 0 : _d.fallback)) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  if ((route == null ? void 0 : route.page) && !is_data_request) {
    const normalized = normalize_path(url.pathname, options.trailing_slash);
    if (normalized !== url.pathname && !((_e = state.prerendering) == null ? void 0 : _e.fallback)) {
      return new Response(void 0, {
        status: 301,
        headers: {
          "x-sveltekit-normalize": "1",
          location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
        }
      });
    }
  }
  const headers = {};
  const cookies = [];
  if (state.prerendering)
    disable_search(url);
  const event = {
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-netlify"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    routeId: route && route.id,
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          const new_cookies = Array.isArray(value) ? value : [value];
          for (const cookie22 of new_cookies) {
            if (cookies.includes(cookie22)) {
              throw new Error(`"${key2}" header already has cookie with same value`);
            }
            cookies.push(cookie22);
          }
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = value;
          }
        }
      }
    },
    url
  };
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error(
        "To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details
      );
    }
  };
  Object.defineProperties(event, {
    clientAddress: removed("clientAddress", "getClientAddress"),
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let resolve_opts = {
    transformPageChunk: default_transform
  };
  async function resolve2(event2, opts) {
    var _a2;
    try {
      if (opts) {
        if ("transformPage" in opts) {
          throw new Error(
            "transformPage has been replaced by transformPageChunk \u2014 see https://github.com/sveltejs/kit/pull/5657 for more information"
          );
        }
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform
        };
      }
      if ((_a2 = state.prerendering) == null ? void 0 : _a2.fallback) {
        return await render_response({
          event: event2,
          options,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          validation_errors: void 0,
          cookies: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(event2, route, options, state);
        } else if (route.page) {
          response = await render_page(event2, route, route.page, options, state, resolve_opts);
        } else if (route.endpoint) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else {
          throw new Error("This should never happen");
        }
        if (!is_data_request) {
          for (const key2 in headers) {
            const value = headers[key2];
            response.headers.set(key2, value);
          }
        }
        for (const cookie22 of cookies) {
          response.headers.append("set-cookie", cookie22);
        }
        if (response.status === 200 && response.headers.has("etag")) {
          let if_none_match_value = request.headers.get("if-none-match");
          if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
            if_none_match_value = if_none_match_value.substring(2);
          }
          const etag = response.headers.get("etag");
          if (if_none_match_value === etag) {
            const headers2 = new Headers({ etag });
            for (const key2 of ["cache-control", "content-location", "date", "expires", "vary"]) {
              const value = response.headers.get(key2);
              if (value)
                headers2.set(key2, value);
            }
            return new Response(void 0, {
              status: 304,
              headers: headers2
            });
          }
        }
        return response;
      }
      if (state.initiator === GENERIC_ERROR) {
        return new Response("Internal Server Error", {
          status: 500
        });
      }
      if (!state.initiator) {
        return await respond_with_error({
          event: event2,
          options,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return new Response("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      const error2 = coalesce_to_error(e);
      return handle_fatal_error(event2, options, error2);
    }
  }
  try {
    return await options.hooks.handle({
      event,
      resolve: resolve2,
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
  } catch (e) {
    const error2 = coalesce_to_error(e);
    return handle_fatal_error(event, options, error2);
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var app_template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n	<meta charset="utf-8" />\n	<link rel="icon" href="' + assets2 + '/favicon.png" />\n	<meta name="viewport" content="width=device-width" />\n\n	<!-- Business -->\n	<link rel="canonical" href="https://www.company.com">\n	<meta name="description" content="">\n	<meta name="keywords" content="">\n\n	<!--Social Media Display-->\n	<meta property="og:title" content="" />\n	<meta property="og:description" content="Rivas Web Designs Starter" />\n	<meta property="og:type" content="website" />\n	<meta property="og:url" content="" />\n	<meta property="og:image" content="/images/social.jpg" />\n	<meta property="og:image:secure_url" content="/images/social.jpg" />\n\n	<!--Favicons-->\n	<!-- https://realfavicongenerator.net/ -->\n	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n	<link rel="manifest" href="/site.webmanifest">\n	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">\n	<meta name="msapplication-TileColor" content="#da532c">\n	<meta name="theme-color" content="#ffffff">\n	<!-- Fonts -->\n	<link rel="preconnect" href="https://fonts.googleapis.com">\n	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n	<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"\n		rel="stylesheet">\n\n	' + head + "\n</head>\n\n<body>\n	" + body + "\n</body>\n\n</html>";
var error_template = ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      csrf: {
        check_origin: true
      },
      dev: false,
      get_stack: (error2) => String(error2),
      handle_error: (error2, event) => {
        this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        });
        error2.stack = this.options.get_stack(error2);
      },
      hooks: null,
      manifest: manifest2,
      method_override: { "parameter": "_method", "allowed": ["PATCH", "DELETE"] },
      paths: { base, assets },
      public_env: {},
      read,
      root: Root,
      service_worker: null,
      app_template,
      app_template_contains_nonce: false,
      error_template,
      trailing_slash: "never"
    };
  }
  async init({ env }) {
    const entries = Object.entries(env);
    Object.fromEntries(entries.filter(([k]) => !k.startsWith("PUBLIC_")));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith("PUBLIC_")));
    this.options.public_env = pub;
    if (!this.options.hooks) {
      const module = await Promise.resolve().then(() => (init_hooks(), hooks_exports));
      this.options.hooks = {
        handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
        handleError: module.handleError || (({ error: error2 }) => console.error(error2.stack)),
        externalFetch: module.externalFetch || fetch
      };
    }
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/netlify-tmp/manifest.js
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set([".DS_Store", "about/grass.svg", "about/owner.jpg", "about/owner.webp", "android-chrome-192x192.png", "apple-touch-icon.png", "browserconfig.xml", "check.svg", "contact/emailg.svg", "contact/locationg.svg", "contact/phone-callg.svg", "down-chevron.svg", "favicon-16x16.png", "favicon-32x32.png", "favicon.ico", "favicon.png", "home/.DS_Store", "home/01.svg", "home/02.svg", "home/03.svg", "home/about.webp", "home/brick-wall.svg", "home/grass.png", "home/grasspseudo.png", "home/img02.jpeg", "home/img02.webp", "home/img02m.webp", "home/img06.webp", "home/img10.jpg", "home/leaf.png", "home/planning.svg", "home/plant-pot.svg", "home/plant.svg", "home/quality.svg", "home/servicemain.jpg", "home/tree-small.png", "home/tree.png", "img08l.webp", "img08m.webp", "mstile-150x150.png", "portfolio/img01.webp", "portfolio/img02.webp", "portfolio/img03.webp", "portfolio/img05M.webp", "portfolio/img07.webp", "portfolio/img11.webp", "reviews/star.svg", "reviews/user.svg", "robots.txt", "safari-pinned-tab.svg", "site.webmanifest", "social/facebook.svg", "social/google.svg", "social/instagram.svg", "social/tiktok.svg", "social/twitter.svg", "social/youtube.svg", "subfooter/subfooter.webp", "twig.png", "up-chevron.svg"]),
  mimeTypes: { ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".webp": "image/webp", ".png": "image/png", ".xml": "application/xml", ".ico": "image/vnd.microsoft.icon", ".jpeg": "image/jpeg", ".txt": "text/plain", ".webmanifest": "application/manifest+json" },
  _: {
    entry: { "file": "_app/immutable/start-8c072510.js", "imports": ["_app/immutable/start-8c072510.js", "_app/immutable/chunks/index-8c4849df.js", "_app/immutable/chunks/singletons-8ed36db9.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
      () => Promise.resolve().then(() => (init__6(), __exports6)),
      () => Promise.resolve().then(() => (init__7(), __exports7))
    ],
    routes: [
      {
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 2 },
        endpoint: null
      },
      {
        id: "sitemap.xml",
        pattern: /^\/sitemap\.xml$/,
        names: [],
        types: [],
        page: null,
        endpoint: () => Promise.resolve().then(() => (init_server(), server_exports))
      },
      {
        id: "about",
        pattern: /^\/about\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 3 },
        endpoint: null
      },
      {
        id: "contact",
        pattern: /^\/contact\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 4 },
        endpoint: null
      },
      {
        id: "portfolio",
        pattern: /^\/portfolio\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 5 },
        endpoint: null
      },
      {
        id: "testimonials",
        pattern: /^\/testimonials\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 6 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
var prerendered = /* @__PURE__ */ new Set([]);

// .svelte-kit/netlify-tmp/entry.js
var server = new Server(manifest);
var prefix = `/${manifest.appDir}/`;
var initialized = server.init({
  env: Deno.env.toObject()
});
async function handler(request, context) {
  if (is_static_file(request)) {
    return;
  }
  await initialized;
  return server.respond(request, {
    platform: { context },
    getClientAddress() {
      return context.ip;
    }
  });
}
function is_static_file(request) {
  const url = new URL(request.url);
  if (url.pathname.startsWith(prefix)) {
    return true;
  }
  const pathname = url.pathname.replace(/\/$/, "");
  let file8 = pathname.substring(1);
  try {
    file8 = decodeURIComponent(file8);
  } catch (err) {
  }
  return manifest.assets.has(file8) || manifest.assets.has(file8 + "/index.html") || prerendered.has(pathname || "/");
}
export {
  handler as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=render.js.map
