import md5 from 'md5';

export default {
    namespaced: true,
    state: {
        users: []
    },
    getters: {
        getUserByUsername: (state) => (username) => {
            let user = state.users.find(user => user.username == username);
            return user != undefined ? user : null;
        },
        users(state) {
            return state.users;
        }
    },
    mutations: {
        addUser(state, {username, password, created_at}) {
            return state.users.push({
                username,
                password,
                created_at
            });
        },
        register(state, {username, password}) {
            state.users.push({
                username,
                password: md5(password),
                created_at: Date.now()
            });
        }
    },
    actions: {
        addUser(store, userinfo) {
            store.commit('addUser', userinfo);
        },
        register(store, userinfo) {
            store.commit('register', userinfo);
        }
    }
}
