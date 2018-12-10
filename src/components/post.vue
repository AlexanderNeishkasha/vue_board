<template>
    <div>
        <app-breadcrumb
                :link="{name: 'showPost', params: {id: post.id}}"
                :link-name="post.title"
        >
        </app-breadcrumb>
        <div class="post white z-depth-2">
            <h1 class="teal-text">{{ post.title }}</h1>
            <div class="desc">{{ post.description }}</div>
            <div class="post-info">
                <div class="created_by">
                    <i class="material-icons tiny">account_circle</i> {{ post.user }}
                </div>
                <div class="created_at">
                    <i class="material-icons tiny">access_time</i> {{ time }}
                </div>
            </div>
            <div class="post-control" v-if="author">
                <router-link to="/" class="edit teal-text">Edit</router-link>
                <a href="#delete" class="delete teal-text">Delete</a>
            </div>
        </div>
    </div>
</template>

<script>
    import AppBreadcrumb from './breadcrumb';

    export default {
        name: 'post',
        components: {
            AppBreadcrumb
        },
        computed: {
            post() {
                let post = this.$store.getters['posts/getPost'](this.$route.params.id);
                if (!post) this.$router.push({name: 'notFoundPost'});
                return this.$store.getters['posts/getPost'](this.$route.params.id);
            },
            time() {
                return new Date(this.post.created_at).toLocaleTimeString('en-US');
            },
            author() {
                return this.$store.getters['currentUser/user'].username == this.post.user;
            }
        }
    }
</script>

<style scoped>
    .post {
        padding: 20px;
    }

    h1 {
        margin: 10px 0;
        border-bottom: 3px solid #009688;
    }

    .desc {
        margin: 10px 0;
    }

    .post-info {
        font-size: 12px;
        color: #424242;
        display: flex;
        padding-top: 2px;
    }
    .created_by {
        margin-right: 15px;
    }
    .post-control {
        display: flex;
        font-size: 12px;
    }
    .created_by, .created_at {
        display: flex;
        align-items: center;
        line-height: 1;
    }
    .material-icons {
        margin-right: 2px;
    }
    .edit {
        margin-right: 5px;
    }
</style>
