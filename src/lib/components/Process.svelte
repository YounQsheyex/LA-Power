<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import { process } from '$lib/data';

	let line: HTMLDivElement;
	let progress = $state(0);

	$effect(() => {
		const onScroll = () => {
			const r = line.getBoundingClientRect();
			const vh = window.innerHeight;
			progress = Math.min(1, Math.max(0, (vh * 0.75 - r.top) / r.height));
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<section id="process" class="relative overflow-hidden bg-ink-900/50 py-28 sm:py-32">
	<div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
	<div class="container-x">
		<SectionHeading
			center
			eyebrow="How we work"
			title="From first message to"
			highlight="lights on."
			text="A simple, transparent process — so you always know what's happening and what it costs."
		/>

		<div class="relative mt-20" bind:this={line}>
			<!-- connecting wire (desktop: horizontal) -->
			<div class="absolute top-8 right-[12.5%] left-[12.5%] hidden h-0.5 bg-white/10 lg:block">
				<div
					class="h-full bg-gradient-to-r from-volt-400 to-spark-400 shadow-[0_0_12px] shadow-volt-400"
					style="width: {progress * 100}%"
				></div>
			</div>
			<!-- mobile: vertical -->
			<div class="absolute top-0 bottom-0 left-8 w-0.5 bg-white/10 lg:hidden">
				<div class="w-full bg-gradient-to-b from-volt-400 to-spark-400" style="height: {progress * 100}%"></div>
			</div>

			<ol class="grid gap-12 lg:grid-cols-4 lg:gap-8">
				{#each process as step, i}
					{@const lit = progress >= (i + 0.2) / process.length}
					<li class="relative flex gap-6 lg:flex-col lg:items-center lg:text-center" use:reveal={{ delay: i * 120 }}>
						<span
							class="relative z-10 grid size-16 shrink-0 place-items-center rounded-2xl border transition-all duration-500 {lit
								? 'border-volt-400 bg-volt-400 text-ink-950 shadow-[0_0_40px_-4px] shadow-volt-400/70'
								: 'border-white/10 bg-ink-900 text-slate-400'}"
						>
							<Icon name={step.icon} class="size-7" />
						</span>
						<div>
							<span class="font-display text-sm font-semibold text-volt-400">Step 0{i + 1}</span>
							<h3 class="mt-1 text-xl font-semibold">{step.title}</h3>
							<p class="mt-2 text-slate-400">{step.text}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>
