import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://margon.com.ar/',
  build: {
    // Ejemplo: Genera `page.html` en lugar de `page/index.html` durante la compilación.
    format: 'file'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [vue()]
});