export default {
    namespaced: true,
    state: {
        posts: []
    },
    getters: {
        getPost: state => id => {
            return state.posts.find(item => item.id == id);
        },
        posts(state) {
            return state.posts.sort((item1, item2) => {
                return item1.created_at >= item2.created_at ? -1 : 1;
            });
        },
        paginatePosts: state =>  pagination => {
            let begin = pagination.page * pagination.count;
            let end = begin + pagination.count;
            return state.posts.sort((item1, item2) => {
                return item1.created_at >= item2.created_at ? -1 : 1;
            }).slice(begin, end);
        },
        countPosts(state) {
            return state.posts.length;
        }
    },
    mutations: {
        addPost(state, post) {
            state.posts.push(post);
            localStorage.setItem('posts', JSON.stringify(state.posts));
        },
        removePost(state, id) {
            let post = state.posts.find((item) => item.id == id);
            state.posts.splice(state.posts.indexOf(post), 1);
            localStorage.setItem('posts', JSON.stringify(state.posts));
        },
        editPost(state, post) {
            let statePost = state.posts.find((item) => item.id == post.id);
            statePost.title = post.title;
            statePost.description = post.description;
            localStorage.setItem('posts', JSON.stringify(state.posts));
        }
    },
    actions: {
        loadFromStorage(store) {
            let posts = JSON.parse(localStorage.getItem('posts'));
            if (posts != null) posts.forEach(post => store.commit('addPost', post));
        },
        addPost(store, post) {
            store.commit('addPost', post);
        },
        removePost(store, id) {
            store.commit('removePost', id);
        },
        editPost(store, post) {
            store.commit('editPost', post);
        }
    }
}
