<template>
    <div class="userbar">
        <h5 class="userbar_name ">Hello, <b>{{ username }}</b></h5>
        <div class="controls">
            <router-link :to="{name: 'create'}"
                         tag="button"
                         class="btn-small waves-effect waves-light"
            >
                Create Ad
            </router-link>
            <a @click="logout">Logout</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'userbar',
        props: {
            username: {
                type: String,
                required: true
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('currentUser/logout');
            }
        }
    }
</script>

<style>
    .userbar {
        padding: 10px;
    }

    .controls {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 10px;
    }

    a {
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
