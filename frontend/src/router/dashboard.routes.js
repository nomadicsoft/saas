import auth from "./middleware/auth";

export default [
    {
        path: '/dashboard',
        name: 'dashboard.index',
        component: () => import('../views/dashboard/Index.vue'),
        meta: { middleware: [auth]}
    },
    {
        path: '/dashboard/profile',
        name: 'dashboard.profile',
        component: () => import('../views/dashboard/Profile.vue'),
        meta: { middleware: [auth]}
    },
    {
        path: '/dashboard/billing',
        name: 'dashboard.billing',
        component: () => import('../views/dashboard/billing/Index.vue'),
        meta: { middleware: [auth]}
    },
    {
        path: '/dashboard/billing/select-plan',
        name: 'dashboard.billing.select-plan',
        component: () => import('../views/dashboard/billing/SelectPlan.vue'),
        meta: { middleware: [auth]}
    },
    {
        path: '/dashboard/billing/checkout',
        name: 'dashboard.billing.checkout',
        component: () => import('../views/dashboard/billing/Checkout.vue'),
        meta: { middleware: [auth]}
    },
]
