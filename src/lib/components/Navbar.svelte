<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Logo from './Logo.svelte';
	import Icon from './Icon.svelte';
	import { navLinks, whatsappLink } from '$lib/config';

	let scrollY = $state(0);
	let innerHeight = $state(0);
	let docHeight = $state(1);
	let open = $state(false);
	let active = $state('');

	const scrolled = $derived(scrollY > 20);
	const progress = $derived(Math.min(1, scrollY / Math.max(1, docHeight - innerHeight)));

	$effect(() => {
		const update = () => (docHeight = document.documentElement.scrollHeight);
		update();
		const ro = new ResizeObserver(update);
		ro.observe(document.body);

		const sections = navLinks
			.map((l) => document.querySelector<HTMLElement>(l.href))
			.filter((s): s is HTMLElement => !!s);
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) if (e.isIntersecting) active = `#${e.target.id}`;
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		sections.forEach((s) => io.observe(s));
		return () => {
			ro.disconnect();
			io.disconnect();
		};
	});

	$effect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
	});
</script>

<svelte:window bind:scrollY bind:innerHeight onkeydown={(e) => e.key === 'Escape' && (open = false)} />

<header
	class="fixed inset-x-0 top-0 z-50 transition-all duration-500 {scrolled
		? 'border-b border-white/10 bg-ink-950/75 py-3 backdrop-blur-xl'
		: 'py-5'}"
>
	<div
		class="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-volt-300 via-volt-400 to-spark-400"
		style="width: {progress * 100}%"
	></div>

	<nav class="container-x flex items-center justify-between">
		<Logo />

		<ul class="hidden items-center gap-1 md:flex">
			{#each navLinks as link (link.href)}
				<li>
					<a
						href={link.href}
						class="relative rounded-full px-4 py-2 text-sm font-medium transition-colors {active ===
						link.href
							? 'text-white'
							: 'text-slate-400 hover:text-white'}"
					>
						{#if active === link.href}
							<span
								class="absolute inset-0 -z-10 rounded-full bg-white/10"
								in:fade={{ duration: 200 }}
							></span>
						{/if}
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-3">
			<a
				href={whatsappLink()}
				target="_blank"
				rel="noopener"
				class="btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex"
			>
				<Icon name="whatsapp" class="size-4" /> Hire us
			</a>
			<button
				class="grid size-11 place-items-center rounded-full border border-white/15 text-white md:hidden"
				onclick={() => (open = !open)}
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
			>
				<Icon name={open ? 'close' : 'menu'} class="size-5" />
			</button>
		</div>
	</nav>
</header>

{#if open}
	<div
		class="fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-xl md:hidden"
		transition:fade={{ duration: 200 }}
	>
		<ul class="container-x flex h-full flex-col justify-center gap-2">
			{#each navLinks as link, i (link.href)}
				<li in:fly={{ y: 30, delay: 60 * i, duration: 450, easing: cubicOut }}>
					<a
						href={link.href}
						onclick={() => (open = false)}
						class="font-display block py-3 text-4xl font-semibold text-white transition-colors hover:text-volt-400"
					>
						{link.label}
					</a>
				</li>
			{/each}
			<li in:fly={{ y: 30, delay: 60 * navLinks.length, duration: 450 }} class="mt-6">
				<a href={whatsappLink()} target="_blank" rel="noopener" class="btn-primary">
					<Icon name="whatsapp" class="size-5" /> Chat on WhatsApp
				</a>
			</li>
		</ul>
	</div>
{/if}
