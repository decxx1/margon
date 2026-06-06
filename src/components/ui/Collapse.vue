<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { createCollapse } from '@/lib/ui/collapse.js';

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	defaultOpen: {
		type: Boolean,
		default: false,
	},
});

const open = defineModel('open', { type: Boolean, default: undefined });

const isOpen = ref(props.defaultOpen);
const triggerRef = ref(null);
const panelRef = ref(null);
let instance = null;

onMounted(() => {
	if (!props.defaultOpen) {
		panelRef.value?.classList.add('hidden');
	}

	instance = createCollapse(triggerRef.value, panelRef.value, {
		onToggle: (value) => {
			isOpen.value = value;
			if (open.value !== undefined) open.value = value;
		},
	});

	if (props.defaultOpen) {
		instance.show();
	}
});

onUnmounted(() => {
	instance?.destroy();
});
</script>

<template>
	<li>
		<button
			ref="triggerRef"
			type="button"
			class="group flex w-full items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
			:aria-controls="`collapse-${title}`"
		>
			<slot name="icon" />
			<div class="ml-3 flex-1 whitespace-nowrap text-left text-primary-950">{{ title }}</div>
			<svg
				aria-hidden="true"
				class="h-6 w-6 text-primary-900 transition-transform duration-200"
				:class="{ 'rotate-180': isOpen }"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		<ul :id="`collapse-${title}`" ref="panelRef" class="space-y-2 py-2">
			<slot />
		</ul>
	</li>
</template>
