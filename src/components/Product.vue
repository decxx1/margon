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
        class="w-72 bg-white border border-primary-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 my-4"
    >
        <div class="w-64 h-56 mx-auto">
            <img class="rounded-t-lg w-full h-full object-contain" loading="lazy" :src="image" :alt="title" />
        </div>
        <div class="p-5">
            <a href="#">
                <h5 :class="[widthTitle(title),'mb-3 text-center font-bold tracking-tight text-primary-950 dark:text-primary-50']" >{{ title }}</h5>
            </a>
            <p class="text-center bg-primary-100 text-primary-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-primary-900 dark:text-primary-300">{{ category }}</p>
            
            <p class="mb-3 mt-2 font-normal text-gray-700 dark:text-gray-400"><em class="font-bold text-primary-900 dark:text-primary-50 text-sm">Marca: </em>{{ brand }}</p>
            <div class="grid grid-cols-2">
                <p v-if="weight" class="mb-3 mt-2 font-normal text-gray-700 dark:text-gray-400"><em class="font-bold text-primary-900 dark:text-primary-50 text-sm">Peso: </em>{{ weight }}</p>
                <p v-if="dose" class="mb-3 mt-2 font-normal text-gray-700 dark:text-gray-400"><em class="font-bold text-primary-900 dark:text-primary-50 text-sm">Dosis: </em>{{ dose }}</p>
            </div>
            <p class="font-normal text-gray-700 dark:text-gray-400"><em class="font-bold text-primary-900 dark:text-primary-50 text-sm">Presentación: </em>{{ description }}</p>
        </div>
        
    </div>
</template>