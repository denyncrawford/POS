import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        name: 'index',
        component: () => import("./views/Index.vue"),
        meta: {
            title: 'Dashboard'
        }
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: () => import("./views/Checkout.vue"),
        meta: {
            title: 'Checkout'
        }
    }
  ]
})

export default router
