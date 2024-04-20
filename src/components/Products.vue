<script setup>
import { computed, ref } from 'vue';
import { products } from '@/data/products.json';
import Pagination from '@/components/Pagination.vue';

const currentPage = ref(1);
const perPage = ref(12);
const totalPages = Math.ceil(products.length / perPage.value );

const paginateProducts = computed ( () => {
    const startIndex = (currentPage.value - 1) * perPage.value;
    const endIndex = startIndex + perPage.value;
    return products.slice(startIndex, endIndex);
})

const handlePageChange = (page) => {
    currentPage.value = page;
}

</script>
<template>
    <div>
        <Pagination
            :total="totalPages"
            :current="currentPage"
            :onPageChange="handlePageChange"
            :extraClass="'mb-8'"
        />

        <div class="flex flex-wrap justify-center">
            <div v-for="product in paginateProducts" :key="product.title"
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 my-4"
            >
                <a href="#">
                    <img class="rounded-t-lg" :src="product.img" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ product.title }}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ product.description }}</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {{ product.provider }}
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <Pagination
            :total="totalPages"
            :current="currentPage"
            :onPageChange="handlePageChange"
            :extraClass="'mt-8'"
        />
    </div>
</template>