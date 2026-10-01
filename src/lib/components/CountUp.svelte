<script lang="ts">
	let { value, suffix = '', duration = 1800 }: { value: number; suffix?: string; duration?: number } =
		$props();

	let el: HTMLSpanElement;
	let current = $state<number | null>(null); // null → SSR shows the final number

	$effect(() => {
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		current = 0;
		let raf = 0;
		const io = new IntersectionObserver(([e]) => {
			if (!e.isIntersecting) return;
			io.disconnect();
			const start = performance.now();
			const tick = (t: number) => {
				const p = Math.min(1, (t - start) / duration);
				current = Math.round(value * (1 - Math.pow(1 - p, 4)));
				if (p < 1) raf = requestAnimationFrame(tick);
			};
			raf = requestAnimationFrame(tick);
		});
		io.observe(el);
		return () => {
			io.disconnect();
			cancelAnimationFrame(raf);
		};
	});
</script>

<span bind:this={el} class="tabular-nums">{current ?? value}{suffix}</span>
