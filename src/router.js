import Vue from 'vue';
import VueRouter from 'vue-router';
import {store} from './store';
import AppPosts from './components/posts';
import AppEditform from './components/editform';
import AppPost from './components/post';
import AppNotFound from './components/not_found';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppPosts
        },
        {
            path: '/edit/:id?',
            name: 'edit',
            component: AppEditform,
            beforeEnter: (to, from, next) => {
                let post = store.getters['posts/getPost'](to.params.id);
                if (
                    (post && store.getters['currentUser/user'].username == post.user) ||
                    (!post && store.getters['currentUser/user'].username != undefined)
                ) next();
                else next({name: 'home'});
            }
        },
        {
            path: '/post/not_found',
            name: 'notFoundPost',
            component: AppNotFound,
        },
        {
            path: '/post/:id',
            name: 'showPost',
            component: AppPost,
        },
        {
            path: '*',
            name: 'notFound',
            component: AppNotFound,
        }
    ],
    mode: 'history'
})
