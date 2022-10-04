<script>
	// prop
	export let pageTitle;
	// external css
	import '../../styles/layout/subheading.scss';
</script>

<section id="subheader">
	<img aria-hidden="true" src="/twig.png" alt="twig" class="abs-head" width="100" height="139" />
	<h1>{pageTitle}</h1>
	<div class="overlay" />
</section>
