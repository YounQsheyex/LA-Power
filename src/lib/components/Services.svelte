<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import { services } from '$lib/data';
	import { whatsappLink } from '$lib/config';
</script>

<section id="services" class="relative overflow-hidden py-28 sm:py-32">
	<div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
	<div class="absolute top-1/3 left-1/2 -z-10 size-[700px] -translate-x-1/2 rounded-full bg-volt-500/5 blur-[140px]"></div>

	<div class="container-x">
		<div class="flex flex-wrap items-end justify-between gap-8">
			<SectionHeading
				eyebrow="What we do"
				title="Complete electrical"
				highlight="services."
				text="One reliable partner for every electrical need — designed properly, installed neatly and maintained for the long run."
			/>
			<a href="#contact" class="btn-ghost" use:reveal={{ delay: 200 }}>Request a quote</a>
		</div>

		<div class="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
			{#each services as s, i}
				<article
					use:reveal={{ delay: (i % 3) * 120 }}
					class="group relative bg-ink-950 p-8 transition-colors duration-500 hover:bg-ink-900 sm:p-10"
				>
					<div class="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-volt-400 to-spark-400 transition-transform duration-500 group-hover:scale-x-100"></div>
					<div class="flex items-start justify-between">
						<span class="grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-volt-300 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-volt-400/50 group-hover:bg-volt-400 group-hover:text-ink-950 group-hover:shadow-[0_0_40px_-5px] group-hover:shadow-volt-400/70">
							<Icon name={s.icon} class="size-7" />
						</span>
						<span class="font-display text-sm text-slate-600">0{i + 1}</span>
					</div>
					<h3 class="mt-8 text-2xl font-semibold">{s.title}</h3>
					<p class="mt-3 leading-relaxed text-slate-400">{s.text}</p>
					<a
						href={whatsappLink(`Hello LA Power, I'm interested in your ${s.title} service.`)}
						target="_blank"
						rel="noopener"
						class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-volt-300 opacity-80 transition-all group-hover:gap-3 group-hover:opacity-100"
					>
						Enquire <Icon name="arrow" class="size-4" />
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>
