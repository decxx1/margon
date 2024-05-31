<script setup>
import { ref, onMounted } from 'vue';

const path = ref('');

onMounted(() => {
    path.value = window.location.pathname;   
})
</script>
<template>
    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
            <a href="/"
                :class="[path === '/' ? 'bg-primary-700 text-white lg:text-primary-600 lg:font-bold dark:text-white lg:bg-transparent rounded' : 'text-primary-900 hover:bg-gray-50', 'block py-2 pr-4 pl-3  border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700']"
                aria-current="page">Inicio</a>
        </li>
        <li>
            <a href="/catalogo"
            :class="[path === '/catalogo' ? 'bg-primary-700 text-white lg:text-primary-600 lg:font-bold dark:text-white lg:bg-transparent rounded' : 'text-primary-900 hover:bg-gray-50', 'block py-2 pr-4 pl-3  border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700']"
                >Catálogo</a>
        </li>
        <li>
            <a href="/puntos-venta"
            :class="[path === '/puntos-venta' ? 'bg-primary-700 text-white lg:text-primary-600 lg:font-bold dark:text-white lg:bg-transparent rounded' : 'text-primary-900 hover:bg-gray-50', 'block py-2 pr-4 pl-3  border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700']"
                >Puntos de venta</a>
        </li>
        <li>
            <a href="/contacto"
            :class="[path === '/contacto' ? 'bg-primary-700 text-white lg:text-primary-600 lg:font-bold dark:text-white lg:bg-transparent rounded' : 'text-primary-900 hover:bg-gray-50', 'block py-2 pr-4 pl-3  border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700']"
                >Contacto</a>
        </li>
    </ul>
</template>