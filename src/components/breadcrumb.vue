<template>
    <nav class="z-depth-2">
        <div class="nav-wrapper teal">
            <div class="col s12">
                <router-link class="breadcrumb" :to="{name: 'home'}">Home</router-link>
                <router-link class="breadcrumb" :to="link">{{ linkName }}</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'breadcrumb',
        props: {
            link: Object,
            linkName: String
        }
    }
</script>

<style scoped>
    .breadcrumb {
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
    }
    .nav-wrapper {
        overflow: hidden;
    }
</style>
