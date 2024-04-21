<script setup>
import { computed, ref } from 'vue';
import { products } from '@/data/products.json';
import Product from '@/components/Product.vue';
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

        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-2 gap-x-4 justify-items-center">
            <template v-for="product in paginateProducts" :key="product.title">
                <Product 
                    :image="product.img"
                    :title="product.title"
                    :brand="product.brand"
                    :description="product.description"
                    :category="product.category"
                    :provider="product.provider"
                    :weight="product.weight"
                    :dose="product.dose"
                />
            </template>
        </div>

        <Pagination
            :total="totalPages"
            :current="currentPage"
            :onPageChange="handlePageChange"
            :extraClass="'mt-8'"
        />
    </div>
</template>