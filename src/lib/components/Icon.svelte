<script lang="ts">
	import type { IconName } from '$lib/data';

	let { name, class: klass = 'size-6' }: { name: IconName | 'whatsapp' | 'mail' | 'phone' | 'pin' | 'arrow' | 'menu' | 'close'; class?: string } = $props();

	const paths: Record<string, string> = {
		bolt: 'M13 2 4 14h7l-1 8 9-12h-7l1-8Z',
		home: 'M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z',
		building: 'M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M2 21h20M8 7h4M8 11h4M8 15h4',
		sun: 'M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
		factory: 'M2 21V10l6 4V10l6 4V6l8 4v11H2ZM6 17h2M11 17h2M16 17h2',
		wrench: 'M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.5-.6-.6-2.5 2.6-2.5Z',
		shield: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-3 9 2 2 4-4',
		cable: 'M4 4v6a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4v2M2 4h4M18 20h4M7 2v4M17 18v4',
		battery: 'M3 7h15a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3V7Zm16 3h2v4h-2M10 9l-2 3h3l-2 3',
		light: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.4.3.6.8.6 1.2v1h6v-1c0-.5.2-.9.6-1.2A6 6 0 0 0 12 3Z',
		smile: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM8.5 14a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01',
		clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4l3 2',
		medal: 'M8 3h8l-2 6h-4L8 3Zm4 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 3 1 2 2 .3-1.5 1.4.4 2.1-1.9-1-1.9 1 .4-2.1L9 14.3l2-.3 1-2Z',
		chat: 'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12ZM8 12h.01M12 12h.01M16 12h.01',
		clipboard: 'M9 4h6v3H9V4ZM7 5H5v16h14V5h-2M9 12l2 2 4-4M9 17h6',
		check: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-4-9 3 3 5-6',
		mail: 'M3 6h18v12H3V6Zm0 0 9 7 9-7',
		phone: 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z',
		pin: 'M12 21s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
		arrow: 'M5 12h14M13 6l6 6-6 6',
		menu: 'M4 7h16M4 12h16M4 17h16',
		close: 'M6 6l12 12M18 6 6 18'
	};
</script>

{#if name === 'whatsapp'}
	<svg class={klass} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path
			d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7 0a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.4 13.4 0 0 0 5.2 4.6c3.1 1.2 3.1.8 3.7.8a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.2-.3-.2-.6-.4ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 1 1 12 21.8Zm0-21.8A12 12 0 0 0 1.7 18L0 24l6.2-1.6A12 12 0 1 0 12 0Z"
		/>
	</svg>
{:else}
	<svg
		class={klass}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.8"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d={paths[name]} />
	</svg>
{/if}
