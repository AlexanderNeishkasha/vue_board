<template>
    <div id="app" class="container">
        <div class="row">
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
        },
        beforeMount() {
            Materialize.updateTextFields();
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>
