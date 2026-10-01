<script lang="ts">
	import { marquee } from '$lib/data';
	const items = [...marquee, ...marquee];
</script>

<div class="overflow-hidden py-6">
<div class="relative -mx-4 -rotate-1 overflow-hidden border-y border-volt-400/20 bg-volt-400 py-4 text-ink-950" aria-hidden="true">
	<div class="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
		{#each items as item}
			<span class="font-display flex items-center gap-10 text-2xl font-bold tracking-tight uppercase">
				{item}
				<svg viewBox="0 0 24 24" class="size-6" fill="currentColor"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>
			</span>
		{/each}
	</div>
</div>
</div>
