<script setup>
import { computed, ref } from 'vue';
import { products } from '@/data/products.json';
import Product from '@/components/Product.vue';
import Lines from '@/components/Lines.vue';
import Pagination from '@/components/Pagination.vue';



const currentPage = ref(1);
const perPage = 12;
const totalPages = ref(Math.ceil(products.length / perPage ));

const currentCategory = ref('');
//console.log(totalPages)
const paginateProducts = computed ( () => {
    const startIndex = (currentPage.value - 1) * perPage;
    const endIndex = startIndex + perPage;
  
    // Filtrar productos por la categoría actual
    let filteredProducts = products;

    if (currentCategory.value !== '') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory.value);
    }else{
        filteredProducts = [];
    }


    totalPages.value = Math.ceil(filteredProducts.length / perPage );
    if (currentPage.value > totalPages.value) handlePageChange(1) 
    return filteredProducts.slice(startIndex, endIndex);
})

const handleCategoryChange = (value) => {
    currentCategory.value = value;
}

const handlePageChange = (page) => {
    currentPage.value = page;
}


</script>
<template>
    <section class="mt-32">

        <Lines 
            :onChange="handleCategoryChange"
        />
        <section class="md:w-8/12 w-11/12 mx-auto overflow-hidden bg-white dark:bg-gray-800 rounded-3xl px-10">
           
        </section>
        <div class="container mx-auto">
            <div class="auto-rows-max mx-auto grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-2 gap-x-2 md:gap-x-4 justify-items-center">
                <template v-for="product in paginateProducts" :key="product">
                    <Product
                        :image="product.img"
                        :title="product.title"
                        :category="product.category"
                        :flavors="product.flavors"
                        :packaging="product.packaging"
                        :variety="product.variety"
                    />
                </template>
            </div>
        </div>
        <Pagination
            v-show="paginateProducts && paginateProducts.length > 0"
            client:load
            :total="totalPages"
            :current="currentPage"
            :onPageChange="handlePageChange"
            extraClass="mt-8"
        />
        
    </section>
</template>