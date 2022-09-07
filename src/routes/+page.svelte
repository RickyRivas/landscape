<script>
	import { businessInfo, services } from './+page';
	import SubFooter from '../lib/header/SubFooter.svelte';
	import '../styles/pages/home.scss';
	import '../styles/quick.scss';
</script>

<svelte:head>
	<title>{businessInfo.companyName} | {businessInfo.industry} | {businessInfo.cityAndState}</title>
</svelte:head>

<main id="home">
	<!-- ============================================ -->
	<!--                 Landing                      -->
	<!-- ============================================ -->
	<section id="landing">
		<picture>
			<source media="(max-width: 600px)" srcset="/home/img02m.webp" />
			<source media="(min-width: 601px)" srcset="/home/img02.webp" />
			<img
				aria-hidden="true"
				decoding="async"
				src="/home/img02.jpeg"
				alt="hero"
				width="276"
				height="132"
			/>
		</picture>
		<div class="overlay" />
		<div class="content">
			<h1>Main Keywords of What They Do, And Location If Needed</h1>
			<p>
				Talk about the other services they do with keywords and locations where they serve. Try to
				make this 2-3 lines tall.
			</p>
			<div class="btns">
				<a href="/contact" class="btn">Main Call to Action</a>
			</div>
		</div>
	</section>
	<!-- ============================================ -->
	<!--                 Services                     -->
	<!-- ============================================ -->
	<section id="services">
		<div class="container">
			{#each services as { name, description }, i}
				<div class="item">
					<div class="icon">
						<img
							class=""
							src="/home/0{i + 1}.svg"
							alt=""
							width="100"
							height="100"
							loading="lazy"
							decoding="async"
						/>
					</div>
					<h2>{name}</h2>
					<p>
						{description}
					</p>
				</div>
			{/each}
		</div>
	</section>
	<!-- ============================================ -->
	<!--                 About Us                     -->
	<!-- ============================================ -->
	<section id="layout01">
		<div class="container">
			<div class="img-container">
				<img
					class=""
					src="/home/about.webp"
					alt="Owner"
					width="500"
					height="750"
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="content">
				<h2>Trusted home builders for (main city) for over 20 years</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
					officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				</p>
				<p class="list-head"><strong>A list if you need it.</strong></p>
				<ul>
					{#each { length: 4 } as _}
						<li>
							<img
								class=""
								src="/check.svg"
								alt="checkmark"
								width="20"
								height="20"
								loading="lazy"
								decoding="async"
							/>
							<span
								>List item about something, this one is going to two lines so you can see what it
								looks like</span
							>
						</li>
					{/each}
				</ul>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
					officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				</p>
				<div class="btns">
					<a href="/contact">Contact Us</a>
				</div>
			</div>
		</div>
	</section>
	<!-- ============================================ -->
	<!--                 Misc                         -->
	<!-- ============================================ -->
	<section id="layout02">
		<div class="container">
			<div class="content">
				<h2>Trusted home builders for (main city) for over 20 years</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
					officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				</p>
				<p class="list-head"><strong>A list if you need it.</strong></p>
				<ul>
					{#each { length: 4 } as _}
						<li>
							<img
								class=""
								src="/check.svg"
								alt="checkmark"
								width="20"
								height="20"
								loading="lazy"
								decoding="async"
							/>
							<span
								>List item about something, this one is going to two lines so you can see what it
								looks like</span
							>
						</li>
					{/each}
				</ul>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
					officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				</p>
				<div class="btns">
					<a href="/contact">Contact Us</a>
				</div>
			</div>
			<div class="img-container">
				<img
					class=""
					src="/home/about.webp"
					alt="Owner"
					width="500"
					height="750"
					loading="lazy"
					decoding="async"
				/>
			</div>
		</div>
	</section>
</main>
<!-- ============================================ -->
<!--                 SubFooter                    -->
<!-- ============================================ -->
<SubFooter />
