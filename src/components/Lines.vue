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

			<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<li v-for="line in catalogLines" :key="line.category">
					<button
						type="button"
						class="group flex w-full cursor-pointer items-center gap-4 rounded-2xl border p-4 text-left transition-colors sm:p-5"
						:class="[
							isActive(line.category)
								? 'border-[color-mix(in_srgb,var(--accent)_45%,transparent)] bg-[color-mix(in_srgb,var(--accent)_8%,transparent)]'
								: 'border-border-warm bg-card hover:border-primary-300/40 dark:border-border-warm-dark dark:bg-card-dark dark:hover:border-primary-500/30',
						]"
						:style="`--accent: var(${brandPalette[line.brand].accentVar})`"
						@click="handleFilterChange(line.category)"
					>
						<div class="flex h-16 w-16 shrink-0 items-center justify-center sm:h-20 sm:w-20">
							<img
								:src="line.logo"
								:alt="`Logo ${line.shortLabel}`"
								class="max-h-full max-w-full object-contain"
								:class="line.logoDark ? 'dark:hidden' : ''"
								loading="lazy"
							/>
							<img
								v-if="line.logoDark"
								:src="line.logoDark"
								:alt="`Logo ${line.shortLabel}`"
								class="hidden max-h-full max-w-full object-contain dark:block"
								loading="lazy"
							/>
						</div>
						<div class="min-w-0 flex-1">
							<p class="text-sm font-bold tracking-wide text-foreground uppercase dark:text-inverse">
								{{ line.shortLabel }}
							</p>
							<p class="mt-1 text-xs leading-relaxed text-muted dark:text-inverse-muted">
								{{ line.label }}
							</p>
						</div>
						<span
							class="h-10 w-1 shrink-0 rounded-full bg-(--accent) transition-transform duration-300"
							:class="isActive(line.category) ? 'scale-y-100' : 'scale-y-30 opacity-40'"
							aria-hidden="true"
						></span>
					</button>
				</li>
			</ul>
		</div>
	</section>
</template>
