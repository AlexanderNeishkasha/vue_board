import Vue from 'vue';
import VueRouter from 'vue-router';
import AppPosts from './components/posts';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppPosts
        },
    ],
    mode: 'history'
})
