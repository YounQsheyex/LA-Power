<script lang="ts">
	let { class: klass = '' }: { class?: string } = $props();
</script>

<a href="#top" class="group inline-flex items-center gap-2.5 {klass}" aria-label="LA Power home">
	<span
		class="relative grid size-10 place-items-center rounded-xl bg-gradient-to-br from-volt-300 to-volt-600 text-ink-950 shadow-lg shadow-volt-500/30 transition-transform duration-500 group-hover:rotate-[360deg]"
	>
		<svg viewBox="0 0 24 24" class="size-5" fill="currentColor" aria-hidden="true">
			<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
		</svg>
	</span>
	<span class="font-display text-xl leading-none font-bold text-white">
		LA<span class="text-volt-400">Power</span>
	</span>
</a>
