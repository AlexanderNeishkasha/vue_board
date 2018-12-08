<template>
    <form class="edit-form" @submit.prevent="createPost">
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
</template>

<script>
    export default {
        name: 'editform',
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
                    title: this.title,
                    description: this.description,
                    user: this.$store.getters['currentUser/user'].username,
                    created_at: Date.now()
                };
                console.log(post);
            }
        }
    }
</script>
