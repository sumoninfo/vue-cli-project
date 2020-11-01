<template>
    <div class="container">
        <p>{{text | upperCase | removedText}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: "Hello world"
            }
        },
        filters: {
            upperCase(value) {
                return value.toUpperCase();
            },
            removedText(value) {
                return value.slice(1);
            }
        }
    }
</script>
<style>

</style>