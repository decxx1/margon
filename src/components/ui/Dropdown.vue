<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { createDropdown } from '@/lib/ui/dropdown.js';

const props = defineProps({
	placement: {
		type: String,
		default: 'bottom',
	},
});

const open = defineModel('open', { type: Boolean, default: false });

const triggerRef = ref(null);
const panelRef = ref(null);
let instance = null;

onMounted(() => {
	instance = createDropdown(triggerRef.value, panelRef.value, {
		onToggle: (isOpen) => {
			open.value = isOpen;
		},
	});
});

onUnmounted(() => {
	instance?.destroy();
});

function hide() {
	instance?.hide();
}

defineExpose({ hide, show: () => instance?.show(), toggle: () => instance?.toggle() });
</script>

<template>
	<div class="relative inline-flex" :data-dropdown-placement="placement">
		<div ref="triggerRef">
			<slot name="trigger" />
		</div>
		<div
			ref="panelRef"
			class="absolute z-10 hidden min-w-56 rounded-lg bg-white p-3 shadow dark:bg-gray-700"
			:class="{
				'top-full left-0 mt-2.5': placement === 'bottom',
				'bottom-full left-0 mb-2.5': placement === 'top',
			}"
			role="menu"
		>
			<slot />
		</div>
	</div>
</template>
