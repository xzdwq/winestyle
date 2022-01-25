import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { OProductDetails, P404 } from '@sb/components'

export const defaultRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/product-details',
  },
  {
    name: 'product-details',
    path: '/product-details',
    component: OProductDetails,
    meta: {
      public: true,
    },
  },
  {
    name: 'private-404',
    path: '/:_(.+)+',
    component: P404,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: defaultRoutes,
})
