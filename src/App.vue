<template>
    <div class="container">
        <Header :lists="lists"></Header>
        <ListHelper>
            <ul slot="listItem">
                <li :key="list" v-for="list in lists">
                    {{list}}
                </li>
            </ul>
            <p slot="para">User also knows php</p>
            <p :slot="loader">See you again</p>
        </ListHelper>
    </div>
</template>

<script>
    import ListHelper from "./Components/ListHelper";
    import Header from "./Components/inc/Header";
    export default {
        data() {
            return {
                lists: ["html", 'css', 'java'],
                loader: ''
            }
        },
        components: {
            ListHelper, Header
        },
        created() {
            setTimeout(() => {
                this.loader = 'other'
            }, 3000)
        }
    }
</script>
<style>
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }

</style>