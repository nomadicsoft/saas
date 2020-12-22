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
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
        meta: { middleware: [guest]}
    },
    {
        path: '/403',
        name: '403',
        component: () => import(/* webpackChunkName: "login" */ '../views/static/403.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard.index',
        component: () => import(/* webpackChunkName: "admin.users.index" */ '../views/dashboard/Index.vue'),
        meta: { middleware: [auth]}
    },
    {
        path: '/admin',
        name: 'admin.index',
        component: () => import(/* webpackChunkName: "admin.users.index" */ '../views/admin/Index.vue'),
        meta: { middleware: [auth, isAdmin]}
    },
    {
        path: '/admin/users',
        name: 'admin.users.index',
        component: () => import(/* webpackChunkName: "admin.users.index" */ '../views/admin/users/Index.vue'),
        meta: { middleware: [auth, isAdmin]}
    },
    {
        path: '/admin/users/:id',
        name: 'admin.users.show',
        component: () => import(/* webpackChunkName: "admin.users.show" */ '../views/admin/users/Show.vue'),
        meta: { middleware: [auth, isAdmin]}
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
