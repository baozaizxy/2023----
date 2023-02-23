const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages:{
    index:{
      entry:'src/main.js',
    },
  },
  transpileDependencies: true,
  lintOnSave:false , // 修改成false 就是不检查了

  // devServer:{
  //   // proxy有代理的意思 此处开启代理服务器 用于帮助浏览器接收服务器发来的数据并转交给浏览器
  //   // 5000 ：把请求转发给50000
  //   // 不能配置多个代理 不能灵活控制走不走代理
  //   proxy:'http://localhost:5000'
  // }

  // 开启代理服务器（方式二）
  // devServer:{
  //   proxy:{
  //     // 请求前缀 走代理则请求前缀加/api 不走代理则不加
  //     // 前缀放在紧跟端口号的位置
  //     '/api':{
  //       target:'<url>',
  //       ws:true,//用于支持websocket
  //       changeOrigin:true //用于控制请求头中的host值
  //     },
  //     // '/foo':{
  //     //   target:'<other_url>'
  //     // }
  //   }
  // }
})

