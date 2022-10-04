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
function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);
  for (const k in props)
    if (!keys.has(k) && k[0] !== "$")
      rest[k] = props[k];
  return rest;
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}
function set_current_component(component8) {
  current_component = component8;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
  const component8 = get_current_component();
  return (type, detail, { cancelable = false } = {}) => {
    const callbacks = component8.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail, { cancelable });
      callbacks.slice().forEach((fn) => {
        fn.call(component8, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
function flush() {
  const saved_component = current_component;
  do {
    while (flushidx < dirty_components.length) {
      const component8 = dirty_components[flushidx];
      flushidx++;
      set_current_component(component8);
      update(component8.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function spread(args, attrs_to_add) {
  const attributes = Object.assign({}, ...args);
  if (attrs_to_add) {
    const classes_to_add = attrs_to_add.classes;
    const styles_to_add = attrs_to_add.styles;
    if (classes_to_add) {
      if (attributes.class == null) {
        attributes.class = classes_to_add;
      } else {
        attributes.class += " " + classes_to_add;
      }
    }
    if (styles_to_add) {
      if (attributes.style == null) {
        attributes.style = style_object_to_string(styles_to_add);
      } else {
        attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
      }
    }
  }
  let str = "";
  Object.keys(attributes).forEach((name) => {
    if (invalid_attribute_name_character.test(name))
      return;
    const value = attributes[name];
    if (value === true)
      str += " " + name;
    else if (boolean_attributes.has(name.toLowerCase())) {
      if (value)
        str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${value}"`;
    }
  });
  return str;
}
function merge_ssr_styles(style_attribute, style_directive) {
  const style_object = {};
  for (const individual_style of style_attribute.split(";")) {
    const colon_index = individual_style.indexOf(":");
    const name = individual_style.slice(0, colon_index).trim();
    const value = individual_style.slice(colon_index + 1).trim();
    if (!name)
      continue;
    style_object[name] = value;
  }
  for (const name in style_directive) {
    const value = style_directive[name];
    if (value) {
      style_object[name] = value;
    } else {
      delete style_object[name];
    }
  }
  return style_object;
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
function escape_attribute_value(value) {
  const should_escape = typeof value === "string" || value && typeof value === "object";
  return should_escape ? escape(value, true) : value;
}
function escape_object(obj) {
  const result = {};
  for (const key2 in obj) {
    result[key2] = escape_attribute_value(obj[key2]);
  }
  return result;
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
    const html2 = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html2;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html2 = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html: html2,
        css: {
          code: Array.from(result.css).map((css3) => css3.code).join("\n"),
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
function style_object_to_string(style_object) {
  return Object.keys(style_object).filter((key2) => style_object[key2]).map((key2) => `${key2}: ${style_object[key2]};`).join(" ");
}
var current_component, dirty_components, binding_callbacks, render_callbacks, flush_callbacks, resolved_promise, update_scheduled, seen_callbacks, flushidx, boolean_attributes, invalid_attribute_name_character, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    dirty_components = [];
    binding_callbacks = [];
    render_callbacks = [];
    flush_callbacks = [];
    resolved_promise = Promise.resolve();
    update_scheduled = false;
    seen_callbacks = /* @__PURE__ */ new Set();
    flushidx = 0;
    boolean_attributes = /* @__PURE__ */ new Set([
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected"
    ]);
    invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
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
    exports.parse = parse4;
    exports.serialize = serialize2;
    var decode = decodeURIComponent;
    var encode2 = encodeURIComponent;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse4(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var pairs = str.split(";");
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var index9 = pair.indexOf("=");
        if (index9 < 0) {
          continue;
        }
        var key2 = pair.substring(0, index9).trim();
        if (void 0 == obj[key2]) {
          var val = pair.substring(index9 + 1, pair.length).trim();
          if (val[0] === '"') {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize2(name, val, options) {
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
      var cookie2 = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie2.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie2.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie2.secure = true;
        } else if (key2 === "httponly") {
          cookie2.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie2.sameSite = value2;
        } else {
          cookie2[key2] = value2;
        }
      });
      return cookie2;
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
    function parse4(input, options) {
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
          var cookie2 = parseString2(str, options);
          cookies2[cookie2.name] = cookie2;
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
    module.exports = parse4;
    module.exports.parse = parse4;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/hooks.server.js
var hooks_server_exports = {};
var init_hooks_server = __esm({
  ".svelte-kit/output/server/chunks/hooks.server.js"() {
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
        testifier: "John Smith",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim."
      },
      {
        testifier: "Sandra Harris",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim."
      },
      {
        testifier: "Henry Biden",
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

<header${add_attribute("class", "", 0)}><div class="${"top"}"><div class="${"container"}"><div class="${"box"}"><a href="${"/contact"}"><img class="${""}" src="${"/phone.svg"}" alt="${""}" width="${"20"}" height="${"20"}" decoding="${"async"}">
					+1 (918) 123 - 4567
				</a>
				<a href="${"/contact"}"><img class="${""}" src="${"/clock.svg"}" alt="${""}" width="${"20"}" height="${"20"}" decoding="${"async"}">
					Mon - Fri: 10am - 5pm
				</a>
				<a href="${"/contact"}"><img class="${""}" src="${"/email.svg"}" alt="${""}" width="${"20"}" height="${"20"}" decoding="${"async"}">
					info@business.com
				</a></div>
			<div class="${"box social"}"><a href="${"/contact"}"><img class="${""}" src="${"/social/facebook.svg"}" alt="${""}" width="${"20"}" height="${"20"}" decoding="${"async"}"></a>
				<a href="${"/contact"}"><img class="${""}" src="${"/social/instagram.svg"}" alt="${""}" width="${"20"}" height="${"20"}" decoding="${"async"}"></a></div></div></div>
	<nav><a href="${"/"}" class="${"logo"}"><svg width="${"352"}" height="${"71"}" viewBox="${"0 0 352 71"}" fill="${"currentcolor"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M0.899994 2.00002V37H26.85V29.65H9.49999V2.00002H0.899994ZM35.6219 36.4C36.9885 37.0667 38.5385 37.4 40.2719 37.4C41.6385 37.4 42.8885 37.2 44.0219 36.8C45.1552 36.3667 46.2885 35.6834 47.4219 34.75V37H55.4219V20.5C55.4219 17.4334 54.4219 15.05 52.4219 13.35C50.4552 11.65 47.6885 10.8 44.1219 10.8C40.3885 10.8 36.4385 11.7334 32.2719 13.6L35.0719 19.25C36.5719 18.6167 37.9052 18.1667 39.0719 17.9C40.2719 17.6 41.3552 17.45 42.3219 17.45C44.0552 17.45 45.3385 17.7667 46.1719 18.4C47.0052 19 47.4219 19.9334 47.4219 21.2V23.3C46.2885 22.8667 45.2385 22.5667 44.2719 22.4C43.3052 22.2 42.3552 22.1 41.4219 22.1C39.3219 22.1 37.5219 22.4 36.0219 23C34.5219 23.5667 33.3719 24.4167 32.5719 25.55C31.7719 26.65 31.3719 28 31.3719 29.6C31.3719 31.1334 31.7385 32.4834 32.4719 33.65C33.2385 34.8167 34.2885 35.7334 35.6219 36.4ZM39.8719 31.4C39.1719 30.9334 38.8219 30.2834 38.8219 29.45C38.8219 28.6167 39.1719 27.9834 39.8719 27.55C40.6052 27.1167 41.6385 26.9 42.9719 26.9C43.7385 26.9 44.4885 26.95 45.2219 27.05C45.9552 27.15 46.6885 27.2834 47.4219 27.45V30.75C46.7219 31.1834 45.9885 31.5167 45.2219 31.75C44.4552 31.95 43.6385 32.05 42.7719 32.05C41.5385 32.05 40.5719 31.8334 39.8719 31.4ZM61.5269 11.2V37H69.6269V19.3C70.1936 18.5667 70.8269 18.0334 71.5269 17.7C72.2603 17.3334 73.0603 17.15 73.9269 17.15C75.2269 17.15 76.2603 17.5834 77.0269 18.45C77.827 19.3167 78.2269 20.4834 78.2269 21.95V37H86.3269V19.6C86.3269 17.8667 85.9603 16.35 85.2269 15.05C84.4936 13.7167 83.4769 12.6834 82.1769 11.95C80.9103 11.1834 79.4436 10.8 77.7769 10.8C76.1103 10.8 74.577 11.2 73.1769 12C71.8103 12.7667 70.6269 13.9 69.6269 15.4V11.2H61.5269ZM96.9352 35.4C98.6685 36.5667 100.585 37.15 102.685 37.15C104.218 37.15 105.652 36.8334 106.985 36.2C108.352 35.5667 109.452 34.7167 110.285 33.65V37H118.285V0.150024L110.185 1.40003V14.15C109.318 13.15 108.285 12.3834 107.085 11.85C105.918 11.3167 104.652 11.05 103.285 11.05C101.052 11.05 99.0185 11.6334 97.1852 12.8C95.3851 13.9667 93.9518 15.5334 92.8851 17.5C91.8185 19.4334 91.2851 21.6167 91.2851 24.05C91.2851 26.45 91.7851 28.65 92.7851 30.65C93.8185 32.6167 95.2018 34.2 96.9352 35.4ZM108.035 29.95C107.235 30.2834 106.352 30.45 105.385 30.45C104.218 30.45 103.168 30.1834 102.235 29.65C101.302 29.0834 100.568 28.3167 100.035 27.35C99.5018 26.3834 99.2352 25.3 99.2352 24.1C99.2352 22.8667 99.5018 21.7667 100.035 20.8C100.568 19.8334 101.302 19.0834 102.235 18.55C103.168 17.9834 104.218 17.7 105.385 17.7C106.318 17.7 107.185 17.8667 107.985 18.2C108.818 18.5334 109.552 19.0334 110.185 19.7V28.4C109.552 29.0667 108.835 29.5834 108.035 29.95ZM127.764 36.7C129.797 37.2334 131.981 37.5 134.314 37.5C136.447 37.5 138.347 37.1167 140.014 36.35C141.681 35.5834 142.997 34.5334 143.964 33.2C144.931 31.8334 145.414 30.3167 145.414 28.65C145.414 26.6834 144.764 25.0667 143.464 23.8C142.164 22.5334 140.231 21.6667 137.664 21.2L132.814 20.3C131.814 20.1334 131.114 19.9167 130.714 19.65C130.347 19.3834 130.164 18.9834 130.164 18.45C130.164 17.8834 130.431 17.45 130.964 17.15C131.531 16.85 132.297 16.7 133.264 16.7C134.464 16.7 135.664 16.8834 136.864 17.25C138.097 17.5834 139.364 18.1334 140.664 18.9L144.364 13.75C142.697 12.7834 140.981 12.05 139.214 11.55C137.447 11.05 135.664 10.8 133.864 10.8C131.631 10.8 129.697 11.1334 128.064 11.8C126.464 12.4667 125.231 13.4334 124.364 14.7C123.497 15.9334 123.064 17.4334 123.064 19.2C123.064 21.2 123.697 22.8334 124.964 24.1C126.264 25.3667 128.164 26.2334 130.664 26.7L135.614 27.6C136.447 27.7334 137.047 27.95 137.414 28.25C137.814 28.55 138.014 28.95 138.014 29.45C138.014 30.0834 137.681 30.6 137.014 31C136.381 31.3667 135.481 31.55 134.314 31.55C133.081 31.55 131.847 31.3667 130.614 31C129.414 30.6 127.881 29.9167 126.014 28.95L122.464 34.35C123.964 35.3834 125.731 36.1667 127.764 36.7ZM155.745 35.75C157.779 36.9167 160.045 37.5 162.545 37.5C164.679 37.5 166.679 37.1 168.545 36.3C170.412 35.4667 171.995 34.2834 173.295 32.75L168.345 27.8C167.512 28.7667 166.662 29.4834 165.795 29.95C164.929 30.3834 163.945 30.6 162.845 30.6C161.779 30.6 160.812 30.3167 159.945 29.75C159.112 29.1834 158.445 28.4167 157.945 27.45C157.479 26.4834 157.245 25.3834 157.245 24.15C157.245 22.9167 157.479 21.8167 157.945 20.85C158.445 19.8834 159.112 19.1167 159.945 18.55C160.812 17.9834 161.779 17.7 162.845 17.7C163.945 17.7 164.929 17.9334 165.795 18.4C166.662 18.8334 167.512 19.5334 168.345 20.5L173.295 15.55C171.995 14.0167 170.412 12.85 168.545 12.05C166.679 11.2167 164.679 10.8 162.545 10.8C160.045 10.8 157.779 11.4 155.745 12.6C153.745 13.7667 152.145 15.35 150.945 17.35C149.779 19.35 149.195 21.6167 149.195 24.15C149.195 26.65 149.779 28.9167 150.945 30.95C152.145 32.95 153.745 34.55 155.745 35.75ZM180.348 36.4C181.715 37.0667 183.265 37.4 184.998 37.4C186.365 37.4 187.615 37.2 188.748 36.8C189.882 36.3667 191.015 35.6834 192.148 34.75V37H200.148V20.5C200.148 17.4334 199.148 15.05 197.148 13.35C195.182 11.65 192.415 10.8 188.848 10.8C185.115 10.8 181.165 11.7334 176.998 13.6L179.798 19.25C181.298 18.6167 182.632 18.1667 183.798 17.9C184.998 17.6 186.082 17.45 187.048 17.45C188.782 17.45 190.065 17.7667 190.898 18.4C191.732 19 192.148 19.9334 192.148 21.2V23.3C191.015 22.8667 189.965 22.5667 188.998 22.4C188.032 22.2 187.082 22.1 186.148 22.1C184.048 22.1 182.248 22.4 180.748 23C179.248 23.5667 178.098 24.4167 177.298 25.55C176.498 26.65 176.098 28 176.098 29.6C176.098 31.1334 176.465 32.4834 177.198 33.65C177.965 34.8167 179.015 35.7334 180.348 36.4ZM184.598 31.4C183.898 30.9334 183.548 30.2834 183.548 29.45C183.548 28.6167 183.898 27.9834 184.598 27.55C185.332 27.1167 186.365 26.9 187.698 26.9C188.465 26.9 189.215 26.95 189.948 27.05C190.682 27.15 191.415 27.2834 192.148 27.45V30.75C191.448 31.1834 190.715 31.5167 189.948 31.75C189.182 31.95 188.365 32.05 187.498 32.05C186.265 32.05 185.298 31.8334 184.598 31.4ZM206.254 11.2V47.45H214.354V34.15C215.22 35.1167 216.237 35.8667 217.404 36.4C218.604 36.9 219.904 37.15 221.304 37.15C223.537 37.15 225.554 36.5667 227.354 35.4C229.187 34.2334 230.637 32.6667 231.704 30.7C232.77 28.7334 233.304 26.55 233.304 24.15C233.304 21.7167 232.787 19.5167 231.754 17.55C230.754 15.5834 229.387 14.0167 227.654 12.85C225.954 11.65 224.037 11.05 221.904 11.05C220.37 11.05 218.92 11.3834 217.554 12.05C216.22 12.7167 215.12 13.6334 214.254 14.8V11.2H206.254ZM222.354 29.7C221.454 30.2334 220.404 30.5 219.204 30.5C218.27 30.5 217.387 30.3167 216.554 29.95C215.72 29.5834 214.987 29.0834 214.354 28.45V19.85C215.02 19.15 215.737 18.6334 216.504 18.3C217.304 17.9334 218.204 17.75 219.204 17.75C220.37 17.75 221.42 18.0334 222.354 18.6C223.287 19.1334 224.02 19.8834 224.554 20.85C225.087 21.7834 225.354 22.8667 225.354 24.1C225.354 25.3334 225.087 26.4334 224.554 27.4C224.02 28.3667 223.287 29.1334 222.354 29.7ZM243.981 35.75C246.048 36.9167 248.348 37.5 250.881 37.5C253.048 37.5 254.981 37.1834 256.681 36.55C258.381 35.8834 260.065 34.8167 261.731 33.35L256.381 28.9C255.815 29.6 255.081 30.1334 254.181 30.5C253.315 30.8667 252.348 31.05 251.281 31.05C250.315 31.05 249.415 30.85 248.581 30.45C247.748 30.05 247.048 29.4834 246.481 28.75C245.915 28.0167 245.498 27.1667 245.231 26.2H262.981V24.45C262.981 21.7834 262.431 19.4334 261.331 17.4C260.265 15.3334 258.781 13.7167 256.881 12.55C254.981 11.3834 252.781 10.8 250.281 10.8C247.815 10.8 245.598 11.4 243.631 12.6C241.665 13.7667 240.115 15.35 238.981 17.35C237.848 19.35 237.281 21.6167 237.281 24.15C237.281 26.65 237.881 28.9167 239.081 30.95C240.315 32.95 241.948 34.55 243.981 35.75ZM255.481 21.6H245.231C245.465 20.6334 245.798 19.8167 246.231 19.15C246.698 18.4834 247.265 17.9834 247.931 17.65C248.631 17.2834 249.398 17.1 250.231 17.1C251.098 17.1 251.881 17.2834 252.581 17.65C253.281 18.0167 253.881 18.5334 254.381 19.2C254.881 19.8667 255.248 20.6667 255.481 21.6ZM289.063 36.2C291.297 37.1 293.713 37.55 296.313 37.55C298.18 37.55 299.997 37.2834 301.763 36.75C303.563 36.1834 305.213 35.3834 306.713 34.35C308.247 33.3167 309.513 32.1167 310.513 30.75L304.713 25.25C303.58 26.7834 302.313 27.95 300.913 28.75C299.513 29.5167 297.98 29.9 296.313 29.9C294.947 29.9 293.68 29.65 292.513 29.15C291.38 28.6167 290.38 27.8834 289.513 26.95C288.647 25.9834 287.963 24.8834 287.463 23.65C286.997 22.3834 286.763 21 286.763 19.5C286.763 18 286.997 16.6334 287.463 15.4C287.963 14.1334 288.647 13.0334 289.513 12.1C290.38 11.1334 291.38 10.4 292.513 9.90002C293.68 9.36669 294.947 9.10003 296.313 9.10003C297.98 9.10003 299.513 9.48336 300.913 10.25C302.313 11.0167 303.58 12.1834 304.713 13.75L310.513 8.25002C309.513 6.85002 308.247 5.65002 306.713 4.65003C305.213 3.61669 303.563 2.83336 301.763 2.30003C299.997 1.73336 298.18 1.45003 296.313 1.45003C293.713 1.45003 291.297 1.91669 289.063 2.85003C286.83 3.75003 284.863 5.01669 283.163 6.65002C281.497 8.28336 280.197 10.2 279.263 12.4C278.33 14.5667 277.863 16.9334 277.863 19.5C277.863 22.0334 278.33 24.4 279.263 26.6C280.197 28.8 281.497 30.7167 283.163 32.35C284.863 33.9834 286.83 35.2667 289.063 36.2ZM319.467 35.75C321.501 36.9167 323.801 37.5 326.367 37.5C328.901 37.5 331.167 36.9167 333.167 35.75C335.201 34.5834 336.801 33 337.967 31C339.167 28.9667 339.767 26.6834 339.767 24.15C339.767 21.6167 339.167 19.35 337.967 17.35C336.801 15.3167 335.201 13.7167 333.167 12.55C331.167 11.3834 328.884 10.8 326.317 10.8C323.784 10.8 321.501 11.3834 319.467 12.55C317.434 13.7167 315.817 15.3167 314.617 17.35C313.451 19.35 312.867 21.6167 312.867 24.15C312.867 26.6834 313.451 28.9667 314.617 31C315.817 33 317.434 34.5834 319.467 35.75ZM329.217 29.9C328.384 30.4667 327.417 30.75 326.317 30.75C325.251 30.75 324.284 30.4667 323.417 29.9C322.584 29.3334 321.934 28.55 321.467 27.55C321.001 26.55 320.767 25.4167 320.767 24.15C320.767 22.85 321.001 21.7167 321.467 20.75C321.934 19.75 322.584 18.9667 323.417 18.4C324.284 17.8334 325.251 17.55 326.317 17.55C327.417 17.55 328.384 17.8334 329.217 18.4C330.051 18.9667 330.701 19.75 331.167 20.75C331.634 21.7167 331.867 22.85 331.867 24.15C331.867 25.4167 331.634 26.55 331.167 27.55C330.701 28.55 330.051 29.3334 329.217 29.9ZM344.044 36.15C344.944 37.0834 346.011 37.55 347.244 37.55C348.511 37.55 349.577 37.0834 350.444 36.15C351.344 35.2167 351.794 34.1 351.794 32.8C351.794 31.5 351.344 30.3834 350.444 29.45C349.577 28.5167 348.511 28.05 347.244 28.05C346.011 28.05 344.944 28.5167 344.044 29.45C343.144 30.3834 342.694 31.5 342.694 32.8C342.694 34.1 343.144 35.2167 344.044 36.15ZM121.17 56.5V67H128.955V64.795H123.75V56.5H121.17ZM132.072 66.625C132.682 66.975 133.372 67.15 134.142 67.15C134.902 67.15 135.582 66.975 136.182 66.625C136.792 66.275 137.272 65.8 137.622 65.2C137.982 64.59 138.162 63.905 138.162 63.145C138.162 62.385 137.982 61.705 137.622 61.105C137.272 60.495 136.792 60.015 136.182 59.665C135.582 59.315 134.897 59.14 134.127 59.14C133.367 59.14 132.682 59.315 132.072 59.665C131.462 60.015 130.977 60.495 130.617 61.105C130.267 61.705 130.092 62.385 130.092 63.145C130.092 63.905 130.267 64.59 130.617 65.2C130.977 65.8 131.462 66.275 132.072 66.625ZM134.997 64.87C134.747 65.04 134.457 65.125 134.127 65.125C133.807 65.125 133.517 65.04 133.257 64.87C133.007 64.7 132.812 64.465 132.672 64.165C132.532 63.865 132.462 63.525 132.462 63.145C132.462 62.755 132.532 62.415 132.672 62.125C132.812 61.825 133.007 61.59 133.257 61.42C133.517 61.25 133.807 61.165 134.127 61.165C134.457 61.165 134.747 61.25 134.997 61.42C135.247 61.59 135.442 61.825 135.582 62.125C135.722 62.415 135.792 62.755 135.792 63.145C135.792 63.525 135.722 63.865 135.582 64.165C135.442 64.465 135.247 64.7 134.997 64.87ZM139.71 59.26V67H142.14V62.11C142.34 61.82 142.595 61.59 142.905 61.42C143.215 61.24 143.55 61.15 143.91 61.15C144.12 61.15 144.325 61.17 144.525 61.21C144.725 61.25 144.9 61.31 145.05 61.39V59.305C144.9 59.225 144.77 59.175 144.66 59.155C144.55 59.135 144.41 59.12 144.24 59.11C143.78 59.11 143.375 59.265 143.025 59.575C142.685 59.885 142.39 60.365 142.14 61.015V59.26H139.71ZM147.776 66.625C148.396 66.975 149.086 67.15 149.846 67.15C150.496 67.15 151.076 67.055 151.586 66.865C152.096 66.665 152.601 66.345 153.101 65.905L151.496 64.57C151.326 64.78 151.106 64.94 150.836 65.05C150.576 65.16 150.286 65.215 149.966 65.215C149.676 65.215 149.406 65.155 149.156 65.035C148.906 64.915 148.696 64.745 148.526 64.525C148.356 64.305 148.231 64.05 148.151 63.76H153.476V63.235C153.476 62.435 153.311 61.73 152.981 61.12C152.661 60.5 152.216 60.015 151.646 59.665C151.076 59.315 150.416 59.14 149.666 59.14C148.926 59.14 148.261 59.32 147.671 59.68C147.081 60.03 146.616 60.505 146.276 61.105C145.936 61.705 145.766 62.385 145.766 63.145C145.766 63.895 145.946 64.575 146.306 65.185C146.676 65.785 147.166 66.265 147.776 66.625ZM151.226 62.38H148.151C148.221 62.09 148.321 61.845 148.451 61.645C148.591 61.445 148.761 61.295 148.961 61.195C149.171 61.085 149.401 61.03 149.651 61.03C149.911 61.03 150.146 61.085 150.356 61.195C150.566 61.305 150.746 61.46 150.896 61.66C151.046 61.86 151.156 62.1 151.226 62.38ZM154.988 59.26V67H157.418V61.645C157.728 61.245 158.108 61.045 158.558 61.045C158.908 61.045 159.188 61.165 159.398 61.405C159.608 61.635 159.713 61.945 159.713 62.335V67H162.143V61.855V61.75V61.63C162.303 61.43 162.473 61.285 162.653 61.195C162.843 61.095 163.048 61.045 163.268 61.045C163.618 61.045 163.898 61.165 164.108 61.405C164.318 61.635 164.423 61.945 164.423 62.335V67H166.853V61.855C166.853 61.325 166.748 60.855 166.538 60.445C166.338 60.035 166.053 59.715 165.683 59.485C165.323 59.255 164.903 59.14 164.423 59.14C163.893 59.14 163.413 59.265 162.983 59.515C162.553 59.755 162.188 60.11 161.888 60.58C161.698 60.14 161.413 59.79 161.033 59.53C160.653 59.27 160.213 59.14 159.713 59.14C159.243 59.14 158.813 59.255 158.423 59.485C158.043 59.715 157.708 60.05 157.418 60.49V59.26H154.988ZM171.907 59.26V67H174.337V59.26H171.907ZM172.162 57.67C172.432 57.94 172.752 58.075 173.122 58.075C173.502 58.075 173.822 57.94 174.082 57.67C174.352 57.4 174.487 57.08 174.487 56.71C174.487 56.33 174.352 56.01 174.082 55.75C173.822 55.48 173.502 55.345 173.122 55.345C172.752 55.345 172.432 55.48 172.162 55.75C171.892 56.01 171.757 56.33 171.757 56.71C171.757 57.08 171.892 57.4 172.162 57.67ZM176.228 59.26V70.135H178.658V66.145C178.918 66.435 179.223 66.66 179.573 66.82C179.933 66.97 180.323 67.045 180.743 67.045C181.413 67.045 182.018 66.87 182.558 66.52C183.108 66.17 183.543 65.7 183.863 65.11C184.183 64.52 184.343 63.865 184.343 63.145C184.343 62.415 184.188 61.755 183.878 61.165C183.578 60.575 183.168 60.105 182.648 59.755C182.138 59.395 181.563 59.215 180.923 59.215C180.463 59.215 180.028 59.315 179.618 59.515C179.218 59.715 178.888 59.99 178.628 60.34V59.26H176.228ZM181.058 64.81C180.788 64.97 180.473 65.05 180.113 65.05C179.833 65.05 179.568 64.995 179.318 64.885C179.068 64.775 178.848 64.625 178.658 64.435V61.855C178.858 61.645 179.073 61.49 179.303 61.39C179.543 61.28 179.813 61.225 180.113 61.225C180.463 61.225 180.778 61.31 181.058 61.48C181.338 61.64 181.558 61.865 181.718 62.155C181.878 62.435 181.958 62.76 181.958 63.13C181.958 63.5 181.878 63.83 181.718 64.12C181.558 64.41 181.338 64.64 181.058 64.81ZM186.842 66.91C187.452 67.07 188.107 67.15 188.807 67.15C189.447 67.15 190.017 67.035 190.517 66.805C191.017 66.575 191.412 66.26 191.702 65.86C191.992 65.45 192.137 64.995 192.137 64.495C192.137 63.905 191.942 63.42 191.552 63.04C191.162 62.66 190.582 62.4 189.812 62.26L188.357 61.99C188.057 61.94 187.847 61.875 187.727 61.795C187.617 61.715 187.562 61.595 187.562 61.435C187.562 61.265 187.642 61.135 187.802 61.045C187.972 60.955 188.202 60.91 188.492 60.91C188.852 60.91 189.212 60.965 189.572 61.075C189.942 61.175 190.322 61.34 190.712 61.57L191.822 60.025C191.322 59.735 190.807 59.515 190.277 59.365C189.747 59.215 189.212 59.14 188.672 59.14C188.002 59.14 187.422 59.24 186.932 59.44C186.452 59.64 186.082 59.93 185.822 60.31C185.562 60.68 185.432 61.13 185.432 61.66C185.432 62.26 185.622 62.75 186.002 63.13C186.392 63.51 186.962 63.77 187.712 63.91L189.197 64.18C189.447 64.22 189.627 64.285 189.737 64.375C189.857 64.465 189.917 64.585 189.917 64.735C189.917 64.925 189.817 65.08 189.617 65.2C189.427 65.31 189.157 65.365 188.807 65.365C188.437 65.365 188.067 65.31 187.697 65.2C187.337 65.08 186.877 64.875 186.317 64.585L185.252 66.205C185.702 66.515 186.232 66.75 186.842 66.91ZM194.713 66.79C195.103 67.01 195.548 67.12 196.048 67.12C196.548 67.12 197.003 67.005 197.413 66.775C197.833 66.535 198.193 66.19 198.493 65.74V67H200.923V59.26H198.493V64.57C198.323 64.79 198.128 64.955 197.908 65.065C197.698 65.165 197.463 65.215 197.203 65.215C196.813 65.215 196.498 65.085 196.258 64.825C196.028 64.555 195.913 64.205 195.913 63.775V59.26H193.483V64.48C193.483 65 193.593 65.46 193.813 65.86C194.033 66.25 194.333 66.56 194.713 66.79ZM202.815 59.26V67H205.245V61.645C205.555 61.245 205.935 61.045 206.385 61.045C206.735 61.045 207.015 61.165 207.225 61.405C207.435 61.635 207.54 61.945 207.54 62.335V67H209.97V61.855V61.75V61.63C210.13 61.43 210.3 61.285 210.48 61.195C210.67 61.095 210.875 61.045 211.095 61.045C211.445 61.045 211.725 61.165 211.935 61.405C212.145 61.635 212.25 61.945 212.25 62.335V67H214.68V61.855C214.68 61.325 214.575 60.855 214.365 60.445C214.165 60.035 213.88 59.715 213.51 59.485C213.15 59.255 212.73 59.14 212.25 59.14C211.72 59.14 211.24 59.265 210.81 59.515C210.38 59.755 210.015 60.11 209.715 60.58C209.525 60.14 209.24 59.79 208.86 59.53C208.48 59.27 208.04 59.14 207.54 59.14C207.07 59.14 206.64 59.255 206.25 59.485C205.87 59.715 205.535 60.05 205.245 60.49V59.26H202.815Z"}" fill="${"currentcolor"}"></path></svg></a>
		<div class="${"flex"}"><ul class="${"links " + escape("", true)}"><li class="${["link", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a href="${"/"}">Home</a></li>
				<li class="${["link", $page.url.pathname === "/testimonials" ? "active" : ""].join(" ").trim()}"><a href="${"/testimonials"}">Testimonials</a></li>
				<li class="${["link", $page.url.pathname === "/portfolio" ? "active" : ""].join(" ").trim()}"><a href="${"/portfolio"}">Portfolio</a></li>
				<li class="${["link", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a href="${"/about"}">About</a></li>
				<li class="${["link", $page.url.pathname === "/contact" ? "active" : ""].join(" ").trim()}"><a href="${"/contact"}">Contact</a></li>
				<li class="${"link social"}"><a href="${"/"}"><img class="${""}" src="${"/social/instagram.svg"}" alt="${"instagram"}" width="${"25"}" height="${"25"}" loading="${"lazy"}" decoding="${"async"}">
						<p>Instagram</p></a>
					<a href="${"/"}"><img class="${""}" src="${"/social/facebook.svg"}" alt="${"facebook"}" width="${"25"}" height="${"25"}" loading="${"lazy"}" decoding="${"async"}">
						<p>Facebook</p></a></li></ul>
			<a href="${"/contact"}" class="${"btn"}">Consultation</a></div>
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
		<a href="${"/"}">Rivas Web Designs</a></p></div>`;
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
    file = "_app/immutable/components/pages/_layout.svelte-5bde98d8.js";
    imports = ["_app/immutable/components/pages/_layout.svelte-5bde98d8.js", "_app/immutable/chunks/index-6e309def.js", "_app/immutable/chunks/stores-c98ae7e0.js", "_app/immutable/chunks/singletons-61c882e4.js", "_app/immutable/chunks/_page-3aaf3a4f.js"];
    stylesheets = ["_app/immutable/assets/_layout-8f6c857e.css"];
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
    file2 = "_app/immutable/components/error.svelte-c0a7455e.js";
    imports2 = ["_app/immutable/components/error.svelte-c0a7455e.js", "_app/immutable/chunks/index-6e309def.js", "_app/immutable/chunks/stores-c98ae7e0.js", "_app/immutable/chunks/singletons-61c882e4.js"];
    stylesheets2 = [];
  }
});

// .svelte-kit/output/server/chunks/SubFooter.js
var SubFooter;
var init_SubFooter = __esm({
  ".svelte-kit/output/server/chunks/SubFooter.js"() {
    init_chunks();
    SubFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { contactPage: contactPage2 = false } = $$props;
      if ($$props.contactPage === void 0 && $$bindings.contactPage && contactPage2 !== void 0)
        $$bindings.contactPage(contactPage2);
      return `<div id="${"subfooter"}">${contactPage2 ? `<div class="${"container"}"><p>Thank you for visiting our website. We look forward to hearing from you!</p>
			<a class="${"btn"}" href="${"/"}">Go Home</a></div>` : `<div class="${"container"}"><p>Join Us Today, And Let Us Help You Revamp Your While You Enjoy A Seamless, Stress-Free
				Experience.
			</p>
			<a class="${"btn"}" href="${"/contact"}">Request an Estimate</a></div>`}</div>`;
    });
  }
});

// node_modules/ssr-window/ssr-window.esm.js
function isObject(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
  Object.keys(src).forEach((key2) => {
    if (typeof target[key2] === "undefined")
      target[key2] = src[key2];
    else if (isObject(src[key2]) && isObject(target[key2]) && Object.keys(src[key2]).length > 0) {
      extend(target[key2], src[key2]);
    }
  });
}
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend(win, ssrWindow);
  return win;
}
var ssrDocument, ssrWindow;
var init_ssr_window_esm = __esm({
  "node_modules/ssr-window/ssr-window.esm.js"() {
    ssrDocument = {
      body: {},
      addEventListener() {
      },
      removeEventListener() {
      },
      activeElement: {
        blur() {
        },
        nodeName: ""
      },
      querySelector() {
        return null;
      },
      querySelectorAll() {
        return [];
      },
      getElementById() {
        return null;
      },
      createEvent() {
        return {
          initEvent() {
          }
        };
      },
      createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {
          },
          getElementsByTagName() {
            return [];
          }
        };
      },
      createElementNS() {
        return {};
      },
      importNode() {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      }
    };
    ssrWindow = {
      document: ssrDocument,
      navigator: {
        userAgent: ""
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      },
      history: {
        replaceState() {
        },
        pushState() {
        },
        go() {
        },
        back() {
        }
      },
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener() {
      },
      removeEventListener() {
      },
      getComputedStyle() {
        return {
          getPropertyValue() {
            return "";
          }
        };
      },
      Image() {
      },
      Date() {
      },
      screen: {},
      setTimeout() {
      },
      clearTimeout() {
      },
      matchMedia() {
        return {};
      },
      requestAnimationFrame(callback) {
        if (typeof setTimeout === "undefined") {
          callback();
          return null;
        }
        return setTimeout(callback, 0);
      },
      cancelAnimationFrame(id) {
        if (typeof setTimeout === "undefined") {
          return;
        }
        clearTimeout(id);
      }
    };
  }
});

// node_modules/dom7/dom7.esm.js
function makeReactive(obj) {
  const proto = obj.__proto__;
  Object.defineProperty(obj, "__proto__", {
    get() {
      return proto;
    },
    set(value) {
      proto.__proto__ = value;
    }
  });
}
function arrayFlat(arr = []) {
  const res = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      res.push(...arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1)
      uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function qsa(selector, context) {
  if (typeof selector !== "string") {
    return [selector];
  }
  const a = [];
  const res = context.querySelectorAll(selector);
  for (let i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }
  return a;
}
function $(selector, context) {
  const window2 = getWindow();
  const document2 = getDocument();
  let arr = [];
  if (!context && selector instanceof Dom7) {
    return selector;
  }
  if (!selector) {
    return new Dom7(arr);
  }
  if (typeof selector === "string") {
    const html2 = selector.trim();
    if (html2.indexOf("<") >= 0 && html2.indexOf(">") >= 0) {
      let toCreate = "div";
      if (html2.indexOf("<li") === 0)
        toCreate = "ul";
      if (html2.indexOf("<tr") === 0)
        toCreate = "tbody";
      if (html2.indexOf("<td") === 0 || html2.indexOf("<th") === 0)
        toCreate = "tr";
      if (html2.indexOf("<tbody") === 0)
        toCreate = "table";
      if (html2.indexOf("<option") === 0)
        toCreate = "select";
      const tempParent = document2.createElement(toCreate);
      tempParent.innerHTML = html2;
      for (let i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document2);
    }
  } else if (selector.nodeType || selector === window2 || selector === document2) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7)
      return selector;
    arr = selector;
  }
  return new Dom7(arrayUnique(arr));
}
function addClass(...classes2) {
  const classNames = arrayFlat(classes2.map((c) => c.split(" ")));
  this.forEach((el) => {
    el.classList.add(...classNames);
  });
  return this;
}
function removeClass(...classes2) {
  const classNames = arrayFlat(classes2.map((c) => c.split(" ")));
  this.forEach((el) => {
    el.classList.remove(...classNames);
  });
  return this;
}
function toggleClass(...classes2) {
  const classNames = arrayFlat(classes2.map((c) => c.split(" ")));
  this.forEach((el) => {
    classNames.forEach((className) => {
      el.classList.toggle(className);
    });
  });
}
function hasClass(...classes2) {
  const classNames = arrayFlat(classes2.map((c) => c.split(" ")));
  return arrayFilter(this, (el) => {
    return classNames.filter((className) => el.classList.contains(className)).length > 0;
  }).length > 0;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === "string") {
    if (this[0])
      return this[0].getAttribute(attrs);
    return void 0;
  }
  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      this[i].setAttribute(attrs, value);
    } else {
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
function removeAttr(attr2) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr2);
  }
  return this;
}
function transform(transform2) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform2;
  }
  return this;
}
function transition(duration) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== "string" ? `${duration}ms` : duration;
  }
  return this;
}
function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === "function") {
    [eventType, listener, capture] = args;
    targetSelector = void 0;
  }
  if (!capture)
    capture = false;
  function handleLiveEvent(e) {
    const target = e.target;
    if (!target)
      return;
    const eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    if ($(target).is(targetSelector))
      listener.apply(target, eventData);
    else {
      const parents2 = $(target).parents();
      for (let k = 0; k < parents2.length; k += 1) {
        if ($(parents2[k]).is(targetSelector))
          listener.apply(parents2[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    listener.apply(this, eventData);
  }
  const events2 = eventType.split(" ");
  let j;
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events2.length; j += 1) {
        const event = events2[j];
        if (!el.dom7Listeners)
          el.dom7Listeners = {};
        if (!el.dom7Listeners[event])
          el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      for (j = 0; j < events2.length; j += 1) {
        const event = events2[j];
        if (!el.dom7LiveListeners)
          el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event])
          el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === "function") {
    [eventType, listener, capture] = args;
    targetSelector = void 0;
  }
  if (!capture)
    capture = false;
  const events2 = eventType.split(" ");
  for (let i = 0; i < events2.length; i += 1) {
    const event = events2[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }
      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler2 = handlers[k];
          if (listener && handler2.listener === listener) {
            el.removeEventListener(event, handler2.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler2.listener && handler2.listener.dom7proxy && handler2.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler2.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler2.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }
  return this;
}
function trigger(...args) {
  const window2 = getWindow();
  const events2 = args[0].split(" ");
  const eventData = args[1];
  for (let i = 0; i < events2.length; i += 1) {
    const event = events2[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      if (window2.CustomEvent) {
        const evt = new window2.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }
  return this;
}
function transitionEnd(callback) {
  const dom = this;
  function fireCallBack(e) {
    if (e.target !== this)
      return;
    callback.call(this, e);
    dom.off("transitionend", fireCallBack);
  }
  if (callback) {
    dom.on("transitionend", fireCallBack);
  }
  return this;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles2 = this.styles();
      return this[0].offsetWidth + parseFloat(styles2.getPropertyValue("margin-right")) + parseFloat(styles2.getPropertyValue("margin-left"));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles2 = this.styles();
      return this[0].offsetHeight + parseFloat(styles2.getPropertyValue("margin-top")) + parseFloat(styles2.getPropertyValue("margin-bottom"));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    const window2 = getWindow();
    const document2 = getDocument();
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = document2.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
    const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  return null;
}
function styles() {
  const window2 = getWindow();
  if (this[0])
    return window2.getComputedStyle(this[0], null);
  return {};
}
function css2(props, value) {
  const window2 = getWindow();
  let i;
  if (arguments.length === 1) {
    if (typeof props === "string") {
      if (this[0])
        return window2.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        for (const prop in props) {
          this[i].style[prop] = props[prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === "string") {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }
    return this;
  }
  return this;
}
function each2(callback) {
  if (!callback)
    return this;
  this.forEach((el, index9) => {
    callback.apply(el, [el, index9]);
  });
  return this;
}
function filter(callback) {
  const result = arrayFilter(this, callback);
  return $(result);
}
function html(html2) {
  if (typeof html2 === "undefined") {
    return this[0] ? this[0].innerHTML : null;
  }
  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html2;
  }
  return this;
}
function text(text2) {
  if (typeof text2 === "undefined") {
    return this[0] ? this[0].textContent.trim() : null;
  }
  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text2;
  }
  return this;
}
function is(selector) {
  const window2 = getWindow();
  const document2 = getDocument();
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === "undefined")
    return false;
  if (typeof selector === "string") {
    if (el.matches)
      return el.matches(selector);
    if (el.webkitMatchesSelector)
      return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector)
      return el.msMatchesSelector(selector);
    compareWith = $(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el)
        return true;
    }
    return false;
  }
  if (selector === document2) {
    return el === document2;
  }
  if (selector === window2) {
    return el === window2;
  }
  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el)
        return true;
    }
    return false;
  }
  return false;
}
function index3() {
  let child = this[0];
  let i;
  if (child) {
    i = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1)
        i += 1;
    }
    return i;
  }
  return void 0;
}
function eq(index9) {
  if (typeof index9 === "undefined")
    return this;
  const length = this.length;
  if (index9 > length - 1) {
    return $([]);
  }
  if (index9 < 0) {
    const returnIndex = length + index9;
    if (returnIndex < 0)
      return $([]);
    return $([this[returnIndex]]);
  }
  return $([this[index9]]);
}
function append(...els) {
  let newChild;
  const document2 = getDocument();
  for (let k = 0; k < els.length; k += 1) {
    newChild = els[k];
    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === "string") {
        const tempDiv = document2.createElement("div");
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }
  return this;
}
function prepend(newChild) {
  const document2 = getDocument();
  let i;
  let j;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === "string") {
      const tempDiv = document2.createElement("div");
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }
      return $([]);
    }
    if (this[0].nextElementSibling)
      return $([this[0].nextElementSibling]);
    return $([]);
  }
  return $([]);
}
function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el)
    return $([]);
  while (el.nextElementSibling) {
    const next2 = el.nextElementSibling;
    if (selector) {
      if ($(next2).is(selector))
        nextEls.push(next2);
    } else
      nextEls.push(next2);
    el = next2;
  }
  return $(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    const el = this[0];
    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }
      return $([]);
    }
    if (el.previousElementSibling)
      return $([el.previousElementSibling]);
    return $([]);
  }
  return $([]);
}
function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el)
    return $([]);
  while (el.previousElementSibling) {
    const prev2 = el.previousElementSibling;
    if (selector) {
      if ($(prev2).is(selector))
        prevEls.push(prev2);
    } else
      prevEls.push(prev2);
    el = prev2;
  }
  return $(prevEls);
}
function parent(selector) {
  const parents2 = [];
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector))
          parents2.push(this[i].parentNode);
      } else {
        parents2.push(this[i].parentNode);
      }
    }
  }
  return $(parents2);
}
function parents(selector) {
  const parents2 = [];
  for (let i = 0; i < this.length; i += 1) {
    let parent2 = this[i].parentNode;
    while (parent2) {
      if (selector) {
        if ($(parent2).is(selector))
          parents2.push(parent2);
      } else {
        parents2.push(parent2);
      }
      parent2 = parent2.parentNode;
    }
  }
  return $(parents2);
}
function closest(selector) {
  let closest2 = this;
  if (typeof selector === "undefined") {
    return $([]);
  }
  if (!closest2.is(selector)) {
    closest2 = closest2.parents(selector).eq(0);
  }
  return closest2;
}
function find(selector) {
  const foundElements = [];
  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);
    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return $(foundElements);
}
function children(selector) {
  const children2 = [];
  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].children;
    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children2.push(childNodes[j]);
      }
    }
  }
  return $(children2);
}
function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode)
      this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
function shortcut(name) {
  function eventHandler(...args) {
    if (typeof args[0] === "undefined") {
      for (let i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i])
            this[i][name]();
          else {
            $(this[i]).trigger(name);
          }
        }
      }
      return this;
    }
    return this.on(name, ...args);
  }
  return eventHandler;
}
var Dom7, noTrigger, click, blur, focus, focusin, focusout, keyup, keydown, keypress, submit, change, mousedown, mousemove, mouseup, mouseenter, mouseleave, mouseout, mouseover, touchstart, touchend, touchmove, resize, scroll;
var init_dom7_esm = __esm({
  "node_modules/dom7/dom7.esm.js"() {
    init_ssr_window_esm();
    Dom7 = class extends Array {
      constructor(items) {
        if (typeof items === "number") {
          super(items);
        } else {
          super(...items || []);
          makeReactive(this);
        }
      }
    };
    $.fn = Dom7.prototype;
    noTrigger = "resize scroll".split(" ");
    click = shortcut("click");
    blur = shortcut("blur");
    focus = shortcut("focus");
    focusin = shortcut("focusin");
    focusout = shortcut("focusout");
    keyup = shortcut("keyup");
    keydown = shortcut("keydown");
    keypress = shortcut("keypress");
    submit = shortcut("submit");
    change = shortcut("change");
    mousedown = shortcut("mousedown");
    mousemove = shortcut("mousemove");
    mouseup = shortcut("mouseup");
    mouseenter = shortcut("mouseenter");
    mouseleave = shortcut("mouseleave");
    mouseout = shortcut("mouseout");
    mouseover = shortcut("mouseover");
    touchstart = shortcut("touchstart");
    touchend = shortcut("touchend");
    touchmove = shortcut("touchmove");
    resize = shortcut("resize");
    scroll = shortcut("scroll");
  }
});

// .svelte-kit/output/server/chunks/navigation.min.js
function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach((key2) => {
    try {
      object[key2] = null;
    } catch (e) {
    }
    try {
      delete object[key2];
    } catch (e) {
    }
  });
}
function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle$1(el) {
  const window2 = getWindow();
  let style;
  if (window2.getComputedStyle) {
    style = window2.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis = "x") {
  const window2 = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle$1(el);
  if (window2.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
    }
    transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }
  if (axis === "x") {
    if (window2.WebKitCSSMatrix)
      curTransform = transformMatrix.m41;
    else if (matrix.length === 16)
      curTransform = parseFloat(matrix[12]);
    else
      curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    if (window2.WebKitCSSMatrix)
      curTransform = transformMatrix.m42;
    else if (matrix.length === 16)
      curTransform = parseFloat(matrix[13]);
    else
      curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject2(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend2(...args) {
  const to = Object(args[0]);
  const noExtend = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];
    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter((key2) => noExtend.indexOf(key2) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend2(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend2(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
  const window2 = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none";
  window2.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? "next" : "prev";
  const isOutOfBound = (current, target) => {
    return dir === "next" && current >= target || dir === "prev" && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.scrollSnapType = "";
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}
function calcSupport() {
  const window2 = getWindow();
  const document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch),
    passiveListener: function checkPassiveListener() {
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, "passive", {
          get() {
            supportsPassive = true;
          }
        });
        window2.addEventListener("testPassiveListener", null, opts);
      } catch (e) {
      }
      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return "ongesturestart" in window2;
    }()
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
function calcDevice({
  userAgent
} = {}) {
  const support2 = getSupport();
  const window2 = getWindow();
  const platform = window2.navigator.platform;
  const ua = userAgent || window2.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window2.screen.width;
  const screenHeight = window2.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === "Win32";
  let macos = platform === "MacIntel";
  const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad)
      ipad = [0, 1, "13_0_0"];
    macos = false;
  }
  if (android && !windows) {
    device.os = "android";
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = "ios";
    device.ios = true;
  }
  return device;
}
function getDevice(overrides = {}) {
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}
function calcBrowser() {
  const window2 = getWindow();
  function isSafari() {
    const ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  return {
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
function Resize({
  swiper,
  on: on2,
  emit
}) {
  const window2 = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    emit("beforeResize");
    emit("resize");
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    observer = new ResizeObserver((entries) => {
      animationFrame = window2.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(({
          contentBoxSize,
          contentRect,
          target
        }) => {
          if (target && target !== swiper.el)
            return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window2.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    emit("orientationchange");
  };
  on2("init", () => {
    if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler);
    window2.addEventListener("orientationchange", orientationChangeHandler);
  });
  on2("destroy", () => {
    removeObserver();
    window2.removeEventListener("resize", resizeHandler);
    window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}
function Observer({
  swiper,
  extendParams,
  on: on2,
  emit
}) {
  const observers = [];
  const window2 = getWindow();
  const attach = (target, options = {}) => {
    const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
    const observer = new ObserverFunc((mutations) => {
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate2() {
        emit("observerUpdate", mutations[0]);
      };
      if (window2.requestAnimationFrame) {
        window2.requestAnimationFrame(observerUpdate);
      } else {
        window2.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: typeof options.childList === "undefined" ? true : options.childList,
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    observers.push(observer);
  };
  const init2 = () => {
    if (!swiper.params.observer)
      return;
    if (swiper.params.observeParents) {
      const containerParents = swiper.$el.parents();
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    });
    attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach((observer) => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on2("init", init2);
  on2("destroy", destroy);
}
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const $el = swiper.$el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
  height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
  if (Number.isNaN(width))
    width = 0;
  if (Number.isNaN(height))
    height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    $wrapperEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === "function") {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === "function") {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index22 = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  }
  swiper.virtualSize = -spaceBetween;
  if (rtl)
    slides.css({
      marginLeft: "",
      marginBottom: "",
      marginTop: ""
    });
  else
    slides.css({
      marginRight: "",
      marginBottom: "",
      marginTop: ""
    });
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
    setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  }
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key2) => {
    return typeof params.breakpoints[key2].slidesPerView !== "undefined";
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide2 = slides.eq(i);
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide2, slidesLength, getDirectionLabel);
    }
    if (slide2.css("display") === "none")
      continue;
    if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel("width")] = ``;
      }
      const slideStyles = getComputedStyle(slide2[0]);
      const currentTransform = slide2[0].style.transform;
      const currentWebKitTransform = slide2[0].style.webkitTransform;
      if (currentTransform) {
        slide2[0].style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2[0].style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide2.outerWidth(true) : slide2.outerHeight(true);
      } else {
        const width = getDirectionPropertyValue(slideStyles, "width");
        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        const boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide2[0];
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2[0].style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2[0].style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths)
        slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths)
        slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0)
        slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0)
        slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3)
        slidePosition = 0;
      if (params.roundLengths)
        slidePosition = Math.floor(slidePosition);
      if (index22 % params.slidesPerGroup === 0)
        snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths)
        slidePosition = Math.floor(slidePosition);
      if ((index22 - Math.min(swiper.params.slidesPerGroupSkip, index22)) % swiper.params.slidesPerGroup === 0)
        snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index22 += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    $wrapperEl.css({
      width: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }
  if (params.setWrapperSize) {
    $wrapperEl.css({
      [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  }
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths)
        slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (snapGrid.length === 0)
    snapGrid = [0];
  if (params.spaceBetween !== 0) {
    const key2 = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => {
      if (!params.cssMode)
        return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).css({
      [key2]: `${spaceBetween}px`
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map((snap) => {
      if (snap < 0)
        return -offsetBefore;
      if (snap > maxSnap)
        return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
    setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow)
      swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded)
        swiper.$el.addClass(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.$el.removeClass(backFaceHiddenClass);
    }
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = (index22) => {
    if (isVirtual) {
      return swiper.slides.filter((el) => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index22)[0];
    }
    return swiper.slides.eq(index22)[0];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || $([])).each((slide2) => {
        activeSlides.push(slide2);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index22 = swiper.activeIndex + i;
        if (index22 > swiper.slides.length && !isVirtual)
          break;
        activeSlides.push(getSlideByIndex(index22));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== "undefined") {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight || newHeight === 0)
    swiper.$wrapperEl.css("height", `${newHeight}px`);
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}
function updateSlidesProgress(translate2 = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0)
    return;
  if (typeof slides[0].swiperSlideOffset === "undefined")
    swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  if (rtl)
    offsetCenter = translate2;
  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  for (let i = 0; i < slides.length; i += 1) {
    const slide2 = slides[i];
    let slideOffset = slide2.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + params.spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + params.spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i);
      slides.eq(i).addClass(params.slideVisibleClass);
    }
    slide2.progress = rtl ? -slideProgress : slideProgress;
    slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
  swiper.visibleSlides = $(swiper.visibleSlides);
}
function updateProgress(translate2) {
  const swiper = this;
  if (typeof translate2 === "undefined") {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }
  Object.assign(swiper, {
    progress,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
    swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    $wrapperEl,
    activeIndex,
    realIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
  let activeSlide;
  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
  } else {
    activeSlide = slides.eq(activeIndex);
  }
  activeSlide.addClass(params.slideActiveClass);
  if (params.loop) {
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    }
  }
  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  }
  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }
  if (params.loop) {
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
    }
    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
    }
  }
  swiper.emitSlidesClasses();
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    slidesGrid,
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  if (typeof activeIndex === "undefined") {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate2 >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined")
        activeIndex = 0;
    }
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length)
    snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    return;
  }
  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
  Object.assign(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (previousRealIndex !== realIndex) {
    swiper.emit("realIndexChange");
  }
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit("slideChange");
  }
}
function updateClickedSlide(e) {
  const swiper = this;
  const params = swiper.params;
  const slide2 = $(e).closest(`.${params.slideClass}`)[0];
  let slideFound = false;
  let slideIndex;
  if (slide2) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide2) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt($(slide2).attr("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate: translate2,
    $wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  let currentTranslate = getTranslate($wrapperEl[0], axis);
  if (rtl)
    currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    $wrapperEl,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate2 : translate2;
  } else {
    y = translate2;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2 = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate2 = swiper.minTranslate();
  const maxTranslate2 = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate2 > minTranslate2)
    newTranslate = minTranslate2;
  else if (translateBounds && translate2 < maxTranslate2)
    newTranslate = maxTranslate2;
  else
    newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd22(e) {
          if (!swiper || swiper.destroyed)
            return;
          if (e.target !== this)
            return;
          swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex)
      dir = "next";
    else if (activeIndex < previousIndex)
      dir = "prev";
    else
      dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === "reset") {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode)
    return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "Start"
  });
}
function transitionEnd2(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode)
    return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  });
}
function slideTo(index22 = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
  if (typeof index22 !== "number" && typeof index22 !== "string") {
    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index22}] given.`);
  }
  if (typeof index22 === "string") {
    const indexAsNumber = parseInt(index22, 10);
    const isValidNumber = isFinite(indexAsNumber);
    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index22}] given.`);
    }
    index22 = indexAsNumber;
  }
  const swiper = this;
  let slideIndex = index22;
  if (slideIndex < 0)
    slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length)
    snapIndex = snapGrid.length - 1;
  const translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate2 * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate2 < swiper.translate && translate2 < swiper.minTranslate()) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex)
        return false;
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit("beforeSlideChangeStart");
  }
  swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex)
    direction = "next";
  else if (slideIndex < activeIndex)
    direction = "prev";
  else
    direction = "reset";
  if (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate2 : -translate2;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = "none";
        swiper._immediateVirtual = true;
      }
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = "";
          swiper._swiperImmediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t,
        behavior: "smooth"
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate2);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit("beforeTransitionStart", speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd22(e) {
        if (!swiper || swiper.destroyed)
          return;
        if (e.target !== this)
          return;
        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}
function slideToLoop(index22 = 0, speed = this.params.speed, runCallbacks = true, internal) {
  if (typeof index22 === "string") {
    const indexAsNumber = parseInt(index22, 10);
    const isValidNumber = isFinite(indexAsNumber);
    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index22}] given.`);
    }
    index22 = indexAsNumber;
  }
  const swiper = this;
  let newIndex = index22;
  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }
  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    animating,
    enabled,
    params
  } = swiper;
  if (!enabled)
    return swiper;
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  if (params.loop) {
    if (animating && params.loopPreventsSlide)
      return false;
    swiper.loopFix();
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    animating,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled)
    return swiper;
  if (params.loop) {
    if (animating && params.loopPreventsSlide)
      return false;
    swiper.loopFix();
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0)
      return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate2);
  const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0)
      prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  let index22 = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index22);
  const snapIndex = skip + Math.floor((index22 - skip) / swiper.params.slidesPerGroup);
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index22 += swiper.params.slidesPerGroup;
    }
  } else {
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index22 -= swiper.params.slidesPerGroup;
    }
  }
  index22 = Math.max(index22, 0);
  index22 = Math.min(index22, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index22, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    $wrapperEl
  } = swiper;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  if (params.loop) {
    if (swiper.animating)
      return;
    realIndex = parseInt($(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
function loopCreate() {
  const swiper = this;
  const document2 = getDocument();
  const {
    params,
    $wrapperEl
  } = swiper;
  const $selector = $wrapperEl.children().length > 0 ? $($wrapperEl.children()[0].parentNode) : $wrapperEl;
  $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
  let slides = $selector.children(`.${params.slideClass}`);
  if (params.loopFillGroupWithBlank) {
    const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankNode = $(document2.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $selector.append(blankNode);
      }
      slides = $selector.children(`.${params.slideClass}`);
    }
  }
  if (params.slidesPerView === "auto" && !params.loopedSlides)
    params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;
  if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) {
    swiper.loopedSlides = slides.length;
  }
  const prependSlides = [];
  const appendSlides = [];
  slides.each((el, index22) => {
    const slide2 = $(el);
    slide2.attr("data-swiper-slide-index", index22);
  });
  for (let i = 0; i < swiper.loopedSlides; i += 1) {
    const index22 = i - Math.floor(i / slides.length) * slides.length;
    appendSlides.push(slides.eq(index22)[0]);
    prependSlides.unshift(slides.eq(slides.length - index22 - 1)[0]);
  }
  for (let i = 0; i < appendSlides.length; i += 1) {
    $selector.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
    $selector.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}
function loopFix() {
  const swiper = this;
  swiper.emit("beforeLoopFix");
  const {
    activeIndex,
    slides,
    loopedSlides,
    allowSlidePrev,
    allowSlideNext,
    snapGrid,
    rtlTranslate: rtl
  } = swiper;
  let newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  const snapTranslate = -snapGrid[activeIndex];
  const diff = snapTranslate - swiper.getTranslate();
  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit("loopFix");
}
function loopDestroy() {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    slides
  } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
  slides.removeAttr("data-swiper-slide-index");
}
function setGrabCursor(moving) {
  const swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
    return;
  const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  el.style.cursor = "move";
  el.style.cursor = moving ? "grabbing" : "grab";
}
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
}
function closestElement(selector, base2 = this) {
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow())
      return null;
    if (el.assignedSlot)
      el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base2);
}
function onTouchStart(event) {
  const swiper = this;
  const document2 = getDocument();
  const window2 = getWindow();
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled)
    return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  let $targetEl = $(e.target);
  if (params.touchEventsTarget === "wrapper") {
    if (!$targetEl.closest(swiper.wrapperEl).length)
      return;
  }
  data.isTouchEvent = e.type === "touchstart";
  if (!data.isTouchEvent && "which" in e && e.which === 3)
    return;
  if (!data.isTouchEvent && "button" in e && e.button > 0)
    return;
  if (data.isTouched && data.isMoved)
    return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = event.composedPath ? event.composedPath() : event.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    $targetEl = $(eventPath[0]);
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0])
      return;
  }
  touches.currentX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;
  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event.preventDefault();
    } else {
      return;
    }
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0)
    data.allowThresholdMove = false;
  if (e.type !== "touchstart") {
    let preventDefault = true;
    if ($targetEl.is(data.focusableElements)) {
      preventDefault = false;
      if ($targetEl[0].nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (document2.activeElement && $(document2.activeElement).is(data.focusableElements) && document2.activeElement !== $targetEl[0]) {
      document2.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }
  if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit("touchStart", e);
}
function onTouchMove(event) {
  const document2 = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled)
    return;
  let e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
  if (data.isTouchEvent && e.type !== "touchmove")
    return;
  const targetTouch = e.type === "touchmove" && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  const pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
  const pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!$(e.target).is(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (data.isTouchEvent && document2.activeElement) {
    if (e.target === document2.activeElement && $(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e);
  }
  if (e.targetTouches && e.targetTouches.length > 1)
    return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
    return;
  if (typeof data.isScrolling === "undefined") {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  if (!data.isMoved) {
    if (params.loop && !params.cssMode) {
      swiper.loopFix();
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e);
  }
  swiper.emit("sliderMove", e);
  data.isMoved = true;
  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl)
    diff = -diff;
  swiper.swipeDirection = diff > 0 ? "prev" : "next";
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance)
      data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance)
      data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode)
    return;
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled)
    return;
  let e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
    swiper.emit("tap click", e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed)
      swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (swiper.params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment2] !== "undefined") {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment2] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio)
        swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
      else
        swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0)
    return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled)
    return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks)
      e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled)
    return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === 0)
    swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
function dummyEventListener() {
}
function attachEvents() {
  const swiper = this;
  const document2 = getDocument();
  const {
    params,
    support: support2
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  if (support2.touch && !dummyEventAttached) {
    document2.addEventListener("touchstart", dummyEventListener);
    dummyEventAttached = true;
  }
  events(swiper, "on");
}
function detachEvents() {
  const swiper = this;
  events(swiper, "off");
}
function setBreakpoint() {
  const swiper = this;
  const {
    activeIndex,
    initialized: initialized2,
    loopedSlides = 0,
    params,
    $el
  } = swiper;
  const breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
    return;
  const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint)
    return;
  const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
      $el.addClass(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  ["navigation", "pagination", "scrollbar"].forEach((prop) => {
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  if (directionChanged && initialized2) {
    swiper.changeDirection();
  }
  extend2(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (needsReLoop && initialized2) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }
  swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base2 = "window", containerEl) {
  if (!breakpoints2 || base2 === "container" && !containerEl)
    return void 0;
  let breakpoint = false;
  const window2 = getWindow();
  const currentHeight = base2 === "window" ? window2.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints2).map((point) => {
    if (typeof point === "string" && point.indexOf("@") === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base2 === "window") {
      if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
function prepareClasses(entries, prefix2) {
  const resultClasses = [];
  entries.forEach((item) => {
    if (typeof item === "object") {
      Object.keys(item).forEach((classNames) => {
        if (item[classNames]) {
          resultClasses.push(prefix2 + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix2 + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    $el,
    device,
    support: support2
  } = swiper;
  const suffixes = prepareClasses(["initialized", params.direction, {
    "pointer-events": !support2.touch
  }, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    "autoheight": params.autoHeight
  }, {
    "rtl": rtl
  }, {
    "grid": params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    "android": device.android
  }, {
    "ios": device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    "centered": params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  $el.addClass([...classNames].join(" "));
  swiper.emitContainerClasses();
}
function removeClasses() {
  const swiper = this;
  const {
    $el,
    classNames
  } = swiper;
  $el.removeClass(classNames.join(" "));
  swiper.emitContainerClasses();
}
function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  const window2 = getWindow();
  let image;
  function onReady() {
    if (callback)
      callback();
  }
  const isPicture = $(imageEl).parent("picture")[0];
  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window2.Image();
      image.onload = onReady;
      image.onerror = onReady;
      if (sizes) {
        image.sizes = sizes;
      }
      if (srcset) {
        image.srcset = srcset;
      }
      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    onReady();
  }
}
function preloadImages() {
  const swiper = this;
  swiper.imagesToLoad = swiper.$el.find("img");
  function onReady() {
    if (typeof swiper === "undefined" || swiper === null || !swiper || swiper.destroyed)
      return;
    if (swiper.imagesLoaded !== void 0)
      swiper.imagesLoaded += 1;
    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady)
        swiper.update();
      swiper.emit("imagesReady");
    }
  }
  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    const imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
  }
}
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  }
}
function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj = {}) {
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== "object" || moduleParams === null) {
      extend2(allModulesParams, obj);
      return;
    }
    if (["navigation", "pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
      params[moduleParamName] = {
        auto: true
      };
    }
    if (!(moduleParamName in params && "enabled" in moduleParams)) {
      extend2(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName])
      params[moduleParamName] = {
        enabled: false
      };
    extend2(allModulesParams, obj);
  };
}
var Methods, support, deviceCached, browser, eventsEmitter, update2, translate, transition2, slide, loop, grabCursor, dummyEventAttached, events, events$1, isGridEnabled, breakpoints, classes, images, checkOverflow$1, defaults, prototypes, extendedDefaults, Swiper;
var init_navigation_min = __esm({
  ".svelte-kit/output/server/chunks/navigation.min.js"() {
    init_ssr_window_esm();
    init_dom7_esm();
    Methods = {
      addClass,
      removeClass,
      hasClass,
      toggleClass,
      attr,
      removeAttr,
      transform,
      transition,
      on,
      off,
      trigger,
      transitionEnd,
      outerWidth,
      outerHeight,
      styles,
      offset,
      css: css2,
      each: each2,
      html,
      text,
      is,
      index: index3,
      eq,
      append,
      prepend,
      next,
      nextAll,
      prev,
      prevAll,
      parent,
      parents,
      closest,
      find,
      children,
      filter,
      remove
    };
    Object.keys(Methods).forEach((methodName) => {
      Object.defineProperty($.fn, methodName, {
        value: Methods[methodName],
        writable: true
      });
    });
    eventsEmitter = {
      on(events2, handler2, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed)
          return self;
        if (typeof handler2 !== "function")
          return self;
        const method = priority ? "unshift" : "push";
        events2.split(" ").forEach((event) => {
          if (!self.eventsListeners[event])
            self.eventsListeners[event] = [];
          self.eventsListeners[event][method](handler2);
        });
        return self;
      },
      once(events2, handler2, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed)
          return self;
        if (typeof handler2 !== "function")
          return self;
        function onceHandler(...args) {
          self.off(events2, onceHandler);
          if (onceHandler.__emitterProxy) {
            delete onceHandler.__emitterProxy;
          }
          handler2.apply(self, args);
        }
        onceHandler.__emitterProxy = handler2;
        return self.on(events2, onceHandler, priority);
      },
      onAny(handler2, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed)
          return self;
        if (typeof handler2 !== "function")
          return self;
        const method = priority ? "unshift" : "push";
        if (self.eventsAnyListeners.indexOf(handler2) < 0) {
          self.eventsAnyListeners[method](handler2);
        }
        return self;
      },
      offAny(handler2) {
        const self = this;
        if (!self.eventsListeners || self.destroyed)
          return self;
        if (!self.eventsAnyListeners)
          return self;
        const index22 = self.eventsAnyListeners.indexOf(handler2);
        if (index22 >= 0) {
          self.eventsAnyListeners.splice(index22, 1);
        }
        return self;
      },
      off(events2, handler2) {
        const self = this;
        if (!self.eventsListeners || self.destroyed)
          return self;
        if (!self.eventsListeners)
          return self;
        events2.split(" ").forEach((event) => {
          if (typeof handler2 === "undefined") {
            self.eventsListeners[event] = [];
          } else if (self.eventsListeners[event]) {
            self.eventsListeners[event].forEach((eventHandler, index22) => {
              if (eventHandler === handler2 || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler2) {
                self.eventsListeners[event].splice(index22, 1);
              }
            });
          }
        });
        return self;
      },
      emit(...args) {
        const self = this;
        if (!self.eventsListeners || self.destroyed)
          return self;
        if (!self.eventsListeners)
          return self;
        let events2;
        let data;
        let context;
        if (typeof args[0] === "string" || Array.isArray(args[0])) {
          events2 = args[0];
          data = args.slice(1, args.length);
          context = self;
        } else {
          events2 = args[0].events;
          data = args[0].data;
          context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
        eventsArray.forEach((event) => {
          if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
            self.eventsAnyListeners.forEach((eventHandler) => {
              eventHandler.apply(context, [event, ...data]);
            });
          }
          if (self.eventsListeners && self.eventsListeners[event]) {
            self.eventsListeners[event].forEach((eventHandler) => {
              eventHandler.apply(context, data);
            });
          }
        });
        return self;
      }
    };
    update2 = {
      updateSize,
      updateSlides,
      updateAutoHeight,
      updateSlidesOffset,
      updateSlidesProgress,
      updateProgress,
      updateSlidesClasses,
      updateActiveIndex,
      updateClickedSlide
    };
    translate = {
      getTranslate: getSwiperTranslate,
      setTranslate,
      minTranslate,
      maxTranslate,
      translateTo
    };
    transition2 = {
      setTransition,
      transitionStart,
      transitionEnd: transitionEnd2
    };
    slide = {
      slideTo,
      slideToLoop,
      slideNext,
      slidePrev,
      slideReset,
      slideToClosest,
      slideToClickedSlide
    };
    loop = {
      loopCreate,
      loopFix,
      loopDestroy
    };
    grabCursor = {
      setGrabCursor,
      unsetGrabCursor
    };
    dummyEventAttached = false;
    events = (swiper, method) => {
      const document2 = getDocument();
      const {
        params,
        touchEvents,
        el,
        wrapperEl,
        device,
        support: support2
      } = swiper;
      const capture = !!params.nested;
      const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
      const swiperMethod = method;
      if (!support2.touch) {
        el[domMethod](touchEvents.start, swiper.onTouchStart, false);
        document2[domMethod](touchEvents.move, swiper.onTouchMove, capture);
        document2[domMethod](touchEvents.end, swiper.onTouchEnd, false);
      } else {
        const passiveListener = touchEvents.start === "touchstart" && support2.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
        el[domMethod](touchEvents.move, swiper.onTouchMove, support2.passiveListener ? {
          passive: false,
          capture
        } : capture);
        el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) {
          el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
      }
      if (params.preventClicks || params.preventClicksPropagation) {
        el[domMethod]("click", swiper.onClick, true);
      }
      if (params.cssMode) {
        wrapperEl[domMethod]("scroll", swiper.onScroll);
      }
      if (params.updateOnWindowResize) {
        swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
      } else {
        swiper[swiperMethod]("observerUpdate", onResize, true);
      }
    };
    events$1 = {
      attachEvents,
      detachEvents
    };
    isGridEnabled = (swiper, params) => {
      return swiper.grid && params.grid && params.grid.rows > 1;
    };
    breakpoints = {
      setBreakpoint,
      getBreakpoint
    };
    classes = {
      addClasses,
      removeClasses
    };
    images = {
      loadImage,
      preloadImages
    };
    checkOverflow$1 = {
      checkOverflow
    };
    defaults = {
      init: true,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: false,
      updateOnWindowResize: true,
      resizeObserver: true,
      nested: false,
      createElements: false,
      enabled: true,
      focusableElements: "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: false,
      userAgent: null,
      url: null,
      edgeSwipeDetection: false,
      edgeSwipeThreshold: 20,
      autoHeight: false,
      setWrapperSize: false,
      virtualTranslate: false,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: false,
      centeredSlides: false,
      centeredSlidesBounds: false,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: true,
      centerInsufficientSlides: false,
      watchOverflow: true,
      roundLengths: false,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      allowTouchMove: true,
      threshold: 0,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      touchStartForcePreventDefault: false,
      touchReleaseOnEdges: false,
      uniqueNavElements: true,
      resistance: true,
      resistanceRatio: 0.85,
      watchSlidesProgress: false,
      grabCursor: false,
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      preloadImages: true,
      updateOnImagesReady: true,
      loop: false,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: true,
      loopFillGroupWithBlank: false,
      loopPreventsSlide: true,
      rewind: false,
      allowSlidePrev: true,
      allowSlideNext: true,
      swipeHandler: null,
      noSwiping: true,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: true,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: true,
      _emitClasses: false
    };
    prototypes = {
      eventsEmitter,
      update: update2,
      translate,
      transition: transition2,
      slide,
      loop,
      grabCursor,
      events: events$1,
      breakpoints,
      checkOverflow: checkOverflow$1,
      classes,
      images
    };
    extendedDefaults = {};
    Swiper = class {
      constructor(...args) {
        let el;
        let params;
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
          params = args[0];
        } else {
          [el, params] = args;
        }
        if (!params)
          params = {};
        params = extend2({}, params);
        if (el && !params.el)
          params.el = el;
        if (params.el && $(params.el).length > 1) {
          const swipers = [];
          $(params.el).each((containerEl) => {
            const newParams = extend2({}, params, {
              el: containerEl
            });
            swipers.push(new Swiper(newParams));
          });
          return swipers;
        }
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = getSupport();
        swiper.device = getDevice({
          userAgent: params.userAgent
        });
        swiper.browser = getBrowser();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [...swiper.__modules__];
        if (params.modules && Array.isArray(params.modules)) {
          swiper.modules.push(...params.modules);
        }
        const allModulesParams = {};
        swiper.modules.forEach((mod) => {
          mod({
            swiper,
            extendParams: moduleExtendParams(params, allModulesParams),
            on: swiper.on.bind(swiper),
            once: swiper.once.bind(swiper),
            off: swiper.off.bind(swiper),
            emit: swiper.emit.bind(swiper)
          });
        });
        const swiperParams = extend2({}, defaults, allModulesParams);
        swiper.params = extend2({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = extend2({}, swiper.params);
        swiper.passedParams = extend2({}, params);
        if (swiper.params && swiper.params.on) {
          Object.keys(swiper.params.on).forEach((eventName) => {
            swiper.on(eventName, swiper.params.on[eventName]);
          });
        }
        if (swiper.params && swiper.params.onAny) {
          swiper.onAny(swiper.params.onAny);
        }
        swiper.$ = $;
        Object.assign(swiper, {
          enabled: swiper.params.enabled,
          el,
          classNames: [],
          slides: $(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return swiper.params.direction === "horizontal";
          },
          isVertical() {
            return swiper.params.direction === "vertical";
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: true,
          isEnd: false,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: false,
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev,
          touchEvents: function touchEvents() {
            const touch = ["touchstart", "touchmove", "touchend", "touchcancel"];
            const desktop = ["pointerdown", "pointermove", "pointerup"];
            swiper.touchEventsTouch = {
              start: touch[0],
              move: touch[1],
              end: touch[2],
              cancel: touch[3]
            };
            swiper.touchEventsDesktop = {
              start: desktop[0],
              move: desktop[1],
              end: desktop[2]
            };
            return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
          }(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: swiper.params.focusableElements,
            lastClickTime: now(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: true,
          allowTouchMove: swiper.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        });
        swiper.emit("_swiper");
        if (swiper.params.init) {
          swiper.init();
        }
        return swiper;
      }
      enable() {
        const swiper = this;
        if (swiper.enabled)
          return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) {
          swiper.setGrabCursor();
        }
        swiper.emit("enable");
      }
      disable() {
        const swiper = this;
        if (!swiper.enabled)
          return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) {
          swiper.unsetGrabCursor();
        }
        swiper.emit("disable");
      }
      setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el)
          return;
        const cls = swiper.el.className.split(" ").filter((className) => {
          return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit("_containerClasses", cls.join(" "));
      }
      getSlideClasses(slideEl) {
        const swiper = this;
        if (swiper.destroyed)
          return "";
        return slideEl.className.split(" ").filter((className) => {
          return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(" ");
      }
      emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el)
          return;
        const updates = [];
        swiper.slides.each((slideEl) => {
          const classNames = swiper.getSlideClasses(slideEl);
          updates.push({
            slideEl,
            classNames
          });
          swiper.emit("_slideClass", slideEl, classNames);
        });
        swiper.emit("_slideClasses", updates);
      }
      slidesPerViewDynamic(view = "current", exact = false) {
        const swiper = this;
        const {
          params,
          slides,
          slidesGrid,
          slidesSizesGrid,
          size: swiperSize,
          activeIndex
        } = swiper;
        let spv = 1;
        if (params.centeredSlides) {
          let slideSize = slides[activeIndex].swiperSlideSize;
          let breakLoop;
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize)
                breakLoop = true;
            }
          }
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize)
                breakLoop = true;
            }
          }
        } else {
          if (view === "current") {
            for (let i = activeIndex + 1; i < slides.length; i += 1) {
              const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
              if (slideInView) {
                spv += 1;
              }
            }
          } else {
            for (let i = activeIndex - 1; i >= 0; i -= 1) {
              const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
              if (slideInView) {
                spv += 1;
              }
            }
          }
        }
        return spv;
      }
      update() {
        const swiper = this;
        if (!swiper || swiper.destroyed)
          return;
        const {
          snapGrid,
          params
        } = swiper;
        if (params.breakpoints) {
          swiper.setBreakpoint();
        }
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate2() {
          const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
          const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
          swiper.setTranslate(newTranslate);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }
        let translated;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
          setTranslate2();
          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        } else {
          if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
            translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
          } else {
            translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
          }
          if (!translated) {
            setTranslate2();
          }
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow();
        }
        swiper.emit("update");
      }
      changeDirection(newDirection, needUpdate = true) {
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) {
          newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
        }
        if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
          return swiper;
        }
        swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each((slideEl) => {
          if (newDirection === "vertical") {
            slideEl.style.width = "";
          } else {
            slideEl.style.height = "";
          }
        });
        swiper.emit("changeDirection");
        if (needUpdate)
          swiper.update();
        return swiper;
      }
      changeLanguageDirection(direction) {
        const swiper = this;
        if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr")
          return;
        swiper.rtl = direction === "rtl";
        swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
        if (swiper.rtl) {
          swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
          swiper.el.dir = "rtl";
        } else {
          swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
          swiper.el.dir = "ltr";
        }
        swiper.update();
      }
      mount(el) {
        const swiper = this;
        if (swiper.mounted)
          return true;
        const $el = $(el || swiper.params.el);
        el = $el[0];
        if (!el) {
          return false;
        }
        el.swiper = swiper;
        const getWrapperSelector = () => {
          return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
        };
        const getWrapper = () => {
          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            const res = $(el.shadowRoot.querySelector(getWrapperSelector()));
            res.children = (options) => $el.children(options);
            return res;
          }
          if (!$el.children) {
            return $($el).children(getWrapperSelector());
          }
          return $el.children(getWrapperSelector());
        };
        let $wrapperEl = getWrapper();
        if ($wrapperEl.length === 0 && swiper.params.createElements) {
          const document2 = getDocument();
          const wrapper = document2.createElement("div");
          $wrapperEl = $(wrapper);
          wrapper.className = swiper.params.wrapperClass;
          $el.append(wrapper);
          $el.children(`.${swiper.params.slideClass}`).each((slideEl) => {
            $wrapperEl.append(slideEl);
          });
        }
        Object.assign(swiper, {
          $el,
          el,
          $wrapperEl,
          wrapperEl: $wrapperEl[0],
          mounted: true,
          rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
          rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
          wrongRTL: $wrapperEl.css("display") === "-webkit-box"
        });
        return true;
      }
      init(el) {
        const swiper = this;
        if (swiper.initialized)
          return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false)
          return swiper;
        swiper.emit("beforeInit");
        if (swiper.params.breakpoints) {
          swiper.setBreakpoint();
        }
        swiper.addClasses();
        if (swiper.params.loop) {
          swiper.loopCreate();
        }
        swiper.updateSize();
        swiper.updateSlides();
        if (swiper.params.watchOverflow) {
          swiper.checkOverflow();
        }
        if (swiper.params.grabCursor && swiper.enabled) {
          swiper.setGrabCursor();
        }
        if (swiper.params.preloadImages) {
          swiper.preloadImages();
        }
        if (swiper.params.loop) {
          swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
        } else {
          swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        }
        swiper.attachEvents();
        swiper.initialized = true;
        swiper.emit("init");
        swiper.emit("afterInit");
        return swiper;
      }
      destroy(deleteInstance = true, cleanStyles = true) {
        const swiper = this;
        const {
          params,
          $el,
          $wrapperEl,
          slides
        } = swiper;
        if (typeof swiper.params === "undefined" || swiper.destroyed) {
          return null;
        }
        swiper.emit("beforeDestroy");
        swiper.initialized = false;
        swiper.detachEvents();
        if (params.loop) {
          swiper.loopDestroy();
        }
        if (cleanStyles) {
          swiper.removeClasses();
          $el.removeAttr("style");
          $wrapperEl.removeAttr("style");
          if (slides && slides.length) {
            slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
          }
        }
        swiper.emit("destroy");
        Object.keys(swiper.eventsListeners).forEach((eventName) => {
          swiper.off(eventName);
        });
        if (deleteInstance !== false) {
          swiper.$el[0].swiper = null;
          deleteProps(swiper);
        }
        swiper.destroyed = true;
        return null;
      }
      static extendDefaults(newDefaults) {
        extend2(extendedDefaults, newDefaults);
      }
      static get extendedDefaults() {
        return extendedDefaults;
      }
      static get defaults() {
        return defaults;
      }
      static installModule(mod) {
        if (!Swiper.prototype.__modules__)
          Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;
        if (typeof mod === "function" && modules.indexOf(mod) < 0) {
          modules.push(mod);
        }
      }
      static use(module) {
        if (Array.isArray(module)) {
          module.forEach((m) => Swiper.installModule(m));
          return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
      }
    };
    Object.keys(prototypes).forEach((prototypeGroup) => {
      Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
      });
    });
    Swiper.use([Resize, Observer]);
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  const document2 = getDocument();
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key2) => {
      if (!params[key2] && params.auto === true) {
        let element = swiper.$el.children(`.${checkProps[key2]}`)[0];
        if (!element) {
          element = document2.createElement("div");
          element.className = checkProps[key2];
          swiper.$el.append(element);
        }
        params[key2] = element;
        originalParams[key2] = element;
      }
    });
  }
  return params;
}
function Navigation({
  swiper,
  extendParams,
  on: on2,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  });
  swiper.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };
  function getEl(el) {
    let $el;
    if (el) {
      $el = $(el);
      if (swiper.params.uniqueNavElements && typeof el === "string" && $el.length > 1 && swiper.$el.find(el).length === 1) {
        $el = swiper.$el.find(el);
      }
    }
    return $el;
  }
  function toggleEl($el, disabled) {
    const params = swiper.params.navigation;
    if ($el && $el.length > 0) {
      $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
      if ($el[0] && $el[0].tagName === "BUTTON")
        $el[0].disabled = disabled;
      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
      }
    }
  }
  function update3() {
    if (swiper.params.loop)
      return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slidePrev();
    emit("navigationPrev");
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slideNext();
    emit("navigationNext");
  }
  function init2() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    if (!(params.nextEl || params.prevEl))
      return;
    const $nextEl = getEl(params.nextEl);
    const $prevEl = getEl(params.prevEl);
    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on("click", onNextClick);
    }
    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on("click", onPrevClick);
    }
    Object.assign(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });
    if (!swiper.enabled) {
      if ($nextEl)
        $nextEl.addClass(params.lockClass);
      if ($prevEl)
        $prevEl.addClass(params.lockClass);
    }
  }
  function destroy() {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    if ($nextEl && $nextEl.length) {
      $nextEl.off("click", onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }
    if ($prevEl && $prevEl.length) {
      $prevEl.off("click", onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
  on2("init", () => {
    if (swiper.params.navigation.enabled === false) {
      disable();
    } else {
      init2();
      update3();
    }
  });
  on2("toEdge fromEdge lock unlock", () => {
    update3();
  });
  on2("destroy", () => {
    destroy();
  });
  on2("enable disable", () => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    if ($nextEl) {
      $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
    }
    if ($prevEl) {
      $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
    }
  });
  on2("click", (_s, e) => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
        return;
      let isHidden;
      if ($nextEl) {
        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
      } else if ($prevEl) {
        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      if ($nextEl) {
        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
      if ($prevEl) {
        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  });
  const enable = () => {
    swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
    init2();
    update3();
  };
  const disable = () => {
    swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update: update3,
    init: init2,
    destroy
  });
}
function Scrollbar({
  swiper,
  extendParams,
  on: on2,
  emit
}) {
  const document2 = getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null,
    $el: null,
    $dragEl: null
  };
  function setTranslate2() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    const {
      scrollbar,
      rtlTranslate: rtl,
      progress
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
      $dragEl[0].style.width = `${newSize}px`;
    } else {
      $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
      $dragEl[0].style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      $el[0].style.opacity = 1;
      timeout = setTimeout(() => {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1e3);
    }
  }
  function setTransition2(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    swiper.scrollbar.$dragEl.transition(duration);
  }
  function updateSize2() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    const {
      scrollbar
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    $dragEl[0].style.width = "";
    $dragEl[0].style.height = "";
    trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === "auto") {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = `${dragSize}px`;
    } else {
      $dragEl[0].style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      $el[0].style.display = "none";
    } else {
      $el[0].style.display = "";
    }
    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.$el[swiper.isLocked ? "addClass" : "removeClass"](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    if (swiper.isHorizontal()) {
      return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientX : e.clientX;
    }
    return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientY : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      $el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    setDragPosition(e);
    clearTimeout(dragTimeout);
    $el.transition(0);
    if (params.hide) {
      $el.css("opacity", 1);
    }
    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css("scroll-snap-type", "none");
    }
    emit("scrollbarDragStart", e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    if (!isTouched)
      return;
    if (e.preventDefault)
      e.preventDefault();
    else
      e.returnValue = false;
    setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    emit("scrollbarDragMove", e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el
    } = scrollbar;
    if (!isTouched)
      return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css("scroll-snap-type", "");
      $wrapperEl.transition("");
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = nextTick(() => {
        $el.css("opacity", 0);
        $el.transition(400);
      }, 1e3);
    }
    emit("scrollbarDragEnd", e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events2(method) {
    const {
      scrollbar,
      touchEventsTouch,
      touchEventsDesktop,
      params,
      support: support2
    } = swiper;
    const $el = scrollbar.$el;
    if (!$el)
      return;
    const target = $el[0];
    const activeListener = support2.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = support2.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target)
      return;
    const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
    if (!support2.touch) {
      target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
      document2[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
      document2[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
    } else {
      target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
      target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
      target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
    }
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    events2("on");
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    events2("off");
  }
  function init2() {
    const {
      scrollbar,
      $el: $swiperEl
    } = swiper;
    swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    const params = swiper.params.scrollbar;
    if (!params.el)
      return;
    let $el = $(params.el);
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }
    $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
    if ($dragEl.length === 0) {
      $dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
      $el.append($dragEl);
    }
    Object.assign(scrollbar, {
      $el,
      el: $el[0],
      $dragEl,
      dragEl: $dragEl[0]
    });
    if (params.draggable) {
      enableDraggable();
    }
    if ($el) {
      $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.scrollbar.lockClass);
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const $el = swiper.scrollbar.$el;
    if ($el) {
      $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    }
    disableDraggable();
  }
  on2("init", () => {
    if (swiper.params.scrollbar.enabled === false) {
      disable();
    } else {
      init2();
      updateSize2();
      setTranslate2();
    }
  });
  on2("update resize observerUpdate lock unlock", () => {
    updateSize2();
  });
  on2("setTranslate", () => {
    setTranslate2();
  });
  on2("setTransition", (_s, duration) => {
    setTransition2(duration);
  });
  on2("enable disable", () => {
    const {
      $el
    } = swiper.scrollbar;
    if ($el) {
      $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.scrollbar.lockClass);
    }
  });
  on2("destroy", () => {
    destroy();
  });
  const enable = () => {
    swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.$el) {
      swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    init2();
    updateSize2();
    setTranslate2();
  };
  const disable = () => {
    swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.$el) {
      swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize: updateSize2,
    setTranslate: setTranslate2,
    init: init2,
    destroy
  });
}
function Autoplay({
  swiper,
  extendParams,
  on: on2,
  emit
}) {
  let timeout;
  swiper.autoplay = {
    running: false,
    paused: false
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  function run2() {
    if (!swiper.size) {
      swiper.autoplay.running = false;
      swiper.autoplay.paused = false;
      return;
    }
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;
    if ($activeSlideEl.attr("data-swiper-autoplay")) {
      delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
    }
    clearTimeout(timeout);
    timeout = nextTick(() => {
      let autoplayResult;
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit("autoplay");
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          emit("autoplay");
        } else {
          stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit("autoplay");
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit("autoplay");
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        emit("autoplay");
      } else {
        stop();
      }
      if (swiper.params.cssMode && swiper.autoplay.running)
        run2();
      else if (autoplayResult === false) {
        run2();
      }
    }, delay);
  }
  function start() {
    if (typeof timeout !== "undefined")
      return false;
    if (swiper.autoplay.running)
      return false;
    swiper.autoplay.running = true;
    emit("autoplayStart");
    run2();
    return true;
  }
  function stop() {
    if (!swiper.autoplay.running)
      return false;
    if (typeof timeout === "undefined")
      return false;
    if (timeout) {
      clearTimeout(timeout);
      timeout = void 0;
    }
    swiper.autoplay.running = false;
    emit("autoplayStop");
    return true;
  }
  function pause(speed) {
    if (!swiper.autoplay.running)
      return;
    if (swiper.autoplay.paused)
      return;
    if (timeout)
      clearTimeout(timeout);
    swiper.autoplay.paused = true;
    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      run2();
    } else {
      ["transitionend", "webkitTransitionEnd"].forEach((event) => {
        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
      });
    }
  }
  function onVisibilityChange() {
    const document2 = getDocument();
    if (document2.visibilityState === "hidden" && swiper.autoplay.running) {
      pause();
    }
    if (document2.visibilityState === "visible" && swiper.autoplay.paused) {
      run2();
      swiper.autoplay.paused = false;
    }
  }
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl)
      return;
    if (e.target !== swiper.$wrapperEl[0])
      return;
    ["transitionend", "webkitTransitionEnd"].forEach((event) => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
    swiper.autoplay.paused = false;
    if (!swiper.autoplay.running) {
      stop();
    } else {
      run2();
    }
  }
  function onMouseEnter() {
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
    } else {
      emit("autoplayPause");
      pause();
    }
    ["transitionend", "webkitTransitionEnd"].forEach((event) => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
  }
  function onMouseLeave() {
    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
    run2();
  }
  function attachMouseEvents() {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on("mouseenter", onMouseEnter);
      swiper.$el.on("mouseleave", onMouseLeave);
    }
  }
  function detachMouseEvents() {
    swiper.$el.off("mouseenter", onMouseEnter);
    swiper.$el.off("mouseleave", onMouseLeave);
  }
  on2("init", () => {
    if (swiper.params.autoplay.enabled) {
      start();
      const document2 = getDocument();
      document2.addEventListener("visibilitychange", onVisibilityChange);
      attachMouseEvents();
    }
  });
  on2("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.autoplay.running) {
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.pause(speed);
      } else {
        stop();
      }
    }
  });
  on2("sliderFirstMove", () => {
    if (swiper.autoplay.running) {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        pause();
      }
    }
  });
  on2("touchEnd", () => {
    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
      run2();
    }
  });
  on2("destroy", () => {
    detachMouseEvents();
    if (swiper.autoplay.running) {
      stop();
    }
    const document2 = getDocument();
    document2.removeEventListener("visibilitychange", onVisibilityChange);
  });
  Object.assign(swiper.autoplay, {
    pause,
    run: run2,
    start,
    stop
  });
}
function isObject3(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function extend3(target, src) {
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key2) => noExtend.indexOf(key2) < 0).forEach((key2) => {
    if (typeof target[key2] === "undefined")
      target[key2] = src[key2];
    else if (isObject3(src[key2]) && isObject3(target[key2]) && Object.keys(src[key2]).length > 0) {
      if (src[key2].__swiper__)
        target[key2] = src[key2];
      else
        extend3(target[key2], src[key2]);
    } else {
      target[key2] = src[key2];
    }
  });
}
function needsNavigation(params = {}) {
  return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
}
function needsPagination(params = {}) {
  return params.pagination && typeof params.pagination.el === "undefined";
}
function needsScrollbar(params = {}) {
  return params.scrollbar && typeof params.scrollbar.el === "undefined";
}
function uniqueClasses(classNames = "") {
  const classes2 = classNames.split(" ").map((c) => c.trim()).filter((c) => !!c);
  const unique = [];
  classes2.forEach((c) => {
    if (unique.indexOf(c) < 0)
      unique.push(c);
  });
  return unique.join(" ");
}
function getParams(obj = {}, splitEvents = true) {
  const params = {
    on: {}
  };
  const events2 = {};
  const passedParams = {};
  extend3(params, Swiper.defaults);
  extend3(params, Swiper.extendedDefaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};
  const allowedParams = paramsList.map((key2) => key2.replace(/_/, ""));
  const plainObj = Object.assign({}, obj);
  Object.keys(plainObj).forEach((key2) => {
    if (typeof obj[key2] === "undefined")
      return;
    if (allowedParams.indexOf(key2) >= 0) {
      if (isObject3(obj[key2])) {
        params[key2] = {};
        passedParams[key2] = {};
        extend3(params[key2], obj[key2]);
        extend3(passedParams[key2], obj[key2]);
      } else {
        params[key2] = obj[key2];
        passedParams[key2] = obj[key2];
      }
    } else if (key2.search(/on[A-Z]/) === 0 && typeof obj[key2] === "function") {
      if (splitEvents) {
        events2[`${key2[2].toLowerCase()}${key2.substr(3)}`] = obj[key2];
      } else {
        params.on[`${key2[2].toLowerCase()}${key2.substr(3)}`] = obj[key2];
      }
    } else {
      rest[key2] = obj[key2];
    }
  });
  ["navigation", "pagination", "scrollbar"].forEach((key2) => {
    if (params[key2] === true)
      params[key2] = {};
    if (params[key2] === false)
      delete params[key2];
  });
  return {
    params,
    passedParams,
    rest,
    events: events2
  };
}
var paramsList, Swiper_1, Swiper_slide, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    init_page();
    init_SubFooter();
    init_navigation_min();
    init_ssr_window_esm();
    init_dom7_esm();
    paramsList = [
      "modules",
      "init",
      "_direction",
      "touchEventsTarget",
      "initialSlide",
      "_speed",
      "cssMode",
      "updateOnWindowResize",
      "resizeObserver",
      "nested",
      "focusableElements",
      "_enabled",
      "_width",
      "_height",
      "preventInteractionOnTransition",
      "userAgent",
      "url",
      "_edgeSwipeDetection",
      "_edgeSwipeThreshold",
      "_freeMode",
      "_autoHeight",
      "setWrapperSize",
      "virtualTranslate",
      "_effect",
      "breakpoints",
      "_spaceBetween",
      "_slidesPerView",
      "maxBackfaceHiddenSlides",
      "_grid",
      "_slidesPerGroup",
      "_slidesPerGroupSkip",
      "_slidesPerGroupAuto",
      "_centeredSlides",
      "_centeredSlidesBounds",
      "_slidesOffsetBefore",
      "_slidesOffsetAfter",
      "normalizeSlideIndex",
      "_centerInsufficientSlides",
      "_watchOverflow",
      "roundLengths",
      "touchRatio",
      "touchAngle",
      "simulateTouch",
      "_shortSwipes",
      "_longSwipes",
      "longSwipesRatio",
      "longSwipesMs",
      "_followFinger",
      "allowTouchMove",
      "_threshold",
      "touchMoveStopPropagation",
      "touchStartPreventDefault",
      "touchStartForcePreventDefault",
      "touchReleaseOnEdges",
      "uniqueNavElements",
      "_resistance",
      "_resistanceRatio",
      "_watchSlidesProgress",
      "_grabCursor",
      "preventClicks",
      "preventClicksPropagation",
      "_slideToClickedSlide",
      "_preloadImages",
      "updateOnImagesReady",
      "_loop",
      "_loopAdditionalSlides",
      "_loopedSlides",
      "_loopedSlidesLimit",
      "_loopFillGroupWithBlank",
      "loopPreventsSlide",
      "_rewind",
      "_allowSlidePrev",
      "_allowSlideNext",
      "_swipeHandler",
      "_noSwiping",
      "noSwipingClass",
      "noSwipingSelector",
      "passiveListeners",
      "containerModifierClass",
      "slideClass",
      "slideBlankClass",
      "slideActiveClass",
      "slideDuplicateActiveClass",
      "slideVisibleClass",
      "slideDuplicateClass",
      "slideNextClass",
      "slideDuplicateNextClass",
      "slidePrevClass",
      "slideDuplicatePrevClass",
      "wrapperClass",
      "runCallbacksOnInit",
      "observer",
      "observeParents",
      "observeSlideChildren",
      "a11y",
      "_autoplay",
      "_controller",
      "coverflowEffect",
      "cubeEffect",
      "fadeEffect",
      "flipEffect",
      "creativeEffect",
      "cardsEffect",
      "hashNavigation",
      "history",
      "keyboard",
      "lazy",
      "mousewheel",
      "_navigation",
      "_pagination",
      "parallax",
      "_scrollbar",
      "_thumbs",
      "virtual",
      "zoom"
    ];
    Swiper_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$restProps = compute_rest_props($$props, ["class", "swiper"]);
      const dispatch = createEventDispatcher();
      let { class: className = void 0 } = $$props;
      let containerClasses = "swiper";
      let swiperInstance = null;
      let paramsData;
      let swiperParams;
      let restProps;
      let swiperEl = null;
      let prevEl = null;
      let nextEl = null;
      let scrollbarEl = null;
      let paginationEl = null;
      let virtualData = { slides: [] };
      function swiper() {
        return swiperInstance;
      }
      const setVirtualData = (data) => {
        virtualData = data;
        tick().then(() => {
          swiperInstance.$wrapperEl.children(".swiper-slide").each((el) => {
            if (el.onSwiper)
              el.onSwiper(swiperInstance);
          });
          swiperInstance.updateSlides();
          swiperInstance.updateProgress();
          swiperInstance.updateSlidesClasses();
          if (swiperInstance.lazy && swiperInstance.params.lazy.enabled) {
            swiperInstance.lazy.load();
          }
        });
      };
      const calcParams = () => {
        paramsData = getParams($$restProps);
        swiperParams = paramsData.params;
        paramsData.passedParams;
        restProps = paramsData.rest;
      };
      calcParams();
      const onBeforeBreakpoint = () => {
      };
      swiperParams.onAny = (event, ...args) => {
        dispatch(event, args);
      };
      Object.assign(swiperParams.on, {
        _beforeBreakpoint: onBeforeBreakpoint,
        _containerClasses(_swiper, classes2) {
          containerClasses = classes2;
        }
      });
      swiperInstance = new Swiper(swiperParams);
      setContext("swiper", swiperInstance);
      if (swiperInstance.virtual && swiperInstance.params.virtual.enabled) {
        const extendWith = {
          cache: false,
          renderExternal: (data) => {
            setVirtualData(data);
            if (swiperParams.virtual && swiperParams.virtual.renderExternal) {
              swiperParams.virtual.renderExternal(data);
            }
          },
          renderExternalUpdate: false
        };
        extend3(swiperInstance.params.virtual, extendWith);
        extend3(swiperInstance.originalParams.virtual, extendWith);
      }
      onDestroy(() => {
        if (typeof window !== "undefined" && swiperInstance && !swiperInstance.destroyed) {
          swiperInstance.destroy(true, false);
        }
      });
      if ($$props.class === void 0 && $$bindings.class && className !== void 0)
        $$bindings.class(className);
      if ($$props.swiper === void 0 && $$bindings.swiper && swiper !== void 0)
        $$bindings.swiper(swiper);
      return `<div${spread(
        [
          {
            class: escape_attribute_value(uniqueClasses(`${containerClasses}${className ? ` ${className}` : ""}`))
          },
          escape_object(restProps)
        ],
        {}
      )}${add_attribute("this", swiperEl, 0)}>${slots["container-start"] ? slots["container-start"]({ virtualData }) : ``}
  <div class="${"swiper-wrapper"}">${slots["wrapper-start"] ? slots["wrapper-start"]({ virtualData }) : ``}
    ${slots.default ? slots.default({ virtualData }) : ``}
    ${slots["wrapper-end"] ? slots["wrapper-end"]({ virtualData }) : ``}</div>
  ${needsNavigation(swiperParams) ? `<div class="${"swiper-button-prev"}"${add_attribute("this", prevEl, 0)}></div>
    <div class="${"swiper-button-next"}"${add_attribute("this", nextEl, 0)}></div>` : ``}
  ${needsScrollbar(swiperParams) ? `<div class="${"swiper-scrollbar"}"${add_attribute("this", scrollbarEl, 0)}></div>` : ``}
  ${needsPagination(swiperParams) ? `<div class="${"swiper-pagination"}"${add_attribute("this", paginationEl, 0)}></div>` : ``}
  ${slots["container-end"] ? slots["container-end"]({ virtualData }) : ``}</div>`;
    });
    Swiper_slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let slideData;
      let $$restProps = compute_rest_props($$props, ["zoom", "virtualIndex", "class"]);
      let { zoom = void 0 } = $$props;
      let { virtualIndex = void 0 } = $$props;
      let { class: className = void 0 } = $$props;
      let slideEl = null;
      let slideClasses = "swiper-slide";
      let swiper = getContext("swiper");
      const updateClasses = (_, el, classNames) => {
        if (el === slideEl) {
          slideClasses = classNames;
        }
      };
      const detachEvent = () => {
        if (!swiper)
          return;
        swiper.off("_slideClass", updateClasses);
      };
      onDestroy(() => {
        if (!swiper)
          return;
        detachEvent();
      });
      if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
        $$bindings.zoom(zoom);
      if ($$props.virtualIndex === void 0 && $$bindings.virtualIndex && virtualIndex !== void 0)
        $$bindings.virtualIndex(virtualIndex);
      if ($$props.class === void 0 && $$bindings.class && className !== void 0)
        $$bindings.class(className);
      slideData = {
        isActive: slideClasses.indexOf("swiper-slide-active") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-active") >= 0,
        isVisible: slideClasses.indexOf("swiper-slide-visible") >= 0,
        isDuplicate: slideClasses.indexOf("swiper-slide-duplicate") >= 0,
        isPrev: slideClasses.indexOf("swiper-slide-prev") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-prev") >= 0,
        isNext: slideClasses.indexOf("swiper-slide-next") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-next") >= 0
      };
      return `<div${spread(
        [
          {
            class: escape_attribute_value(uniqueClasses(`${slideClasses}${className ? ` ${className}` : ""}`))
          },
          {
            "data-swiper-slide-index": escape_attribute_value(virtualIndex)
          },
          escape_object($$restProps)
        ],
        {}
      )}${add_attribute("this", slideEl, 0)}>${zoom ? `<div class="${"swiper-zoom-container"}"${add_attribute("data-swiper-zoom", typeof zoom === "number" ? zoom : void 0, 0)}>${slots.default ? slots.default({ data: slideData }) : ``}</div>` : `${slots.default ? slots.default({ data: slideData }) : ``}`}</div>`;
    });
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
			<div class="${"img-container"}"><img class="${""}" src="${"/home/lawn01.jpg"}" alt="${"Owner"}" width="${"500"}" height="${"750"}" loading="${"lazy"}" decoding="${"async"}"></div></div></section>
	
	
	
	<section class="${"main-slider"}">${validate_component(Swiper_1, "Swiper").$$render(
        $$result,
        {
          modules: [Navigation, Autoplay, Scrollbar],
          navigation: {
            prevEl: ".swiper-prev-custom",
            nextEl: ".swiper-next-custom"
          },
          autoplay: { delay: 1e4 },
          scrollbar: { hide: false },
          class: "swiper swiper-container swiper-main",
          spaceBetween: 0,
          slidesPerView: 1,
          loop: false
        },
        {},
        {
          default: () => {
            return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { class: "swiper-slide" }, {}, {
              default: () => {
                return `<img class="${"main-img"}" src="${"/home/servicemain.jpg"}" alt="${"beautiful landscape"}" width="${"1920"}" height="${"1100"}" loading="${"lazy"}" decoding="${"async"}">`;
              }
            })}
			${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { class: "swiper-slide" }, {}, {
              default: () => {
                return `<img class="${"main-img"}" src="${"/home/lawn02.jpg"}" alt="${"beautiful landscape"}" width="${"1920"}" height="${"1100"}" loading="${"lazy"}" decoding="${"async"}">`;
              }
            })}
			${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { class: "swiper-slide" }, {}, {
              default: () => {
                return `<img class="${"main-img"}" src="${"/home/lawn03.jpg"}" alt="${"beautiful landscape"}" width="${"1920"}" height="${"1100"}" loading="${"lazy"}" decoding="${"async"}">`;
              }
            })}`;
          }
        }
      )}</section>
	
	
	
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
		<div class="${"grid"}"><div class="${"box"}"><div class="${"item"}"><img class="${""}" src="${"/home/lawn01.jpg"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/home/lawn02.jpg"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/home/lawn03.jpg"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div>
			<div class="${"box mid"}"><a href="${"/portfolio"}" class="${"item"}"><img class="${""}" src="${"/home/lawn01.jpg"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}">
					<p>View Entire Portfolio</p></a></div>
			<div class="${"box"}"><div class="${"item"}"><img class="${""}" src="${"/home/lawn02.jpg"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/home/lawn03.jpg"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/home/lawn01.jpg"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div></div></section>
	
	
	
	<section id="${"test"}"><div class="${"container"}"><div class="${"item"}"><h2><span>30</span>Years</h2>
				<p>Experienced professionals who know how to build long-lasting landscaping solutions.</p></div>
			<div class="${"item"}"><h2><span>Local</span>Business</h2>
				<p>Lawncare has been trusted and highly rated in the state for years, and for good reason.
				</p></div>
			<div class="${"item"}"><h2><span>30</span>Workers</h2>
				<p>No job is too big or small for Lawncare. No matter your needs, we can cover them
					flawlessly.
				</p></div></div></section>
	<div id="${"why-over"}"><div class="${"img-container"}"><picture><source media="${"(max-width: 600px)"}" srcset="${"/img09.webp"}">
				<source media="${"(min-width: 601px)"}" srcset="${"/img09.webp"}">
				<img aria-hidden="${"true"}" decoding="${"async"}" src="${"/img09.webp"}" alt="${""}" width="${"276"}" height="${"132"}"></picture></div>
		<div class="${"text"}"><h2>Client Reviews</h2>
			${validate_component(Swiper_1, "Swiper").$$render(
        $$result,
        {
          modules: [Navigation, Autoplay],
          navigation: {
            prevEl: ".swiper-prev-custom",
            nextEl: ".swiper-next-custom"
          },
          autoplay: { delay: 1e4 },
          class: "swiper swiper-container",
          spaceBetween: 0,
          slidesPerView: 1,
          loop: true
        },
        {},
        {
          default: () => {
            return `${each(subReviews, ({ review, testifier }) => {
              return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { class: "swiper-slide" }, {}, {
                default: () => {
                  return `<div class="${"swiper-content"}"><div class="${"stars"}">${each({ length: 5 }, (_) => {
                    return `<svg width="${"30"}" height="${"30"}" viewBox="${"0 0 30 30"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" aria-hidden="${"true"}" role="${"img"}"><path d="${"M30 11.5908L19.0993 10.8741L14.994 0.560669L10.8888 10.8741L0 11.5908L8.3516 18.6821L5.61105 29.4393L14.994 23.5084L24.3771 29.4393L21.6365 18.6821L30 11.5908Z"}" fill="${"currentcolor"}"></path></svg>`;
                  })}</div>
							<p>${escape(review)}</p>
							<div class="${"info"}"><img src="${"/avatar.svg"}" alt="${"person icon"}" width="${"40"}" height="${"40"}">
								<div><h4>${escape(testifier)}</h4>
									<p>Certified Google Review</p>
								</div></div>
						</div>`;
                }
              })}`;
            })}`;
          }
        }
      )}

			<div class="${"swiper-next-custom"}"><img src="${"/right-chevron.svg"}" alt="${""}"></div>
			<div class="${"swiper-prev-custom"}"><img src="${"/left-chevron.svg"}" alt="${""}"></div></div></div></main>



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
  index: () => index4,
  shared: () => page_exports,
  stylesheets: () => stylesheets3
});
var index4, component3, file3, imports3, stylesheets3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_page();
    index4 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file3 = "_app/immutable/components/pages/_page.svelte-9543de23.js";
    imports3 = ["_app/immutable/components/pages/_page.svelte-9543de23.js", "_app/immutable/chunks/index-6e309def.js", "_app/immutable/chunks/_page-3aaf3a4f.js", "_app/immutable/chunks/SubFooter-54b0e1fc.js", "_app/immutable/chunks/navigation.min-c1b3f0f1.js", "_app/immutable/modules/pages/_page.js-3ac71e7d.js", "_app/immutable/chunks/_page-3aaf3a4f.js"];
    stylesheets3 = ["_app/immutable/assets/_page-e2e49ab4.css", "_app/immutable/assets/SubFooter-f5e442f6.css", "_app/immutable/assets/navigation-e40dc6b1.css"];
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
			<div class="${"btns"}"><a href="${"/"}" class="${"btn"}">Contact Us</a></div></div></div>
	<section id="${"process"}"><div class="${"header"}"><h2>Get Things Done<br>With Our Proven Process</h2></div>
		<div class="${"contain"}"><div class="${"block"}"><div class="${"graphic"}" data-count="${"1"}"><img class="${""}" src="${"/img10m.webp"}" alt="${""}" width="${"500"}" height="${"500"}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"content"}"><h3>Consultation</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum magnam temporibus
						doloribus velit soluta placeat totam officia provident qui quas architecto quae rerum,
						cumque voluptas delectus explicabo in nobis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Praesentium at sunt ea assumenda obcaecati tempora placeat minus
						aperiam, fugiat, hic aut, dignissimos maxime repellendus in laboriosam itaque? Ad,
						beatae fugit.
					</p></div></div>
			<div class="${"block"}"><div class="${"graphic"}" data-count="${"2"}"><img class="${""}" src="${"/img09.jpeg"}" alt="${""}" width="${"500"}" height="${"500"}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"content"}"><h3>Design</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum magnam temporibus
						doloribus velit soluta placeat totam officia provident qui quas architecto quae rerum,
						cumque voluptas delectus explicabo in nobis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Praesentium at sunt ea assumenda obcaecati tempora placeat minus
						aperiam, fugiat, hic aut, dignissimos maxime repellendus in laboriosam itaque? Ad,
						beatae fugit.
					</p></div></div>
			<div class="${"block"}"><div class="${"graphic"}" data-count="${"3"}"><img class="${""}" src="${"/home/lawn02.jpg"}" alt="${""}" width="${"500"}" height="${"500"}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"content"}"><h3>Build</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum magnam temporibus
						doloribus velit soluta placeat totam officia provident qui quas architecto quae rerum,
						cumque voluptas delectus explicabo in nobis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Praesentium at sunt ea assumenda obcaecati tempora placeat minus
						aperiam, fugiat, hic aut, dignissimos maxime repellendus in laboriosam itaque? Ad,
						beatae fugit.
					</p></div></div>
			<div class="${"block"}"><div class="${"graphic"}" data-count="${"4"}"><img class="${""}" src="${"/home/lawn03.jpg"}" alt="${""}" width="${"500"}" height="${"500"}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"content"}"><h3>Maintain</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum magnam temporibus
						doloribus velit soluta placeat totam officia provident qui quas architecto quae rerum,
						cumque voluptas delectus explicabo in nobis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Praesentium at sunt ea assumenda obcaecati tempora placeat minus
						aperiam, fugiat, hic aut, dignissimos maxime repellendus in laboriosam itaque? Ad,
						beatae fugit.
					</p></div></div></div></section></main>



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
  index: () => index5,
  shared: () => page_exports2,
  stylesheets: () => stylesheets4
});
var index5, component4, file4, imports4, stylesheets4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_page2();
    index5 = 3;
    component4 = async () => (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    file4 = "_app/immutable/components/pages/about/_page.svelte-7d0fb01f.js";
    imports4 = ["_app/immutable/components/pages/about/_page.svelte-7d0fb01f.js", "_app/immutable/chunks/index-6e309def.js", "_app/immutable/chunks/_page-3aaf3a4f.js", "_app/immutable/chunks/SubFooter-54b0e1fc.js", "_app/immutable/chunks/SubHeader-ba5c0743.js", "_app/immutable/modules/pages/about/_page.js-64880ea0.js"];
    stylesheets4 = ["_app/immutable/assets/_page-e6bb63aa.css", "_app/immutable/assets/SubFooter-f5e442f6.css", "_app/immutable/assets/SubHeader-fb13526b.css"];
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
var pageTitle2, contactPage, Page3;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/contact/_page.svelte.js"() {
    init_chunks();
    init_page();
    init_SubFooter();
    init_SubHeader();
    pageTitle2 = "Contact";
    contactPage = true;
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>${escape(businessInfo.companyName)} | ${escape(pageTitle2)} | ${escape(businessInfo.cityAndState)}</title>`, ""}`, ""}

${validate_component(SubHeader, "SubHeader").$$render($$result, { pageTitle: pageTitle2 }, {}, {})}
<main id="${"contact"}"><div class="${"container"}"><div class="${"form-container"}"><h2>Get in touch.</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo sint tenetur non maxime
				alias!
			</p>
			<form id="${"contact-form"}" method="${"post"}" name="${"contact"}" netlify><input type="${"hidden"}" name="${"form-name"}" value="${"contact"}">

				<div class="${"form-control"}">
					<label for="${"fname"}">Name</label>
					<input id="${"fname"}" type="${"text"}" name="${"Client Name"}" placeholder="${"John Doe"}" required></div>
				<div class="${"form-control"}"><label for="${"email-input"}">Email</label>
					<input id="${"email-input"}" type="${"email"}" name="${"Email"}" placeholder="${"you@email.com"}" required></div>
				<div class="${"form-control"}"><label for="${"phone-input"}">Phone Number</label>
					<input id="${"phone-input"}" type="${"number"}" name="${"number"}" placeholder="${"+1 (918) 000-0000"}" required="${""}"></div>
				<div class="${"form-control"}"><label for="${"referral-input"}">How did you hear about us?</label>
					<input id="${"referral-input"}" type="${"text"}" name="${"Referral"}" placeholder="${"Facebook, Referral, Google"}" required="${""}"></div>
				<div class="${"form-control"}"><label for="${"message-input"}">How can we help?</label>
					<textarea id="${"message-input"}" name="${"message"}" cols="${"20"}" rows="${"5"}" placeholder="${"Hey business, I need help with..."}"></textarea></div>
				<button id="${"submit"}"><span>Submit Form </span></button>
				</form></div>
		<div class="${"info"}"><ul><li><p>Phone:</p>
					<a href="${"/"}">+1 (918) 000-0000</a></li>
				<li><p>Email:</p>
					<a href="${"/"}">business@email.com</a></li>
				<li><p>Business Hours:</p>
					<p class="${"hr"}">Monday - Friday: 7am - 5pm</p></li>
				<li><p>Business Location:</p>
					<a href="${"/"}">1234 East Tulsa, St. 74110</a></li></ul>
			<div class="${"map"}"><iframe title="${"Business Location"}" id="${"map"}" src="${"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206181.47982743487!2d-95.87801045!3d36.1523015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b692b8ddd12e8f%3A0xe76910c81bd96af7!2sTulsa%2C%20OK!5e0!3m2!1sen!2sus!4v1661391546906!5m2!1sen!2sus"}" allowfullscreen="${""}" loading="${"lazy"}" referrerpolicy="${"no-referrer-when-downgrade"}"></iframe></div></div></div></main>
${validate_component(SubFooter, "SubFooter").$$render($$result, { contactPage }, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  file: () => file5,
  imports: () => imports5,
  index: () => index6,
  shared: () => page_exports3,
  stylesheets: () => stylesheets5
});
var index6, component5, file5, imports5, stylesheets5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    init_page3();
    index6 = 4;
    component5 = async () => (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    file5 = "_app/immutable/components/pages/contact/_page.svelte-329e26da.js";
    imports5 = ["_app/immutable/components/pages/contact/_page.svelte-329e26da.js", "_app/immutable/chunks/index-6e309def.js", "_app/immutable/chunks/_page-3aaf3a4f.js", "_app/immutable/chunks/SubFooter-54b0e1fc.js", "_app/immutable/chunks/SubHeader-ba5c0743.js", "_app/immutable/modules/pages/contact/_page.js-3b1d8c82.js"];
    stylesheets5 = ["_app/immutable/assets/_page-bd8f0fd1.css", "_app/immutable/assets/SubFooter-f5e442f6.css", "_app/immutable/assets/SubHeader-fb13526b.css"];
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
    init_navigation_min();
    init_ssr_window_esm();
    pageTitle3 = "Our Portfolio";
    Page4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>${escape(businessInfo.companyName)} | ${escape(pageTitle3)} | ${escape(businessInfo.cityAndState)}</title>`, ""}`, ""}

${validate_component(SubHeader, "SubHeader").$$render($$result, { pageTitle: pageTitle3 }, {}, {})}
<main id="${"portfolio"}"><div class="${"grid"}"><div class="${"col"}"><div class="${"item"}"><img class="${""}" src="${"/home/lawn02.jpg"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"flex"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/home/servicemain.jpg"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div></div>
		<div class="${"col"}"><div class="${"flex"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/home/img10.jpg"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div>
			<div class="${"item"}"><img class="${""}" src="${"/home/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div>
		<div class="${"col"}"><div class="${"item"}"><img class="${""}" src="${"/home/lawn03.jpg"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"flex"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
				<div class="${"item"}"><img class="${""}" src="${"/home/lawn02.jpg"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div></div></div></main>
${validate_component(SubFooter, "SubFooter").$$render($$result, {}, {}, {})}

${``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  file: () => file6,
  imports: () => imports6,
  index: () => index7,
  shared: () => page_exports4,
  stylesheets: () => stylesheets6
});
var index7, component6, file6, imports6, stylesheets6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    init_page4();
    index7 = 5;
    component6 = async () => (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default;
    file6 = "_app/immutable/components/pages/portfolio/_page.svelte-7a7be7e2.js";
    imports6 = ["_app/immutable/components/pages/portfolio/_page.svelte-7a7be7e2.js", "_app/immutable/chunks/index-6e309def.js", "_app/immutable/chunks/_page-3aaf3a4f.js", "_app/immutable/chunks/SubFooter-54b0e1fc.js", "_app/immutable/chunks/SubHeader-ba5c0743.js", "_app/immutable/chunks/navigation.min-c1b3f0f1.js", "_app/immutable/modules/pages/portfolio/_page.js-bfdc5dc5.js"];
    stylesheets6 = ["_app/immutable/assets/_page-9e7852ca.css", "_app/immutable/assets/SubFooter-f5e442f6.css", "_app/immutable/assets/SubHeader-fb13526b.css", "_app/immutable/assets/navigation-e40dc6b1.css"];
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
  index: () => index8,
  shared: () => page_exports5,
  stylesheets: () => stylesheets7
});
var index8, component7, file7, imports7, stylesheets7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    init_page5();
    index8 = 6;
    component7 = async () => (await Promise.resolve().then(() => (init_page_svelte5(), page_svelte_exports5))).default;
    file7 = "_app/immutable/components/pages/testimonials/_page.svelte-7f9526cb.js";
    imports7 = ["_app/immutable/components/pages/testimonials/_page.svelte-7f9526cb.js", "_app/immutable/chunks/index-6e309def.js", "_app/immutable/chunks/_page-3aaf3a4f.js", "_app/immutable/chunks/SubFooter-54b0e1fc.js", "_app/immutable/chunks/SubHeader-ba5c0743.js", "_app/immutable/modules/pages/testimonials/_page.js-6ba93edd.js"];
    stylesheets7 = ["_app/immutable/assets/_page-a6567f91.css", "_app/immutable/assets/SubFooter-f5e442f6.css", "_app/immutable/assets/SubHeader-fb13526b.css"];
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

// node_modules/devalue/src/utils.js
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
  "\0": "\\u0000",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
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
      const next2 = str.charCodeAt(i + 1);
      if (code <= 56319 && next2 >= 56320 && next2 <= 57343) {
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

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var object_proto_names2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function uneval(value) {
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
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== object_proto_names2) {
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
  function stringify2(thing) {
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
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map(
          (v, i) => i in thing ? stringify2(v) : ""
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
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
          values.push(`Object(${stringify2(thing.valueOf())})`);
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
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
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

// .svelte-kit/output/server/index.js
var cookie = __toESM(require_cookie(), 1);
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
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
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, form }, {}, {})}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, form }, {}, {})}`}

${``}`;
});
var HttpError = class {
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class {
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
var ValidationError = class {
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
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
var DATA_SUFFIX = "/__data.js";
function get_cookies(request, url) {
  const new_cookies = /* @__PURE__ */ new Map();
  const defaults2 = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    get(name, opts) {
      const c = new_cookies.get(name);
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decode = (opts == null ? void 0 : opts.decode) || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(request.headers.get("cookie") ?? "", { decode });
      return req_cookies[name];
    },
    set(name, value, opts = {}) {
      new_cookies.set(name, {
        name,
        value,
        options: {
          ...defaults2,
          ...opts
        }
      });
    },
    delete(name, opts = {}) {
      new_cookies.set(name, {
        name,
        value: "",
        options: {
          ...defaults2,
          ...opts,
          maxAge: 0
        }
      });
    },
    serialize(name, value, opts) {
      return (0, import_cookie.serialize)(name, value, {
        ...defaults2,
        ...opts
      });
    }
  };
  return { cookies, new_cookies };
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
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name, value, options));
  }
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
  const headers = {
    "content-type": "application/javascript",
    "cache-control": "private, no-store"
  };
  try {
    return new Response(`window.__sveltekit_data = ${uneval(data)}`, { headers });
  } catch (e) {
    const error2 = e;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error2.path);
    const message = match ? `${error2.message} (data.${match[2]})` : error2.message;
    return new Response(`throw new Error(${JSON.stringify(message)})`, { headers });
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
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = handle_error_and_jsonify(event, options, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.url.pathname.endsWith(DATA_SUFFIX) || type === "application/json") {
    return new Response(JSON.stringify(body), {
      status,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  return static_error_page(options, status, body.message);
}
function handle_error_and_jsonify(event, options, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return options.handle_error(error2, event);
  }
}
function redirect_response(status, location, cookies = []) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  add_cookies_to_headers(response.headers, cookies);
  return response;
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
    if (state.initiator) {
      throw new Error(`${event.routeId} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
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
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (error2) {
    if (error2 instanceof Redirect) {
      return new Response(void 0, {
        status: error2.status,
        headers: { location: error2.location }
      });
    } else if (error2 instanceof ValidationError) {
      return json(error2.data, { status: error2.status });
    }
    throw error2;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (method === "PUT" || method === "PATCH" || method === "DELETE") {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter((val) => val != null);
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return error2;
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    return new Response("POST method not allowed. No actions exist for this page", {
      status: 405,
      headers: {
        allow: "GET"
      }
    });
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ValidationError) {
      check_serializability(data.data, event.routeId, "data");
      return action_json({ type: "invalid", status: data.status, data: data.data });
    } else {
      check_serializability(data, event.routeId, "data");
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        data
      });
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return action_json({
        type: "redirect",
        status: error2.status,
        location: error2.location
      });
    }
    if (!(error2 instanceof HttpError)) {
      options.handle_error(error2, event);
    }
    return action_json(
      {
        type: "error",
        error: handle_error_and_jsonify(event, options, error2)
      },
      {
        status: error2 instanceof HttpError ? error2.status : 500
      }
    );
  }
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event, leaf_node) {
  return leaf_node.server && event.request.method !== "GET" && event.request.method !== "HEAD";
}
async function handle_action_request(event, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    event.setHeaders({
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ValidationError) {
      return { type: "invalid", status: data.status, data: data.data };
    } else {
      return {
        type: "success",
        status: 200,
        data
      };
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return {
        type: "redirect",
        status: error2.status,
        location: error2.location
      };
    }
    return { type: "error", error: error2 };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions) {
  var _a;
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  const type = (_a = event.request.headers.get("content-type")) == null ? void 0 : _a.split("; ")[0];
  if (type !== "application/x-www-form-urlencoded" && type !== "multipart/form-data") {
    throw new Error(`Actions expect form-encoded data (received ${type})`);
  }
  return action(event);
}
function maybe_throw_migration_error(server2) {
  for (const method of ["POST", "PUT", "PATCH", "DELETE"]) {
    if (server2[method]) {
      throw new Error(
        `${method} method no longer allowed in +page.server, use actions instead. See the PR for more info: https://github.com/sveltejs/kit/pull/6469`
      );
    }
  }
}
function check_serializability(value, id, path) {
  const type = typeof value;
  if (type === "string" || type === "boolean" || type === "number" || type === "undefined") {
    return;
  }
  if (type === "object") {
    if (!value)
      return;
    if (Array.isArray(value)) {
      value.forEach((child, i) => {
        check_serializability(child, id, `${path}[${i}]`);
      });
      return;
    }
    if (Object.getPrototypeOf(value) === Object.prototype) {
      for (const key2 in value) {
        check_serializability(value[key2], id, `${path}.${key2}`);
      }
      return;
    }
  }
  throw new Error(`${path} returned from action in ${id} cannot be serialized as JSON`);
}
function create_fetch({ event, options, state, route, prerender_default, resolve_opts }) {
  const fetched = [];
  const initial_cookies = cookie.parse(event.request.headers.get("cookie") || "");
  const set_cookies = [];
  function get_cookie_header(url, header) {
    const new_cookies = {};
    for (const cookie2 of set_cookies) {
      if (!domain_matches(url.hostname, cookie2.options.domain))
        continue;
      if (!path_matches(url.pathname, cookie2.options.path))
        continue;
      new_cookies[cookie2.name] = cookie2.value;
    }
    const combined_cookies = {
      ...initial_cookies,
      ...new_cookies,
      ...cookie.parse(header ?? "")
    };
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  const fetcher = async (info, init2) => {
    const request = normalize_fetch_input(info, init2, event.url);
    const request_body = init2 == null ? void 0 : init2.body;
    let dependency;
    const response = await options.hooks.handleFetch({
      event,
      request,
      fetch: async (info2, init3) => {
        const request2 = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request2.url);
        if (!request2.headers.has("origin")) {
          request2.headers.set("origin", event.url.origin);
        }
        if ((request2.method === "GET" || request2.method === "HEAD") && (request2.mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request2.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && request2.credentials !== "omit") {
            const cookie2 = get_cookie_header(url, request2.headers.get("cookie"));
            if (cookie2)
              request2.headers.set("cookie", cookie2);
          }
          let response3 = await fetch(request2);
          if (request2.mode === "no-cors") {
            response3 = new Response("", {
              status: response3.status,
              statusText: response3.statusText,
              headers: response3.headers
            });
          } else {
            if (url.origin !== event.url.origin) {
              const acao = response3.headers.get("access-control-allow-origin");
              if (!acao || acao !== event.url.origin && acao !== "*") {
                throw new Error(
                  `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
                );
              }
            }
          }
          return response3;
        }
        let response2;
        const prefix2 = options.paths.assets || options.paths.base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix2) ? decoded.slice(prefix2.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file8 = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(options.read(file8), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request2);
        }
        if (request2.credentials !== "omit") {
          const cookie2 = get_cookie_header(url, request2.headers.get("cookie"));
          if (cookie2) {
            request2.headers.set("cookie", cookie2);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request2.headers.has("authorization")) {
            request2.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string" && !ArrayBuffer.isView(request_body)) {
          throw new Error("Request body must be a string or TypedArray");
        }
        response2 = await respond(request2, options, {
          prerender_default,
          ...state,
          initiator: route
        });
        if (state.prerendering) {
          dependency = { response: response2, body: null };
          state.prerendering.dependencies.set(url.pathname, dependency);
        }
        const set_cookie = response2.headers.get("set-cookie");
        if (set_cookie) {
          set_cookies.push(
            ...set_cookie_parser.splitCookiesString(set_cookie).map((str) => {
              const { name, value, ...options2 } = set_cookie_parser.parseString(str);
              return { name, value, options: options2 };
            })
          );
        }
        return response2;
      }
    });
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text2() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: request.url.startsWith(event.url.origin) ? request.url.slice(event.url.origin.length) : request.url,
              method: request.method,
              request_body,
              response_body: body,
              response: response2
            });
            const get = response2.headers.get;
            response2.headers.get = (key3) => {
              const lower = key3.toLowerCase();
              const value = get.call(response2.headers, lower);
              if (value && !lower.startsWith("x-sveltekit-")) {
                const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
                if (!included) {
                  throw new Error(
                    `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#handle`
                  );
                }
              }
              return value;
            };
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
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    return proxy;
  };
  return { fetcher, fetched, cookies: set_cookies };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
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
async function unwrap_promises(object) {
  var _a;
  for (const key2 in object) {
    if (typeof ((_a = object[key2]) == null ? void 0 : _a.then) === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
async function load_server_data({ event, state, node, parent: parent2 }) {
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
      return parent2();
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
async function load_data({ event, fetcher, node, parent: parent2, server_data_promise }) {
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
    parent: parent2
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
  function update3(fn) {
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
  return { set, update: update3, subscribe: subscribe2 };
}
function hash(value) {
  let hash2 = 5381;
  if (typeof value === "string") {
    let i = value.length;
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else if (ArrayBuffer.isView(value)) {
    const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    let i = buffer.length;
    while (i)
      hash2 = hash2 * 33 ^ buffer[--i];
  } else {
    throw new TypeError("value must be a string or TypedArray");
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
function serialize_data(fetched, filter2, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  for (const [key2, value] of fetched.response.headers) {
    if (filter2(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_body) {
    attrs.push(`data-hash=${escape_html_attr(hash(fetched.request_body))}`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
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
  "report-sample",
  "wasm-unsafe-eval"
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
  action_result
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
  const form_value = (action_result == null ? void 0 : action_result.type) === "success" || (action_result == null ? void 0 : action_result.type) === "invalid" ? action_result.data ?? null : null;
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      components: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
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
      data,
      form: form_value
    };
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
  const serialized = { data: "", form: "null" };
  try {
    serialized.data = uneval(branch.map(({ server_data }) => server_data));
  } catch (e) {
    const error3 = e;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error3.path);
    if (match)
      throw new Error(`${error3.message} (data.${match[2]})`);
    throw error3;
  }
  if (form_value) {
    serialized.form = uneval(form_value);
  }
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
    const init_app = `
			import { start } from ${s(prefixed(entry.file))};

			start({
				env: ${s(options.public_env)},
				hydrate: ${page_config.ssr ? `{
					status: ${status},
					error: ${s(error2)},
					node_ids: [${branch.map(({ node }) => node.index).join(", ")}],
					params: ${uneval(event.params)},
					routeId: ${s(event.routeId)},
					data: ${serialized.data},
					form: ${serialized.form}
				}` : "null"},
				paths: ${s(options.paths)},
				target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
				trailing_slash: ${s(options.trailing_slash)}
			});
		`;
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
	${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n	")}`;
  }
  if (options.service_worker) {
    const init_service_worker = `
			if ('serviceWorker' in navigator) {
				addEventListener('load', function () {
					navigator.serviceWorker.register('${prefixed("service-worker.js")}');
				});
			}
		`;
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
  const html2 = await resolve_opts.transformPageChunk({
    html: options.app_template({ head, body, assets: assets2, nonce: csp.nonce }),
    done: true
  }) || "";
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html",
    etag: `"${hash(html2)}"`
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
    add_cookies_to_headers(headers, cookies);
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  return new Response(html2, {
    status,
    headers
  });
}
async function respond_with_error({ event, options, state, status, error: error2, resolve_opts }) {
  const { fetcher, fetched, cookies } = create_fetch({
    event,
    options,
    state,
    route: GENERIC_ERROR,
    resolve_opts
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
      error: handle_error_and_jsonify(event, options, error2),
      branch,
      fetched,
      cookies,
      event,
      resolve_opts
    });
  } catch (error3) {
    if (error3 instanceof Redirect) {
      return redirect_response(error3.status, error3.location, cookies);
    }
    return static_error_page(
      options,
      error3 instanceof HttpError ? error3.status : 500,
      handle_error_and_jsonify(event, options, error3).message
    );
  }
}
async function render_page(event, route, page2, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  if (is_action_json_request(event)) {
    const node = await options.manifest._.nodes[page2.leaf]();
    if (node.server) {
      return handle_action_json_request(event, options, node.server);
    }
  }
  try {
    const nodes = await Promise.all([
      ...page2.layouts.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()),
      options.manifest._.nodes[page2.leaf]()
    ]);
    const leaf_node = nodes.at(-1);
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event, leaf_node)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if ((action_result == null ? void 0 : action_result.type) === "redirect") {
        return redirect_response(303, action_result.location);
      }
      if ((action_result == null ? void 0 : action_result.type) === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if ((action_result == null ? void 0 : action_result.type) === "invalid") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node == null ? void 0 : node.server);
    const data_pathname = event.url.pathname.replace(/\/$/, "") + DATA_SUFFIX;
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod && mod.actions) {
        throw new Error("Cannot prerender pages with actions");
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
      prerender_default: should_prerender,
      resolve_opts
    });
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
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
          if (node === leaf_node && (action_result == null ? void 0 : action_result.type) === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent2 = await server_promises[j];
                if (parent2)
                  Object.assign(data, await parent2.data);
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
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = `window.__sveltekit_data = ${JSON.stringify({
                type: "redirect",
                location: err.location
              })}`;
              state.prerendering.dependencies.set(data_pathname, {
                response: new Response(body),
                body
              });
            }
            return redirect_response(err.status, err.location, cookies);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = handle_error_and_jsonify(event, options, err);
          while (i--) {
            if (page2.errors[i]) {
              const index9 = page2.errors[i];
              const node2 = await options.manifest._.nodes[index9]();
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
                cookies
              });
            }
          }
          return static_error_page(options, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      const body = `window.__sveltekit_data = ${uneval({
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
      action_result,
      fetched,
      cookies
    });
  } catch (error2) {
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
                const parent2 = await functions[j]();
                if (parent2) {
                  Object.assign(data, parent2.data);
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
        (p, i) => p.catch((error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return {
            type: "error",
            error: handle_error_and_jsonify(event, options, error2),
            status: error2 instanceof HttpError ? error2.status : void 0
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
      return data_response(handle_error_and_jsonify(event, options, error2));
    }
  }
}
var default_transform = ({ html: html2 }) => html2;
var default_filter = () => false;
async function respond(request, options, state) {
  var _a, _b, _c, _d;
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
  let decoded;
  try {
    decoded = decodeURI(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !((_b = state.prerendering) == null ? void 0 : _b.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request)
    decoded = decoded.slice(0, -DATA_SUFFIX.length) || "/";
  if (!((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
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
    if (normalized !== url.pathname && !((_d = state.prerendering) == null ? void 0 : _d.fallback)) {
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
  const { cookies, new_cookies } = get_cookies(request, url);
  if (state.prerendering)
    disable_search(url);
  const event = {
    cookies,
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
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
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
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter
  };
  async function resolve(event2, opts) {
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
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter
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
          cookies: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(event2, route, options, state);
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          response = await render_page(event2, route, route.page, options, state, resolve_opts);
        } else {
          throw new Error("This should never happen");
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
      const error2 = e instanceof HttpError ? e : coalesce_to_error(e);
      return handle_fatal_error(event2, options, error2);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
  try {
    const response = await options.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        if (!is_data_request) {
          for (const key2 in headers) {
            const value = headers[key2];
            response2.headers.set(key2, value);
          }
        }
        add_cookies_to_headers(response2.headers, Array.from(new_cookies.values()));
        if (state.prerendering && event2.routeId !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.routeId));
        }
        return response2;
      }),
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
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
var app_template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n	<meta charset="utf-8" />\n	<link rel="icon" href="' + assets2 + '/favicon.png" />\n	<meta name="viewport" content="width=device-width" />\n\n	<!-- Business -->\n	<link rel="canonical" href="https://www.company.com">\n	<meta name="description" content="">\n	<meta name="keywords" content="">\n\n	<!--Social Media Display-->\n	<meta property="og:title" content="" />\n	<meta property="og:description" content="Rivas Web Designs Starter" />\n	<meta property="og:type" content="website" />\n	<meta property="og:url" content="" />\n	<meta property="og:image" content="/images/social.jpg" />\n	<meta property="og:image:secure_url" content="/images/social.jpg" />\n\n	<!--Favicons-->\n	<!-- https://realfavicongenerator.net/ -->\n	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n	<link rel="manifest" href="/site.webmanifest">\n	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">\n	<meta name="msapplication-TileColor" content="#da532c">\n	<meta name="theme-color" content="#ffffff">\n	<!-- Fonts -->\n	<link rel="preconnect" href="https://fonts.googleapis.com">\n	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n	<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"\n		rel="stylesheet">\n	<script src="https://identity.netlify.com/v1/netlify-identity-widget.js" defer><\/script>\n	<script defer>\n		if (window.netlifyIdentity) {\n			window.netlifyIdentity.on("init", user => {\n				if (!user) {\n					window.netlifyIdentity.on("login", () => {\n						document.location.href = "/admin/";\n					});\n				}\n			});\n		}\n	<\/script>\n	' + head + "\n</head>\n\n<body>\n	" + body + "\n</body>\n\n</html>";
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
      handle_error: (error2, event) => {
        return this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        }) ?? { message: event.routeId != null ? "Internal Error" : "Not Found" };
      },
      hooks: null,
      manifest: manifest2,
      paths: { base, assets },
      public_env: {},
      read,
      root: Root,
      service_worker: false,
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
      const module = await Promise.resolve().then(() => (init_hooks_server(), hooks_server_exports));
      if (module.externalFetch) {
        throw new Error("externalFetch has been removed \u2014 use handleFetch instead. See https://github.com/sveltejs/kit/pull/6565 for details");
      }
      this.options.hooks = {
        handle: module.handle || (({ event, resolve }) => resolve(event)),
        handleError: module.handleError || (({ error: error2 }) => console.error(error2.stack)),
        handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
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
  assets: /* @__PURE__ */ new Set([".DS_Store", "about/grass.svg", "about/owner.jpg", "about/owner.webp", "admin/config.yml", "admin/index.html", "android-chrome-192x192.png", "apple-touch-icon.png", "avatar.svg", "branch.svg", "browserconfig.xml", "check.svg", "clock.svg", "close.svg", "contact/emailg.svg", "contact/locationg.svg", "contact/phone-callg.svg", "down-chevron.svg", "email.svg", "favicon-16x16.png", "favicon-32x32.png", "favicon.ico", "favicon.png", "home/.DS_Store", "home/01.svg", "home/02.svg", "home/03.svg", "home/about.webp", "home/brick-wall.svg", "home/grass.png", "home/grasspseudo.png", "home/img02.jpeg", "home/img02.webp", "home/img02m.webp", "home/img06.webp", "home/img10.jpg", "home/lawn01.jpg", "home/lawn02.jpg", "home/lawn03.jpg", "home/leaf.png", "home/planning.svg", "home/plant-pot.svg", "home/plant.svg", "home/quality.svg", "home/servicemain.jpg", "home/tree-small.png", "home/tree.png", "img08l.webp", "img08m.webp", "img09.jpeg", "img09.webp", "img10.jpg", "img10.webp", "img10m.webp", "left-chevron.svg", "mstile-150x150.png", "next.svg", "phone.svg", "portfolio/img01.webp", "portfolio/img02.webp", "portfolio/img03.webp", "portfolio/img05M.webp", "portfolio/img07.webp", "portfolio/img11.webp", "prev.svg", "reviews/star.svg", "reviews/user.svg", "right-chevron.svg", "robots.txt", "safari-pinned-tab.svg", "site.webmanifest", "social/facebook.svg", "social/google.svg", "social/instagram.svg", "social/tiktok.svg", "social/twitter.svg", "social/youtube.svg", "subfooter/subfooter.webp", "twig.png", "up-chevron.svg"]),
  mimeTypes: { ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".webp": "image/webp", ".yml": "text/yaml", ".html": "text/html", ".png": "image/png", ".xml": "application/xml", ".ico": "image/vnd.microsoft.icon", ".jpeg": "image/jpeg", ".txt": "text/plain", ".webmanifest": "application/manifest+json" },
  _: {
    entry: { "file": "_app/immutable/start-7ad2a8c9.js", "imports": ["_app/immutable/start-7ad2a8c9.js", "_app/immutable/chunks/index-6e309def.js", "_app/immutable/chunks/singletons-61c882e4.js"], "stylesheets": [] },
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
