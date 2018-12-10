<template>
    <div id="app" class="container">
        <div class="row wrapper">
            <app-sidebar></app-sidebar>
            <app-content></app-content>
        </div>
    </div>
</template>

<script>
    import 'materialize-css/dist/css/materialize.min.css';
    import 'animate.css/animate.min.css';
    import AppContent from './components/content';
    import AppSidebar from './components/sidebar';
    import Materialize from 'materialize-css';

    export default {
        name: 'app',
        components: {
            AppContent,
            AppSidebar
        },
        beforeCreate() {
            this.$store.dispatch('users/loadUsersFromStorage');
            this.$store.dispatch('currentUser/loadFromStorage');
            this.$store.dispatch('posts/loadFromStorage');
        },
        beforeMount() {
            Materialize.updateTextFields();
        }
    }
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

    .container {
        padding-top: 20px;
        padding-bottom: 20px;
        height: 100%;
    }

    .wrapper {
        height: 100%;
    }
</style>

<style>
    html, body, #app {
        height: 100%;
        background-color: #e0f7fa !important;
    }
    h1, h2 {
        font-size: 28px;
    }
</style>
