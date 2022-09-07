<script>
	// import store to tie business info to this page
	import { businessInfo } from '../+page';
	// import external styles for this page
	import SubFooter from '../../lib/header/SubFooter.svelte';
	import SubHeader from '../../lib/header/SubHeader.svelte';
	let pageTitle = 'About Us';
	import './about.scss';
</script>

<svelte:head>
	<title>{businessInfo.companyName} | {pageTitle} | {businessInfo.cityAndState}</title>
</svelte:head>

<!-- ============================================ -->
<!--                 subhead                      -->
<!-- ============================================ -->
<SubHeader {pageTitle} />
<main id="about">
	<!-- ============================================ -->
	<!--                 Main About                   -->
	<!-- ============================================ -->
	<div class="container">
		<div class="img-container">
			<img
				class=""
				src="/about/owner.webp"
				alt="Owner"
				width="500"
				height="750"
				loading="lazy"
				decoding="async"
			/>
			<div class="name">
				<p>Richard Smith</p>
				<span>Owner</span>
			</div>
		</div>
		<div class="content">
			<div class="flex">
				<img
					class=""
					src="/about/grass.svg"
					alt=""
					width="25"
					height="25"
					loading="lazy"
					decoding="async"
				/>
				<span>Our Story</span>
			</div>
			<h2>Who we are</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
				officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				pariatur harum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, suscipit
				laborum est perferendis illo, totam, itaque dolores nulla debitis impedit reiciendis
				repellendus in id. Consectetur placeat quis dolores voluptatem quibusdam?
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
				officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				pariatur harum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, suscipit
				laborum est perferendis illo, totam, itaque dolores nulla debitis impedit reiciendis
				repellendus in id. Consectetur placeat quis dolores voluptatem quibusdam?
			</p>
			<div class="btns">
				<a href="/">Contact Us</a>
			</div>
		</div>
	</div>
</main>
<!-- ============================================ -->
<!--                 subfoot                      -->
<!-- ============================================ -->
<SubFooter />
