<script lang="ts">
	import { scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import Icon from './Icon.svelte';
	import { whatsappLink } from '$lib/config';

	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

{#if scrollY > 400}
	<a
		href={whatsappLink()}
		target="_blank"
		rel="noopener"
		aria-label="Chat with LA Power on WhatsApp"
		class="group fixed right-5 bottom-5 z-50 flex items-center gap-3"
		transition:scale={{ duration: 400, easing: backOut, start: 0.4 }}
	>
		<span class="hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
			Need an electrician?
		</span>
		<span class="relative grid size-14 place-items-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/40 transition-transform group-hover:scale-110">
			<span class="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-40"></span>
			<Icon name="whatsapp" class="relative size-7" />
		</span>
	</a>
{/if}
