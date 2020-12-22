import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/admin/users',
        name: 'admin.users.index',
        component: () => import(/* webpackChunkName: "admin.users.index" */ '../views/admin/users/Index.vue')
    },
    {
        path: '/admin/users/:id',
        name: 'admin.users.show',
        component: () => import(/* webpackChunkName: "admin.users.show" */ '../views/admin/users/Show.vue')
    }


]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
})

export default router
