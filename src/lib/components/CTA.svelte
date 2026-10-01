<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import Icon from './Icon.svelte';
	import { whatsappLink } from '$lib/config';
</script>

<section class="container-x py-10">
	<div
		use:reveal={{ direction: 'zoom' }}
		class="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-volt-300 via-volt-400 to-volt-600 px-6 py-16 text-center sm:px-16"
	>
		<div class="grid-bg absolute inset-0 -z-10 opacity-40 [filter:invert(1)]"></div>
		<svg viewBox="0 0 24 24" class="animate-float absolute -top-6 -left-6 -z-10 size-48 text-white/25" fill="currentColor" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>
		<svg viewBox="0 0 24 24" class="animate-float absolute -right-10 -bottom-10 -z-10 size-64 text-ink-950/10 [animation-delay:1.5s]" fill="currentColor" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>

		<h2 class="mx-auto max-w-3xl text-4xl font-bold !text-ink-950 sm:text-5xl">Power problem? We're one message away.</h2>
		<p class="mx-auto mt-4 max-w-xl text-lg text-ink-800">
			Emergency faults, new installations or a solar upgrade — talk to an engineer today.
		</p>
		<div class="mt-9 flex flex-wrap justify-center gap-4">
			<a href={whatsappLink()} target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink-800">
				<Icon name="whatsapp" class="size-5 text-emerald-400" /> Chat on WhatsApp
			</a>
			<a href="#contact" class="inline-flex items-center gap-2 rounded-full border-2 border-ink-950/80 px-7 py-3.5 font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:bg-ink-950/10">
				Get a free quote <Icon name="arrow" class="size-4" />
			</a>
		</div>
	</div>
</section>
