# npm i jsencrypt crypto-js element-ui echarts vuex axios js-cookie vue-cropper
# npm i less less-leader -dev

# 集中配置文件流程介绍
1. static静态资源文件中新建env.js文件
2. index.html中引入此文件
3. env.js中规定全局属性名
4. 在request.js或其他页面进行调用
> 2020.05.14
