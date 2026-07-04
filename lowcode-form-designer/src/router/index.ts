import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { noAuth: true },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/dashboard',
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '仪表盘', icon: 'Odometer' },
      },
      {
        path: 'system',
        meta: { title: '系统管理', icon: 'Setting' },
        children: [
          {
            path: 'user',
            name: 'User',
            component: () => import('@/views/system/user/index.vue'),
            meta: { title: '用户管理', icon: 'User' },
          },
          {
            path: 'role',
            name: 'Role',
            component: () => import('@/views/system/role/index.vue'),
            meta: { title: '角色管理', icon: 'Avatar' },
          },
        ],
      },
      {
        path: 'lowcode',
        meta: { title: '低代码表单', icon: 'MagicStick' },
        children: [
          {
            path: 'designer',
            name: 'FormDesigner',
            component: () => import('@/views/lowcode/designer/index.vue'),
            meta: { title: '表单设计器', icon: 'Edit' },
          },
          {
            path: 'render',
            name: 'FormRender',
            component: () => import('@/views/lowcode/render/index.vue'),
            meta: { title: '表单渲染', icon: 'Monitor' },
          },
          {
            path: 'schemas',
            name: 'SchemaList',
            component: () => import('@/views/lowcode/schemas/index.vue'),
            meta: { title: 'Schema 管理', icon: 'Document' },
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router