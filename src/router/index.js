import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//导入组件
import filmRouter from './routes/films'
import centerRouter from './routes/center'
import cinemasRouter from './routes/cinemas'
const routes = [

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  { path: "/", redirect: "/films" },
  ...filmRouter,
  centerRouter,
  cinemasRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
