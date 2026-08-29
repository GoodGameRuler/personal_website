<script setup>
    const showContactPage = ref(false);
    const showLastModified = ref(false);
    const showProgress = ref(false);

    const config = useRuntimeConfig();
    const lastModified = new Date(config.public.lastModified);
    const lastModifiedShort = lastModified.toLocaleDateString('en-AU', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const lastModifiedLong = lastModified.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
    const isStale = (Date.now() - lastModified.getTime()) > 365 * 24 * 60 * 60 * 1000;

    const theme = ref('light');
    const applyTheme = () => {
        if (typeof document !== 'undefined') document.documentElement.dataset.theme = theme.value;
    };
    onMounted(() => {
        try {
            theme.value = localStorage.getItem('theme')
                || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        } catch {}
        applyTheme();
    });
    const toggleTheme = () => {
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem('theme', theme.value); } catch {}
        applyTheme();
    };
</script>

<template>
    <div class="topBar">
        <div class="rightTopBar">
            <span> US </span>
            <span class="workspaces">
                <span class="wsDot wsActive"></span>
                <span class="wsDot"></span>
                <span class="wsDot"></span>
            </span>
        </div>
        <div class="leftTopBar">
            <button class="topBarButton themeToggle" :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'" @click="toggleTheme">
                <span class="material-icons topBarIcon">{{ theme === 'dark' ? 'light_mode' : 'dark_mode' }}</span>
            </button>
            | <button class="topBarButton" @click="showProgress = true"> 83% </button>
            | <button class="topBarButton" @click="showLastModified = true"> {{ lastModifiedShort }} </button>
            | <button class="topBarButton" @click="showContactPage = true"> Contact Me </button>
        </div>
        <Modal v-model="showContactPage" modalID="contactMeModal">
                <p class="modalHeader"> Say Hello! </p>
                <hr />
                <p> Email: <a target="_blank" href="mailto:udit.samant@gmail.com">udit.samant@gmail.com</a> </p>
                <p> Mobile: <a target="_blank" href="tel:+61434577928">+61 434 577 928</a> </p>

                <p> LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/uditsamant/">Udit Samant</a> </p>
        </Modal>

        <Modal v-model="showProgress" modalID="progressModal">
                <p class="modalHeader"> Degree Loading </p>
                <hr />
                <div class="progressTrack"><div class="progressFill"></div></div>
                <p> <span class="material-icons progressSpinner">autorenew</span> 5 of 6 years complete: 83% </p>
                <p class="lbl"> Ships June 2027. </p>
        </Modal>

        <Modal v-model="showLastModified" modalID="lastModifiedModal">
                <p class="modalHeader"> mtime </p>
                <hr />
                <p> Last modified: <span class="hl">{{ lastModifiedLong }}</span> </p>
                <p v-if="isStale" class="lbl"> -- this may be out of date </p>
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
        background-color: var(--surface-2);
        box-shadow: 5px 5px var(--overlay);
        cursor: pointer;
    }

    .topBarIcon {
        font-size: 20px;
        display: block;
    }

    .themeToggle {
        margin-right: 4px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        align-self: center;
    }

    .progressTrack {
        width: 100%;
        height: 14px;
        border-radius: 7px;
        background-color: var(--pane-solid);
        overflow: hidden;
        margin: 8px 0;
    }

    .progressFill {
        width: 83%;
        height: 100%;
        border-radius: 7px;
        background-color: var(--label);
    }

    .progressSpinner {
        font-size: 18px;
        vertical-align: middle;
        display: inline-block;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    .topBar {
        grid-row: 1;
        grid-column: 1 / 3;
        background-color: var(--pane);
        display: flex;
        align-items: center;
        padding: 0px 20px;
        border-radius: 12px;
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
        display: flex;
        align-items: center;
        gap: 14px;
    }

    .workspaces {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }

    .wsDot {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 2px solid var(--label);
        display: inline-block;
        box-sizing: border-box;
    }

    .wsActive {
        background-color: var(--label);
    }

</style>
