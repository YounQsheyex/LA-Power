<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let {
		eyebrow,
		title,
		highlight = '',
		text = '',
		center = false
	}: { eyebrow: string; title: string; highlight?: string; text?: string; center?: boolean } = $props();
</script>

<div class={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
	<span class="eyebrow" use:reveal>{eyebrow}</span>
	<h2 class="mt-5 text-4xl font-bold sm:text-5xl" use:reveal={{ delay: 100 }}>
		{title}
		{#if highlight}<span class="text-gradient">{highlight}</span>{/if}
	</h2>
	{#if text}
		<p class="mt-5 text-lg leading-relaxed text-slate-400" use:reveal={{ delay: 200 }}>{text}</p>
	{/if}
</div>
