<template>
    <div>
        <transition-group
                appear
                name="posts"
                tag="div"
                mode="out-in"
                enter-active-class="animated bounceInLeft append"
                leave-active-class="animated bounceOutRight leave"
        >
            <app-homepost v-for="post in posts"
                          :key="post.id"
                          :post="post"
            >
            </app-homepost>
        </transition-group>
        <app-pagination
            :count="paginationCount"
            :current="currentPaginationPage"
            @next="next"
            @prev="prev"
            v-if="havePosts"
        >
        </app-pagination>
    </div>
</template>

<script>
    import AppHomepost from './homepost';
    import AppPagination from './pagination';

    export default {
        name: 'posts',
        components: {
            AppHomepost,
            AppPagination
        },
        computed: {
            posts() {
                return this.$store.getters['posts/paginatePosts']({
                    count: this.pagination,
                    page: this.currentPaginationPage
                });
            },
            paginationCount() {
                return Math.floor((this.$store.getters['posts/countPosts'] - 1) / this.pagination);
            },
            havePosts() {
                return this.posts.length != 0;
            }
        },
        data() {
            return {
                pagination: 5,
                currentPaginationPage: 0
            }
        },
        methods: {
            next() {
                this.currentPaginationPage++;
            },
            prev() {
                this.currentPaginationPage--;
            }
        }
    }
</script>

<style scoped>
    .append {
        animation-delay: 1.1s;
    }
</style>
