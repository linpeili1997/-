import Vue from 'vue'
import VueRouter from 'vue-router'

const login = () => import('@/views/login.vue')
const teamlist = () => import('@/views/Home/component/teamList.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/home.vue'),
    children: [
      //团队列表
      {
          path: '/team/list',
          component: teamlist
      },
      // {
      //     path: '/department',
      //     meta: {
      //         name: '/department',
      //         title: '分销管理'
      //     },
      //     component: Department
      // },
      // {
      //     path: '/employee/add',
      //     meta: {
      //         name: '/employee',
      //         title: '提现管理'
      //     },
      //     component: AddEmployee
      // },
    ]
  }
]
 
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由守卫  判断是否回到登陆页
router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token') && to.path === '/login') {
      next(from)
  } else if (!localStorage.getItem('token') && to.path !== '/login'){
      next('/login')
  } else {
      next()
  }
})

export default router
