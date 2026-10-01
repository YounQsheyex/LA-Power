export type IconName =
	| 'bolt'
	| 'home'
	| 'building'
	| 'sun'
	| 'factory'
	| 'wrench'
	| 'shield'
	| 'cable'
	| 'battery'
	| 'light'
	| 'smile'
	| 'clock'
	| 'medal'
	| 'chat'
	| 'clipboard'
	| 'check';

export const stats = [
	{ value: 250, suffix: '+', label: 'Projects completed' },
	{ value: 10, suffix: '+', label: 'Years of experience' },
	{ value: 100, suffix: '%', label: 'Safety-first delivery' },
	{ value: 24, suffix: '/7', label: 'Emergency support' }
];

export const services: { icon: IconName; title: string; text: string }[] = [
	{
		icon: 'home',
		title: 'Residential Wiring',
		text: 'New-build wiring, rewiring, DB installation, sockets and lighting points done neatly and to standard.'
	},
	{
		icon: 'building',
		title: 'Commercial Installations',
		text: 'Offices, malls, schools and estates — power distribution, cable trays and full electrical fit-outs.'
	},
	{
		icon: 'sun',
		title: 'Solar & Inverter Systems',
		text: 'Design and installation of solar PV, inverters and battery banks for reliable, clean backup power.'
	},
	{
		icon: 'factory',
		title: 'Industrial Power',
		text: 'Transformers, panels, motor controls and power-factor correction for factories and plants.'
	},
	{
		icon: 'light',
		title: 'Lighting Design',
		text: 'Architectural, street and security lighting that is efficient, beautiful and long-lasting.'
	},
	{
		icon: 'wrench',
		title: 'Maintenance & Repairs',
		text: 'Fault finding, preventive maintenance contracts and fast emergency call-outs when you need us.'
	}
];

export type Project = {
	title: string;
	category: 'Residential' | 'Commercial' | 'Industrial' | 'Solar';
	location: string;
	summary: string;
	icon: IconName;
	/** Optional photo path, e.g. '/projects/estate.jpg' (place images in /static/projects) */
	image?: string;
	tags: string[];
};

// Replace these sample entries with LA Power's real completed projects.
export const projects: Project[] = [
	{
		title: 'Duplex Full Rewiring',
		category: 'Residential',
		location: 'Lekki, Lagos',
		summary:
			'Complete rewiring of a 5-bedroom duplex with new distribution boards, surge protection and concealed conduits.',
		icon: 'home',
		tags: ['Rewiring', 'DB Upgrade', 'Surge Protection']
	},
	{
		title: '15kVA Hybrid Solar System',
		category: 'Solar',
		location: 'Ikeja, Lagos',
		summary:
			'Hybrid solar PV with lithium battery bank, cutting generator use for a family home to near zero.',
		icon: 'sun',
		tags: ['Solar PV', 'Lithium Batteries', 'Inverter']
	},
	{
		title: 'Office Complex Fit-out',
		category: 'Commercial',
		location: 'Victoria Island, Lagos',
		summary:
			'Three-floor office electrical fit-out: LED lighting, structured power, cable trays and backup changeover.',
		icon: 'building',
		tags: ['Fit-out', 'LED Lighting', 'Changeover']
	},
	{
		title: 'Factory Panel Upgrade',
		category: 'Industrial',
		location: 'Agbara, Ogun',
		summary:
			'Replacement of motor control panels and power-factor correction for a manufacturing line.',
		icon: 'factory',
		tags: ['MCC Panels', 'PFC', 'Commissioning']
	},
	{
		title: 'Estate Street Lighting',
		category: 'Commercial',
		location: 'Ajah, Lagos',
		summary:
			'Solar-powered street lights installed across a gated estate for safer, brighter roads at night.',
		icon: 'light',
		tags: ['Street Lights', 'Solar', 'Security']
	},
	{
		title: 'Warehouse Power Distribution',
		category: 'Industrial',
		location: 'Apapa, Lagos',
		summary:
			'Heavy-duty distribution, high-bay lighting and earthing system for a logistics warehouse.',
		icon: 'cable',
		tags: ['Distribution', 'High-bay', 'Earthing']
	}
];

export const projectCategories = ['All', 'Residential', 'Commercial', 'Industrial', 'Solar'] as const;

export const values: { icon: IconName; title: string; text: string }[] = [
	{
		icon: 'shield',
		title: 'Safety first',
		text: 'Every job follows strict safety standards — protecting your people and your property.'
	},
	{
		icon: 'medal',
		title: 'Quality workmanship',
		text: 'Certified engineers, quality materials and neat finishes we are proud to put our name on.'
	},
	{
		icon: 'clock',
		title: 'On time, on budget',
		text: 'Clear quotes, honest timelines and no surprise costs at the end of the job.'
	},
	{
		icon: 'smile',
		title: 'Customer satisfaction',
		text: "We aren't done until you're happy. Your satisfaction is how we measure success."
	}
];

export const process: { icon: IconName; title: string; text: string }[] = [
	{
		icon: 'chat',
		title: 'Reach out',
		text: 'Message us on WhatsApp or email with a few details about your project.'
	},
	{
		icon: 'clipboard',
		title: 'Site survey & quote',
		text: 'We inspect, advise on the best solution and send a clear, itemised quote.'
	},
	{
		icon: 'bolt',
		title: 'Installation',
		text: 'Our team executes neatly and safely, keeping you updated at every stage.'
	},
	{
		icon: 'check',
		title: 'Test & handover',
		text: 'Full testing, walkthrough and after-sales support — so you stay powered.'
	}
];

export const marquee = [
	'Wiring',
	'Solar PV',
	'Inverters',
	'Panels',
	'Lighting',
	'Earthing',
	'Transformers',
	'Maintenance',
	'CCTV Power',
	'Changeover'
];
