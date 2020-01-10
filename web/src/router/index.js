import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import List from '../views/article/List.vue'
import Deatil from '../views/article/Detail.vue'
import about from '../views/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main,
    children: [
      {
        path: '/',
        component: List
      },
      {
        path: '/deatil/:id',
        component: Deatil,
        // 这里是props  不是prop
        props: true
      },
      {
        path: '/category/:id',
        component: List,
        // 这里是props  不是prop
        props: true
      },
      {
        path: '/about',
        component: about
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
