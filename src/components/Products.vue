<script setup>
import { computed, ref } from 'vue';
import { products } from '@/data/products.json';
import Product from '@/components/Product.vue';
import Lines from '@/components/Lines.vue';
import Pagination from '@/components/Pagination.vue';
import { getLineByCategory } from '@/lib/catalog-lines.js';

const currentPage = ref(1);
const perPage = 12;
const currentCategory = ref('');

const filteredProducts = computed(() => {
	if (!currentCategory.value) return [];
	return products.filter((product) => product.category === currentCategory.value);
});

const totalPages = computed(() => Math.max(1, Math.ceil(filteredProducts.value.length / perPage)));

const paginateProducts = computed(() => {
	const startIndex = (currentPage.value - 1) * perPage;
	return filteredProducts.value.slice(startIndex, startIndex + perPage);
});

const activeLine = computed(() => getLineByCategory(currentCategory.value));

const handleCategoryChange = (value) => {
	currentCategory.value = value;
	currentPage.value = 1;
};

const handlePageChange = (page) => {
	currentPage.value = page;
	window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
	<section class="bg-body pb-20 dark:bg-body-dark lg:pb-28">
		<Lines :onChange="handleCategoryChange" />

		<div class="mx-auto max-w-7xl px-6">
			<div v-if="!currentCategory" class="py-16 text-center">
				<p class="text-base text-muted dark:text-inverse-muted">
					Elegí una línea de productos para ver el catálogo.
				</p>
			</div>

			<template v-else>
				<header class="mb-10 flex flex-col items-center justify-between gap-4 border-b border-border-warm pb-8 text-center sm:flex-row sm:text-left dark:border-border-warm-dark">
					<div>
						<p class="mb-2 text-[0.72rem] font-semibold tracking-[0.28em] text-primary-600 uppercase dark:text-primary-300">
							{{ activeLine?.shortLabel }}
						</p>
						<h2 class="text-2xl font-black tracking-tight text-foreground dark:text-inverse">
							Productos
						</h2>
					</div>
					<p class="text-sm text-muted dark:text-inverse-muted">
						{{ filteredProducts.length }} productos encontrados
					</p>
				</header>

				<div
					v-if="paginateProducts.length"
					class="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8"
				>
					<Product
						v-for="product in paginateProducts"
						:key="product.title + product.img"
						:image="product.img"
						:title="product.title"
						:category="product.category"
						:flavors="product.flavors"
						:packaging="product.packaging"
						:variety="product.variety"
					/>
				</div>

				<div v-else class="py-16 text-center">
					<p class="text-base text-muted dark:text-inverse-muted">
						No hay productos en esta línea por el momento.
					</p>
				</div>

				<Pagination
					v-if="paginateProducts.length && totalPages > 1"
					:total="totalPages"
					:current="currentPage"
					:onPageChange="handlePageChange"
					extra-class="mt-12"
				/>
			</template>
		</div>
	</section>
</template>
