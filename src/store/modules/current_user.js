export default {
    namespaced: true,
    state: {
        user: {}
    },
    getters: {
        user(state) {
            return state.user;
        }
    },
    mutations: {
        login(state, user) {
            state.user = user;
        },
        logout(state) {
            state.user = {};
        }
    },
    actions: {
        login(store, user) {
            store.commit('login', user);
        },
        logout(store) {
            store.commit('logout');
        }
    }
}
