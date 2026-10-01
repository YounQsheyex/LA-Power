<script lang="ts">
	import Logo from './Logo.svelte';
	import Icon from './Icon.svelte';
	import { site, navLinks, whatsappLink, mailLink } from '$lib/config';
	import { services } from '$lib/data';

	const year = new Date().getFullYear();
</script>

<footer class="relative mt-20 border-t border-white/10 bg-ink-950">
	<div class="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
		<div class="lg:col-span-1">
			<Logo />
			<p class="mt-5 text-sm leading-relaxed text-slate-400">{site.description}</p>
		</div>
		<div>
			<h4 class="text-sm font-semibold tracking-widest uppercase">Explore</h4>
			<ul class="mt-5 space-y-3 text-sm">
				{#each navLinks as l}
					<li><a href={l.href} class="text-slate-400 transition hover:pl-1 hover:text-volt-300">{l.label}</a></li>
				{/each}
			</ul>
		</div>
		<div>
			<h4 class="text-sm font-semibold tracking-widest uppercase">Services</h4>
			<ul class="mt-5 space-y-3 text-sm">
				{#each services as s}
					<li><a href="#services" class="text-slate-400 transition hover:pl-1 hover:text-volt-300">{s.title}</a></li>
				{/each}
			</ul>
		</div>
		<div>
			<h4 class="text-sm font-semibold tracking-widest uppercase">Contact</h4>
			<ul class="mt-5 space-y-4 text-sm">
				<li><a href={whatsappLink()} target="_blank" rel="noopener" class="flex items-center gap-3 text-slate-400 hover:text-white"><Icon name="whatsapp" class="size-5 text-emerald-400" />{site.phoneDisplay}</a></li>
				<li><a href={mailLink()} class="flex items-center gap-3 break-all text-slate-400 hover:text-white"><Icon name="mail" class="size-5 shrink-0 text-volt-400" />{site.email}</a></li>
				<li class="flex items-center gap-3 text-slate-400"><Icon name="pin" class="size-5 text-volt-400" />{site.location}</li>
			</ul>
		</div>
	</div>
	<div class="border-t border-white/5">
		<div class="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
			<p>© {year} {site.name}. All rights reserved.</p>
			<a href="#top" class="group flex items-center gap-2 hover:text-volt-300">
				Back to top <Icon name="arrow" class="size-4 -rotate-90 transition-transform group-hover:-translate-y-1" />
			</a>
		</div>
	</div>
</footer>
