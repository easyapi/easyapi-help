module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'index',
          path: '/',
          component: resolve(__dirname, 'pages/index')
        },
        {
          name: 'video',
          path: '/video',
          component: resolve(__dirname, 'pages/video')
        },
        {
          name: 'search',
          path: '/search',
          component: resolve(__dirname, 'pages/search')
        },
        {
          name: 'monitor',
          path: '/monitor',
          component: resolve(__dirname, 'pages/monitor')
        },
        {
          name: 'help',
          path: '/category',
          component: resolve(__dirname, 'pages/help'),
          children: [
            {
              path: 'category/:categoryId',
              name: 'category',
              component: resolve(__dirname, 'pages/category/_id/index.vue')
            },
            {
              path: 'category/:categoryId/article/:articleId',
              name: 'category',
              component: resolve(__dirname, 'pages/article/_id/index.vue')
            },
          ]
        },
      )
    }
  },
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
    {src: 'element-ui/lib/theme-chalk/index.css'}
  ],
  plugins: [
    '@/plugins/axios',
    {src: '~plugins/element-ui', ssr: true},
    {src: '~plugins/nuxt-video-player-plugin.js', ssr: false}
  ],
  modules: ['@nuxtjs/axios'],
  buildModules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },
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
    extractCSS: {allChunks: true},
    vendor: ['element-ui']
    // babel: {
    //   plugins: [
    //     [
    //       'component',
    //       {
    //         libraryName: 'element-ui',
    //         styleLibraryName: 'theme-chalk'
    //       }
    //     ]
    //   ]
    // }
  },
  server: {
    port: 3000
  },
  env: {
    baseUrl: 'https://api.easyapi.com',
    accountUrl: 'https://account-api.easyapi.com'
  }
}
