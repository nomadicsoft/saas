import Home from "../views/Home";
import guest from "./middleware/guest";

export  default [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { layout: 'front'}
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
        meta: { middleware: [guest]}
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: () => import('../views/SignUp.vue'),
        meta: { middleware: [guest]}
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../views/ForgotPassword.vue'),
        meta: { middleware: [guest]}
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('../views/ResetPassword.vue'),
        meta: { middleware: [guest]}
    },
    {
        path: '/403',
        name: '403',
        component: () => import('../views/static/403.vue'),
        meta: { }
    },
]
