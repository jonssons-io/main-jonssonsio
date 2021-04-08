<template>
	<main id="app" class="fill-height fill-width d-flex">
		<div class="fill-height left"></div>
		<div
			class="fill-height right d-flex flex-col align-center justify-center"
		>
			<h1 class="d-flex">
				Coming s<span class="first-double-o firstbounce">o</span
				><span class="second-double-o secondbounce">o</span>
				<div class="spacer"></div>
				n
			</h1>
			<h3 class="mt-05">We're in the process of building our website.</h3>
			<div class="section-spacer"></div>
			<hr class="divider" />
			<div class="section-spacer"></div>
			<section class="contact ms-3">
				<p>
					If you want to get in touch about future projects or just to
					say hi, we are happy to connect through other platforms.
				</p>
				<div class="section-spacer"></div>
				<div class="contact-cards">
					<span class="socials-name socials-text touch"
						>Gabrielle Jonsson</span
					>
					<span class="socials-title socials-text touch"
						>Frontend Developer</span
					>
					<div class="contact-cards-gabrielle align-center">
						<img
							class="bubble"
							src="./assets/img/GabCrimsonG.png"
							alt="Image of Gabrielle"
						/>
						<div
							class="socials d-flex flex-wrap justify-center align-center"
						>
							<span class="socials-name socials-text desktop"
								>Gabrielle Jonsson</span
							>
							<span class="socials-title socials-text desktop"
								>Frontend Developer</span
							>
							<a
								href="https://github.com/gabbijonsson"
								target="_blank"
								alt="Link to Gabrielles Github"
								aria-label="Go to Gabrielles Github"
							>
								<font-awesome-icon
									class="fai fai-gabrielle mt-05"
									:icon="['fab', 'github-square']"
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/gabbijonsson/"
								target="_blank"
								alt="Link to Gabrielles LinkedIn profile"
								aria-label="Go to Gabrielles LinkedIn profile"
							>
								<font-awesome-icon
									class="fai fai-gabrielle mt-05"
									:icon="['fab', 'linkedin']"
								/>
							</a>
							<div
								class="email-container"
								@click="copy(gab)"
								@keyup.enter="copy(gab)"
								aria-label="Copy Gabrielles e-mail"
								focusable="true"
								tabindex="0"
							>
								<font-awesome-icon
									class="fai fai-gabrielle mt-05"
									icon="at"
								/>
								<span
									:class="[gabTooltip ? 'active' : '']"
									id="copy_tooltip"
									aria-live="assertive"
									role="tooltip"
									>Copied!</span
								>
							</div>
							<a
								href="https://gabrielle.jonssons.io"
								target="_blank"
								alt="Link to Gabrielles portfolio website"
								aria-label="Go to Gabrielles portfolio website"
							>
								<font-awesome-icon
									class="fai fai-gabrielle mt-05"
									icon="external-link-square-alt"
								/>
							</a>
						</div>
					</div>
					<span class="socials-name socials-text touch"
						>Axel Jonsson</span
					>
					<span class="socials-title socials-text touch"
						>Backend Developer</span
					>
					<div
						class="contact-cards-axel d-flex flex-col align-center"
					>
						<img
							class="bubble"
							src="./assets/img/AxTurquoiseG.png"
							alt="Image of Axel"
						/>
						<div
							class="socials d-flex flex-wrap justify-center align-center"
						>
							<span class="socials-name socials-text desktop"
								>Axel Jonsson</span
							>
							<span class="socials-title socials-text desktop"
								>Backend Developer</span
							>
							<a
								href="https://github.com/Axelelele"
								target="_blank"
								alt="Link to Axels Github"
								aria-label="Go to Axels Github"
							>
								<font-awesome-icon
									class="fai fai-axel mt-05"
									:icon="['fab', 'github-square']"
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/jonssonaxel/"
								target="_blank"
								alt="Link to Axels LinkedIn profile"
								aria-label="Go to Axels LinkedIn profile"
							>
								<font-awesome-icon
									class="fai fai-axel mt-05"
									:icon="['fab', 'linkedin']"
								/>
							</a>
							<div
								class="email-container"
								@click="copy(ax)"
								@keyup.enter="copy(ax)"
								focusable="true"
								aria-label="Copy Axels email"
								tabindex="0"
							>
								<font-awesome-icon
									class="fai fai-axel mt-05"
									icon="at"
								/>
								<span
									:class="[axTooltip ? 'active' : '']"
									id="copy_tooltip"
									aria-live="assertive"
									role="tooltip"
									>Copied!</span
								>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</main>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			gab: 'tnoevryyr@wbaffbaf.vb',
			ax: 'nkry@wbaffbaf.vb',
			axTooltip: false,
			gabTooltip: false,
		}
	},
	methods: {
		decode(a) {
			return a.replace(/[a-zA-Z]/g, function (c) {
				return String.fromCharCode(
					(c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13)
						? c
						: c - 26
				)
			})
		},
		copy(person) {
			if (person == this.ax) {
				this.axTooltip = true
				setTimeout(() => (this.axTooltip = false), 3000)
			}
			if (person == this.gab) {
				this.gabTooltip = true
				setTimeout(() => (this.gabTooltip = false), 3000)
			}
			let y = this.decode(person)
			const el = document.createElement('textarea')
			el.value = y
			el.setAttribute('readonly', '')
			el.style.position = 'absolute'
			el.style.left = '-9999px'
			document.body.appendChild(el)
			const selected =
				document.getSelection().rangeCount > 0
					? document.getSelection().getRangeAt(0)
					: false
			el.select()
			document.execCommand('copy')
			document.body.removeChild(el)
			if (selected) {
				document.getSelection().removeAllRanges()
				document.getSelection().addRange(selected)
			}
		},
	},
}
</script>
