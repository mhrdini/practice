import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: ['./app/assets/css/main.css'],
  vite: {
    base: '',
    plugins: [
      tailwindcss(),
    ],
  },
  fonts: {
    families: [
      {
        name: 'Geist',
        provider: 'google',
        weights: ['100 900'],
      },
    ],
  },
})
