<template>
    <div>
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

    export default {
        data() {
            return {
                lists: ["html", 'css', 'java'],
                loader: ''
            }
        },
        components: {
            ListHelper
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