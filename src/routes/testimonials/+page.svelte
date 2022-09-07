<script>
	// business info from store
	import { businessInfo, reviews } from '../+page';
	// Base
	import { fade } from 'svelte/transition';
	import SubFooter from '../../lib/header/SubFooter.svelte';
	import SubHeader from '../../lib/header/SubHeader.svelte';
	import './misc.scss';
	let pageTitle = 'Testimonials';
</script>

<svelte:head>
	<title>{businessInfo.companyName} | {pageTitle} | {businessInfo.cityAndState}</title>
</svelte:head>

<SubHeader {pageTitle} />
<main id="services">
	<div class="container">
		{#each reviews as { review, testifier }, i}
			<div class="item" in:fade={{ y: 200, duration: 1000, delay: i * 200 }}>
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
</main>
<SubFooter />
