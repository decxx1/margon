<script setup>
import { ref } from 'vue';
import { catalogLines } from '@/lib/catalog-lines.js';
import { brandPalette } from '@/lib/brand-palette.js';

const props = defineProps({
	onChange: {
		type: Function,
	},
});

const currentFilter = ref('');

const handleFilterChange = (category) => {
	currentFilter.value = category;
	props.onChange(category);
};

const isActive = (category) => currentFilter.value === category;

/** 3 arriba + 2 centradas abajo en desktop (grid de 6 columnas) */
const gridItemClass = (index) => {
	if (index < 3) return 'lg:col-span-2';
	if (index === 3) return 'lg:col-span-2 lg:col-start-2';
	if (index === 4) return 'lg:col-span-2 lg:col-start-4';
	return '';
};
</script>

<template>
	<section class="bg-body pt-4 pb-12 dark:bg-body-dark lg:pb-16">
		<div class="mx-auto max-w-7xl px-6">
			<header class="mb-10 text-center">
				<p class="mb-3 text-[0.72rem] font-semibold tracking-[0.28em] text-primary-600 uppercase dark:text-primary-300">
					Explorá por línea
				</p>
				<h2 class="text-2xl font-black tracking-tight text-foreground sm:text-3xl dark:text-inverse">
					Seleccioná una marca
				</h2>
				<div class="mx-auto mt-4 h-1 w-12 rounded-sm bg-primary-500 dark:bg-primary-400" aria-hidden="true"></div>
			</header>

			<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
				<li
					v-for="(line, index) in catalogLines"
					:key="line.category"
					:class="[
						gridItemClass(index),
						index === 4 && 'sm:col-span-2 sm:mx-auto sm:max-w-md lg:col-span-2 lg:col-start-4 lg:mx-0 lg:max-w-none',
					]"
				>
					<button
						type="button"
						class="group flex w-full cursor-pointer items-center gap-3 rounded-2xl border px-4 py-2.5 text-left transition-[background,border-color,box-shadow] duration-300 ease-out sm:px-4 sm:py-3"
						:class="[
							isActive(line.category)
								? 'border-[color-mix(in_srgb,var(--accent)_45%,transparent)] bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] shadow-[0_10px_28px_-16px_color-mix(in_srgb,var(--accent)_30%,transparent)]'
								: 'border-border-warm bg-card hover:border-[color-mix(in_srgb,var(--accent)_38%,transparent)] hover:bg-[color-mix(in_srgb,var(--accent)_6%,transparent)] hover:shadow-[0_10px_28px_-16px_color-mix(in_srgb,var(--accent)_28%,transparent)] dark:border-border-warm-dark dark:bg-card-dark dark:hover:border-[color-mix(in_srgb,var(--accent)_42%,transparent)] dark:hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)]',
						]"
						:style="`--accent: var(${brandPalette[line.brand].accentVar})`"
						@click="handleFilterChange(line.category)"
					>
						<div class="flex h-20 w-20 shrink-0 items-center justify-center sm:h-24 sm:w-24">
							<img
								:src="line.logo"
								:alt="`Logo ${line.shortLabel}`"
								class="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]"
								:class="line.logoDark ? 'dark:hidden' : ''"
								loading="lazy"
							/>
							<img
								v-if="line.logoDark"
								:src="line.logoDark"
								:alt="`Logo ${line.shortLabel}`"
								class="hidden max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03] dark:block"
								loading="lazy"
							/>
						</div>
						<div class="min-w-0 flex-1">
							<p class="text-sm font-bold tracking-wide text-foreground uppercase transition-colors duration-300 group-hover:text-(--accent) dark:text-inverse">
								{{ line.shortLabel }}
							</p>
							<p class="mt-0.5 text-xs leading-snug text-muted dark:text-inverse-muted">
								{{ line.label }}
							</p>
						</div>
						<span
							class="h-8 w-1 shrink-0 rounded-full bg-(--accent) transition-[transform,opacity] duration-300 ease-out group-hover:scale-y-100 group-hover:opacity-100"
							:class="isActive(line.category) ? 'scale-y-100 opacity-100' : 'scale-y-30 opacity-40'"
							aria-hidden="true"
						></span>
					</button>
				</li>
			</ul>
		</div>
	</section>
</template>
