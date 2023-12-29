export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vite-pwa/nuxt', '@pinia/nuxt', 'nuxt-simple-sitemap', '@nuxt/image', '@nuxtjs/html-validator'],
  css: ['~/assets/css/index.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pwa: {
    manifest: {
      "theme_color": "#1b1d20",
      "background_color": "#1b1d20",
      "display": "minimal-ui",
      "scope": "/",
      "start_url": "/",
      "name": "development-space",
      "short_name": "ds",
      "description": "development-space",
      "icons": [
        {
          "src": "/favicons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/favicons/icon-256x256.png",
          "sizes": "256x256",
          "type": "image/png"
        },
        {
          "src": "/favicons/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "/favicons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    },
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  }
})
