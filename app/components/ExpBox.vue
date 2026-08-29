<script setup>

    let showExp = ref(false);
    let exp = {
        a: {
            name: "Jane Street - Linux Engineering Internship",
            skills: "Linux, Python, Configuration Management, Monitoring",
            desc: "I monitor Linux systems on the Cloud team and help the people who rely on them. The rest of my time goes into building tooling and automation for Linux administration."},
        b: {
            name: "SafetyCulture - Software Engineering Internship",
            skills: "Go, Temporal, TypeScript, React, NextJS",
            desc: "On the Platforms Access team I built a bulk operation for assigning user permissions, and a setting that lets users choose which organisation they land in when they log in. Go and Temporal on the backend, React in front."},
        c: {
            name: "FreeGuides - Data Science Internship",
            skills: "Python, Pandas, scikit-learn, BigQuery, Google Cloud Functions",
            desc: "I automated the screening of self-guided tours on the app: machine learning models assigned each tour a rating and feedback, replacing manual review."},
    };

    let selExp = ref(exp.a);

    // nvim cursor: absolute line it sits on; gutter renders relative numbers around it
    const cur = ref(4);
    const gut = (n) => cur.value === n ? n : Math.abs(n - cur.value);
    const setCur = (n) => { cur.value = n; };

</script>

<template>
    <div class="exp infoBox">
        <a class="resumeFab" href="/Technical Resume-Udit Samant.pdf" download="Technical Resume - Udit Samant.pdf" aria-label="Download Resume">
            <span class="resumeFabText">Download Resume</span>
            <span class="material-icons resumeFabIcon">download</span>
        </a>
        <div class="vimText">
            <Modal v-model="showExp" modalID="manPageSkills" modalContentsID="manPageSkillsContents">
                <p class=""> exp(8) - MAN PAGE EXPERIENCES </p>
                <p class="modalHeader lbl"> {{ selExp.name }} </p>
                <p> SKILLS: {{ selExp.skills }} </p>
                <hr />
                <p> {{ selExp.desc }} </p>
            </Modal>
            <p class="vimLine" :class="{ cursorLine: cur === 1 }" @click="setCur(1)"><span class="vimNum">{{ gut(1) }}</span><span class="vimBody"><span class="cur1">#</span>ifndef EXPERIENCES</span></p>
            <p class="vimLine" :class="{ cursorLine: cur === 2 }" @click="setCur(2)"><span class="vimNum">{{ gut(2) }}</span><span class="vimBody"><span class="cur1">#</span>define EXPERIENCES</span></p>
            <p class="vimLine" :class="{ cursorLine: cur === 3 }" @click="setCur(3)"><span class="vimNum">{{ gut(3) }}</span><span class="vimBody"><span class="cur1">&nbsp;</span></span></p>
            <p class="vimLine" :class="{ cursorLine: cur === 4 }" @click="setCur(4)"><span class="vimNum">{{ gut(4) }}</span><span class="vimBody"><span class="vimComment"><span class="cur1">/</span>/ These are clickable!</span></span></p>
            <p class="vimLine" :class="{ cursorLine: cur === 5 }" @click="setCur(5)"><span class="vimNum">{{ gut(5) }}</span><span class="vimBody"><span class="cur1">&nbsp;</span></span></p>
            <p class="vimLine" :class="{ cursorLine: cur === 6 }" @click="setCur(6)"><span class="vimNum">{{ gut(6) }}</span><span class="vimBody"><span class="cur1">1</span>. <a @click="showExp = true; selExp = exp.a"> <span class="hl"> Linux Engineering Intern - Jane Street </span> </a></span></p>
            <p class="vimLine" :class="{ cursorLine: cur === 7 }" @click="setCur(7)"><span class="vimNum">{{ gut(7) }}</span><span class="vimBody"><span class="cur1">&nbsp;</span></span></p>
            <p class="vimLine" :class="{ cursorLine: cur === 8 }" @click="setCur(8)"><span class="vimNum">{{ gut(8) }}</span><span class="vimBody"><span class="cur1">2</span>. <a @click="showExp = true; selExp = exp.b"> <span class="hl"> Software Engineering Intern - SafetyCulture </span> </a></span></p>
            <p class="vimLine" :class="{ cursorLine: cur === 9 }" @click="setCur(9)"><span class="vimNum">{{ gut(9) }}</span><span class="vimBody"><span class="cur1">&nbsp;</span></span></p>
            <p class="vimLine" :class="{ cursorLine: cur === 10 }" @click="setCur(10)"><span class="vimNum">{{ gut(10) }}</span><span class="vimBody"><span class="cur1">3</span>. <a @click="showExp = true; selExp = exp.c"> <span class="hl"> Data Science Intern - FreeGuides (Startup) </span> </a></span></p>
            <p class="vimLine" :class="{ cursorLine: cur === 11 }" @click="setCur(11)"><span class="vimNum">{{ gut(11) }}</span><span class="vimBody"><span class="cur1">&nbsp;</span></span></p>
            <p class="vimLine" :class="{ cursorLine: cur === 12 }" @click="setCur(12)"><span class="vimNum">{{ gut(12) }}</span><span class="vimBody"><span class="cur1">&nbsp;</span></span></p>
            <p class="vimLine" :class="{ cursorLine: cur === 13 }" @click="setCur(13)"><span class="vimNum">{{ gut(13) }}</span><span class="vimBody"><span class="cur1">#</span>endif</span></p>
            <div class="vimFiller">
                <p class="vimLine" v-for="n in 60" :key="n"><span class="vimNum vimTilde">~</span></p>
            </div>
        </div>

        <div class="vimLuaLine">
            <p><span class="hl"> NORMAL ► experiences.h </span></p>
            <p> {{ cur }}:1 </p>


        </div>

        <div class="tmuxBar">
            <p>1 &#62; [tmux] ► 2 &#62; nvim</p>
        </div>

    </div>
</template>

<style>

    .cvButton {
        position: float;
        top: 10px;
        right: 10px;
        width: 75px;
        border-radius: 5px;
    }

    .exp {
        grid-row: 3;
        grid-column: 1;
        display: flex;
        flex-direction: column;
        min-height: 340px;
        position: relative;
    }

    .vimText {
        flex: 1 1 0;
        display: flex;
        flex-direction: column;
        min-height: 0;
        overflow-y: auto;
    }

    .vimLuaLine, .tmuxBar {
        flex-shrink: 0;
    }

    .vimComment {
        color: var(--muted);
        font-style: italic;
    }

    .resumeFab {
        position: absolute;
        top: 12px;
        right: 12px;
        z-index: 5;
        display: inline-flex;
        align-items: center;
        padding: 8px;
        border: 2px solid var(--label);
        border-radius: 10px;
        background-color: var(--surface);
        color: var(--label);
        text-decoration: none;
        overflow: hidden;
        white-space: nowrap;
    }

    .resumeFab:hover {
        background-color: var(--label);
        color: var(--pane-solid);
        text-decoration: none;
    }

    .resumeFabText {
        max-width: 0;
        overflow: hidden;
        font-size: 16px;
        font-weight: bold;
        transition: max-width 0.3s ease, margin-right 0.3s ease;
    }

    .resumeFab:hover .resumeFabText, .resumeFab:focus .resumeFabText {
        max-width: 200px;
        margin-right: 8px;
    }

    .resumeFabIcon {
        font-size: 20px;
        display: block;
    }

    .vimLuaLine {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 10px;
    }

    .vimLine {
        display: flex;
        align-items: baseline;
        line-height: 1.35;
        box-sizing: border-box;
        font-size: 22px;
        padding: 0 10px;
        min-height: 1.35em;
    }

    .vimNum {
        flex: 0 0 3ch;
        text-align: right;
        margin-right: 1.5ch;
        color: var(--muted);
        user-select: none;
    }

    .vimTilde {
        text-align: left;
    }

    .cursorLine {
        background-color: var(--selected);
    }

    .cursorLine .vimNum {
        color: var(--label);
    }

    .cur1 {
        display: inline-block;
        min-width: 0.62em;
        border-radius: 2px;
    }

    .cursorLine .cur1 {
        background-color: var(--text);
        color: var(--pane-solid);
    }

    .exp:hover .cursorLine .cur1, .exp:focus-within .cursorLine .cur1 {
        animation: curBlink 1.1s step-end infinite;
    }

    @keyframes curBlink {
        50% {
            background-color: var(--selected);
            color: var(--text);
        }
    }

    .vimLine {
        cursor: default;
        transition: background-color 0.15s ease;
    }

    .vimBody {
        flex: 1 1 0;
        min-width: 0;
    }

    .vimFiller {
        flex: 1 0 0;
        min-height: 0;
        overflow: hidden;
    }


</style>
