import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import guest from "./middleware/guest";
import store from '../store';
import middlewarePipeline from "./middleware/middlewarePipeline";
import auth from "./middleware/auth";
import isAdmin from "./middleware/isAdmin";

Vue.use(VueRouter)

const routes = [
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
        meta: { layout: 'front'}
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
        meta: { middleware: [guest], layout: 'front'}
    },
    {
        path: 'sign-up',
        name: 'sign-up',
        component: () => import('../views/SignUp.vue'),
        meta: { middleware: [guest], layout: 'front'}
    },
    {
        path: '/403',
        name: '403',
        component: () => import('../views/static/403.vue'),
        meta: { layout: 'front'}
    },
    {
        path: '/dashboard',
        name: 'dashboard.index',
        component: () => import('../views/dashboard/Index.vue'),
        meta: { middleware: [auth], layout: 'user-dashboard'}
    },
    {
        path: '/dashboard/billing',
        name: 'dashboard.billing',
        component: () => import('../views/dashboard/billing/Index.vue'),
        meta: { middleware: [auth], layout: 'user-dashboard'}
    },
    {
        path: '/dashboard/billing/select-plan',
        name: 'dashboard.billing.select-plan',
        component: () => import('../views/dashboard/billing/SelectPlan.vue'),
        meta: { middleware: [auth], layout: 'user-dashboard'}
    },
    {
        path: '/dashboard/billing/checkout',
        name: 'dashboard.billing.checkout',
        component: () => import('../views/dashboard/billing/Checkout.vue'),
        meta: { middleware: [auth], layout: 'user-dashboard'}
    },
    {
        path: '/admin',
        name: 'admin.index',
        component: () => import('../views/admin/Index.vue'),
        meta: { middleware: [auth, isAdmin], layout: 'admin-dashboard'}
    },
    {
        path: '/admin/users',
        name: 'admin.users.index',
        component: () => import('../views/admin/users/Index.vue'),
        meta: { middleware: [auth, isAdmin], layout: 'admin-dashboard'}
    },
    {
        path: '/admin/users/:id',
        name: 'admin.users.show',
        component: () => import('../views/admin/users/Show.vue'),
        meta: { middleware: [auth, isAdmin], layout: 'admin-dashboard'}
    }


]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
})

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware
    const context = { to, from, next, store }

    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
})

export default router
