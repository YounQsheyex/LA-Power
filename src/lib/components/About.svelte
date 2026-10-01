<script lang="ts">
	import { reveal, tilt } from '$lib/actions/reveal';
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import { values } from '$lib/data';
	import { site } from '$lib/config';

	const pillars = [
		{
			label: 'Our Vision',
			icon: 'sun',
			text: 'To be the most trusted electrical company in Nigeria — the first name families and businesses call for safe, reliable and sustainable power.'
		},
		{
			label: 'Our Mission',
			icon: 'bolt',
			text: 'To deliver world-class electrical installations, maintenance and energy solutions through skilled people, quality materials and honest service — every single time.'
		}
	] as const;
</script>

<section id="about" class="relative py-28 sm:py-32">
	<div class="container-x">
		<div class="grid gap-16 lg:grid-cols-2 lg:gap-20">
			<div>
				<SectionHeading
					eyebrow="About {site.name}"
					title="Engineering power you can"
					highlight="trust."
					text="{site.name} is a team of qualified electrical engineers and technicians who take pride in doing things the right way. Whether it's a single socket or a full industrial installation, we bring the same care, safety and precision to every job."
				/>

				<div class="mt-10 space-y-5">
					{#each pillars as p, i}
						<article
							use:reveal={{ delay: 150 * i, direction: 'left' }}
							class="glass group relative overflow-hidden p-7 transition-colors hover:border-volt-400/40"
						>
							<div class="absolute top-0 left-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-volt-300 to-volt-600 transition-transform duration-500 group-hover:scale-y-100"></div>
							<div class="flex items-start gap-5">
								<span class="grid size-12 shrink-0 place-items-center rounded-2xl bg-volt-400/10 text-volt-300 ring-1 ring-volt-400/30">
									<Icon name={p.icon} />
								</span>
								<div>
									<h3 class="text-xl font-semibold">{p.label}</h3>
									<p class="mt-2 leading-relaxed text-slate-400">{p.text}</p>
								</div>
							</div>
						</article>
					{/each}
				</div>
			</div>

			<div class="lg:pt-6">
				<p class="eyebrow" use:reveal>What we value</p>
				<h3 class="mt-5 text-3xl font-bold" use:reveal={{ delay: 100 }}>
					Your satisfaction is our <span class="text-gradient">standard.</span>
				</h3>
				<div class="mt-8 grid gap-5 sm:grid-cols-2">
					{#each values as v, i}
						<div use:reveal={{ delay: 100 * i, direction: 'zoom' }}>
							<div
								use:tilt
								class="spot glass relative h-full overflow-hidden p-6"
							>
								<span class="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-volt-300 to-volt-600 text-ink-950 shadow-lg shadow-volt-500/20">
									<Icon name={v.icon} class="size-5" />
								</span>
								<h4 class="mt-5 text-lg font-semibold">{v.title}</h4>
								<p class="mt-2 text-sm leading-relaxed text-slate-400">{v.text}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.spot::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgb(250 204 21 / 0.12), transparent 60%);
		opacity: 0;
		transition: opacity 0.3s;
		pointer-events: none;
	}
	.spot:hover::before {
		opacity: 1;
	}
</style>
