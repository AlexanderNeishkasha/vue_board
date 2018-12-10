<template>
    <div class="col s8 content">
        <transition appear mode="out-in"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
        >
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'appContent'
    }
</script>

<style scoped>
    .content {
        padding: 0 10px 10px 10px;
    }
</style>
