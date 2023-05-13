import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/view/home/index.vue')
  },
  {
    path: '/subapp/:path*',
    component: () => import('@/view/subApp/index.vue')
  }
]
export default routes