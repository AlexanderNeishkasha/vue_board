<template>
    <div class="userbar">
        <div class="userbar_name">Hello, <b>{{ username }}</b></div>
        <div class="controls">
            <button class="btn waves-effect waves-light">Create Ad</button>
            <a href="#">Logout</a>
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
        }
    }
</script>

<style>
    .userbar {
        padding: 10px;
    }
</style>
