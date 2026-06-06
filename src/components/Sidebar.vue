<script setup>
import Drawer from '@/components/ui/Drawer.vue';

defineProps({
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
	},
});
</script>

<template>
	<Drawer :id="id" :title="title" :placement="placement">
		<slot />
	</Drawer>
</template>
