<template>
    <div class="container">
        <button type="submit" @click="componentRender='Home'">Home</button>
        <button type="submit" @click="componentRender='About'">About</button>
        <button type="submit" @click="componentRender='Contact'">Contact</button>
        <keep-alive>
            <component :is="componentRender"></component>
        </keep-alive>
    </div>
</template>

<script>
    import Home from "./Components/Home";
    import About from "./Components/About";
    import Contact from "./Components/Contact";

    export default {
        data() {
            return {
                componentRender: 'Home'
            }
        },

        components: {
            Home, About, Contact
        }
    }
</script>
<style>
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }

</style>