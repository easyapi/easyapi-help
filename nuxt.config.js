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
        {src: '~plugins/nuxt-video-player-plugin.js', ssr: false}
        // {src: '~plugins/jsonp.js', ssr: false}
    ],
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    build: {
        extractCSS: {allChunks: true}
        /*
        ** Run ESLint on save
        */
        // extend (config, { isDev, isClient }) {
        //   if (isDev && isClient) {
        //     config.module.rules.push({
        //       enforce: 'pre',
        //       test: /\.(js|vue)$/,
        //       loader: 'eslint-loader',
        //       exclude: /(node_modules)/
        //     })
        //   }
        // }
    }
    // router: {
    //     base: '/help/'
    // }
    // modules: [
    //     '@nuxtjs/axios',
    //     '@nuxtjs/proxy'
    // ],
    // proxy: [
    //     [
    //         '/api',
    //         {
    //             target: 'https://api2.easyapi.com', // api主机
    //             pathRewrite: { '^/api' : '/' }
    //         }
    //     ]
    // ]
}
