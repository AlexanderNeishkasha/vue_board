<template>
    <div>
        <app-breadcrumb
                :link="link"
                link-name="Create Ad"
        >
        </app-breadcrumb>
        <form class="edit-form white z-depth-2" @submit.prevent="createOrEditPost">

            <div class="input-field">
                <input id="title" type="text" class="validate" v-model="title">
                <label for="title">Title</label>
                <span class="helper-text red-text" v-if="errors.title">{{ errors.title }}</span>
            </div>
            <div class="input-field">
                <textarea id="description" class="materialize-textarea" v-model="description"></textarea>
                <label for="description">Description</label>
                <span class="helper-text red-text" v-if="errors.description">{{ errors.description }}</span>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">
                Create
            </button>
        </form>
    </div>
</template>

<script>
    import uniqid from 'uniqid';
    import AppBreadcrumb from './breadcrumb';
    import Materialize from 'materialize-css';

    export default {
        name: 'editform',
        components: {
            AppBreadcrumb
        },
        data() {
            return {
                id: null,
                title: '',
                description: '',
                errors: {
                    title: '',
                    description: ''
                }
            }
        },
        methods: {
            createOrEditPost() {
                if (this.checkEmptyFields()) return false;
                let post;
                if (this.id == null) {
                    post = this.createPost();
                } else {
                    post = this.updatePost();
                }
                this.$router.push({name: 'showPost', params: {id: post.id}});
            },
            checkEmptyFields() {
                if (this.title.length == 0) {
                    this.errors.title = 'Title must not be empty';
                    return true;
                }
                if (this.description.length == 0) {
                    this.errors.description = 'Description must not be empty';
                    return true;
                }
                return false;
            },
            createPost() {
                let post = {
                    id: uniqid(),
                    title: this.title,
                    description: this.description,
                    user: this.$store.getters['currentUser/user'].username,
                    created_at: Date.now()
                };
                this.$store.dispatch('posts/addPost', post);
                return post;
            },
            updatePost() {
                let post = {
                    id: this.id,
                    title: this.title,
                    description: this.description,
                };
                this.$store.dispatch('posts/editPost', post);
                return post;
            }
        },
        watch: {
            title() {
                this.errors.title = '';
            },
            description() {
                this.errors.description = '';
            }
        },
        computed: {
            link() {
                return {name: 'edit', params: {id: this.id}};
            }
        },
        created() {
            if (this.$route.params.id == undefined) return true;
            let post = this.$store.getters['posts/getPost'](this.$route.params.id);
            if (post) {
                this.id = post.id;
                this.title = post.title;
                this.description = post.description;
            }
        },
        mounted() {
            Materialize.updateTextFields();
        },
        beforeRouteUpdate() {
            let post = this.$store.getters['posts/getPost'](this.$route.params.id);
            let user = this.$store.getters['currentUser/user'].username;
            if (post.user != user.username) this.$router.push({name: 'home'});
        }
    }
</script>

<style scoped>
    .edit-form {
        padding: 20px;
    }
</style>
