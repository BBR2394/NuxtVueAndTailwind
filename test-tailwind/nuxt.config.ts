// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devServer: {
    port: 3042
  },
  components: [
    {
      path: '~/components',
      pathPrefix: true,    
    },
  ],
  css: ['~/assets/css/main.css'],
  devtools: { 
    enabled: true 
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
