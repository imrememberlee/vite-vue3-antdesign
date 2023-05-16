import type { RouteRecordRaw } from 'vue-router'

/**
 * 操作面板页面
 */
export const DashboardRoute: RouteRecordRaw = {
  path: '/dashboard',
  name: '操作面板',
  component: () => import('@/views/Dashboard/index.vue'),
  meta: {
    title: '操作面板',
  },
}

export default [DashboardRoute]
