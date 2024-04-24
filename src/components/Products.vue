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
        <Pagination
            client:load
            :total="totalPages"
            :current="currentPage"
            :onPageChange="handlePageChange"
            extraClass="mb-8"
        />
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
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-2 gap-x-4 justify-items-center">
            <template v-for="product in paginateProducts" :key="product">
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
            client:load
            :total="totalPages"
            :current="currentPage"
            :onPageChange="handlePageChange"
            extraClass="mt-8"
        />
        
    </section>
</template>