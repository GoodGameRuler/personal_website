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

</script>

<template>
    <div class="exp infoBox">
        <div class="vimText">
            <Modal v-model="showExp" modalID="manPageSkills" modalContentsID="manPageSkillsContents">
                <p class=""> exp(8) - MAN PAGE EXPERIENCES </p>
                <p class="modalHeader lbl"> {{ selExp.name }} </p>
                <p> SKILLS: {{ selExp.skills }} </p>
                <hr />
                <p> {{ selExp.desc }} </p>
            </Modal>
            <p class="vimLine"><span class="vimNum">12</span><span class="vimBody">#ifndef EXPERIENCES</span></p>
            <p class="vimLine"><span class="vimNum">11</span><span class="vimBody">#define EXPERIENCES</span></p>
            <p class="vimLine"><span class="vimNum">10</span></p>
            <p class="vimLine"><span class="vimNum">9</span><span class="vimBody"><span class="vimComment">// More details on my resume: </span> <a class="resumeButton" href="/Technical Resume-Udit Samant.pdf" download="Technical Resume - Udit Samant.pdf"> Resume <span class="material-icons resumeIcon">download</span></a></span></p>
            <p class="vimLine"><span class="vimNum">8</span></p>
            <p class="vimLine"><span class="vimNum">7</span><span class="vimBody">1. <a @click="showExp = true; selExp = exp.a"> <span class="hl"> Linux Engineering Intern - Jane Street </span> </a></span></p>
            <p class="vimLine"><span class="vimNum">6</span></p>
            <p class="vimLine"><span class="vimNum">5</span><span class="vimBody">2. <a @click="showExp = true; selExp = exp.b"> <span class="hl"> Software Engineering Intern - SafetyCulture </span> </a></span></p>
            <p class="vimLine"><span class="vimNum">4</span></p>
            <p class="vimLine"><span class="vimNum">3</span><span class="vimBody">3. <a @click="showExp = true; selExp = exp.c"> <span class="hl"> Data Science Intern - FreeGuides (Startup) </span> </a></span></p>
            <p class="vimLine"><span class="vimNum">2</span></p>
            <p class="vimLine"><span class="vimNum">1</span></p>
            <p class="vimLine cursorLine"><span class="vimNum">13</span><span class="vimBody">#endif</span></p>
            <div class="vimFiller">
                <p class="vimLine" v-for="n in 60" :key="n"><span class="vimNum vimTilde">~</span></p>
            </div>
        </div>

        <div class="vimLuaLine">
            <p><span class="hl"> NORMAL ► experiences.h </span></p>
            <p> 13:1 </p>


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

    .resumeButton {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 2px 10px;
        border: 2px solid var(--label);
        border-radius: 8px;
        color: var(--text-strong);
        text-decoration: none;
        transition: all ease 0.2s;
    }

    .resumeButton:hover {
        background-color: var(--label);
        color: var(--pane-solid);
        text-decoration: none;
        box-shadow: 5px 5px gray;
    }

    .resumeIcon {
        font-size: 18px;
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
        margin-bottom: 2px;
        box-sizing: border-box;
        font-size: 22px;
        padding: 0 10px;
        min-height: 1.2em;
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

    .cursorLine .vimNum {
        color: var(--label);
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
