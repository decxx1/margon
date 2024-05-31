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
    packaging: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    flavors: {
        type: String,
        required: false,
    },
    variety: {
        type: String,
        required: false,
    },
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
        class="w-72 h-auto bg-white rounded-lg shadow shadow-primary-200 dark:shadow-gray-950 dark:bg-gray-800 mx-4 my-4"
    >
        <div class="w-64 h-56 mx-auto">
            <img class="rounded-t-lg w-full h-full object-contain" loading="lazy" :src="image" :alt="title" />
        </div>
        <div class="p-5">
            <a href="#">
                <h5 :class="[widthTitle(title),'mb-3 text-center font-bold tracking-tight text-primary-600 dark:text-primary-50']" >{{ title }}</h5>
            </a>
            <p class="text-center bg-primary-100 text-primary-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-primary-800 dark:text-primary-300">{{ category }}</p>
            
            <p v-if="variety" class="mb-3 mt-2 font-normal text-gray-700 dark:text-gray-400"><em class="font-bold text-primary-800 dark:text-primary-50 text-sm">Variedades: </em>{{ variety }}</p>
            <p v-if="flavors" class="mb-3 mt-2 font-normal text-gray-700 dark:text-gray-400"><em class="font-bold text-primary-800 dark:text-primary-50 text-sm">Sabores: </em>{{ flavors }}</p>
            
            <p v-if="packaging" class="font-normal text-gray-700 dark:text-gray-400"><em class="font-bold text-primary-800 dark:text-primary-50 text-sm">Presentación: </em>{{ packaging }}</p>
        </div>
        
    </div>
</template>