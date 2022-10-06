<script>
	import { allServices } from './../../+page.js';
	import SubHeader from '../../../lib/header/SubHeader.svelte';
	import './slug.scss';
	import SubFooter from '../../../lib/header/SubFooter.svelte';
	// export let data;
	// const { service } = data;
	// let pageTitle = service.title;
	let pageTitle = 'Service Topic';
</script>

<SubHeader {pageTitle} />

<main id="service">
	<section id="slug">
		<!-- <div class="service-image">
			<img class="" src={service.imageUrl} alt="" width="500" height="500" decoding="async" />
		</div> -->
		<h2>Service Overview - Content coming soon!</h2>
		<!-- <p>{service.definition}</p> -->
		<p>
			Landscaping requires a certain understanding of horticulture and artistic design, but is not
			limited to plants and horticulture. Sculpting land to enhance usability (patio, walkways,
			ponds, water features) are also examples of landscaping being used. When intended as purely an
			aesthetic change, the term Ornamental Landscaping is used.
		</p>
	</section>
	<!-- sidebar  -->
	<!-- sidebar  -->
	<!-- sidebar  -->
	<div class="sidebar">
		<img
			class="stock"
			src="/img09.jpeg"
			alt=""
			width="500"
			height="750"
			loading="lazy"
			decoding="async"
		/>
		<h3>Our Services</h3>
		<div class="list">
			{#each allServices as { id, title }}
				<a href="/services/{id}">
					<img
						class=""
						src="/right-chevron.svg"
						alt=""
						width="12"
						height="12"
						loading="lazy"
						decoding="async"
					/>
					{title}</a
				>
			{/each}
		</div>
	</div>
</main>
<SubFooter />
