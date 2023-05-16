import type { RouteRecordRaw } from 'vue-router'

/**
 * layout布局之外的路由
 */
export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: '登录',
  component: () => import('@/views/Login/index.vue'),
  meta: {
    title: '登录',
  },
}

export default [LoginRoute]
