import Vue from 'vue'
import Router from 'vue-router'
import Index from 'component/Index'   //首页
import Commondity from 'component/Commondity'  //分类页
import Detail from 'component/Detail'  //商品详情
import Order from 'component/Order'
import Cart from 'component/Order/Cart' //购物车
import OrderCon from 'component/Order/Order'  //下单
import Story from 'component/Story'   //品牌故事
import Eden from 'component/Eden'    //启蒙乐园
import Contact from 'component/Contact'  //联系我们
import LoginBox from 'component/Login'  // 登录盒子
import Login from 'component/Login/Login'  // 登录
import Register from 'component/Login/Register'  // 登录
import Usercenter from 'component/UserCenter'   //个人中心
import UserCard from 'component/Usercenter/UserCard'   //个人中心

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },{
      path: '/list/:id',
      component: Commondity
    },{
      path: '/detail/:id',
      component: Detail
    },{
      path: '/login',
      component: LoginBox,
      children:[{
        path: '',
        component: Login,
      },{
        path: '/register',
        component: Register
      }]
    },{
      path: '/tale',
      component: Story
    },{
      path: '/eden',
      component: Eden
    },{
      path: '/contact',
      component: Contact
    },{
      path: '/order',
      component: Order,
      children: [{
        path: 'cart',
        component: Cart
      },{
        path: 'info',
        component: OrderCon
      }]
    },{
      path: '/usercenter',
      component: Usercenter,
      children: [{
        path: '',
        component: UserCard
      }]
    }
  ]
})
