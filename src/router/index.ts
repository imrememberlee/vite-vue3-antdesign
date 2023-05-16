import { createRouter, createWebHashHistory } from 'vue-router'
import dashboard from './dashboard'
import noLayout from './noLayout'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/layouts/Default/index.vue'),
    redirect: '/dashboard',
    children: [...dashboard],
  },
  {
    path: '/noLayout',
    name: 'noLayout',
    component: () => import('@/layouts/NoLayout/index.vue'),
    children: [...noLayout],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to: any, from, next) => {
  next()
})
export default router
