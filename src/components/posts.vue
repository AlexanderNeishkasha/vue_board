<template>
    <transition-group>
        <app-homepost v-for="(post, index) in posts"
                      :key="index"
                      :post="post"
        >
        </app-homepost>
    </transition-group>
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
