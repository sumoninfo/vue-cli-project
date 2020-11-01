<template>
    <div class="container">
        <div v-awesome.red.big="'Hello Sumon'"></div>
        <div v-awesome.green.small="'Hello Sumon'"></div>
        <hr>
        <div v-user="userValue"></div>
    </div>
</template>

<script>

    export default {
        directives: {
            'user': {
                bind(el, binding) {
                    el.innerHTML = binding.value
                }
            }
        },
        data() {
            return {
                userValue: 'Sakil'
            }
        },

    }
</script>
<style>
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }

</style>