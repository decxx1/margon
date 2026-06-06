<script setup>
import { ref, onMounted } from 'vue';

const path = ref('');

const linkBase =
	'block py-2.5 pr-4 pl-3 text-[0.8rem] font-semibold tracking-wider uppercase transition-colors lg:inline-block lg:border-0 lg:p-0 lg:py-1';

const linkInactive =
	'text-muted hover:text-primary-600 lg:hover:text-primary-600 border-b border-border-warm lg:border-b-2 lg:border-transparent dark:text-inverse-muted dark:hover:text-primary-300 dark:border-border-warm-dark';

const linkActive =
	'text-primary-600 lg:border-b-2 lg:border-primary-500 border-b border-primary-400/50 dark:text-primary-300 dark:lg:border-primary-400';

onMounted(() => {
	path.value = window.location.pathname;
});
</script>
<template>
	<ul class="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
		<li>
			<a
				href="/"
				:class="[linkBase, path === '/' ? linkActive : linkInactive]"
				aria-current="page"
			>Inicio</a>
		</li>
		<li>
			<a
				href="/catalogo"
				:class="[linkBase, path === '/catalogo' ? linkActive : linkInactive]"
			>Catálogo</a>
		</li>
		<li>
			<a
				href="/puntos-venta"
				:class="[linkBase, path === '/puntos-venta' ? linkActive : linkInactive]"
			>Puntos de venta</a>
		</li>
		<li>
			<a
				href="/contacto"
				:class="[linkBase, path === '/contacto' ? linkActive : linkInactive]"
			>Contacto</a>
		</li>
	</ul>
</template>
