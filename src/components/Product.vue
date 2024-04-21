<script setup>
defineProps({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: false,
    },
    dose: {
        type: String,
        required: false,
    }
});
const widthTitle = (text) => {
    const width = text.length
    if(width < 32){
        return 'text-2xl' 
    }else if(width > 32 && width < 39){
        return 'text-xl'
    }else {
        return 'text-lg'
    }
};

</script>
<template>
    <div 
        class="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 my-4"
    >
        <div class="w-64 h-56 mx-auto">
            <img class="rounded-t-lg w-full h-full object-contain" :src="image" :alt="title" />
        </div>
        <div class="p-5">
            <a href="#">
                <h5 :class="widthTitle(title)" class="mb-3  text-center font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
            </a>
            <p class="text-center bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{{ category }}</p>
            
            <p class="mb-3 mt-2 font-normal text-gray-700 dark:text-gray-400"><span class="font-bold text-sm">Marca: </span>{{ brand }}</p>
            <div class="grid grid-cols-2">
                <p v-if="weight" class="mb-3 mt-2 font-normal text-gray-700 dark:text-gray-400"><span class="font-bold text-sm">Peso: </span>{{ weight }}</p>
                <p v-if="dose" class="mb-3 mt-2 font-normal text-gray-700 dark:text-gray-400"><span class="font-bold text-sm">Dosis: </span>{{ dose }}</p>
            </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><span class="font-bold text-sm">Presentación: </span>{{ description }}</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {{ provider }}
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
        
    </div>
</template>