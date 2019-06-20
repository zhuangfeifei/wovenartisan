const webpack = require('webpack')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '织匠科技',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '微信小程序、微信公众号、APP开发、网站建设' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', ssr: false },
    ],
    // 不对<script>标签中内容做转义处理
    __dangerouslyDisableSanitizers: ['script']
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2589FF' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'assets/app.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '~plugins/font-size.js', type: 'text/javascript', charset: 'utf-8', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  proxy: [
    [
        '/axios', 
        { 
          target: 'http://192.168.0.105:8080', // api主机
          pathRewrite: { '^/axios' : '' }
        }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    // plugins: [
    //         new webpack.ProvidePlugin({
    //           '$': 'jquery',
    //           '_': 'lodash'
    //           // ...etc.
    //         })
    //       ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}



// module.exports = {
//   build: {
//     plugins: [
//       new webpack.ProvidePlugin({
//         '$': 'jquery',
//         '_': 'lodash'
//         // ...etc.
//       })
//     ]
//   }
// }