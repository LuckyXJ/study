// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 解决手机端300毫秒点击延迟问题,通过npm安装的第三方模块，安装后可在package.json中的dependencies中找到 */
import fastClick from 'fastclick'
/* 初始化所有样式，使得内容在所有浏览器显示样式一致 */
import './assets/styles/reset.css'
/* 解决手机端一像素边框问题 */
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
