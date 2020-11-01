<template>
    <div class="container">
        <p>{{text}}</p>
        <About/>
        <Contact/>
    </div>
</template>

<script>
    import About from "./Components/About";
    import Contact from "./Components/Contact";

    export default {
        data() {
            return {
                text: "Hello world"
            }
        },
        components: {
            About, Contact
        },
    }
</script>
<style>

</style>