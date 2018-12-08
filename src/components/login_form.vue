<template>
    <form class="login-form" @submit.prevent="submit">
        <div class="input-field">
            <input id="username" type="text" class="validate" v-model="username">
            <label for="username">Username</label>
            <span class="helper-text red-text" v-if="errors.username">{{ errors.username }}</span>
        </div>
        <div class="input-field">
            <input id="password" type="password" class="validate" v-model="password">
            <label for="password">Password</label>
            <span class="helper-text red-text" v-if="errors.password">{{ errors.password }}</span>
        </div>
        <button class="btn waves-effect waves-light" type="submit">
            Login
        </button>
    </form>
</template>

<script>
    import md5 from 'md5';
    export default {
        name: 'loginForm',
        data() {
            return {
                username: '',
                password: '',
                errors: {
                    username: '',
                    password: ''
                }
            }
        },
        watch: {
            username() {
                this.errors.username = '';
            },
            password() {
                this.errors.password = '';
            }
        },
        methods: {
            submit() {
                if (this.emptyCheck()) return false;
                let user;
                if (!(user = this.getUser())) return false;
                this.$store.dispatch('currentUser/login', user);
            },
            emptyCheck() {
                if (this.username.length == 0) {
                    this.errors.username = 'Username must not be empty';
                    return true;
                }
                if (this.password.length == 0) {
                    this.errors.password = 'Password must not be empty';
                    return true;
                }
                return false;
            },
            getUser() {
                let user = this.$store.getters['users/getUserByUsername'](this.username);
                //user founded
                if (user != undefined) {
                    if (user.password == md5(this.password)) {
                        return user;
                    } else {
                        this.errors.password = 'Password not match';
                        return false;
                    }
                }
                //user not found - register new
                this.$store.dispatch('users/register', {
                    username: this.username,
                    password: this.password
                });
                return this.$store.getters['users/getUserByUsername'](this.username);
            }
        }

    }
</script>

<style>
    .login-form {
        padding: 10px;
    }
</style>
