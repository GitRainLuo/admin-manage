import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //进入时默认为登录页面
      redirect:'/login'
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
})
