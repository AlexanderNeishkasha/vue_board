<template>
    <div class="z-depth-2 white err">
        <h1 class="teal-text">Error 404</h1>
        <div>Page not found</div>
        <div>
            <router-link :to="{name: 'home'}" class="teal-text">Take me home</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'not_found'
    }
</script>

<style scoped>
    .err {
        padding: 20px;
    }
    h1 {
        margin: 5px 0;
    }
</style>
