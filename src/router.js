import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/About.vue')
  },

  { path: '/type_groups', component: () => import('./sites/TypeGroup/list.vue') },
  { path: '/type_groups/add', component: () => import('./sites/TypeGroup/add.vue') },
  { path: '/type_groups/:id/edit', component: () => import('./sites/TypeGroup/edit.vue') },
  { path: '/type_groups/:id', component: () => import('./sites/TypeGroup/edit.vue') },

  { path: '/types', component: () => import('./sites/Type/list.vue') },
  { path: '/types/add', component: () => import('./sites/Type/add.vue') },
  { path: '/types/:id/edit', component: () => import('./sites/Type/edit.vue') },
  { path: '/types/:id', component: () => import('./sites/Type/edit.vue') },

  { path: '/variants', component: () => import('./sites/Variant/list.vue') },
  { path: '/variants/add', component: () => import('./sites/Variant/add.vue') },
  { path: '/variants/:id/edit', component: () => import('./sites/Variant/edit.vue') },
  { path: '/variants/:id', component: () => import('./sites/Variant/edit.vue') },

  { path: '/seeds', component: () => import('./sites/Seed/list.vue') },
  { path: '/seeds/add', component: () => import('./sites/Seed/add.vue') },
  { path: '/seeds/:id/edit', component: () => import('./sites/Seed/edit.vue') },
  { path: '/seeds/:id', component: () => import('./sites/Seed/edit.vue') },

  { path: '/seed_producers', component: () => import('./sites/SeedProducer/list.vue') },
  { path: '/seed_producers/add', component: () => import('./sites/SeedProducer/add.vue') },
  { path: '/seed_producers/:id/edit', component: () => import('./sites/SeedProducer/edit.vue') },
  { path: '/seed_producers/:id', component: () => import('./sites/SeedProducer/edit.vue') },


  {
    path: '/test_modal',
    component: () => import('./views/TestModal.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
