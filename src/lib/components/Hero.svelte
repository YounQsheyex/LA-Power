<script lang="ts">
	import Icon from './Icon.svelte';
	import CountUp from './CountUp.svelte';
	import { site, whatsappLink } from '$lib/config';
	import { stats } from '$lib/data';

	// Update CSS variables directly (throttled to one write per frame) instead of
	// re-rendering through Svelte state on every pointer event.
	let frame = 0;
	const onMove = (e: PointerEvent) => {
		if (e.pointerType !== 'mouse' || frame) return;
		const el = e.currentTarget as HTMLElement;
		const { clientX, clientY } = e;
		frame = requestAnimationFrame(() => {
			frame = 0;
			const r = el.getBoundingClientRect();
			el.style.setProperty('--mx', `${((clientX - r.left) / r.width) * 100}%`);
			el.style.setProperty('--my', `${((clientY - r.top) / r.height) * 100}%`);
		});
	};

	const headline = ['Powering', 'your', 'world'];
	const orbit = [
		{ label: 'Solar', icon: 'sun', pos: 'top-[6%] left-[8%]', delay: '0s' },
		{ label: 'Wiring', icon: 'cable', pos: 'top-[14%] right-[2%]', delay: '1.2s' },
		{ label: 'Panels', icon: 'factory', pos: 'bottom-[16%] left-[0%]', delay: '2.1s' },
		{ label: 'Lighting', icon: 'light', pos: 'bottom-[4%] right-[10%]', delay: '0.6s' }
	] as const;
</script>

<section
	id="top"
	class="relative isolate flex min-h-svh items-center overflow-hidden pt-28 pb-16"
	onpointermove={onMove}
	role="presentation"
>
	<!-- Background layers -->
	<div class="grid-bg absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"></div>
	<div
		class="pointer-events-none absolute inset-0 -z-10"
		style="background: radial-gradient(600px circle at var(--mx, 50%) var(--my, 40%), rgb(250 204 21 / 0.12), transparent 60%)"
	></div>
	<div class="absolute -top-40 -right-40 -z-10 size-[520px] rounded-full bg-volt-500/20 blur-[120px] [transform:translateZ(0)]"></div>
	<div class="absolute -bottom-40 -left-40 -z-10 size-[460px] rounded-full bg-spark-500/15 blur-[120px] [transform:translateZ(0)]"></div>

	<!-- Animated circuit lines -->
	<svg class="absolute inset-0 -z-10 hidden h-full w-full opacity-30 md:block" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
		<defs>
			<linearGradient id="wire" x1="0" x2="1">
				<stop offset="0" stop-color="#facc15" stop-opacity="0" />
				<stop offset=".5" stop-color="#facc15" />
				<stop offset="1" stop-color="#38bdf8" stop-opacity="0" />
			</linearGradient>
		</defs>
		{#each ['M0 200 H360 L420 260 H760 L820 200 H1440', 'M0 640 H260 L320 580 H900 L960 640 H1440', 'M0 760 H520 L580 700 H1100 L1160 760 H1440'] as d, i}
			<path {d} stroke="rgb(255 255 255 / .06)" fill="none" stroke-width="1.5" />
			<path {d} class="current" style="animation-delay: {i * 1.3}s" stroke="url(#wire)" fill="none" stroke-width="2" />
		{/each}
	</svg>

	<div class="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
		<div>
			<span class="eyebrow rise" style="--d: 0ms">
				<span class="relative flex size-2">
					<span class="absolute inline-flex size-full animate-ping rounded-full bg-volt-400 opacity-75"></span>
					<span class="relative inline-flex size-2 rounded-full bg-volt-400"></span>
				</span>
				Electrical engineering · {site.location}
			</span>

			<h1 class="mt-6 text-5xl leading-[1.02] font-bold sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
				{#each headline as word, i}
					<span class="rise inline-block" style="--d: {120 + i * 110}ms">{word}&nbsp;</span>
				{/each}
				<br />
				<span class="rise inline-block" style="--d: 480ms"><span class="text-gradient animate-flicker inline-block">safely.</span></span>
			</h1>

			<p class="rise mt-6 max-w-xl text-lg leading-relaxed text-slate-400" style="--d: 620ms">
				From home wiring to industrial panels and solar systems — {site.name} delivers clean, certified
				electrical work with one promise: <span class="text-white">your complete satisfaction.</span>
			</p>

			<div class="rise mt-9 flex flex-wrap gap-4" style="--d: 760ms">
				<a href={whatsappLink()} target="_blank" rel="noopener" class="btn-primary group">
					<Icon name="whatsapp" class="size-5" /> Start a project
					<Icon name="arrow" class="size-4 transition-transform group-hover:translate-x-1" />
				</a>
				<a href="#projects" class="btn-ghost">See our work</a>
			</div>

			<dl class="rise mt-14 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4" style="--d: 900ms">
				{#each stats as s}
					<div class="border-l border-white/10 pl-4">
						<dt class="sr-only">{s.label}</dt>
						<dd class="font-display text-3xl font-bold text-white"><CountUp value={s.value} suffix={s.suffix} /></dd>
						<dd class="mt-1 text-xs leading-snug text-slate-500">{s.label}</dd>
					</div>
				{/each}
			</dl>
		</div>

		<!-- Energy core visual -->
		<div class="rise relative mx-auto aspect-square w-full max-w-[520px]" style="--d: 300ms" aria-hidden="true">
			<div class="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-volt-400/25"></div>
			<div class="absolute inset-[12%] rounded-full border border-white/10 [animation:spin_26s_linear_infinite_reverse]">
				<span class="absolute -top-1.5 left-1/2 size-3 rounded-full bg-spark-400 shadow-[0_0_20px] shadow-spark-400"></span>
			</div>
			<div class="absolute inset-[24%] rounded-full border border-volt-400/30 [animation:spin_14s_linear_infinite]">
				<span class="absolute top-1/2 -right-1.5 size-3 rounded-full bg-volt-400 shadow-[0_0_20px] shadow-volt-400"></span>
			</div>
			<div class="absolute inset-[34%] grid place-items-center rounded-full bg-gradient-to-br from-volt-300 via-volt-400 to-volt-600 shadow-[0_0_120px_10px] shadow-volt-500/40">
				<div class="animate-pulse-glow absolute inset-0 rounded-full bg-volt-300/40 blur-xl"></div>
				<svg viewBox="0 0 24 24" class="relative size-1/2 text-ink-950" fill="currentColor"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>
			</div>

			{#each orbit as o}
				<div
					class="animate-float absolute {o.pos} flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-800/90 will-change-transform px-3.5 py-2.5 text-sm font-medium text-white shadow-xl"
					style="animation-delay: {o.delay}"
				>
					<span class="grid size-8 place-items-center rounded-lg bg-volt-400/15 text-volt-300">
						<Icon name={o.icon} class="size-4" />
					</span>
					{o.label}
				</div>
			{/each}
		</div>
	</div>

	<a href="#about" class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-widest text-slate-500 uppercase md:flex" aria-label="Scroll down">
		Scroll
		<span class="flex h-9 w-5 justify-center rounded-full border border-white/20 pt-1.5">
			<span class="h-2 w-1 animate-bounce rounded-full bg-volt-400"></span>
		</span>
	</a>
</section>

<style>
	.rise {
		opacity: 0;
		animation: rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
		animation-delay: var(--d, 0ms);
	}
	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(28px);
			filter: blur(6px);
		}
		to {
			opacity: 1;
			transform: none;
			filter: blur(0);
		}
	}
	.current {
		stroke-dasharray: 180 1600;
		stroke-dashoffset: 1780;
		animation: flow 5s linear infinite;
	}
	@keyframes flow {
		to {
			stroke-dashoffset: 0;
		}
	}
</style>
