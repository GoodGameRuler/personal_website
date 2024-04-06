<script setup>
    const showContactPage = ref(false);
</script>

<template>
    <div class="topBar">
        <div class="rightTopBar"> US </div>
        <div class="leftTopBar"> 80% | 27/03/2024 | <button class="topBarButton" @click="showContactPage = true"> Contact Me </button> </div>
        <Modal v-model="showContactPage" modalID="contactMeModal">
                <p class="modalHeader"> Say Hello! </p>
                <hr />
                <p style="margin-bottom: 15px; font-style: italic;"> I am overseas at the moment. If I don't receive your call feel free to contact me on any of my other contacts </p>
                <p> Email: udit.samant@gmail.com </p>
                <p> Mobile: +61 434 577 928 </p>

                <p> Instagram: some_ant02 </p>
                <p> Facebook: Udit Samant </p>
        </Modal>

    </div>
</template>

<style>

    .topBarButton {
        padding: 5px;
        border-radius: 10px;
        transition: ease 0.5s;
        margin: 2px 0;
        margin-left: 4px;
    }

    .topBarButton:hover {
        background-color: rgba(255, 255, 255);
        box-shadow: 5px 5px gray;

    }

    .modal {
        background-color: rgba(0, 0, 0, 0.4);
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

    .modalContents > p {
        margin-bottom: 3px;

    }

    .modalHeader {
        font-size: 30px;

    }

    .topBar {
        grid-row: 1;
        grid-column: 1 / 3;
        background-color: rgba(26, 32, 34, 0.7);
        display: flex;
        align-items: center;
        padding: 0px 30px;
        border-radius: 15px;
    }

    .leftTopBar {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: right;

    }

    .rightTopBar {
        flex: 1;
    }

</style>
