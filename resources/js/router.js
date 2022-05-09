import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './pages/Home';
import Products from './pages/Products';

const router = new VueRouter({
    mode: "history",

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
    ]
});

export default router