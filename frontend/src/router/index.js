import Vue from 'vue'
import VueRouter from 'vue-router'
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

export default router
