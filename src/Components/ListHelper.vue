<template>
    <div>
        <slot name="listItem"></slot>
        <h1> List helper</h1>
        <slot name="para"></slot>
        <slot name="other">Lodding....</slot>
    </div>
</template>

<script>
    export default {
        name: "ListHelper",
        data() {
            return {}
        }
    }
</script>

<style scoped>
    ul li {
        color: red;
    }

    p {
        color: green;
    }
</style>