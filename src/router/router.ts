/*
 * @Description: 设置路由
 * @Autor: Alfred
 * @Date: 2022-02-25 17:54:35
 * @FilePath: /vite-vue3-test/src/router/router.ts
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home-page/home-page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
