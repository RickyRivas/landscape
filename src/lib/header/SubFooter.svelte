<script>
	import '../../styles/layout/subfooter.scss';
	export let contactPage = false;
</script>

<div id="subfooter">
	{#if contactPage}
		<div class="container">
			<p>Thank you for visiting our website. We look forward to hearing from you!</p>
			<a class="btn" href="/">Go Home</a>
		</div>
	{:else}
		<div class="container">
			<p>
				Join Us Today, And Let Us Help You Revamp Your While You Enjoy A Seamless, Stress-Free
				Experience.
			</p>
			<a class="btn" href="/contact">Request an Estimate</a>
		</div>
	{/if}
</div>
