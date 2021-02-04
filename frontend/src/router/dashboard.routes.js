
export default [
    {
        path: '/dashboard',
        name: 'dashboard.index',
        component: () => import('../views/dashboard/Index.vue'),
        meta: { auth: true }
    },
    {
        path: '/dashboard/profile',
        name: 'dashboard.profile',
        component: () => import('../views/dashboard/Profile.vue'),
        meta: { auth: true }
    },
    {
        path: '/dashboard/billing',
        name: 'dashboard.billing',
        component: () => import('../views/dashboard/billing/Index.vue'),
        meta: { auth: true }
    },
    {
        path: '/dashboard/billing/select-plan',
        name: 'dashboard.billing.select-plan',
        component: () => import('../views/dashboard/billing/SelectPlan.vue'),
        meta: { auth: true }
    },
    {
        path: '/dashboard/billing/checkout',
        name: 'dashboard.billing.checkout',
        component: () => import('../views/dashboard/billing/Checkout.vue'),
        meta: { auth: true }
    },
]
