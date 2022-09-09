<script>
	import { businessInfo, mainServices, reasons, services, subReviews } from './+page';
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
				<p class="list-head"><strong>Lorem ipsum dolor sit.</strong></p>
				<ul>
					{#each { length: 3 } as _}
						<li>
							<svg
								width="25"
								height="25"
								viewBox="0 0 683 683"
								fill="currentcolor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_102_2)">
									<path
										d="M592.234 86.6666L244.406 409.349L97.3073 252.37L-1.52588e-05 343.552L237.646 597.161L682.667 184.693L592.234 86.6666Z"
										fill="currentcolor"
									/>
								</g>
							</svg>
							<span
								>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non eligendi
								facilis ipsa.</span
							>
						</li>
					{/each}
				</ul>
				<div class="btns">
					<a class="btn" href="/contact">Contact Us</a>
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
				<h2>Trusted Landscapers for Tulsa for over 20 years</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
					officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				</p>
				<p class="list-head"><strong>Lorem ipsum dolor sit amet.</strong></p>
				<ul>
					{#each { length: 4 } as _}
						<li>
							<svg
								width="25"
								height="25"
								viewBox="0 0 683 683"
								fill="currentcolor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_102_2)">
									<path
										d="M592.234 86.6666L244.406 409.349L97.3073 252.37L-1.52588e-05 343.552L237.646 597.161L682.667 184.693L592.234 86.6666Z"
										fill="currentcolor"
									/>
								</g>
							</svg>

							<span
								>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid qui quasi!</span
							>
						</li>
					{/each}
				</ul>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
					officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				</p>
				<div class="btns">
					<a href="/contact" class="btn">Contact Us</a>
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
	<!-- ============================================ -->
	<!--                 Services                     -->
	<!-- ============================================ -->
	<img
		class="main-img"
		src="/home/servicemain.jpg"
		alt="beautiful landscape"
		width="1920"
		height="1100"
		loading="lazy"
		decoding="async"
	/>
	<section id="services">
		<div class="header">
			<h2>Residential<br /> Landscaping Services</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt eius nihil, commodi
				reiciendis at aperiam voluptatibus fuga doloremque, aspernatur quam, perferendis hic. Iusto
				iste, sequi mollitia alias ipsa quam.
			</p>
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
	<!--                 Why Choose Us                -->
	<!-- ============================================ -->
	<section id="why">
		<div class="container">
			<h2>Why Should You <br />Choose Us?</h2>
			<p>
				The answer is simple: Experience. We're passionate about what we do, which to our customers
				means that we bring our A-game to every single project. With Lawncare, you're investing in
				quality, punctuality, and flawless execution, with landscaping solutions that withstand the
				test of time.
			</p>
			<div class="items">
				{#each reasons as { title, description }}
					<div class="item">
						<div class="circle">
							<img
								class=""
								src="/home/quality.svg"
								alt="icon"
								width="25"
								height="25"
								loading="lazy"
								decoding="async"
							/>
						</div>
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
				{/each}
			</div>
			<img
				class="decor"
				src="/home/img06.webp"
				alt=""
				width="500"
				height="749"
				loading="lazy"
				decoding="async"
				aria-hidden="true"
			/>
		</div>
	</section>
	<!-- ============================================ -->
	<!--                 Portfolio                    -->
	<!-- ============================================ -->
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
	<!-- ============================================ -->
	<!--                 misc                          -->
	<!-- ============================================ -->
	<div id="misc">
		<div class="container">
			<div class="item">
				<h2>
					<span>30</span> Years
				</h2>
				<p>Experienced professionals who know how to build long-lasting landscaping solutions.</p>
			</div>
			<div class="item">
				<h2>
					<span>Local</span> Business
				</h2>
				<p>
					Lawncare has been trusted and highly rated in the state for years, and for good reason.
				</p>
			</div>
			<div class="item">
				<h2>
					<span>15</span> Workers
				</h2>
				<p>
					No job is too big or small for Lawncare. No matter your needs, we can cover them
					flawlessly
				</p>
			</div>
		</div>
	</div>
	<!-- ============================================ -->
	<!--                 Testimonials                 -->
	<!-- ============================================ -->
	<section id="test">
		<div class="container">
			<div class="header">
				<h2>What Our Clients Say</h2>
			</div>
			<div class="items">
				{#each subReviews as { review, testifier }}
					<div class="item">
						<div class="stars">
							{#each { length: 5 } as _}
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									role="img"
								>
									<path
										d="M30 11.5908L19.0993 10.8741L14.994 0.560669L10.8888 10.8741L0 11.5908L8.3516 18.6821L5.61105 29.4393L14.994 23.5084L24.3771 29.4393L21.6365 18.6821L30 11.5908Z"
										fill="currentcolor"
									/>
								</svg>
							{/each}
						</div>
						<p>
							{review}
						</p>
						<div class="info">
							<img src="/reviews/user.svg" alt="testifier" width="40" height="40" />
							<div>
								<h4>{testifier}</h4>
								<p>Homeowner</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<a class="btn" href="/testimonials">View All Reviews</a>
		</div>
	</section>
</main>
<!-- ============================================ -->
<!--                 SubFooter                    -->
<!-- ============================================ -->
<SubFooter />
