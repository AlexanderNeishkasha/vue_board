import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';
import currentUser from './modules/current_user';

Vue.use(Vuex);

export const store =  new Vuex.Store({
    modules: {
        users,
        currentUser
    },
    strict: process.env.NODE_ENV !== 'production'
});
