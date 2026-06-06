import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initBrands(root = document) {
	const hero = root.querySelector('[data-animate="hero"]');
	if (hero) {
		gsap.from(hero.children, {
			y: 36,
			opacity: 0,
			duration: 0.85,
			stagger: 0.12,
			ease: 'power3.out',
			delay: 0.1,
		});
	}

	const showcase = root.querySelector('.brands-showcase');
	if (showcase) {
		const header = showcase.querySelector('[data-animate="header"]');
		const cards = showcase.querySelectorAll('[data-animate="card"]');

		if (header) {
			gsap.from(header.children, {
				y: 48,
				opacity: 0,
				duration: 0.9,
				stagger: 0.12,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: showcase,
					start: 'top 82%',
					once: true,
				},
			});
		}

		if (cards.length) {
			gsap.from(cards, {
				y: 32,
				opacity: 0,
				duration: 0.6,
				stagger: 0,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: showcase.querySelector('.brands-rail'),
					start: 'top 88%',
					once: true,
				},
			});
		}
	}

	root.querySelectorAll('.brand-story').forEach((section) => {
		const visual = section.querySelector('[data-animate="visual"]');
		const copy = section.querySelector('[data-animate="copy"]');
		const isLeft = section.dataset.layout === 'left';

		if (visual) {
			gsap.from(visual, {
				x: isLeft ? -72 : 72,
				opacity: 0,
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: section,
					start: 'top 78%',
					once: true,
				},
			});
		}

		if (copy) {
			gsap.from(copy.children, {
				y: 32,
				opacity: 0,
				duration: 0.8,
				stagger: 0.1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: section,
					start: 'top 75%',
					once: true,
				},
			});
		}
	});

	root.querySelectorAll('[data-animate="section-header"]').forEach((header) => {
		gsap.from(header.children, {
			y: 28,
			opacity: 0,
			duration: 0.75,
			stagger: 0.1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: header,
				start: 'top 85%',
				once: true,
			},
		});
	});

	root.querySelectorAll('[data-animate="section-block"]').forEach((block) => {
		gsap.from(block.children, {
			y: 32,
			opacity: 0,
			duration: 0.8,
			stagger: 0.1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: block,
				start: 'top 82%',
				once: true,
			},
		});
	});

	root.querySelectorAll('[data-animate="product-card"]').forEach((card, i) => {
		gsap.from(card, {
			y: 36,
			opacity: 0,
			duration: 0.7,
			delay: (i % 2) * 0.08,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: card,
				start: 'top 88%',
				once: true,
			},
		});
	});

	root.querySelectorAll('[data-animate="about-card"]').forEach((card, i) => {
		gsap.from(card, {
			y: 32,
			opacity: 0,
			duration: 0.75,
			delay: i * 0.1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: card,
				start: 'top 88%',
				once: true,
			},
		});
	});
}
