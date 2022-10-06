<script>
	// business info from store
	import { businessInfo, reviews, allServices } from '../+page';
	// Base
	import { fade } from 'svelte/transition';
	import SubFooter from '../../lib/header/SubFooter.svelte';
	import SubHeader from '../../lib/header/SubHeader.svelte';
	import './misc.scss';
	let pageTitle = 'Our Services';
</script>

<svelte:head>
	<title>{businessInfo.companyName} | {pageTitle} | {businessInfo.cityAndState}</title>
</svelte:head>

<SubHeader {pageTitle} />
<main id="services">
	<div class="header">
		<h2>Lorem ipsum dolor sit amet.</h2>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt eius nihil, commodi
			reiciendis at aperiam voluptatibus fuga doloremque, aspernatur quam, perferendis hic. Iusto
			iste, sequi mollitia alias ipsa quam.
		</p>
	</div>
	<div class="container">
		{#each allServices as { id, title, description, iconPath, imageUrl }}
			<div class="item">
				<div class="head">
					<img
						class=""
						src={imageUrl}
						alt=""
						width="500"
						height="500"
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="body">
					<div class="abs">
						<img
							class=""
							src={iconPath}
							alt="icon"
							width="40"
							height="40"
							loading="lazy"
							decoding="async"
						/>
					</div>
					<h3>{title}</h3>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, aliquam.</p>
					<a class="link" href="/services/{id}">Learn More</a>
				</div>
			</div>
		{/each}
	</div>
</main>
<SubFooter />
