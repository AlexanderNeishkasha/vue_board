import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';
import currentUser from './modules/current_user';
import posts from './modules/posts';

Vue.use(Vuex);

export const store =  new Vuex.Store({
    modules: {
        users,
        currentUser,
        posts
    },
    strict: process.env.NODE_ENV !== 'production'
});
