import netlify from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
	adapter: netlify({ edge: false }),
	}
};

export default config;
