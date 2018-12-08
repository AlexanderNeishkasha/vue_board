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
            localStorage.setItem('current_user', JSON.stringify(user));
        },
        logout(state) {
            state.user = {};
            localStorage.removeItem('current_user');
        }
    },
    actions: {
        login(store, user) {
            store.commit('login', user);
        },
        logout(store) {
            store.commit('logout');
        },
        loadFromStorage(store) {
            let user;
            try {
                user = JSON.parse(localStorage.getItem('current_user'));
                if (user != null) store.commit('login', user);
            } catch(e) {
                console.log(e);
            }
        }
    }
}
