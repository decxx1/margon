<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { getOrCreateDrawer } from '@/lib/ui/drawer.js';

const props = defineProps({
	id: {
		type: String,
		default: 'drawer-navigation',
	},
	title: {
		type: String,
		default: 'Filtros',
	},
	placement: {
		type: String,
		default: 'left',
		validator: (value) => ['left', 'right'].includes(value),
	},
	labelId: {
		type: String,
		default: '',
	},
});

const drawerRef = ref(null);
let instance = null;

onMounted(() => {
	instance = getOrCreateDrawer(drawerRef.value, { placement: props.placement });
});

onUnmounted(() => {
	instance?.destroy();
});

defineExpose({
	show: () => instance?.show(),
	hide: () => instance?.hide(),
	toggle: () => instance?.toggle(),
});
</script>

<template>
	<aside
		:id="id"
		ref="drawerRef"
		data-drawer
		:data-drawer-placement="placement"
		class="mt-4 h-full w-full rounded-lg border border-primary-200 bg-white shadow-lg transition-transform dark:border-gray-700 dark:bg-gray-800 max-[1023px]:fixed max-[1023px]:left-0 max-[1023px]:top-16 max-[1023px]:z-40 max-[1023px]:w-64 min-[1023px]:ml-4 min-[1023px]:translate-x-0"
		:class="placement === 'right' ? 'translate-x-full max-[1023px]:right-0 max-[1023px]:left-auto' : '-translate-x-full'"
		:aria-labelledby="labelId || `${id}-label`"
		aria-label="Sidenav"
	>
		<div class="h-full overflow-y-auto px-3 py-5">
			<h5
				:id="labelId || `${id}-label`"
				class="mb-4 text-base font-semibold uppercase text-primary-700 dark:text-gray-400"
			>
				{{ title }}
			</h5>
			<slot />
		</div>
	</aside>
</template>
