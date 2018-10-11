import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Main from '@/pages/Main'
import Form from '@/pages/nav1/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //进入时默认为登录页面
      redirect:'/home',
      hidden:true
    },
    {
      path:'/login',
      name:'',
      component:Login,
      hidden:true
    },
    {
      path:'/home',
      name:'导航一',
      component:Home,
      iconCls: 'el-icon-message',
      children:[
        {
          path:'/main',
          component:Main,
          name:'主页',
          hidden:true
        },
        {
          path:'/form',
          name:'Form',
          component:Form
        }
      ]
    },
    {
      path:'/home',
      name:'导航二',
      component:Home,
      iconCls:'el-icon-message',
      children:[

      ]
    }
  ]
})
