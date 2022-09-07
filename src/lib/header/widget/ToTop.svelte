<script>
	export let y;
	const scrollToTop = () => {
		console.log(y);
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
</script>

<svelte:window bind:scrollY={y} />
<div class="fixed">
	<button class="top-link {y >= 100 ? 'show' : 'hide'}" id="js-top" on:click={scrollToTop}>
		<img src="/up-chevron.svg" alt="up arrow" class="" width="25" height="25" />
		<span class="screen-reader-text">Back to top</span>
	</button>
</div>

<style>
	.fixed {
		position: fixed;
		bottom: 1em;
		right: 0.5em;
		display: flex;
		flex-direction: column;
		z-index: 500;
	}
	.top-link {
		transition: all 0.25s ease-in-out;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		padding: 1px;
		width: 2.5rem;
		height: 2.5rem;
		background: var(--accent-color);
		border: 0;
		position: relative;
	}
	.top-link img {
		width: 1em;
		height: 1em;
		filter: invert(1);
	}
	.top-link.hide {
		visibility: hidden;
		opacity: 0;
	}

	.top-link.show {
		visibility: visible;
		opacity: 1;
	}

	.screen-reader-text {
		position: absolute;
		clip-path: inset(50%);
		margin: -1px;
		border: 0;
		padding: 0;
		width: 1px;
		height: 1px;
		overflow: hidden;
		word-wrap: normal !important;
		clip: rect(1px, 1px, 1px, 1px);
	}
	.screen-reader-text:focus {
		display: block;
		top: 5px;
		left: 5px;
		z-index: 100000;
		clip-path: none;
		background-color: #eee;
		padding: 15px 23px 14px;
		width: auto;
		height: auto;
		text-decoration: none;
		line-height: normal;
		color: #444;
		font-size: 1em;
		clip: auto !important;
	}
</style>
