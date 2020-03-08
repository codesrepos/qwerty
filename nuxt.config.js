export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/main.scss',
    'swiper/dist/css/swiper.css',
    { src: 'vue-select/dist/vue-select.css', lang: 'css' }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { ssr: false, src: '~plugins/cookies.js' },
    { ssr: false, src: '~plugins/adultAcceptGuard.js' },
    { ssr: false, src: '~plugins/input-range.js' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/global-components'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-vue-select',
    'cookie-universal-nuxt',
    [
      'nuxt-mq',
      {
        defaultBreakpoint: 'default',
        breakpoints: {
          xs: 575,
          sm: 767,
          md: 991,
          lg: 1199,
          xl: Infinity
        }
      }
    ]
  ],
  styleResources: {
    scss: './assets/scss/resources.scss'
  },
  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {}
  }
}
