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
                <p> Email: <a target="_blank" href="mailto:udit.samant@gmail.com">udit.samant@gmail.com</a> </p>
                <p> Mobile: <a target="_blank" href="tel:+61434577928">+61 434 577 928</a> </p>

                <p> LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/uditsamant/">Udit Samant</a> </p>
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
        cursor: pointer;
    }

    .topBar {
        grid-row: 1;
        grid-column: 1 / 3;
        background-color: rgba(26, 32, 34, 0.7);
        display: flex;
        align-items: center;
        padding: 0px 30px;
        border-radius: 15px;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
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
