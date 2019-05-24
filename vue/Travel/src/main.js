// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 解决移动端300毫秒点击延迟问题 */
import fastClick from 'fastclick'
/* 重置默认样式，使样式显示在各种浏览器中的效果一致 */
import 'styles/reset.css'
/* 解决移动端一像素边框问题 */
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
