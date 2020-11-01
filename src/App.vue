<template>
    <div class="container">
        <p>{{text}}</p>
        <Contact/>
    </div>
</template>

<script>
     import Contact from "./Components/Contact";

    export default {
        data() {
            return {
                text: "Hello world"
            }
        },
        components: {
            Contact
        },
    }
</script>
<style>

</style>