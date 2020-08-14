module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/library-project-vue/' : '/',
  chainWebpack (config) {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Vue Library'
        return args
      })
  }
}
