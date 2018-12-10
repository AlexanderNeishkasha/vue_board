<template>
    <div>
        <app-breadcrumb
                :link="{name: 'create'}"
                link-name="Create Ad"
        >
        </app-breadcrumb>
        <form class="edit-form white z-depth-2" @submit.prevent="createPost">

            <div class="input-field">
                <input id="title" type="text" class="validate" v-model="title">
                <label for="title">Title</label>
            </div>
            <div class="input-field">
                <textarea id="description" class="materialize-textarea" v-model="description"></textarea>
                <label for="description">Description</label>
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

    export default {
        name: 'editform',
        components: {
            AppBreadcrumb
        },
        props: {
            postId: null
        },
        data() {
            return {
                title: '',
                description: '',
            }
        },
        methods: {
            createPost() {
                let post = {
                    id: uniqid(),
                    title: this.title,
                    description: this.description,
                    user: this.$store.getters['currentUser/user'].username,
                    created_at: Date.now()
                };
                this.$store.commit('posts/addPost', post);
                this.$router.push({name: 'showPost', params: {id: post.id}});
            }
        }
    }
</script>

<style scoped>
    .edit-form {
        padding: 20px;
    }
</style>
