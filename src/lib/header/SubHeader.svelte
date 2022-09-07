<script>
	// prop
	export let pageTitle;
	// external css
	import '../../styles/layout/subheading.scss';
</script>

<section id="subheader">
	<img aria-hidden="true" src="/twig.png" alt="twig" class="abs-head" width="100" height="139" />
	<h1>{pageTitle}</h1>
	<picture>
		<source media="(max-width: 600px)" srcset="/img08m.webp" />
		<source media="(min-width: 601px)" srcset="/img08l.webp" />
		<img aria-hidden="true" decoding="async" src="/img08.png" alt="" width="276" height="132" />
	</picture>
	<div class="overlay" />
</section>
