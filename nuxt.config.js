module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'EasyAPI帮助中心专栏',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'EasyAPI帮助中心专栏'},
      {hid: 'description', name: 'keyswords', content: 'EasyAPI帮助中心专栏'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    {src: '~/assets/stylus/base.styl', lang: 'stylus'},
  ],
  plugins: [
    '@/plugins/axios',
    {src: '~plugins/nuxt-video-player-plugin.js', ssr: false}
  ],
  modules: ['@nuxtjs/axios'],
  axios: {},
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#18c1d6',
    failedColor: '#18c1d6'
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: {allChunks: true}
  },
  server: {
    port: 3000
  },
  env: {
    baseUrl: 'https://api.easyapi.com',
    accountUrl: 'https://account-api.easyapi.com'
  }
}
