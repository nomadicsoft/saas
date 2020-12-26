import auth from "./middleware/auth";
import isAdmin from "./middleware/isAdmin";

export default [
    {
        path: '/admin',
        name: 'admin.index',
        component: () => import('../views/admin/Index.vue'),
        meta: { middleware: [auth, isAdmin]}
    },
    {
        path: '/admin/profile',
        name: 'admin.profile',
        component: () => import('../views/admin/Profile.vue'),
        meta: { middleware: [auth]}
    },
    {
        path: '/admin/price-plans',
        name: 'admin.price-plans.index',
        component: () => import('../views/admin/price-plans/Index.vue'),
        meta: { middleware: [auth, isAdmin], layout: 'admin-dashboard'}
    },
    {
        path: '/admin/price-plans/create',
        name: 'admin.price-plans.create',
        component: () => import('../views/admin/price-plans/Form.vue'),
        meta: { middleware: [auth, isAdmin], layout: 'admin-dashboard'}
    },
    {
        path: '/admin/price-plans/:id',
        name: 'admin.price-plans.edit',
        component: () => import('../views/admin/price-plans/Form.vue'),
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
];
