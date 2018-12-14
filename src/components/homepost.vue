<template>
    <div class="post white z-depth-2">
        <h2 class="title">
            <router-link
                    class="title_link teal-text"
                    :to="{name: 'showPost', params: {id: post.id}}"
            >
                {{ post.title }}
            </router-link>
        </h2>
        <div class="post-info">
            <div class="created_by">
                <i class="material-icons tiny">account_circle</i> {{ post.user }}
            </div>
            <div class="created_at">
                <i class="material-icons tiny">access_time</i> {{ time }}
            </div>
        </div>
        <div class="description">
            {{ post.description }}
        </div>
        <div class="post-control" v-if="author">
            <router-link :to="{name: 'edit', params: {id: post.id}}" class="edit teal-text">Edit</router-link>
            <a href="#delete" class="delete teal-text" @click.prevent="removePost">Delete</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'homepost',
        props: {
            post: {
                type: null,
                required: true
            }
        },
        computed: {
            time() {
                return new Date(this.post.created_at).toLocaleString('en-US');
            },
            author() {
                return this.$store.getters['currentUser/user'].username == this.post.user;
            }
        },
        methods: {
            removePost() {
                if (this.post.user == this.$store.getters['currentUser/user'].username) {
                    this.$store.dispatch('posts/removePost', this.post.id);
                }
            }
        }
    }
</script>

<style scoped>
    .post {
        margin-bottom: 20px;
        padding: 20px;
    }
    .title {
        margin: 5px 0;
    }
    .post-info {
        display: flex;
        color: #424242;
        font-size: 12px;
        border-bottom: 1px solid #424242;
        margin-bottom: 5px;
    }
    .created_by {
        margin-right: 15px;
    }
    .description {
        padding: 10px 0;
    }
    .post-control {
        display: flex;
        font-size: 12px;
    }
    .edit {
        margin-right: 5px;
    }
    .created_by, .created_at {
        display: flex;
        align-items: center;
        line-height: 1;
    }
    .material-icons {
        margin-right: 2px;
    }
</style>
