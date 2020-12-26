import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';
import middlewarePipeline from "./middleware/middlewarePipeline";
import publicRoutes from './public.routes'
import adminRoutes from './admin.routes'
import dashboardRoutes from './dashboard.routes'

Vue.use(VueRouter)

const routes = [
    ...publicRoutes,
    ...adminRoutes,
    ...dashboardRoutes,
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
