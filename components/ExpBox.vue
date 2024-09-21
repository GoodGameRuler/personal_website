<script setup>

    let showExp = ref(false);
    let exp = {
        a: {
            name: "FreeGuides Data Science Internship",
            skills: "Python, Pandas, SciKit Learn, BigQuery, Google Cloud Functions",
            desc: "I directed and executed early decesions and planning regarding automating validation of self guided tours. I used machine learning models to generate ratings, and feedback for every tour on the mobile application platform."},
        b: {
            name: "Sydney Computing Society",
            skills: "Leadership, Azure, Docker, Python, C#",
            desc: "I co-lead a small group of passionate developers in creating systems and infrastructure enabling events at SYNCS."},
        c: {
            name: "Google Developers Student Club",
            skills: "Leadership, Critical Thinking, Time Management, Pygame, Web Development, Event Planning",
            desc: "A valuable experience in leading a passionate group towards enabling and enspiring future software developers with emerging technologies and topics."},
        d: {
            name: "Sydney Computing Society",
            skills: "Leadership, Critical Thinking, Time Management, Event Planning",
            desc: "I was responsible for organising events and played a roles in building a community for The Univeristy of Sydney Students"},
        e: {
            name: "Sydney Quant Traders",
            skills: "Collaboration, Python, Flask, JavaScript, Discord.Js",
            desc: "At Sydney Quant Traders I was invited to work on an unique project to intergrate the Social Media Platform (Discord) into their propriety Mock Trading Platform. Had quite a bit of fun with this, and it was a valuable experience in programming in a professional, team setting."
        },
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
            <p> ~ 09  <span style="color: #295968;"> // More Details On My <a href="/Technical Resume-Udit Samant.pdf" download="Technical Resume - Udit Samant.pdf"> Resume </a></span></p>
            <p> ~ 08  </p>
            <p> ~ 07  1. <a @click="showExp = true; selExp = exp.a"> <span style="color: #FFFFFF;"> Machine Learning Internship - FreeGuides (Startup) </span> </a> </p>
            <p> ~ 06  </p>
            <p> ~ 05  2. <a @click="showExp = true; selExp = exp.b"> <span style="color: #FFFFFF;"> Developer Lead              - SYNCS (Student Club) </span> </a> </p>
            <p> ~ 04  </p>
            <p> ~ 03  3. <a @click="showExp = true; selExp = exp.c"> <span style="color: #FFFFFF;"> Technical Events Director   - Google DSC (Student Club) </span> </a> </p>
            <p> ~ 02  </p>
            <p> ~ 01  4. <a @click="showExp = true; selExp = exp.d"> <span style="color: #FFFFFF;"> Technical Events Sucomittee - SYNCS (Student Club) </span> </a> </p>
            <p> ~ 00  </p>
            <p> ~ 01  5. <a @click="showExp = true; selExp = exp.e"> <span style="color: #FFFFFF;"> Software Developer          -  SQT      (Student Club) </span> </a> </p>
            <p> ~ 02  </p>
            <p> ~ 03  #endif </p>
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
            <p> ~ 22  </p>
            <p> ~ 23  </p>
            <p> ~ 24  </p>
            <p> ~ 25  </p>
            <p> ~ 26  </p>
            <p> ~ 27  </p>
            <p> ~ 28  </p>
            <p> ~ 29  </p>
            <p> ~ 30  </p>
            <p> ~ 31  </p>
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
    }

    .vimText {
        flex-shrink: 1;
        display: flex;
        flex-direction: column;
        height: 40vh;
        min-height: 340px;
        overflow-y: auto;
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
