<script setup>
import { computed, ref, onMounted } from 'vue';
import { Dropdown } from 'flowbite';
const props = defineProps({
  title:{
    type: String,
    required: true,
  },
  items:{
    type: Object,
    required: true,
  },
  onChange: {
    type: Function,
  },
});

const currentFilter = ref('all');
const dropdown = ref(null);

const totalCount = computed(() => {
  return props.items.reduce((acc, item) => acc + item.count, 0);
})
const handleFilterChange =  (filter) => {
    currentFilter.value = filter;
    props.onChange(currentFilter.value);
    dropdown.value.hide();
}
onMounted(() => {
    const $targetEl = document.getElementById('dropdownFilters'+props.title);
    // set the element that trigger the dropdown menu on click
    const $triggerEl = document.getElementById('dropFilters'+props.title);

    // options with default values
    const options = {
        placement: 'bottom',
        triggerType: 'click',
        offsetSkidding: 0,
        offsetDistance: 10,
        delay: 300,
        ignoreClickOutsideClass: false,
    };

    // instance options object
    const instanceOptions = {
        id: 'dropFilters'+props.title,
        override: true
    };
    dropdown.value = new Dropdown($targetEl, $triggerEl, options, instanceOptions);
})
</script>
<template>
    <div class="flex items-center justify-center p-4">
        <button :id="'dropFilters'+title"
            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="button"
        >
            Filtrar por {{ title }}
            <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>

        <!-- Dropdown menu -->
        <div :id="'dropdownFilters' + title" class="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
            <h6 class="mb-3 text-sm font-bold text-gray-900 dark:text-white">
            {{ title }}
            </h6>
            <ul class="py-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" :aria-labelledby="'dropFilters'+title">

                <li>
                    <div @click="handleFilterChange('all')" :class="[currentFilter === 'all' ? 'active' : '', 'cursor-pointer flex items-center py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 [&.active]:bg-primary-100']">
                        <label
                            class="cursor-pointer w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >Todas
                        </label>
                        <span class="text-center mr-3 leading-4 w-4 h-4 text-blue-600 bg-primary-100 border-primary-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        >{{ totalCount }}</span>
                    </div>
                </li>
                <li v-for="(item, index) in items" :key="index">
                    
                    <div @click="handleFilterChange(item.name)" :class="[currentFilter === item.name ? 'active' : '', 'cursor-pointer flex items-center py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 [&.active]:bg-primary-100']">
                        <label
                            class="cursor-pointer w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >{{item.name}}
                        </label>
                        <span class="text-center mr-3 leading-4 w-4 h-4 text-blue-600 bg-primary-100 border-primary-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        >{{ item.count }}</span>
                    </div>
                </li>

            </ul>
        </div>
</div>
</template>