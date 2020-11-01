<template>
    <div class="container">
        <transition
                name="appear"
                enter-active-class="animate__animated animate__bounce"
                leave-active-class="animate__animated animate__swing"
        >
            <div v-if="display" class="p-3 mb-3 bg-success text-white">Hello</div>
        </transition>
        <button @click="display=!display" class="btn btn-primary" type="submit">Toggle</button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                display: false
            }
        }
    }
</script>
<style>

</style>