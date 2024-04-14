<script setup>

    useHead({
        title: "Udit's Personal Website",
        meta: [
            { name: 'description', content: "Udit's Bio, Projects, and Expereience"},
            { name: 'author', content: "Udit Samant"},
            { name: "keywords", content: "Udit Samant, Personal Website, Vue, Nuxt, JS, HTML, CSS, Web Development"},
            { name: "og:title", content: "Udit Samant - Personal Website"},
            { name: "og:image", content: "https://www.uditsamant.com/comic_pf2.png"},
            { name: "twitter:title", content: "Udit Samant - Personal Website"},
            { name: "twitter:image", content: "https://www.uditsamant.com/comic_pf2.png"},
        ],
    })

    import '~/assets/base.css'
    import '~/assets/fonts.css'

    // sharedState.js
    import { ref } from 'vue';

    const projButtons = [
        { no: 1, value: 'UniTrack'},
        { no: 2, value: 'GDSC Game Jam' },
        { no: 3, value: 'Korean' },
        // Add more buttons as needed

        { no: 1000, value: 'Self' },
    ]

    const selectedButton = ref(1);

    const handleSelectButton = (buttonNumber) => {
        selectedButton.value = buttonNumber;
        console.log("Working");
    };

</script>

<template>
  <header>
  </header>

  <main>
      <div class="background">
          <div class="blurContainer">
              <div class="hoverContainer">
                  <TopBar />
                  <DevBox />
                  <ExpBox />
                  <div class="proj infoBox">
                      <div class="singleProjectDetailsTitle projectBox"> Project Details </div>
                      <ProjButton v-for="button in projButtons" :key="button.no" :button="button" :selectedButton="selectedButton" @select-button="handleSelectButton" />
                      <!--  SELF SHOULD BE LAST -->
                      <div v-if="selectedButton === 1" class="singleProjectDescBox projectBox">
                          <div class="projectHeader">
                              <p class="headerText" style="font-size: 25px;"> UniTrack </p>
                              <p class="headerDesc"> Group Project </p>
                              <button class="linkButton" onclick="window.open('https://unitrack.au/','_blank')"> V1<img src="/link.svg" /> </button>
                              <button class="linkButton" onclick="window.open('https://github.com/USYDUniTrack/unitrack','_blank')"> V2<img src="/link.svg" /> </button>
                          </div>
                          <hr />
                          <p> Made Using (Version 2): <span style="color: #FFFFFF;"> HTML, CSS, JS, HTMX, DJANGO, DOCKER </span></p>
                          <p class= "breakLine" style="font-style: italic;"> This project won 2023 Univerity of Sydney Coding Fest's Best Undergraduate Project </p>

                          <p> <span style="color: #FFFFFF;"> An improved drag-and-drop University of Sydney degree planner, that allows students to plan their degree with ease.
                              Compared to the Original University Websites, UniTrack has... Simplified UI One Unified Page for timetabling, and planning A drag and Drop degree planner. </span> </p>

                      </div>
                      <div v-if="selectedButton === 2" class="singleProjectDescBox projectBox">
                          <div class="projectHeader">
                              <p class="headerText" style="font-size: 25px;"> Google DSC Game Jam </p>
                              <p class="headerDesc"> Team Planned Event </p>
                              <button class="linkButton" onclick="window.open('https://github.com/GoodGameRuler/GDSC-PyGame','_blank')"> <img src="/link.svg" /> </button>
                          </div>
                          <hr />
                          <p class="breakLine"> Made Using: <span style="color: #FFFFFF;"> PYGAME, FIGMA </span></p>

                          <p class="breakLine"> <span style="color: #FFFFFF;"> A introduction to Game Development workshop that I orchastrated with my team at GDSC, at Google HQ Sydney. It was the opening for our Game Jam Competition. </span> </p>                          <p> <span style="color: #FFFFFF;"> The goal was to inspire stuents, to be creative and hopfeully introuce them to a different career option in CS. Here were the results: link. </span> </p>

                      </div>
                      <div v-if="selectedButton === 3" class="singleProjectDescBox projectBox">
                          <div class="projectHeader">
                              <p class="headerText" style="font-size: 25px;"> Korean Learning Script </p>
                              <p class="headerDesc"> Personal Project </p>
                              <button class="linkButton" onclick="window.open('https://github.com/GoodGameRuler/korean','_blank')"> <img src="/link.svg" /> </button>
                          </div>
                          <hr />
                          <p class="breakLine"> Made Using: <span style="color: #FFFFFF;"> PYTHON </span></p>

                          <p class="breakLine"> <span style="color: #FFFFFF;"> A small project made to assist me in my endeavours of learning Korean. </span> </p>
                          <p class="breakLine"> <span style="color: #FFFFFF;"> In my attempts to learn korean, before my exchange at KAIST University, I realised tools like Quizlet and other spaced repitition based learning apps, just took much too long to traverse multiple questions. I wanted to be able to very quickly go through 30, 40 words/questions. So, as any engineer would, I made a Python script to do it for me. </span> </p>

                      </div>
                      <div v-if="selectedButton === 1000" class="singleProjectDescBox projectBox">
                          <div class="projectHeader">
                              <p class="headerText" style="font-size: 25px;"> Portfolio Website </p>
                              <p class="headerDesc"> Individual Project </p>
                              <button class="linkButton" onclick="window.open('https://github.com/GoodGameRuler/personal_website','_blank')"> <img src="/link.svg" /> </button>
                          </div>
                          <hr />
                          <p class="breakLine"> Made Using: <span style="color: #FFFFFF;"> HTML, CSS, JS, FIGMA, VUE 3, NUXT 3, VERCEL </span></p>
                          <p class="breakLine"> <span style="color: #FFFFFF;"> This personal website was a means for me to realy delve into the creative side of developing apps, while making a website as for my personal brand
                              . I tried encorporating a terminal esque look, while adding elements of comic books here and there.</span> </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </main>
</template>


<style>
    button {
        border: none;
        background-color: inherit;
        color: inherit;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
    }

    body {
        font-weight: bold;
        color: #4295AE;
        font-size: 20px;
    }

    @-moz-document url-prefix(){
        body {
            scrollbar-width: 4px;
            scrollbar-color: #295968 rgba(26, 32, 34, 0.9);
        }
    }

    a {
        text-decoration: 2px underline #FFFFFF;
        transition: ease 0.5s;
        color: inherit;
    }

    a:hover {
        text-decoration: 2px underline #4295AE;
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        height: 8px;              /* height of horizontal scrollbar ← You're missing this */
        width: 8px;               /* width of vertical scrollbar */
        background: rgba(26, 32, 34, 0.9);;
    }

    ::-webkit-scrollbar-thumb:active {
        background: #FFFFFF;
    }

    ::-webkit-scrollbar-thumb{
        background: #295968;
        border-radius: 10px;
    }

    p.headerFont {
        font-size: 45px;
        color: #9EC4C2;
    }

    p.highlightFont {
        font-size: 22px;
    }

    hr {
        width: 100%;
        margin: 6px 0;
        color: white;
    }

    div.background {
        height: 100vh;
        width: 100vw;
        background-image: url('/bg.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .hoverContainer {
        height: 100%;
        width: 100%;
        padding: 2rem;
        background-color: rgba(26, 34, 37, 0.7);
        box-sizing: border-box;
        padding: 12px;
        -webkit-backdrop-filter: blur(15px);
        -moz-backdrop-filter: blur(15px);
        -o-backdrop-filter: blur(15px);
        -ms-backdrop-filter: blur(15px);
        backdrop-filter: blur(15px);;
        display: grid;
        gap: 12px;
        grid-template-rows: 75px auto 1fr;
        grid-template-columns: 1fr 1fr;
        overflow: auto;
    }

    .blurContainer {
        height: 100%;
        width: 100%;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        -moz-backdrop-filter: blur(5px);
        -o-backdrop-filter: blur(5px);
        -ms-backdrop-filter: blur(5px);
    }

    .dev {
        grid-row: 2;
        grid-column: 1;
        display: grid;
        gap: 10px;
        grid-template-rows: 1fr auto;
        grid-template-columns: 1fr 2fr;
    }

    .proj{
        grid-row: 2 / 4;
        grid-column: 2;
        display: grid;
        grid-template-rows: repeat(5, 65px) 1fr;
        grid-template-columns: 1.75fr 5fr;
        padding: 20px;
    }

    .projectBox {
        background-color: #171F24;
        margin: 5px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .singleProjectNameBox.projectBox:not(.selectedProjButton):hover {
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: 5px 5px gray;
        cursor: pointer;
    }

    .singleProjectNameBox {
        grid-column: 1;
        color: #4295AE;
        font-size: 20px;
        font-family: "Source Code Pro";
        font-weight: bold;
        border: none;
        transition: all ease-in 0.5s;
    }

    .singleProjectDescBox {
        grid-column: 2;
        grid-row: 2 / 10;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 20px;
    }

    .singleProjectDescBox > p {
        margin-bottom: 10px;

    }

    .projectHeader {
        display: grid;
        width: 100%;
        grid-template-rows: 1fr auto;
        grid-template-columns: 1fr auto auto;
        grid-column-gap: 5px;
    }

    .projectHeader > .headerText {
        grid-row: 1;
        grid-column: 1;
        margin-bottom: 5px;

    }

    .projectHeader > .headerDesc {
        grid-row: 2;
        grid-column: 1;
        margin-bottom: 2px;
    }

    .linkButton {
        color: #000000;
        background-color: #9ADAE7;
        font-size: 20px;
        font-family: "Source Code Pro";
        font-weight: bold;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 50px;
        transition: all ease 0.2s;
    }

    .linkButton:hover {
        cursor: pointer;
        box-shadow: 5px 5px gray;
    }

    .linkButton:active {
        color: #000000;
        background-color: #FFFFFF;
    }

    .projectHeader > button {
        grid-row: 1 / 10;
        margin-bottom: 5px;
        border-radius: 10px;
    }

    button > img {
        height: 22px;

    }

    .projectHeader > hr {
        margin-bottom: 2px;
    }


    .singleProjectsTitle {
        background-color: rgba(45, 104, 122, 0.4);
        grid-column: 2;
        grid-row: 1;
    }

    .singleProjectDetailsTitle {
        background-color: rgba(45, 104, 122, 0.4);
        grid-column: 2;
        grid-row: 1;
    }

    .infoBox {
        background-color: rgba(26, 32, 34, 0.7);
        border: 1px #1C2A32;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 20px;
    }

    .profilePhoto {
        grid-row: 1;
        grid-column: 1;
    }

    .lineOfText {
        display: flex;
        flex-direction: row;

    }

    .profileCircle {
        height: 250px;
        width: 250px;
        background-color: #FFFFFF;
        border-radius: 50%;
        display: inline-block;
        background-image: url("/comic_pf2.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>
