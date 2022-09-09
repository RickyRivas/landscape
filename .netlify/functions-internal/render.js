const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([".DS_Store","about/grass.svg","about/owner.jpg","about/owner.webp","android-chrome-192x192.png","apple-touch-icon.png","browserconfig.xml","check.svg","contact/emailg.svg","contact/locationg.svg","contact/phone-callg.svg","down-chevron.svg","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","home/.DS_Store","home/01.svg","home/02.svg","home/03.svg","home/about.webp","home/brick-wall.svg","home/grass.png","home/grasspseudo.png","home/img02.jpeg","home/img02.webp","home/img02m.webp","home/img06.webp","home/img10.jpg","home/leaf.png","home/planning.svg","home/plant-pot.svg","home/plant.svg","home/quality.svg","home/servicemain.jpg","home/tree-small.png","home/tree.png","img08l.webp","img08m.webp","mstile-150x150.png","portfolio/img01.webp","portfolio/img02.webp","portfolio/img03.webp","portfolio/img05M.webp","portfolio/img07.webp","portfolio/img11.webp","reviews/star.svg","reviews/user.svg","robots.txt","safari-pinned-tab.svg","site.webmanifest","social/facebook.svg","social/google.svg","social/instagram.svg","social/tiktok.svg","social/twitter.svg","social/youtube.svg","subfooter/subfooter.webp","twig.png","up-chevron.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg",".webp":"image/webp",".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".jpeg":"image/jpeg",".txt":"text/plain",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-fd19a228.js","imports":["_app/immutable/start-fd19a228.js","_app/immutable/chunks/index-8c4849df.js","_app/immutable/chunks/singletons-fb8780fb.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
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
				endpoint: () => Promise.resolve().then(() => require('../server/entries/endpoints/sitemap.xml/_server.js'))
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
			
			return {  };
		}
	}
});
