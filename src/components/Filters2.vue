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
    <li>
        <button
            type="button"
            class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            :aria-controls="'dropdown-pages'+ title"
            :data-collapse-toggle="'dropdown-pages'+ title"
        >
            
            <svg class="flex-shrink-0 w-6 h-6 transition duration-75 text-primary-900 group-hover:text-primary-800 dark:text-gray-400 dark:group-hover:text-white me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/>
            </svg>
            <div class="flex-1 ml-3 text-left whitespace-nowrap text-primary-950"
            >{{title}}</div>
            <svg
                aria-hidden="true"
                class="w-6 h-6 text-primary-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </button>
            <ul :id="'dropdown-pages'+ title" class="py-2 space-y-2">
                <li v-for="(item, index) in items" :key="index">
                <button
                    @click="handleFilterChange(item.name)"
                    class="flex items-center p-2 pl-3 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                        <div class="flex-1 ml-3 text-left text-primary-950">{{item.name}}</div>
                        <em
                            class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800"
                        >
                        {{ item.count }}
                        </em>
                    </button>
                </li>
            
            </ul>
        </li>
</template>