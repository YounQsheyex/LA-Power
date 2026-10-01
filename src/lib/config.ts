// Central business details — edit here and the whole site updates.
export const site = {
	name: 'LA Power',
	tagline: 'Powering homes, businesses & industry — safely.',
	description:
		'LA Power is an electrical engineering company delivering installations, maintenance, solar and power solutions across Nigeria with a relentless focus on safety and customer satisfaction.',
	// TODO: replace with the real company email
	email: 'info@lapower.ng',
	whatsapp: '2347037564913', // international format, no "+"
	phoneDisplay: '+234 703 756 4913',
	location: 'Lagos, Nigeria',
	hours: 'Mon – Sat · 8:00am – 6:00pm'
} as const;

export const whatsappLink = (message = `Hello ${site.name}, I'd like to make an enquiry.`) =>
	`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const mailLink = (subject = `Project enquiry — ${site.name}`, body = '') =>
	`mailto:${site.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;

export const navLinks = [
	{ href: '#about', label: 'About' },
	{ href: '#services', label: 'Services' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#process', label: 'Process' },
	{ href: '#contact', label: 'Contact' }
] as const;
