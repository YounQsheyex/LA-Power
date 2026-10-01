<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { site } from '$lib/config';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
		rel="stylesheet"
	/>
	<title>{site.name} — Electrical Engineering & Power Solutions in {site.location}</title>
	<meta name="description" content={site.description} />
	<meta property="og:title" content="{site.name} — {site.tagline}" />
	<meta property="og:description" content={site.description} />
	<meta name="theme-color" content="#05070d" />
</svelte:head>

{@render children()}
