<script>
	import { businessInfo, mainServices, services } from './+page';
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
			<h1>
				We Specialize In Creating Outstanding Sceneries For Homeowners And Commercial Purposes.
			</h1>
			<p>
				Armed with world-class equipment and years of experience in the field, we're the go-to
				experts for landscaping services you can trust. No job is too big or small for our experts,
				call us today to get started!
			</p>
			<div class="btns">
				<a href="/contact" class="btn">Free Consultation</a>
			</div>
		</div>
	</section>
	<!-- ============================================ -->
	<!--                 Services                     -->
	<!-- ============================================ -->
	<section id="mini-services">
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
				<h2>Landscaping Experts With An Eye For Aesthetics And Practicality.</h2>
				<p>
					Based in Tulsa, Oklahoma, Lawncare started as a step up for the landscaping services in
					the area as a whole. Fast forward to 30 years, and today we stand as one of the
					highest-rated landscapers in the state, giving every client solutions that fit their needs
					like a glove
				</p>
				<p>
					Our priorities are efficiency, safety, and quality, if these 3 boxes aren’t checked off,
					then our work is yet to be completed. We provide you with the best results in record time,
					giving you a punctual, professional experience with no unwanted downtime or delays!
				</p>
				<p class="list-head"><strong>A list if you need it.</strong></p>
				<ul>
					{#each { length: 3 } as _}
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
				<div class="btns">
					<a href="/contact">Contact Us</a>
				</div>
			</div>
		</div>
	</section>
	<!-- ============================================ -->
	<!--                 Services                     -->
	<!-- ============================================ -->
	<section id="services">
		<div class="header">
			<h2>Residential<br /> Landscaping Services</h2>
		</div>
		<div class="container">
			{#each mainServices as { title, description, iconPath }}
				<div class="item">
					<img
						class=""
						src={iconPath}
						alt="icon"
						width="40"
						height="40"
						loading="lazy"
						decoding="async"
					/>
					<h3>{title}</h3>
					<p>
						{description}
					</p>
					<a class="link" href="/contact">Request Quote</a>
				</div>
			{/each}
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
	<section id="portfolio">
		<div class="header">
			<h2>Some of<br /> Our Latest Projects</h2>
		</div>
		<div class="grid">
			<div class="col">
				<div class="item">
					<img
						class=""
						src="/portfolio/img01.webp"
						width=""
						height=""
						alt=""
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="item">
					<img
						class=""
						src="/portfolio/img02.webp"
						width=""
						height=""
						alt=""
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="item">
					<img
						class=""
						src="/portfolio/img03.webp"
						width=""
						height=""
						alt=""
						loading="lazy"
						decoding="async"
					/>
				</div>
			</div>
			<div class="col">
				<div class="item">
					<img
						class=""
						src="/portfolio/img02.webp"
						width=""
						height=""
						alt=""
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="item">
					<img
						class=""
						src="/portfolio/img01.webp"
						width=""
						height=""
						alt=""
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="item">
					<img
						class=""
						src="/portfolio/img01.webp"
						width=""
						height=""
						alt=""
						loading="lazy"
						decoding="async"
					/>
				</div>
			</div>
			<div class="col">
				<div class="item">
					<img
						class=""
						src="/portfolio/img01.webp"
						width=""
						height=""
						alt=""
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="item">
					<img
						class=""
						src="/portfolio/img02.webp"
						width=""
						height=""
						alt=""
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="item">
					<img
						class=""
						src="/portfolio/img03.webp"
						width=""
						height=""
						alt=""
						loading="lazy"
						decoding="async"
					/>
				</div>
			</div>
		</div>
	</section>
</main>
<!-- ============================================ -->
<!--                 SubFooter                    -->
<!-- ============================================ -->
<SubFooter />
