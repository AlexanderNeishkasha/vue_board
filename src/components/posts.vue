<template>
    <div>
        <app-homepost v-for="(post, index) in posts"
                      :key="index"
                      :post="post"
        >
        </app-homepost>
    </div>
</template>

<script>
    import AppHomepost from './homepost';

    export default {
        name: 'posts',
        components: {
            AppHomepost
        },
        computed: {
            posts() {
                return this.$store.getters['posts/posts'];
            }
        }
    }
</script>
