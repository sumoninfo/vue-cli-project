<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                Router
                <hr>
                <Header></Header>
                <hr>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./Components/inc/Header";

    export default {
        data() {
            return {
                text: "Hello world"
            }
        },
        components: {
            Header
        }
    }
</script>
<style>

</style>