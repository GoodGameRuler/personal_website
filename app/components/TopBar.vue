<script setup>
    const showContactPage = ref(false);
    const showLastModified = ref(false);

    const config = useRuntimeConfig();
    const lastModified = new Date(config.public.lastModified);
    const lastModifiedShort = lastModified.toLocaleDateString('en-AU', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const lastModifiedLong = lastModified.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
</script>

<template>
    <div class="topBar">
        <div class="rightTopBar"> US </div>
        <div class="leftTopBar"> 83% | <button class="topBarButton" @click="showLastModified = true"> {{ lastModifiedShort }} </button> | <button class="topBarButton" @click="showContactPage = true"> Contact Me </button> </div>
        <Modal v-model="showContactPage" modalID="contactMeModal">
                <p class="modalHeader"> Say Hello! </p>
                <hr />
                <p> Email: <a target="_blank" href="mailto:udit.samant@gmail.com">udit.samant@gmail.com</a> </p>
                <p> Mobile: <a target="_blank" href="tel:+61434577928">+61 434 577 928</a> </p>

                <p> LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/uditsamant/">Udit Samant</a> </p>
        </Modal>

        <Modal v-model="showLastModified" modalID="lastModifiedModal">
                <p class="modalHeader"> Last Modified </p>
                <hr />
                <p> This site was last built on <span style="color: #FFFFFF;">{{ lastModifiedLong }}</span>. </p>
                <p> The date stamps itself on every deploy. </p>
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
