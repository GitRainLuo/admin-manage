// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueRouter from 'vue-router'

// import routes from '@/router/index.js'


Vue.config.productionTip = false
// Vue.use(VueRouter)
Vue.use(ElementUI)
/* eslint-disable no-new */

// const route = new VueRouter({
//   routes
// })

// route.beforeEach((to,from,next)=>{
//   if(from.path == '/home'){
//     next({path:'/form'})
//   }
// })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
