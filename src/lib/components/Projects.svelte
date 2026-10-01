<script lang="ts">
	import { flip } from 'svelte/animate';
	import { scale, fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { reveal } from '$lib/actions/reveal';
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import { projects, projectCategories, type Project } from '$lib/data';
	import { whatsappLink } from '$lib/config';

	let filter = $state<(typeof projectCategories)[number]>('All');
	let selected = $state<Project | null>(null);

	const visible = $derived(filter === 'All' ? projects : projects.filter((p) => p.category === filter));

	const hues: Record<Project['category'], string> = {
		Residential: 'from-amber-500/30 via-volt-400/10',
		Commercial: 'from-sky-500/30 via-spark-400/10',
		Industrial: 'from-orange-600/30 via-amber-500/10',
		Solar: 'from-yellow-300/30 via-lime-400/10'
	};

	$effect(() => {
		document.body.style.overflow = selected ? 'hidden' : '';
	});
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (selected = null)} />

<section id="projects" class="relative py-28 sm:py-32">
	<div class="container-x">
		<SectionHeading
			center
			eyebrow="Our work"
			title="Projects we're"
			highlight="proud of."
			text="A snapshot of installations we've delivered for homes, businesses and industry."
		/>

		<div class="mt-12 flex justify-center" use:reveal={{ delay: 250 }}>
			<div class="glass flex flex-wrap justify-center gap-1 !rounded-full p-1.5" role="tablist">
				{#each projectCategories as c}
					<button
						role="tab"
						aria-selected={filter === c}
						onclick={() => (filter = c)}
						class="relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 {filter === c
							? 'text-ink-950'
							: 'text-slate-400 hover:text-white'}"
					>
						{#if filter === c}
							<span class="absolute inset-0 -z-10 rounded-full bg-volt-400" in:scale={{ duration: 300, start: 0.6 }}></span>
						{/if}
						{c}
					</button>
				{/each}
			</div>
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each visible as p (p.title)}
				<button
					animate:flip={{ duration: 500, easing: cubicOut }}
					in:scale={{ duration: 400, start: 0.9 }}
					out:scale={{ duration: 200, start: 0.9 }}
					onclick={() => (selected = p)}
					class="group glass relative overflow-hidden text-left transition-all duration-500 hover:-translate-y-2 hover:border-volt-400/40 hover:shadow-2xl hover:shadow-volt-500/10"
				>
					<div class="relative aspect-[4/3] overflow-hidden">
						{#if p.image}
							<img src={p.image} alt={p.title} loading="lazy" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
						{:else}
							<div class="grid-bg absolute inset-0 bg-gradient-to-br {hues[p.category]} to-ink-900 transition-transform duration-700 group-hover:scale-110"></div>
							<div class="absolute inset-0 grid place-items-center">
								<div class="relative">
									<div class="absolute inset-0 scale-150 rounded-full bg-volt-400/20 blur-2xl transition-all duration-700 group-hover:scale-[2.2] group-hover:bg-volt-400/35"></div>
									<Icon name={p.icon} class="relative size-20 text-volt-300 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6" />
								</div>
							</div>
						{/if}
						<div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent"></div>
						<span class="absolute top-4 left-4 rounded-full bg-ink-950/70 px-3 py-1 text-xs font-semibold text-volt-300 backdrop-blur">
							{p.category}
						</span>
						<span class="absolute top-4 right-4 grid size-10 translate-y-2 place-items-center rounded-full bg-volt-400 text-ink-950 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
							<Icon name="arrow" class="size-4 -rotate-45" />
						</span>
					</div>
					<div class="p-6">
						<p class="flex items-center gap-1.5 text-xs text-slate-500"><Icon name="pin" class="size-3.5" />{p.location}</p>
						<h3 class="mt-2 text-xl font-semibold">{p.title}</h3>
						<p class="mt-2 line-clamp-2 text-sm text-slate-400">{p.summary}</p>
					</div>
				</button>
			{/each}
		</div>
	</div>
</section>

{#if selected}
	<div
		class="fixed inset-0 z-[60] grid place-items-center bg-ink-950/80 p-4 backdrop-blur-md"
		transition:fade={{ duration: 200 }}
		onclick={(e) => e.target === e.currentTarget && (selected = null)}
		role="presentation"
	>
		<div
			class="glass relative w-full max-w-lg overflow-hidden !bg-ink-900/95 shadow-2xl"
			role="dialog"
			aria-modal="true"
			aria-labelledby="project-title"
			in:fly={{ y: 40, duration: 400, easing: cubicOut }}
			out:fly={{ y: 20, duration: 200 }}
		>
			<div class="relative h-44 overflow-hidden">
				{#if selected.image}
					<img src={selected.image} alt="" class="h-full w-full object-cover" />
				{:else}
					<div class="grid-bg absolute inset-0 bg-gradient-to-br {hues[selected.category]} to-ink-900"></div>
					<Icon name={selected.icon} class="absolute top-1/2 left-1/2 size-16 -translate-1/2 text-volt-300" />
				{/if}
				<button
					onclick={() => (selected = null)}
					class="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-ink-950/70 text-white backdrop-blur transition hover:rotate-90 hover:bg-volt-400 hover:text-ink-950"
					aria-label="Close"
				>
					<Icon name="close" class="size-5" />
				</button>
			</div>
			<div class="p-7">
				<span class="text-xs font-semibold tracking-widest text-volt-300 uppercase">{selected.category} · {selected.location}</span>
				<h3 id="project-title" class="mt-2 text-2xl font-bold">{selected.title}</h3>
				<p class="mt-3 leading-relaxed text-slate-400">{selected.summary}</p>
				<div class="mt-5 flex flex-wrap gap-2">
					{#each selected.tags as t}
						<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{t}</span>
					{/each}
				</div>
				<a
					href={whatsappLink(`Hello LA Power, I saw your "${selected.title}" project and I'd like something similar.`)}
					target="_blank"
					rel="noopener"
					class="btn-primary mt-7 w-full"
				>
					<Icon name="whatsapp" class="size-5" /> I want something similar
				</a>
			</div>
		</div>
	</div>
{/if}
