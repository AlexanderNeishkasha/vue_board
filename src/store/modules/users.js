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
        addUser(state, user) {
            return state.users.push(user);
        },
        register(state, {username, password}) {
            state.users.push({
                username,
                password: md5(password),
                created_at: Date.now()
            });
            localStorage.setItem('users', JSON.stringify(state.users));
        }
    },
    actions: {
        addUser(store, userinfo) {
            store.commit('addUser', userinfo);
        },
        register(store, userinfo) {
            store.commit('register', userinfo);
        },
        loadUsersFromStorage(store) {
            try {
                let users = JSON.parse(localStorage.getItem('users'));
                users.forEach(user => store.commit('addUser', user));
            } catch (e) {
                console.log(e);
            }
        }
    }
}
