export default {
    namespaced: true,
    state: {
        posts: []
    },
    getters: {
        getPost(state, id) {
            return state.posts.filter(item => item.id == id);
        }
    },
    mutations: {
        addPost(state, post) {
            state.posts.push(post);
        }
    }
}
