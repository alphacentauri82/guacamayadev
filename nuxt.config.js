import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  title: 'Vue Vixens Day US 2020 - A conference presented by Foxy People 🦊',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Vue Vixens Day US 2020 - A conference presented by Foxy People 🦊',
    },
    { name: 'msapplication-TileColor', content: '#2b5797' },
    { name: 'msapplication-config', content: '/icons/browserconfig.xml' },
    { name: 'theme-color', content: '#fff' },
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/icons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/icons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/icons/favicon-16x16.png',
    },
    { rel: 'icon', type: 'manifest', href: '/icons/site.webmanifest' },
    {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
    { rel: 'shortcut icon', href: '/icons/favicon.ico' },
    { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Lato',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://db.onlinewebfonts.com/c/da950f2527dc01bebcbedd536e38c145?family=Futura',
    },
    {
      rel: 'stylesheet',
      href: 'https://use.fontawesome.com/releases/v5.0.10/css/all.css',
      integrity: 'sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg',
      crossorigin: 'anonymous',
    },
  ],
  generate: {
    fallback: true
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#34485d',
          secondary: '#ec7250',
          accent: '#3fb783',
          // primary: colors.blue.darken2,
          // accent: colors.grey.darken3,
          // secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-i18n'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
}
