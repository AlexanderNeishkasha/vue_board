<template>
    <div class="col s12 m4 sidebar">
        <transition appear mode="out-in"
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"
        >
            <app-login-form v-if="checkEmptyUsername"></app-login-form>
            <app-user-bar v-else :username="user.username"></app-user-bar>
        </transition>
    </div>
</template>

<script>
    import AppLoginForm from './login_form';
    import AppUserBar from './userbar';

    export default {
        name: 'sidabar',
        components: {
            AppLoginForm,
            AppUserBar
        },
        computed: {
            user() {
                return this.$store.getters['currentUser/user'];
            },
            checkEmptyUsername() {
                return this.user.username == undefined;
            }
        }
    }
</script>

<style scoped>
    .sidebar {
        margin-bottom: 20px;
        position: relative;
        z-index: 1;
    }
</style>
