<template>
    <div class="container">
        <transition name="appear">
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
    .appear-enter {
        opacity: 0;
        transform: translateX(30px);
    }

    .appear-enter-active {
        transition: all .3s ease;
    }

    .appear-leave {

    }

    .appear-leave-active {
        opacity: 0;
        transform: translateX(30px);
        transition: all .3s ease;
    }
</style>