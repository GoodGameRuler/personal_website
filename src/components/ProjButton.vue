<script setup>
    import { reactive } from 'vue'

    function select(id) {
    }

    const props = defineProps(['value'])

</script>

<template>
    <button class="singleProjectNameBox projectBox"> {{ value }} </button>
</template>

<style>
    
</style>
