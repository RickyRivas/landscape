<script>
	import { businessInfo, mainServices, reasons, services, subReviews } from './+page';
	import SubFooter from '../lib/header/SubFooter.svelte';
	import '../styles/pages/home.scss';
	import '../styles/quick.scss';
	import '../styles/pages/old.scss';
	// Swiperjs
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/scrollbar';
	import 'swiper/css/pagination';
	import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
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
			<div class="box">
				<div class="content">
					<h2>Residential</h2>
					<ul>
						<li>
							<img
								class=""
								src="/right-chevron.svg"
								alt="arrow"
								width="12"
								height="12"
								decoding="async"
							/>
							Service One
						</li>
						<li>
							<img
								class=""
								src="/right-chevron.svg"
								alt="arrow"
								width="12"
								height="12"
								decoding="async"
							/>
							Service Two
						</li>
						<li>
							<img
								class=""
								src="/right-chevron.svg"
								alt="arrow"
								width="12"
								height="12"
								decoding="async"
							/>Service Three
						</li>
						<li>
							<img
								class=""
								src="/right-chevron.svg"
								alt="arrow"
								width="12"
								height="12"
								decoding="async"
							/>Service Four
						</li>
						<li>
							<img
								class=""
								src="/right-chevron.svg"
								alt="arrow"
								width="12"
								height="12"
								decoding="async"
							/>Service Five
						</li>
					</ul>
				</div>
			</div>
			<div class="box">
				<div class="content">
					<h2>Commercial</h2>
					<ul>
						<li>
							<img
								class=""
								src="/right-chevron.svg"
								alt="arrow"
								width="12"
								height="12"
								decoding="async"
							/>
							Service One
						</li>
						<li>
							<img
								class=""
								src="/right-chevron.svg"
								alt="arrow"
								width="12"
								height="12"
								decoding="async"
							/>
							Service Two
						</li>
						<li>
							<img
								class=""
								src="/right-chevron.svg"
								alt="arrow"
								width="12"
								height="12"
								decoding="async"
							/>
							Service Three
						</li>
						<li>
							<img
								class=""
								src="/right-chevron.svg"
								alt="arrow"
								width="12"
								height="12"
								decoding="async"
							/>
							Service Four
						</li>
						<li>
							<img
								class=""
								src="/right-chevron.svg"
								alt="arrow"
								width="12"
								height="12"
								decoding="async"
							/>
							Service Five
						</li>
					</ul>
				</div>
			</div>
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
					Based in Dallas, Texas Lawncare started as a step up for the landscaping services in the
					area as a whole. Fast forward to 30 years, and today we stand as one of the highest-rated
					landscapers in the state, giving every client solutions that fit their needs like a glove
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
				<h2>Trusted Landscapers for Dallas for over 20 years</h2>
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
					src="/home/lawn01.jpg"
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
	<section class="main-slider">
		<Swiper
			modules={[Navigation, Autoplay, Scrollbar]}
			navigation={{
				prevEl: '.swiper-prev-custom',
				nextEl: '.swiper-next-custom'
			}}
			autoplay={{
				delay: 10000
			}}
			scrollbar={{
				hide: false
			}}
			class="swiper swiper-container swiper-main"
			spaceBetween={0}
			slidesPerView={1}
			loop={false}
		>
			<SwiperSlide class="swiper-slide">
				<img
					class="main-img"
					src="/home/servicemain.jpg"
					alt="beautiful landscape"
					width="1920"
					height="1100"
					loading="lazy"
					decoding="async"
				/>
			</SwiperSlide>
			<SwiperSlide class="swiper-slide">
				<img
					class="main-img"
					src="/home/lawn02.jpg"
					alt="beautiful landscape"
					width="1920"
					height="1100"
					loading="lazy"
					decoding="async"
				/>
			</SwiperSlide>
			<SwiperSlide class="swiper-slide">
				<img
					class="main-img"
					src="/home/lawn03.jpg"
					alt="beautiful landscape"
					width="1920"
					height="1100"
					loading="lazy"
					decoding="async"
				/>
			</SwiperSlide>
		</Swiper>
	</section>
	<!-- divider -->
	<!-- divider -->
	<!-- divider -->
	<section id="services">
		<div class="header">
			<h2>Our<br /> Featured Services</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt eius nihil, commodi
				reiciendis at aperiam voluptatibus fuga doloremque, aspernatur quam, perferendis hic. Iusto
				iste, sequi mollitia alias ipsa quam.
			</p>
		</div>
		<div class="container">
			{#each mainServices as { title, description, iconPath, imageUrl }}
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
						<a class="link" href="/services/{title}">Learn More</a>
					</div>
				</div>
			{/each}
		</div>
		<a href="/services" id="cta" class="btn">View All Services</a>
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
			<div class="box">
				<div class="item">
					<img
						class=""
						src="/home/lawn01.jpg"
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
						src="/home/lawn02.jpg"
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
						src="/home/lawn03.jpg"
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
			<div class="box mid">
				<a href="/portfolio" class="item">
					<img
						class=""
						src="/home/lawn01.jpg"
						width=""
						height=""
						alt=""
						loading="lazy"
						decoding="async"
					/>
					<p>View Entire Portfolio</p>
				</a>
			</div>
			<div class="box">
				<div class="item">
					<img
						class=""
						src="/home/lawn02.jpg"
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
						src="/home/lawn03.jpg"
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
						src="/home/lawn01.jpg"
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
	<!--                 misc/test                    -->
	<!-- ============================================ -->
	<section id="test">
		<div class="container">
			<div class="item">
				<h2><span>30</span>Years</h2>
				<p>Experienced professionals who know how to build long-lasting landscaping solutions.</p>
			</div>
			<div class="item">
				<h2><span>Local</span>Business</h2>
				<p>
					Lawncare has been trusted and highly rated in the state for years, and for good reason.
				</p>
			</div>
			<div class="item">
				<h2><span>30</span>Workers</h2>
				<p>
					No job is too big or small for Lawncare. No matter your needs, we can cover them
					flawlessly.
				</p>
			</div>
		</div>
	</section>
	<div id="why-over">
		<div class="img-container">
			<picture>
				<source media="(max-width: 600px)" srcset="/img09.webp" />
				<source media="(min-width: 601px)" srcset="/img09.webp" />
				<img
					aria-hidden="true"
					decoding="async"
					src="/img09.webp"
					alt=""
					width="276"
					height="132"
				/>
			</picture>
		</div>
		<div class="text">
			<h2>Client Reviews</h2>
			<Swiper
				modules={[Navigation, Autoplay]}
				navigation={{
					prevEl: '.swiper-prev-custom',
					nextEl: '.swiper-next-custom'
				}}
				autoplay={{
					delay: 10000
				}}
				class="swiper swiper-container"
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
			>
				{#each subReviews as { review, testifier }}
					<SwiperSlide class="swiper-slide"
						><div class="swiper-content">
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
								<img src="/avatar.svg" alt="person icon" width="40" height="40" />
								<div>
									<h4>{testifier}</h4>
									<p>Certified Google Review</p>
								</div>
							</div>
						</div></SwiperSlide
					>
				{/each}
			</Swiper>

			<div class="swiper-next-custom">
				<img src="/right-chevron.svg" alt="" />
			</div>
			<div class="swiper-prev-custom">
				<img src="/left-chevron.svg" alt="" />
			</div>
			<a href="/" class="btn">Leave a review</a>
		</div>
	</div>
</main>
<!-- ============================================ -->
<!--                 SubFooter                    -->
<!-- ============================================ -->
<SubFooter />
