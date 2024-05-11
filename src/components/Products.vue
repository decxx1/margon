<script setup>
import { computed, ref } from 'vue';
import { products } from '@/data/products.json';
import Product from '@/components/Product.vue';
import Sidebar from '@/components/Sidebar.vue';
import Pagination from '@/components/Pagination.vue';
import Filters from '@/components/Filters.vue';
import Filters2 from '@/components/Filters2.vue';
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
const searchProduct = ref('');
//console.log(totalPages)
const paginateProducts = computed ( () => {
    const startIndex = (currentPage.value - 1) * perPage;
    const endIndex = startIndex + perPage;
    let input = searchProduct.value.toLowerCase();
    
    // Filtrar productos por la categoría actual
    let filteredProducts = products;
    if (currentCategory.value !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory.value);
    }
    if (currentBrand.value !== 'all' ) {
        filteredProducts = filteredProducts.filter(product => product.brand === currentBrand.value);
    }
    if (input.length > 0) {
        filteredProducts = filteredProducts.filter(function(product) {
            return product.title.toLowerCase().includes(input);
        });
    }
    totalPages.value = Math.ceil(filteredProducts.length / perPage );
    if (currentPage.value > totalPages.value) handlePageChange(1) 
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
        <section class="md:w-8/12 w-11/12 mx-auto overflow-hidden bg-white shadow border border-primary-200 dark:border-gray-700 dark:bg-gray-800 rounded-3xl px-10">
            <div class="w-full mx-auto px-2 sm:px-4 pb-6 pt-4 md:pb-2 flex flex-column sm:flex-row flex-wrap items-center justify-center lg:justify-between">
                <Pagination
                    client:load
                    :total="totalPages"
                    :current="currentPage"
                    :onPageChange="handlePageChange"
                    extraClass=""
                />
                <div class="grid grid-cols-1 gap-3">
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-5 h-5 text-primary-950 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" v-model="searchProduct" class="block p-2 ps-10 text-sm text-primary-950 placeholder-primary-950 border border-primary-200 rounded-lg md:w-80 max-w-80 bg-primary-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Buscar productos" 
                        />
                    </div>
                    <button
                        data-drawer-target="drawer-navigation"
                        data-drawer-toggle="drawer-navigation"
                        aria-controls="drawer-navigation"
                        data-drawer-body-scrolling="true"
                        class="min-[1023px]:hidden mb-4 px-2 py-1 my-auto flex mr-2 text-primary-950 border bg-primary-50 border-primary-200 rounded-lg cursor-pointer hover:text-primary-900 hover:bg-primary-100 focus:bg-primary-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-primary-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <svg class="w-5 h-5 mr-3 text-primary-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M15 3H0V2h15zm-3 5H3V7h9zm-2 5H5v-1h5z" clip-rule="evenodd"/></svg>
                        Filtros
                    </button>
                </div>
                
            </div>
        </section>
        <div class="grid gap-4 grid-cols-12 container mx-auto">
            <div class="col-span-12 min-[1023px]:col-span-4 min-[1279px]:col-span-3 min-[1610px]:col-span-2">
                <Sidebar>
                    <ul class="space-y-2">
                        <Filters2
                            client:load
                            title="Marcas"
                            :items="brands"
                            :onChange="handleBrandChange"
                        />
                    </ul>
                    <ul
                        class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700"
                    >
                        <Filters2
                            client:load
                            title="Categorías"
                            :items="categories"
                            :onChange="handleCategoryChange"
                        />
                    </ul>
                </Sidebar>
            </div>
            <div class="auto-rows-max col-span-12 min-[1023px]:col-span-8 min-[1279px]:col-span-9 min-[1610px]:col-span-10 mx-auto grid min-[1610px]:grid-cols-4 min-[1279px]:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-2 gap-x-2 md:gap-x-4 justify-items-center">
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