const { defineConfig } = require('@vue/cli-service')
//process.env.HOST = '127.0.0.1'; // setup IP 
process.env.PORT = '3000';
module.exports = defineConfig({
  transpileDependencies: true
})

