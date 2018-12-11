<template>
    <div>
        <transition-group
                appear
                name="posts"
                tag="div"
                mode="out-in"
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceOutRight"
        >
            <app-homepost v-for="post in posts"
                          :key="post.id"
                          :post="post"
            >
            </app-homepost>
        </transition-group>
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
