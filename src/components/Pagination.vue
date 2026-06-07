<script setup>
import { ref, computed, onMounted, watch } from 'vue';

const props = defineProps({
	total: { type: Number, required: true },
	current: { type: Number, required: true },
	onPageChange: { type: Function },
	extraClass: { type: String, default: '' },
});

const totalPages = ref(props.total);
const currentPage = ref(props.current);
const ellipsis = '···';
const showPages = ref(true);

const pages = computed(() => {
	const c = currentPage.value;
	const t = totalPages.value;
	if (t <= 11) {
		return Array.from({ length: t }, (_, i) => i + 1);
	}
	if (c <= 5) return [1, 2, 3, 4, 5, ellipsis, t];
	if (c >= t - 4) return [1, ellipsis, t - 4, t - 3, t - 2, t - 1, t];
	return [1, ellipsis, c - 1, c, c + 1, ellipsis, t];
});

const nextDisabled = computed(() => currentPage.value === totalPages.value);
const prevDisabled = computed(() => currentPage.value === 1);

const emitPageChange = () => props.onPageChange(currentPage.value);

const handleClickActive = (page) => {
	if (page === currentPage.value || page === ellipsis) return;
	currentPage.value = page;
	emitPageChange();
};

const handleClickControl = (n) => {
	currentPage.value += n;
	emitPageChange();
};

const btnBase =
	'inline-flex h-10 min-w-10 items-center justify-center border border-border-warm bg-card px-3 text-sm font-semibold text-foreground transition-colors hover:border-primary-400 hover:bg-primary-500 hover:text-white disabled:pointer-events-none disabled:opacity-40 dark:border-border-warm-dark dark:bg-card-dark dark:text-inverse dark:hover:border-primary-500 dark:hover:bg-primary-600';

onMounted(() => {
	if (window.innerWidth < 520) showPages.value = false;
});

watch(() => props.current, () => { currentPage.value = props.current; });
watch(() => props.total, () => { totalPages.value = props.total; });
</script>

<template>
	<nav :class="[extraClass, 'flex justify-center']" id="pagination" aria-label="Paginación">
		<ul class="inline-flex flex-wrap items-center justify-center gap-0">
			<li>
				<button
					:disabled="prevDisabled"
					type="button"
					:class="[btnBase, 'rounded-l-xl border-r-0']"
					@click="handleClickControl(-1)"
				>
					Anterior
				</button>
			</li>

			<template v-if="showPages">
				<li v-for="(item, index) in pages" :key="index">
					<button
						v-if="item !== ellipsis"
						type="button"
						:class="[
							btnBase,
							'border-r-0',
							item === currentPage
								? 'border-primary-500 bg-primary-500 text-white dark:border-primary-600 dark:bg-primary-600'
								: '',
						]"
						@click="handleClickActive(item)"
					>
						{{ item }}
					</button>
					<span
						v-else
						:class="[btnBase, 'pointer-events-none border-r-0 text-muted dark:text-inverse-subtle']"
					>{{ item }}</span>
				</li>
			</template>

			<li>
				<button
					:disabled="nextDisabled"
					type="button"
					:class="[btnBase, 'rounded-r-xl']"
					@click="handleClickControl(1)"
				>
					Siguiente
				</button>
			</li>
		</ul>
	</nav>
</template>
