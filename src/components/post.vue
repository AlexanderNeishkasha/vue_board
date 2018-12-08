<template>
    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.description }}</p>
    </div>
</template>

<script>
    export default {
        name: 'post',
        computed: {
            post() {
                let post = this.$store.getters['posts/getPost'](this.$route.params.id);
                if (!post) this.$router.push({name: 'notFoundPost'});
                return this.$store.getters['posts/getPost'](this.$route.params.id);
            }
        }
    }
</script>
