# vue.config.js的配置



- 导出的是一个对象，vue框架会自动匹配 vue.config.js 所以导出即可，别的不用管









# 模块

## devServer

> 配置路径，是否跨域，等

- devServe
  - proxy （普rua克C）: 配置是否跨域，访问端口
    - target：（塔给特）  ：请求地址
    - changeOrigin：(陈值奥润真)

```js
  devServer: {
    proxy: { 
      [process.env.VUE_APP_BASE_API]: {
        // target: 'http://59.46.92.100:55613',
        target: 'https://www.xinzeyijia.com/ylxtest',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      },
      // 多个数据库
      '/cdy': {
        // target: 'http://59.46.92.100:55613',
        // 地址
        target: 'https://www.xinzeyijia.com/ylxtest',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/cdy': ''
        }
      }
    }
  },
```











## configureWebpack

> 







## chainWebpack

> 

- chainWebpack : 趁音 webpack
  - 





# 配置packahe.json

- scripts
  - 修改一些基础命名

```json
"serve": "vue-cli-service serve",
"build:prod": "vue-cli-service build",
"build:stage": "vue-cli-service build --mode staging",
"preview": "node build/index.js --preview",
"lint": "eslint --ext .js,.vue src",
"test:unit": "jest --clearCache && vue-cli-service test:unit",
"test:ci": "npm run lint && npm run test:unit",
"svgo": "svgo -f src/icons/svg --config=src/icons/svgo.yml"
```

