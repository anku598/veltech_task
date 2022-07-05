const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: "static",
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {

        if (process.env.NODE_ENV === 'production') {
          args[0].inject = "body";
          args[0].template = 'src/templates/index.html';
        }
        return args;
      })

  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/css/style.scss";`
      }
    }
  },

})
