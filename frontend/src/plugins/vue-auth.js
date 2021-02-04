import Vue from 'vue';
import axios from 'axios';
import router from '../router'

import auth                  from '@websanova/vue-auth/dist/v2/vue-auth.esm.js';
import driverAuthBearer      from '@websanova/vue-auth/dist/drivers/auth/bearer.esm.js';
import driverHttpAxios       from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js';
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js';

Vue.use(auth, {
  plugins: {
    http: axios, // Axios
    // http: Vue.http, // Vue Resource
    router: router // not working
  },
  drivers: {
    auth: driverAuthBearer,
    http: driverHttpAxios,
    router: driverRouterVueRouter,
  },
  options: {
    rolesKey: 'roles',
    authRedirect: { name: 'auth-signin' },
    notFoundRedirect: { name: 'error-not-found' },
    forbiddenRedirect: { name: 'error-access-denied' },
    registerData: {
      url: '/api/register',
      method: 'POST',
      redirect: { name: 'dashboard.index' },
      fetchUser: true,
      autoLogin: true
    },
    loginData: {
      url: '/api/login',
      method: 'POST',
      redirect: { name: 'dashboard.index' },
      fetchUser: true
    },
    logoutData: {
      url: '/api/logout',
      method: 'GET',
      redirect: '/',
      makeRequest: true
    },
    fetchData: {
      url: '/api/users/auth',
      method: 'GET',
      enabled: true
    },
    refreshData: {
      // url: '/api/refresh',
      // method: 'POST',
      enabled: false,
      // interval: 30
    }
  }
});
