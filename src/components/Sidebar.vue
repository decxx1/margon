<script setup>

</script>
<template>
          
    <aside
      class="max-[1023px]:fixed max-[1023px]:top-16 max-[1023px]:left-0 max-[1023px]:z-40 max-[1023px]:w-64 mt-4 min-[1023px]:ml-4 w-full rounded-lg shadow-lg border border-primary-200 dark:border-gray-700 h-full bg-white dark:bg-gray-800  transition-transform -translate-x-full min-[1023px]:translate-x-0"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div class="overflow-y-auto py-5 px-3 h-full">
        <h5 id="drawer-navigation-label" class="text-base font-semibold text-primary-700 uppercase dark:text-gray-400 mb-4">Filtros</h5>
          <slot />

      </div>
      
   
    </aside>
</template>