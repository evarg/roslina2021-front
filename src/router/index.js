import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/type_groups',
    name: 'Lista typow gatunkow',
    component: () => import('../views/TypeGroupList.vue')
  },
  {
    path: '/type_groups/add',
    name: 'Dodaj typ gatunkow',
    component: () => import('../views/TypeGroupAdd.vue')
  }  
]

const router = new VueRouter({
  routes
})

export default router
