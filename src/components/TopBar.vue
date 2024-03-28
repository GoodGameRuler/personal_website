<script setup>
</script>

<template>
    <div class="topBar">
        <div class="rightTopBar"> US </div>
        <div class="leftTopBar"> 80% | 27/03/2024 | Contact Me </div>
    </div>
</template>

<style>
    .topBar {
        grid-row: 1;
        grid-column: 1 / 3;
        background-color: rgba(26, 32, 34, 0.7);
        display: flex;
        align-items: center;
        padding: 0px 30px;
    }

    .leftTopBar {
        flex: 1;
        display: flex;
        justify-content: right;

    }

    .rightTopBar {
        flex: 1;
    }

</style>
