<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import About from '$lib/components/About.svelte';
	import Services from '$lib/components/Services.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Process from '$lib/components/Process.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WhatsAppFloat from '$lib/components/WhatsAppFloat.svelte';
</script>

<Navbar />
<main>
	<Hero />
	<Marquee />
	<About />
	<Services />
	<Projects />
	<Process />
	<CTA />
	<Contact />
</main>
<Footer />
<WhatsAppFloat />
