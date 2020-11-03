import Vue from 'vue'
import VueRouter from 'vue-router'

const login = () => import('@/views/login.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/home.vue'),
    children: [
      // {
      //     path: '/employee',
      //     meta: {
      //         name: '/employee',
      //         title: '佣金管理'
      //     },
      //     component: Employee
      // },
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

router.beforeEach((to, from, next) => {
  //
  if (localStorage.getItem('token') && to.path === '/login') {
      next(from)
  } else if (!localStorage.getItem('token') && to.path !== '/login'){
      next('/login')
  } else {
      next()
  }
})

export default router
