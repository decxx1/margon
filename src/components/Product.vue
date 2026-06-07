<script setup>
import { computed } from 'vue';
import { getBrandPaletteByCategory } from '@/lib/catalog-lines.js';

const props = defineProps({
	image: { type: String, required: true },
	title: { type: String, required: true },
	packaging: { type: String, required: true },
	category: { type: String, required: true },
	flavors: { type: String, required: false },
	variety: { type: String, required: false },
});

const palette = computed(() => getBrandPaletteByCategory(props.category));

const titleSize = computed(() => {
	const width = props.title.length;
	if (width < 32) return 'text-xl';
	if (width < 40) return 'text-lg';
	return 'text-base';
});
</script>

<template>
	<article
		class="group flex h-full w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-border-warm bg-card transition-colors hover:border-[color-mix(in_srgb,var(--accent)_35%,transparent)] dark:border-border-warm-dark dark:bg-card-dark dark:hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)]"
		:style="palette ? `--accent: var(${palette.accentVar})` : ''"
	>
		<div class="flex h-52 items-center justify-center bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] p-6">
			<img
				class="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
				loading="lazy"
				:src="image"
				:alt="title"
			/>
		</div>

		<div class="flex flex-1 flex-col p-5 sm:p-6">
			<span
				v-if="palette"
				class="mb-3 inline-block w-fit rounded-full border border-[color-mix(in_srgb,var(--accent)_22%,transparent)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-(--accent) uppercase"
			>{{ category }}</span>

			<h3
				:class="[titleSize, 'font-black tracking-tight text-foreground dark:text-inverse']"
			>{{ title }}</h3>

			<div class="my-4 h-1 w-10 rounded-sm bg-(--accent)" aria-hidden="true"></div>

			<div class="flex-1 space-y-2 text-sm leading-relaxed text-muted dark:text-inverse-muted">
				<p v-if="variety">
					<span class="font-semibold text-foreground dark:text-primary-300">Variedades: </span>{{ variety }}
				</p>
				<p v-if="flavors">
					<span class="font-semibold text-foreground dark:text-primary-300">Sabores: </span>{{ flavors }}
				</p>
				<p v-if="packaging">
					<span class="font-semibold text-foreground dark:text-primary-300">Presentación: </span>{{ packaging }}
				</p>
			</div>
		</div>
	</article>
</template>
