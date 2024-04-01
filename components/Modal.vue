<script setup>
    const show = defineModel({ required: true })

    const props = defineProps({
        modalID: String,
        modalContentsID: String,
    });
</script>

<template>
    <div v-if="show" :id="modalID" class="modal" @click="show = false">
        <div :id="modalContentsID" class="modalContents" @click.stop=""> 
            <slot></slot>
        </div>
    </div>
</template>

<style>
    .modal {
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        -moz-backdrop-filter: blur(4px);
        -o-backdrop-filter: blur(4px);
        -ms-backdrop-filter: blur(4px);
        z-index: 999;
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0px;
        left: 0px;
        overflow: hidden;
        overscroll-behavior: contain;
        display: grid;
        grid-template-rows: 1fr auto 1fr;
        grid-template-columns: 1fr auto 1fr;
    }

    .modal:hover {
        cursor: pointer;
    }

    .modalContents {
        grid-row: 2;
        grid-column: 2;
        background-color: rgb(45, 104, 122);
        color: #FFFFFF;
        min-width: 400px;
        max-width: 700px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        border-radius: 15px;
        border: solid 1px white;
    }


    .modalContents:hover {
        cursor: default;
    }


    .modalContents > p {
        margin-bottom: 3px;

    }

    .modalHeader {
        font-size: 30px;

    }
</style>
