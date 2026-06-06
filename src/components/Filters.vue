<script setup>
import { computed, ref } from 'vue';
import Dropdown from '@/components/ui/Dropdown.vue';

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
});

const currentFilter = ref('all');
const dropdownRef = ref(null);

const totalCount = computed(() => {
	return props.items.reduce((acc, item) => acc + item.count, 0);
});

const handleFilterChange = (filter) => {
	currentFilter.value = filter;
	props.onChange(currentFilter.value);
	dropdownRef.value?.hide();
};
</script>

<template>
	<div class="inline-flex items-center justify-center p-4">
		<div>
			<label class="mb-2 block text-sm font-semibold text-primary-950 dark:text-white">
				Filtrar por {{ title }}
			</label>
			<Dropdown ref="dropdownRef" placement="bottom">
			<template #trigger>
				<button
					type="button"
					class="inline-flex items-center rounded-lg border border-primary-200 bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-950 hover:bg-primary-100 focus:outline-none focus:ring-4 focus:ring-primary-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
				>
					<svg
						class="me-3 h-3 w-3 text-primary-900 dark:text-gray-400"
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
					{{ currentFilter === 'all' ? 'Todos' : currentFilter }}
					<svg
						class="ms-2.5 h-2.5 w-2.5 text-primary-900 dark:text-gray-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
					</svg>
				</button>
			</template>

			<h6 class="mb-3 text-sm font-bold text-primary-950 dark:text-white">{{ title }}</h6>
			<ul class="space-y-1 py-3 text-sm text-primary-950 dark:text-gray-200">
				<li>
					<div
						@click="handleFilterChange('all')"
						:class="[
							currentFilter === 'all' ? 'active' : '',
							'flex cursor-pointer items-center rounded border-primary-200 py-2 hover:bg-primary-50 dark:hover:bg-primary-900 [&.active]:bg-primary-100 dark:[&.active]:bg-primary-800',
						]"
					>
						<label class="ms-2 w-full cursor-pointer rounded text-sm font-medium text-primary-950 dark:text-gray-300">
							Todas
						</label>
						<span
							class="rounded border-primary-300 bg-primary-100 px-1 text-center text-xs leading-4 text-primary-900 focus:ring-2 focus:ring-primary-500 dark:border-primary-600 dark:bg-primary-800 dark:text-primary-200 dark:focus:ring-primary-600 dark:ring-offset-primary-700 dark:focus:ring-offset-primary-700"
						>
							{{ totalCount }}
						</span>
					</div>
				</li>
				<li v-for="(item, index) in items" :key="index">
					<div
						@click="handleFilterChange(item.name)"
						:class="[
							currentFilter === item.name ? 'active' : '',
							'flex cursor-pointer items-center rounded border-primary-200 py-2 hover:bg-primary-50 dark:hover:bg-primary-900 [&.active]:bg-primary-100 dark:[&.active]:bg-primary-800',
						]"
					>
						<label class="ms-2 w-full cursor-pointer rounded text-sm font-medium text-primary-950 dark:text-gray-300">
							{{ item.name }}
						</label>
						<span
							class="rounded border-primary-300 bg-primary-100 px-1 text-center text-xs leading-4 text-primary-900 focus:ring-2 focus:ring-primary-500 dark:border-primary-600 dark:bg-primary-800 dark:text-primary-200 dark:focus:ring-primary-600 dark:ring-offset-primary-700 dark:focus:ring-offset-primary-700"
						>
							{{ item.count }}
						</span>
					</div>
				</li>
			</ul>
		</Dropdown>
		</div>
	</div>
</template>
