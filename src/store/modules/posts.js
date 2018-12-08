export default {
    namespaced: true,
    state: {
        posts: []
    },
    getters: {
        getPost: (state) => (id) => {
            return state.posts.find(item => item.id == id);
        }
    },
    mutations: {
        addPost(state, post) {
            state.posts.push(post);
            localStorage.setItem('posts', JSON.stringify(state.posts));
        }
    },
    actions: {
        loadFromStorage(store) {
            let posts = JSON.parse(localStorage.getItem('posts'));
            if (posts != null) posts.forEach(post => store.commit('addPost', post));
        }

    }
}
