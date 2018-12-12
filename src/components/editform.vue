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
                errors: {
                    title: '',
                    description: ''
                }
            }
        },
        methods: {
            createPost() {
                if (this.checkEmptyFields()) return false;
                let post = {
                    id: uniqid(),
                    title: this.title,
                    description: this.description,
                    user: this.$store.getters['currentUser/user'].username,
                    created_at: Date.now()
                };
                this.$store.dispatch('posts/addPost', post);
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
            }
        },
        watch: {
            title() {
                this.errors.title = '';
            },
            description() {
                this.errors.description = '';
            }
        }
    }
</script>

<style scoped>
    .edit-form {
        padding: 20px;
    }
</style>
