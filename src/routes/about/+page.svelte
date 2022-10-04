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
				<a href="/" class="btn">Contact Us</a>
			</div>
		</div>
	</div>
	<section id="process">
		<div class="header">
			<h2>Get Things Done<br />With Our Proven Process</h2>
		</div>
		<div class="contain">
			<div class="block">
				<div class="graphic" data-count="1">
					<img
						class=""
						src="/img10m.webp"
						alt=""
						width="500"
						height="500"
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="content">
					<h3>Consultation</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum magnam temporibus
						doloribus velit soluta placeat totam officia provident qui quas architecto quae rerum,
						cumque voluptas delectus explicabo in nobis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Praesentium at sunt ea assumenda obcaecati tempora placeat minus
						aperiam, fugiat, hic aut, dignissimos maxime repellendus in laboriosam itaque? Ad,
						beatae fugit.
					</p>
				</div>
			</div>
			<div class="block">
				<div class="graphic" data-count="2">
					<img
						class=""
						src="/img09.jpeg"
						alt=""
						width="500"
						height="500"
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="content">
					<h3>Design</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum magnam temporibus
						doloribus velit soluta placeat totam officia provident qui quas architecto quae rerum,
						cumque voluptas delectus explicabo in nobis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Praesentium at sunt ea assumenda obcaecati tempora placeat minus
						aperiam, fugiat, hic aut, dignissimos maxime repellendus in laboriosam itaque? Ad,
						beatae fugit.
					</p>
				</div>
			</div>
			<div class="block">
				<div class="graphic" data-count="3">
					<img
						class=""
						src="/home/lawn02.jpg"
						alt=""
						width="500"
						height="500"
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="content">
					<h3>Build</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum magnam temporibus
						doloribus velit soluta placeat totam officia provident qui quas architecto quae rerum,
						cumque voluptas delectus explicabo in nobis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Praesentium at sunt ea assumenda obcaecati tempora placeat minus
						aperiam, fugiat, hic aut, dignissimos maxime repellendus in laboriosam itaque? Ad,
						beatae fugit.
					</p>
				</div>
			</div>
			<div class="block">
				<div class="graphic" data-count="4">
					<img
						class=""
						src="/home/lawn03.jpg"
						alt=""
						width="500"
						height="500"
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="content">
					<h3>Maintain</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum magnam temporibus
						doloribus velit soluta placeat totam officia provident qui quas architecto quae rerum,
						cumque voluptas delectus explicabo in nobis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Praesentium at sunt ea assumenda obcaecati tempora placeat minus
						aperiam, fugiat, hic aut, dignissimos maxime repellendus in laboriosam itaque? Ad,
						beatae fugit.
					</p>
				</div>
			</div>
		</div>
	</section>
</main>
<!-- ============================================ -->
<!--                 subfoot                      -->
<!-- ============================================ -->
<SubFooter />
