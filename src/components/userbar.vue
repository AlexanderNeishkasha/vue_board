<template>
    <div class="userbar">
        <div class="userbar_name center-align">Hello, <b>{{ username }}</b></div>
        <div class="controls">
            <button class="btn-small waves-effect waves-light">Create Ad</button>
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
