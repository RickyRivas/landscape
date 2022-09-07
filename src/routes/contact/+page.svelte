<script>
	// business info from store
	import { businessInfo } from '../+page';
	// components/ etc
	import SubHeader from './../../lib/header/SubHeader.svelte';
	import './contact.scss';
	let pageTitle = 'Contact Us';
</script>

<svelte:head>
	<title>{businessInfo.companyName} | {pageTitle} | {businessInfo.cityAndState}</title>
</svelte:head>

<SubHeader {pageTitle} />
<main id="contact">
	<div class="container">
		<div class="info-container">
			<!-- <span>Contact Us</span> -->
			<h2>Contact us for your landscaping needs.</h2>
			<div class="para">
				<p>
					Feel free to contact us for any construction services. Give us a call for immediate help.
				</p>
			</div>
			<ul>
				<li>
					<img src="/contact/phone-callg.svg" alt="Phone Icon" height="50" width="50" />
					<div>
						<p>Give Us a Call</p>
						<a href="tel:{businessInfo.phone}" class="phone">{businessInfo.phone}</a>
					</div>
				</li>
				<li>
					<img src="/contact/locationg.svg" alt="Phone Icon" height="50" width="50" />
					<div>
						<p>Our Location</p>
						<a href={businessInfo.googleLink} class="location">{businessInfo.fullAddress}</a>
					</div>
				</li>
				<li>
					<img src="/contact/emailg.svg" alt="Phone Icon" height="50" width="50" />
					<div>
						<p>Business Hours</p>
						<a href="/" class="phone">Monday - Friday: 8:00am-5:00pm</a>
					</div>
				</li>
			</ul>
		</div>
		<div class="form-container">
			<form name="Contact Form" id="contact-form" method="POST" data-netlify="true">
				<div class="flex">
					<div class="form-control dropdown">
						<p>How did you hear about us?</p>
						<select name="contact-reason" form="contact-form" aria-label="contact reason" required>
							<option value="" disabled selected>Select an option</option>
							<option value="option">Option 1</option>
							<option value="optiontwo">Option 2</option>
							<option value="option3">Option 3</option>
						</select>
					</div>
					<div class="form-control">
						<p>Your Name:</p>
						<input type="text" name="name" aria-label="Your name" placeholder="Name" required />
					</div>
				</div>
				<div class="flex">
					<div class="form-control">
						<p>Your Email:</p>
						<input type="email" name="email" aria-label="Your email" placeholder="Email" required />
					</div>
					<div class="form-control">
						<p>Your Phone:</p>
						<input
							type="number"
							name="number"
							aria-label="Your phone number"
							placeholder="Phone"
							required
						/>
					</div>
				</div>
				<div class="form-control">
					<p>How can we help?</p>
					<textarea aria-label="message" placeholder="Your Message" name="message" required />
				</div>
				<button type="submit" class="btn btn-primary">Send Message</button>
			</form>
		</div>
	</div>
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
</main>
