import Vue from 'vue';
import VueRouter from 'vue-router';
import {store} from './store';
import AppPosts from './components/posts';
import AppEditform from './components/editform';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppPosts
        },
        {
            path: '/edit',
            name: 'create',
            component: AppEditform,
            beforeEnter: (to, from, next) => {
                if (store.getters['currentUser/user'].username != undefined) next();
                else next({name: 'home'});
            }
        }
    ],
    mode: 'history'
})
