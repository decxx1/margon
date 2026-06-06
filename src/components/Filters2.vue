<script setup>
import { computed, ref, watch } from 'vue';
import Collapse from '@/components/ui/Collapse.vue';

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	items: {
		type: Object,
		required: true,
	},
	onChange: {
		type: Function,
	},
	currentFilter: {
		type: String,
		required: true,
	},
});

const currentFilter = ref('all');

watch(
	() => props.currentFilter,
	() => {
		if (props.currentFilter) {
			currentFilter.value = props.currentFilter;
		}
	}
);

const totalCount = computed(() => {
	return props.items.reduce((acc, item) => acc + item.count, 0);
});

const handleFilterChange = (filter) => {
	currentFilter.value = filter;
	props.onChange(currentFilter.value);
};
</script>

<template>
	<Collapse :title="title">
		<template #icon>
			<svg
				class="me-3 h-6 w-6 flex-shrink-0 text-primary-900 transition duration-75 group-hover:text-primary-800 dark:text-gray-400 dark:group-hover:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-width="2"
					d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
				/>
			</svg>
		</template>

		<li>
			<button
				type="button"
				@click="handleFilterChange('all')"
				:class="[
					currentFilter === 'all' ? 'active' : '',
					'group flex w-full items-center rounded-lg p-2 pl-3 text-base font-medium text-gray-900 transition duration-75 hover:bg-primary-50 dark:text-white dark:hover:bg-gray-700 [&.active]:bg-primary-100 dark:[&.active]:bg-primary-800',
				]"
			>
				<div class="ml-3 flex-1 text-left text-primary-950">Todas</div>
				<em
					class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-800 dark:bg-primary-200 dark:text-primary-800"
				>
					{{ totalCount }}
				</em>
			</button>
		</li>
		<li v-for="(item, index) in items" :key="index">
			<button
				type="button"
				@click="handleFilterChange(item.name)"
				:class="[
					currentFilter === item.name ? 'active' : '',
					'group flex w-full items-center rounded-lg p-2 pl-3 text-base font-medium text-gray-900 transition duration-75 hover:bg-primary-50 dark:text-white dark:hover:bg-gray-700 [&.active]:bg-primary-100 dark:[&.active]:bg-primary-800',
				]"
			>
				<div class="ml-3 flex-1 text-left text-primary-950">{{ item.name }}</div>
				<em
					class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-800 dark:bg-primary-200 dark:text-primary-800"
				>
					{{ item.count }}
				</em>
			</button>
		</li>
	</Collapse>
</template>
