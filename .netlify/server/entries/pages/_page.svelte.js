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
var import_chunks = require("../../chunks/index.js");
var import_page = require("./_page.js");
var import_SubFooter = require("../../chunks/SubFooter.js");
const home = "";
const quick = "";
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>${(0, import_chunks.e)(import_page.businessInfo.companyName)} | ${(0, import_chunks.e)(import_page.businessInfo.industry)} | ${(0, import_chunks.e)(import_page.businessInfo.cityAndState)}</title>`, ""}`, ""}

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
	
	
	
	<section id="${"mini-services"}"><div class="${"container"}">${(0, import_chunks.f)(import_page.services, ({ name, description }, i) => {
    return `<div class="${"item"}"><div class="${"icon"}"><img class="${""}" src="${"/home/0" + (0, import_chunks.e)(i + 1, true) + ".svg"}" alt="${""}" width="${"100"}" height="${"100"}" loading="${"lazy"}" decoding="${"async"}"></div>
					<h2>${(0, import_chunks.e)(name)}</h2>
					<p>${(0, import_chunks.e)(description)}</p>
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
				<ul>${(0, import_chunks.f)({ length: 3 }, (_) => {
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
				<ul>${(0, import_chunks.f)({ length: 4 }, (_) => {
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
		<div class="${"container"}">${(0, import_chunks.f)(import_page.mainServices, ({ title, description, iconPath }) => {
    return `<div class="${"item"}"><img class="${""}"${(0, import_chunks.d)("src", iconPath, 0)} alt="${"icon"}" width="${"40"}" height="${"40"}" loading="${"lazy"}" decoding="${"async"}">
					<h3>${(0, import_chunks.e)(title)}</h3>
					<p>${(0, import_chunks.e)(description)}</p>
					<a class="${"link"}" href="${"/contact"}">Request Quote</a>
				</div>`;
  })}</div></section>
	
	
	
	<section id="${"why"}"><div class="${"container"}"><h2>Why Should You <br>Choose Us?</h2>
			<p>The answer is simple: Experience. We&#39;re passionate about what we do, which to our customers
				means that we bring our A-game to every single project. With Lawncare, you&#39;re investing in
				quality, punctuality, and flawless execution, with landscaping solutions that withstand the
				test of time.
			</p>
			<div class="${"items"}">${(0, import_chunks.f)(import_page.reasons, ({ title, description }) => {
    return `<div class="${"item"}"><div class="${"circle"}"><img class="${""}" src="${"/home/quality.svg"}" alt="${"icon"}" width="${"25"}" height="${"25"}" loading="${"lazy"}" decoding="${"async"}"></div>
						<h3>${(0, import_chunks.e)(title)}</h3>
						<p>${(0, import_chunks.e)(description)}</p>
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
			<div class="${"items"}">${(0, import_chunks.f)(import_page.subReviews, ({ review, testifier }) => {
    return `<div class="${"item"}"><div class="${"stars"}">${(0, import_chunks.f)({ length: 5 }, (_) => {
      return `<svg width="${"30"}" height="${"30"}" viewBox="${"0 0 30 30"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" aria-hidden="${"true"}" role="${"img"}"><path d="${"M30 11.5908L19.0993 10.8741L14.994 0.560669L10.8888 10.8741L0 11.5908L8.3516 18.6821L5.61105 29.4393L14.994 23.5084L24.3771 29.4393L21.6365 18.6821L30 11.5908Z"}" fill="${"currentcolor"}"></path></svg>`;
    })}</div>
						<p>${(0, import_chunks.e)(review)}</p>
						<div class="${"info"}"><img src="${"/reviews/user.svg"}" alt="${"testifier"}" width="${"40"}" height="${"40"}">
							<div><h4>${(0, import_chunks.e)(testifier)}</h4>
								<p>Homeowner</p>
							</div></div>
					</div>`;
  })}</div>
			<a class="${"btn"}" href="${"/testimonials"}">View All Reviews</a></div></section></main>



${(0, import_chunks.v)(import_SubFooter.S, "SubFooter").$$render($$result, {}, {}, {})}`;
});
