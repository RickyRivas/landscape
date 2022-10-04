<script>
	// business info from store
	import { businessInfo } from '../+page';
	import SubFooter from '../../lib/header/SubFooter.svelte';
	// components/ etc
	import SubHeader from './../../lib/header/SubHeader.svelte';
	import './contact.scss';
	let pageTitle = 'Contact';
	let contactPage = true;
</script>

<svelte:head>
	<title>{businessInfo.companyName} | {pageTitle} | {businessInfo.cityAndState}</title>
</svelte:head>

<SubHeader {pageTitle} />
<main id="contact">
	<div class="container">
		<div class="form-container">
			<h2>Get in touch.</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo sint tenetur non maxime
				alias!
			</p>
			<form id="contact-form" method="post" name="contact" netlify>
				<input type="hidden" name="form-name" value="contact" />

				<div class="form-control">
					<!-- -->
					<label for="fname">Name</label>
					<input id="fname" type="text" name="Client Name" placeholder="John Doe" required />
				</div>
				<div class="form-control">
					<label for="email-input">Email</label>
					<input id="email-input" type="email" name="Email" placeholder="you@email.com" required />
				</div>
				<div class="form-control">
					<label for="phone-input">Phone Number</label>
					<input
						id="phone-input"
						type="number"
						name="number"
						placeholder="+1 (918) 000-0000"
						required=""
					/>
				</div>
				<div class="form-control">
					<label for="referral-input">How did you hear about us?</label>
					<input
						id="referral-input"
						type="text"
						name="Referral"
						placeholder="Facebook, Referral, Google"
						required=""
					/>
				</div>
				<div class="form-control">
					<label for="message-input">How can we help?</label>
					<textarea
						id="message-input"
						name="message"
						cols="20"
						rows="5"
						placeholder="Hey business, I need help with..."
					/>
				</div>
				<button id="submit">
					<span> Submit Form </span>
				</button>
				<!-- -->
			</form>
		</div>
		<div class="info">
			<ul>
				<li>
					<p>Phone:</p>
					<a href="/">+1 (918) 000-0000</a>
				</li>
				<li>
					<p>Email:</p>
					<a href="/">business@email.com</a>
				</li>
				<li>
					<p>Business Hours:</p>
					<p class="hr">Monday - Friday: 7am - 5pm</p>
				</li>
				<li>
					<p>Business Location:</p>
					<a href="/">1234 East Tulsa, St. 74110</a>
				</li>
			</ul>
			<div class="map">
				<iframe
					title="Business Location"
					id="map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206181.47982743487!2d-95.87801045!3d36.1523015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b692b8ddd12e8f%3A0xe76910c81bd96af7!2sTulsa%2C%20OK!5e0!3m2!1sen!2sus!4v1661391546906!5m2!1sen!2sus"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				/>
			</div>
		</div>
	</div>
</main>
<SubFooter {contactPage} />
