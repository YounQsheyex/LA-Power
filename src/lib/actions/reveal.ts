import type { Action } from 'svelte/action';

type RevealOptions = { delay?: number; direction?: 'up' | 'left' | 'right' | 'zoom'; once?: boolean };

/** Fades/slides an element in when it scrolls into view. */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, opts = {}) => {
	const { delay = 0, direction = 'up', once = true } = opts;
	node.dataset.reveal = direction === 'up' ? '' : direction;
	node.style.setProperty('--reveal-delay', `${delay}ms`);

	const io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (e.isIntersecting) {
					node.classList.add('is-visible');
					if (once) io.unobserve(node);
				} else if (!once) {
					node.classList.remove('is-visible');
				}
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
	);
	io.observe(node);
	return { destroy: () => io.disconnect() };
};

/** Subtle 3D tilt following the pointer. */
export const tilt: Action<HTMLElement, number | undefined> = (node, max = 8) => {
	if (matchMedia('(prefers-reduced-motion: reduce)').matches || matchMedia('(hover: none)').matches)
		return {};
	node.style.transition = 'transform 0.25s ease-out';
	node.style.transformStyle = 'preserve-3d';

	const move = (e: PointerEvent) => {
		const r = node.getBoundingClientRect();
		const x = (e.clientX - r.left) / r.width - 0.5;
		const y = (e.clientY - r.top) / r.height - 0.5;
		node.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateZ(0)`;
		node.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
		node.style.setProperty('--my', `${(y + 0.5) * 100}%`);
	};
	const leave = () => (node.style.transform = '');
	node.addEventListener('pointermove', move);
	node.addEventListener('pointerleave', leave);
	return {
		destroy() {
			node.removeEventListener('pointermove', move);
			node.removeEventListener('pointerleave', leave);
		}
	};
};
