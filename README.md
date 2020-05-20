# npm i jsencrypt crypto-js element-ui echarts vuex axios js-cookie vue-cropper
# npm i less less-leader -dev

# 基本规则按照eslint规范；
# 变量名、方法名使用驼峰式命名，避免使用a1，list1此类命名方式；
# 关键代码要有注释，注释包括人员、时间、内容。
> 例如：2020.05.09，顾龙飞，编辑此段文字；

# 集中配置文件流程介绍
1. static静态资源文件中新建env.js文件
2. index.html中引入此文件
3. env.js中规定全局属性名
4. 在request.js或其他页面进行调用
> 2020.05.14，顾龙飞，编辑此段文字；

# css引入多套样式流程介绍
1. assets中创建style.js
2. main.js引入此文件
3. style.js根据当前屏幕的宽判断引入某个js文件
> 2020.05.14，顾龙飞，编辑此段文字；
