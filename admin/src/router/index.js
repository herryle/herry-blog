import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/category/edit.vue'
import CategoryList from '../views/category/list.vue'
import ArticleEdit from '../views/article/edit.vue'
import ArticleList from '../views/article/list.vue'
import AdsEdit from '../views/ad/edit.vue'
import AdsList from '../views/ad/list.vue'
import UserEdit from '../views/user/edit.vue'
import UserList from '../views/user/list.vue'
import Login from '../views/login'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'Login', component: Login, meta: { isPublic: true } },
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/articles/list',
    children: [
      { path: '/categories/create', component: CategoryEdit },
      { path: '/categories/edit/:id', component: CategoryEdit, props: true },
      { path: '/categories/list', component: CategoryList },

      { path: '/articles/create', component: ArticleEdit },
      { path: '/articles/edit/:id', component: ArticleEdit, props: true },
      { path: '/articles/list', component: ArticleList },

      { path: '/ads/create', component: AdsEdit },
      { path: '/ads/edit/:id', component: AdsEdit, props: true },
      { path: '/ads/list', component: AdsList },

      { path: '/users/create', component: UserEdit },
      { path: '/users/edit/:id', component: UserEdit, props: true },
      { path: '/users/list', component: UserList }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !sessionStorage.token) {
    return next('/login')
  }
  next()
})

export default router
