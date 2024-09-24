export default {
  target: 'static', // Menambahkan target static

  // Global page headers
  head: {
    title: 'project-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js', body: true },
      { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js', body: true },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js', body: true }
    ]
  },

  // Auto import components
  components: true,

  // Build Configuration
  build: {
    // konfigurasi build lainnya...
  },

  // Global CSS
  css: [
    // CSS lainnya...
  ],
}