import tailwindcss from "@tailwindcss/vite";
import Nora from '@primeuix/themes/nora';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/image", "@primevue/nuxt-module"],
  primevue: {
    options: {
      theme: {
        preset: Nora,
      },
    },
  },
});
