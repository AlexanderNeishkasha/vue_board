<template>
    <div class="pagination ">
        <a href="#"
           class="back teal-text"
           :class="disabledPrev"
           @click.prevent="prev"
        >
            <i class="material-icons">arrow_back</i>
        </a>
        <a href="#"
           class="next teal-text"
           :class="disabledNext"
           @click.prevent="next"
        >
            <i class="material-icons">arrow_forward</i>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'pagination',
        props: {
            count: Number,
            current: Number
        },
        computed: {
            disabledNext() {
                return this.count == this.current ? 'disabled' : '';
            },
            disabledPrev() {
                return this.current == 0 ? 'disabled' : '';
            }
        },
        methods: {
            next() {
                if (this.current != this.count) this.$emit('next');
            },
            prev() {
                if (this.current != 0) this.$emit('prev');
            }
        }
    }
</script>

<style scoped>
    a {
        display: inline-flex;
        background-color: white;
        border: 1px solid #009688;
    }
    a:hover {
        text-decoration: none;
    }
    .disabled {
        opacity: 0.5;
    }
</style>
