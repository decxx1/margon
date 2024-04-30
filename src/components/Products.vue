<script setup>
import { computed, ref } from 'vue';
import { products } from '@/data/products.json';
import Product from '@/components/Product.vue';
import Pagination from '@/components/Pagination.vue';
import Filters from '@/components/Filters.vue';
import { onMounted } from 'vue';


onMounted(() => {
    categories.value = calculateCounts('category');
    brands.value = calculateCounts('brand');
})

const currentPage = ref(1);
const perPage = 12;
const totalPages = ref(Math.ceil(products.length / perPage ));
const categories = ref([]);
const brands = ref([]);
const currentCategory = ref('all');
const currentBrand = ref('all');
//console.log(totalPages)
const paginateProducts = computed ( () => {
    const startIndex = (currentPage.value - 1) * perPage;
    const endIndex = startIndex + perPage;

    // Filtrar productos por la categoría actual
    let filteredProducts = products;
    if (currentCategory.value !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory.value);
    }
    if (currentBrand.value !== 'all' ) {
        filteredProducts = filteredProducts.filter(product => product.brand === currentBrand.value);
    }

    totalPages.value = Math.ceil(filteredProducts.length / perPage );
    return filteredProducts.slice(startIndex, endIndex);
})

const calculateCounts = (valueToCount) => {
    const count = {};

    // Iterar sobre los productos
    for (let i = 0; i < products.length; i++) {
        const value = products[i][valueToCount];
        // Verificar si la categoría ya existe en el objeto de categorías
        if (value in count) {
            count[value]++;
        } else {
            count[value] = 1;
        }
    }

    // Convertir el objeto de categorías en un array de objetos
    const newValue = Object.keys(count).map(value => {
        return {
            name: value,
            count: count[value]
        };
    });

    // Ordenar el array de categorías por nombre
    newValue.sort((a, b) => a.name.localeCompare(b.name));

    return newValue;
}

const handlePageChange = (page) => {
    currentPage.value = page;
}
const handleCategoryChange = (value) => {
    currentCategory.value = value;
}
const handleBrandChange = (value) => {
    currentBrand.value = value;
}

</script>
<template>
    <section class="mt-32">
        <section class="md:w-8/12 w-11/12 mx-auto overflow-hidden bg-white shadow dark:bg-gray-800 rounded-3xl px-10">
            <div class="w-full mx-auto px-4 flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-center lg:justify-between pb-4">
                <div>
                    <Filters 
                        client:load
                        title="Categorías"
                        :items="categories"
                        :onChange="handleCategoryChange"
                    />
                    <Filters 
                        client:load
                        title="Marcas"
                        :items="brands"
                        :onChange="handleBrandChange"
                    />
                </div>
                <div class="md:pb-4 lg:pb-0">
                    <label class="block mb-2 text-sm font-semibold text-primary-950 dark:text-white">Buscar</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-5 h-5 text-primary-950 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" class="block p-2 ps-10 text-sm text-primary-950 placeholder-primary-950 border border-primary-200 rounded-lg md:w-80 max-w-80 bg-primary-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Buscar productos" 
                        />
                    </div>
                </div>
            </div>
            <Pagination
                client:load
                :total="totalPages"
                :current="currentPage"
                :onPageChange="handlePageChange"
                extraClass="mx-auto border-t border-primary-200 dark:border-gray-700"
            />
        </section>
        <div class="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-2 gap-x-4 justify-items-center">
            <template v-for="product in paginateProducts" :key="product">
                <Product
                    :image="product.img"
                    :title="product.title"
                    :brand="product.brand"
                    :description="product.description"
                    :category="product.category"
                    :weight="product.weight"
                    :dose="product.dose"
                />
            </template>
        </div>

        <Pagination
            client:load
            :total="totalPages"
            :current="currentPage"
            :onPageChange="handlePageChange"
            extraClass="mt-8"
        />
        
    </section>
</template>