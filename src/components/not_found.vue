<template>
    <div>
        <h1>Error 404</h1>
        <div>Page not found</div>
        <div>
            <router-link :to="{name: 'home'}">Take me home</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'not_found'
    }
</script>
