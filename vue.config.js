const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: "static",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/css/style.scss";`
      }
    }
  },

})
