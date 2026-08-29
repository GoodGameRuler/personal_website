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
            skills: "Python, Pandas, SciKit Learn, BigQuery, Google Cloud Functions",
            desc: "I automated the screening of self-guided tours on the app: machine learning models assigned each tour a rating and feedback, replacing manual review."},
    };

    let selExp = ref(exp.a);

</script>

<template>
    <div class="exp infoBox">
        <div class="vimText">
            <Modal v-model="showExp" modalID="manPageSkills" modalContentsID="manPageSkillsContents">
                <p class=""> exp(8) - MAN PAGE EXPERIENCES </p>
                <p class="modalHeader" style="color: #4295AE;"> {{ selExp.name }} </p>
                <p> SKILLS: {{ selExp.skills }} </p>
                <hr />
                <p> {{ selExp.desc }} </p>
            </Modal>
            <p> ~ 12 #ifndef EXPERIENCES</p>
            <p> ~ 11 #define EXPERIENCES </p>
            <p> ~ 10  </p>
            <p> ~ 09  <span style="color: #295968;"> // More details on my resume: </span> <a class="resumeButton" href="/Technical Resume-Udit Samant.pdf" download="Technical Resume - Udit Samant.pdf"> Resume <span class="material-icons resumeIcon">download</span></a></p>
            <p> ~ 08  </p>
            <p> ~ 07  1. <a @click="showExp = true; selExp = exp.a"> <span style="color: #FFFFFF;"> Linux Engineering Intern    - Jane Street </span> </a> </p>
            <p> ~ 06  </p>
            <p> ~ 05  2. <a @click="showExp = true; selExp = exp.b"> <span style="color: #FFFFFF;"> Software Engineering Intern - SafetyCulture </span> </a> </p>
            <p> ~ 04  </p>
            <p> ~ 03  3. <a @click="showExp = true; selExp = exp.c"> <span style="color: #FFFFFF;"> Data Science Intern         - FreeGuides (Startup) </span> </a> </p>
            <p> ~ 02  </p>
            <p> ~ 01  #endif </p>
            <p> ~ 00  </p>
            <p> ~ 01  </p>
            <p> ~ 02  </p>
            <p> ~ 03  </p>
            <p> ~ 04  </p>
            <p> ~ 05  </p>
            <p> ~ 06  </p>
            <p> ~ 07  </p>
            <p> ~ 08  </p>
            <p> ~ 09  </p>
            <p> ~ 10  </p>
            <p> ~ 11  </p>
            <p> ~ 12  </p>
            <p> ~ 13  </p>
            <p> ~ 14  </p>
            <p> ~ 15  </p>
            <p> ~ 16  </p>
            <p> ~ 17  </p>
            <p> ~ 18  </p>
            <p> ~ 19  </p>
            <p> ~ 20  </p>
            <p> ~ 21  </p>
        </div>

        <div class="vimLuaLine">
            <p><span style="color: #FFFFFF;"> NORMAL ► experiences.h </span></p>
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
        min-height: 0;
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

    .resumeButton {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 2px 10px;
        border: 2px solid #4295AE;
        border-radius: 8px;
        color: #FFFFFF;
        text-decoration: none;
        transition: all ease 0.2s;
    }

    .resumeButton:hover {
        background-color: #4295AE;
        color: #171F24;
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

    .vimText > p {
        margin-bottom: 2px;
        flex-shrink: 1;
        box-sizing: border-box;
        font-size: 22px;
        padding: 0 10px;
    }


</style>
