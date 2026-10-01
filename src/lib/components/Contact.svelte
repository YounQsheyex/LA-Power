<script lang="ts">
	import { fly } from 'svelte/transition';
	import { reveal, tilt } from '$lib/actions/reveal';
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import { site, whatsappLink, mailLink } from '$lib/config';
	import { services } from '$lib/data';

	let form = $state({ name: '', phone: '', service: '', location: '', message: '' });
	let errors = $state<Record<string, string>>({});
	let sent = $state<'' | 'whatsapp' | 'email'>('');

	const validate = () => {
		const e: Record<string, string> = {};
		if (form.name.trim().length < 2) e.name = 'Please enter your name';
		if (!form.service) e.service = 'Choose a service';
		if (form.message.trim().length < 10) e.message = 'Tell us a little more (10+ characters)';
		errors = e;
		return Object.keys(e).length === 0;
	};

	const compose = () =>
		[
			`Hello ${site.name},`,
			'',
			`Name: ${form.name}`,
			form.phone ? `Phone: ${form.phone}` : null,
			`Service: ${form.service}`,
			form.location ? `Location: ${form.location}` : null,
			'',
			form.message
		]
			.filter((l) => l !== null)
			.join('\n');

	const send = (via: 'whatsapp' | 'email') => {
		if (!validate()) return;
		const text = compose();
		const url = via === 'whatsapp' ? whatsappLink(text) : mailLink(`${form.service} enquiry — ${form.name}`, text);
		window.open(url, via === 'whatsapp' ? '_blank' : '_self');
		sent = via;
		setTimeout(() => (sent = ''), 5000);
	};

	const channels = [
		{
			icon: 'whatsapp',
			title: 'WhatsApp',
			value: site.phoneDisplay,
			note: 'Fastest response — chat with us now',
			href: whatsappLink(),
			external: true,
			accent: 'from-emerald-400 to-green-600'
		},
		{
			icon: 'mail',
			title: 'Email',
			value: site.email,
			note: 'Send drawings, plans or detailed briefs',
			href: mailLink(),
			external: false,
			accent: 'from-volt-300 to-volt-600'
		}
	] as const;

	const field =
		'w-full rounded-xl border bg-ink-950/60 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition focus:border-volt-400 focus:ring-4 focus:ring-volt-400/15';
</script>

<section id="contact" class="relative overflow-hidden py-28 sm:py-32">
	<div class="absolute -right-40 bottom-0 -z-10 size-[520px] rounded-full bg-volt-500/10 blur-[140px]"></div>
	<div class="container-x grid gap-14 lg:grid-cols-[1fr_1.15fr]">
		<div>
			<SectionHeading
				eyebrow="Hire us"
				title="Let's power your next"
				highlight="project."
				text="Tell us what you need and we'll get back to you quickly with advice and a clear quote. Reach us directly or fill the form."
			/>

			<div class="mt-10 space-y-4">
				{#each channels as c, i}
					<div use:reveal={{ delay: i * 120, direction: 'left' }}>
						<a
							use:tilt={5}
							href={c.href}
							target={c.external ? '_blank' : undefined}
							rel={c.external ? 'noopener' : undefined}
							class="glass group flex items-center gap-5 p-5 transition-colors hover:border-white/25"
						>
							<span class="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br {c.accent} text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
								<Icon name={c.icon} class="size-7" />
							</span>
							<div class="min-w-0 flex-1">
								<p class="text-sm text-slate-500">{c.title}</p>
								<p class="font-display truncate text-lg font-semibold text-white">{c.value}</p>
								<p class="text-sm text-slate-400">{c.note}</p>
							</div>
							<Icon name="arrow" class="size-5 text-slate-500 transition-all group-hover:translate-x-1 group-hover:text-volt-400" />
						</a>
					</div>
				{/each}
			</div>

			<div class="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400" use:reveal={{ delay: 300 }}>
				<span class="flex items-center gap-2"><Icon name="pin" class="size-4 text-volt-400" />{site.location}</span>
				<span class="flex items-center gap-2"><Icon name="clock" class="size-4 text-volt-400" />{site.hours}</span>
			</div>
		</div>

		<form
			use:reveal={{ delay: 150, direction: 'right' }}
			class="glass relative p-6 sm:p-10"
			onsubmit={(e) => {
				e.preventDefault();
				send('whatsapp');
			}}
			novalidate
		>
			<h3 class="text-2xl font-semibold">Request a quote</h3>
			<p class="mt-1 text-sm text-slate-400">Takes less than a minute.</p>

			<div class="mt-8 grid gap-5 sm:grid-cols-2">
				<label class="block">
					<span class="mb-2 block text-sm font-medium text-slate-300">Full name *</span>
					<input class="{field} {errors.name ? 'border-red-400/70' : 'border-white/10'}" bind:value={form.name} placeholder="John Ade" autocomplete="name" />
					{#if errors.name}<span class="mt-1 block text-xs text-red-400" in:fly={{ y: -4 }}>{errors.name}</span>{/if}
				</label>
				<label class="block">
					<span class="mb-2 block text-sm font-medium text-slate-300">Phone</span>
					<input class="{field} border-white/10" bind:value={form.phone} placeholder="+234…" type="tel" autocomplete="tel" />
				</label>
				<label class="block">
					<span class="mb-2 block text-sm font-medium text-slate-300">Service *</span>
					<select class="{field} {errors.service ? 'border-red-400/70' : 'border-white/10'}" bind:value={form.service}>
						<option value="" disabled>Select a service</option>
						{#each services as s}<option>{s.title}</option>{/each}
						<option>Other</option>
					</select>
					{#if errors.service}<span class="mt-1 block text-xs text-red-400" in:fly={{ y: -4 }}>{errors.service}</span>{/if}
				</label>
				<label class="block">
					<span class="mb-2 block text-sm font-medium text-slate-300">Project location</span>
					<input class="{field} border-white/10" bind:value={form.location} placeholder="e.g. Lekki, Lagos" />
				</label>
				<label class="block sm:col-span-2">
					<span class="mb-2 block text-sm font-medium text-slate-300">Project details *</span>
					<textarea rows="4" class="{field} resize-none {errors.message ? 'border-red-400/70' : 'border-white/10'}" bind:value={form.message} placeholder="Tell us about the job, size of the building, timeline…"></textarea>
					{#if errors.message}<span class="mt-1 block text-xs text-red-400" in:fly={{ y: -4 }}>{errors.message}</span>{/if}
				</label>
			</div>

			<div class="mt-8 grid gap-3 sm:grid-cols-2">
				<button type="submit" class="btn-primary !bg-emerald-400 !shadow-emerald-400/50 hover:!bg-emerald-300">
					<Icon name="whatsapp" class="size-5" /> Send via WhatsApp
				</button>
				<button type="button" class="btn-ghost" onclick={() => send('email')}>
					<Icon name="mail" class="size-5" /> Send via Email
				</button>
			</div>

			{#if sent}
				<p class="mt-5 flex items-center gap-2 rounded-xl bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300" transition:fly={{ y: 10 }}>
					<Icon name="check" class="size-5" />
					Your {sent === 'whatsapp' ? 'WhatsApp chat' : 'email app'} has opened with your message — just hit send!
				</p>
			{/if}
		</form>
	</div>
</section>
