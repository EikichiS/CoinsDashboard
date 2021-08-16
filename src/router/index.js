import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            name: 'Home',
            path: '/',
            component: () => import('@/views/Home'),
        },
        {
            name: 'Coin',
            path: '/coin/:id',
            component: () => import('@/views/Coin'),
        }
    ],

});
