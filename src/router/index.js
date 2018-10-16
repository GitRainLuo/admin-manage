import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Main from '@/pages/Main'
import Form from '@/pages/nav1/Form'
import Table from '@/pages/nav1/Table'
import Test from '@/pages/nav2/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //进入时默认为登录页面
      redirect:'/login',
      hidden:true
    },
    {
      path:'/login',
      name:'',
      component:Login,
      hidden:true
    },
    {
      path:'/',
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
        },
        {
          path:'/table',
          name:'Table',
          component:Table
        }
      ]
    },
    {
      path:'/home',
      name:'导航二',
      component:Home,
      iconCls:'el-icon-message',
      children:[
        {
          path:'/test',
          name:'Test',
          component:Test
        }
      ]
    }
  ]
})
