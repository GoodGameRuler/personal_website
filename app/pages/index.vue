<script setup>

    useHead({
        title: "Udit's Personal Website",
        meta: [
            { name: 'description', content: "Udit's Bio, Projects, and Experience"},
            { name: 'author', content: "Udit Samant"},
            { name: "keywords", content: "Udit Samant, Personal Website, Vue, Nuxt, JS, HTML, CSS, Web Development"},

            { property: "og:url", content: "https://www.uditsamant.com/"},
            { property: "og:type", content: "website"},
            { property: "og:title", content: "Udit Samant - Personal Website"},
            { property: "og:image", content: "https://www.uditsamant.com/comic_pf2.png"},
            { property: "og:description", content: "A developer summary of Udit Samant - Bio, Projects, and Experience"},

            { name: "twitter:card", content: "summary_large_image"},
            { property: "twitter:domain", content: "uditsamant.com"},
            { property: "twitter:url", content: "https://www.uditsamant.com/"},
            { name: "twitter:title", content: "Udit Samant - Personal Website"},
            { name: "twitter:image", content: "https://www.uditsamant.com/comic_pf2.png"},
            { name: "twitter:description", content: "A developer summary of Udit Samant - Bio, Projects, and Experience"},
        ],
    })

    import '~/assets/base.css'
    import '~/assets/fonts.css'

    // sharedState.js
    import { ref } from 'vue';

    const projButtons = [
        { no: 6, value: 'Homelab'},
        { no: 1, value: 'OFence'},
        { no: 2, value: 'UniTrack'},
        { no: 3, value: 'Crawl'},
        { no: 4, value: 'GDSC Game Jam' },
        { no: 5, value: 'Korean' },
        // Add more buttons as needed

        { no: 1000, value: 'Self' },
    ]

    const selectedButton = ref(6);

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
                      <div class="singleFoldersTitle projectBox paneTitle"> Folders </div>
                      <div class="singleProjectDetailsTitle projectBox paneTitle"> Project Details </div>
                      <ProjButton v-for="button in projButtons" :key="button.no" :button="button" :selectedButton="selectedButton" @select-button="handleSelectButton" />
                      <!--  SELF SHOULD BE LAST -->
                      <div v-if="selectedButton === 6" class="singleProjectDescBox projectBox">
                          <div class="projectHeader">
                              <p class="headerText" style="font-size: 25px;"> Homelab </p>
                              <p class="headerDesc"> Self-Hosted Infrastructure </p>
                          </div>
                          <hr />
                          <p> Made Using: <span class="hl"> Proxmox, LXC, Podman, WireGuard, Traefik, DNS </span></p>
                          <p class="breakLine" style="font-style: italic;"> This is where most of my Linux learning actually happens. </p>
                          <p class="breakLine"> <span class="hl"> I run a Proxmox cluster at home that hosts my self-hosted services in LXC containers. My ISP puts me behind CGNAT, so I set up a WireGuard tunnel through a small cloud host to carry external traffic in, with a Traefik reverse proxy routing it to the right service. </span> </p>
                          <p class="breakLine"> <span class="hl"> I also configured split DNS zones to separate internal and external traffic. The same names work at home and away, and only the services I choose are reachable from the internet. </span> </p>
                      </div>
                      <div v-if="selectedButton === 1" class="singleProjectDescBox projectBox">
                          <div class="projectHeader">
                              <p class="headerText" style="font-size: 25px;"> OFence </p>
                              <p class="headerDesc"> Individual Research Project </p>
                          </div>
                          <hr />
                          <p> Made Using: <span class="hl"> OFence, C </span></p>
                          <p class= "breakLine" style="font-style: italic;"> An extension of the original OFence research <a target="_blank" href="https://dl.acm.org/doi/abs/10.1145/3552326.3567504">paper</a>. </p>
                          <p> <span class="hl"> My task is to identify (and potentially automate) whether it is feasible to convert read, write, and general-purpose memory barriers
                          in the Linux Kernel to acquire-release semantics. </span> </p>
                          <p> <span class="hl">Where it is not possible, the project aims to automate the generation of comments around the barriers.
                          This would help kernel developers easily identify the structures that barriers target.</span> </p>


                      </div>
                      <div v-if="selectedButton === 2" class="singleProjectDescBox projectBox">
                          <div class="projectHeader">
                              <p class="headerText" style="font-size: 25px;"> UniTrack </p>
                              <p class="headerDesc"> Group Project </p>
                              <button class="linkButton" onclick="window.open('https://github.com/GoodGameRuler/unitrack_v3/','_blank')"> <img src="/link.svg" /> </button>
                          </div>
                          <hr />
                          <p> Made Using (Version 3): <span class="hl"> HTML, CSS, JS, React, NextJS, Vercel </span></p>
                          <p class= "breakLine" style="font-style: italic;"> This project won the 2023 University of Sydney Coding Fest's Best Undergraduate Project. </p>

                          <p> <span class="hl"> An improved drag-and-drop University of Sydney degree planner that allows students to plan their degree with ease.
                              Compared to the original university websites, UniTrack has... a simplified UI, one unified page for timetabling and planning, and a drag-and-drop degree planner. </span> </p>

                          <p> <span class="hl"> This was also the first opportunity I had to create an open-source application that took contributions through forked pull requests.
                              An experience that taught me how to manage projects, and the importance of proper issue management and documentation.</span> </p>

                      </div>
                      <div v-if="selectedButton === 3" class="singleProjectDescBox projectBox">
                          <div class="projectHeader">
                              <p class="headerText" style="font-size: 25px;"> Crawl </p>
                              <p class="headerDesc"> Team Project </p>
                              <button class="linkButton" onclick="window.open('https://github.com/Crawl-App/app-frontend','_blank')"> <img src="/link.svg" /> </button>
                          </div>
                          <hr />
                          <p class="breakLine"> Made Using: <span class="hl"> React Native, Expo, Python, Google Maps API, Figma </span></p>

                          <p class= "breakLine" style="font-style: italic;"> This project was a finalist in the Sydney Computing Society Annual Hackathon. </p>

                          <p class="breakLine"> <span class="hl"> Crawl is an app that reduces the friction of planning events with friends. Given a location and a number of stops,
                              Crawl determines an optimal activity route using ratings as a heuristic and distance as the cost. Crawl's intuitive UI and simple usage lift the focus away from
                              determining the next thing to do, and let customers focus on what truly matters - enjoying their night.</span> </p>

                          <p class="breakLine"> <span class="hl"> "As software engineers and innovators the goal should not be to make software and products that bring us back to
                              a pre-COVID norm but rather to build a better, more social one" - The opening line to SYNCSHACK 2024, with the theme "Software That Brings People Together". </span> </p>

                      </div>
                      <div v-if="selectedButton === 4" class="singleProjectDescBox projectBox">
                          <div class="projectHeader">
                              <p class="headerText" style="font-size: 25px;"> Google DSC Game Jam </p>
                              <p class="headerDesc"> Team Planned Event </p>
                              <button class="linkButton" onclick="window.open('https://github.com/GoodGameRuler/GDSC-PyGame','_blank')"> <img src="/link.svg" /> </button>
                          </div>
                          <hr />
                          <p class="breakLine"> Made Using: <span class="hl"> PyGame, Figma </span></p>

                          <p class="breakLine"> <span class="hl"> An introductory Game Development workshop that I orchestrated with my team at GDSC, at Google HQ Sydney. It was the opening for our Game Jam Competition. </span> </p>                          <p> <span class="hl"> The goal was to inspire students to be creative, and hopefully introduce them to a different career option in CS. Here are the results: <a target="_blank" href="https://gdsc-game-jam-2022.devpost.com/project-gallery">Link</a>. </span> </p>

                      </div>
                      <div v-if="selectedButton === 5" class="singleProjectDescBox projectBox">
                          <div class="projectHeader">
                              <p class="headerText" style="font-size: 25px;"> Korean Learning Script </p>
                              <p class="headerDesc"> Personal Project </p>
                              <button class="linkButton" onclick="window.open('https://github.com/GoodGameRuler/korean','_blank')"> <img src="/link.svg" /> </button>
                          </div>
                          <hr />
                          <p class="breakLine"> Made Using: <span class="hl"> Python </span></p>

                          <p class="breakLine"> <span class="hl"> A small project made to assist me in learning Korean. </span> </p>
                          <p class="breakLine"> <span class="hl"> In my attempts to learn Korean, before my exchange at KAIST, I realised tools like Quizlet and other spaced-repetition-based learning apps just took much too long to traverse multiple questions. I wanted to be able to very quickly go through 30, 40 words/questions. So, as any engineer would, I made a Python script to do it for me. </span> </p>

                      </div>
                      <div v-if="selectedButton === 1000" class="singleProjectDescBox projectBox">
                          <div class="projectHeader">
                              <p class="headerText" style="font-size: 25px;"> Portfolio Website </p>
                              <p class="headerDesc"> Individual Project </p>
                              <button class="linkButton" onclick="window.open('https://github.com/GoodGameRuler/personal_website','_blank')"> <img src="/link.svg" /> </button>
                          </div>
                          <hr />
                          <p class="breakLine"> Made Using: <span class="hl"> HTML, CSS, JS, Figma, Vue 3, Nuxt 4, Vercel </span></p>
                          <p class="breakLine"> <span class="hl"> This personal website was a means for me to really delve into the creative side of developing apps, while making a website for my personal brand. I tried incorporating a terminal-esque look, while adding elements of comic books here and there.</span> </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </main>
</template>


<style>
    button {
        border: 1px solid var(--btn-border);
        background-color: inherit;
        color: inherit;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
    }

    body {
        font-weight: bold;
        color: var(--label);
        font-size: 20px;
    }

    @-moz-document url-prefix(){
        body {
            scrollbar-width: 4px;
            scrollbar-color: var(--scroll-thumb) var(--scroll-track);
        }
    }

    a {
        text-decoration: 2px underline var(--text-strong);
        transition: ease 0.5s;
        color: inherit;
    }

    a:hover {
        text-decoration: 2px underline var(--label);
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        height: 8px;              /* height of horizontal scrollbar ← You're missing this */
        width: 8px;               /* width of vertical scrollbar */
        background: var(--scroll-track);
    }

    ::-webkit-scrollbar-thumb:active {
        background: var(--text-strong);
    }

    ::-webkit-scrollbar-thumb{
        background: var(--scroll-thumb);
        border-radius: 10px;
    }

    p.headerFont {
        font-size: 45px;
        color: var(--heading);
    }

    p.highlightFont {
        font-size: 22px;
    }

    hr {
        width: 100%;
        margin: 6px 0;
        color: var(--text);
    }

    div.background {
        height: 100vh;
        width: 100vw;
        background: var(--bg-grad) fixed;
    }

    .hoverContainer {
        height: 100%;
        width: 100%;
        padding: 2rem;
        background-color: var(--overlay);
        box-sizing: border-box;
        padding: 12px;
        -webkit-backdrop-filter: blur(15px);
        -moz-backdrop-filter: blur(15px);
        -o-backdrop-filter: blur(15px);
        -ms-backdrop-filter: blur(15px);
        backdrop-filter: blur(15px);;
        display: grid;
        gap: 12px;
        grid-template-rows: 54px auto 1fr;
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
        gap: 10px 30px;
        grid-template-rows: 1fr auto;
        grid-template-columns: auto 1fr;
        align-items: center;
    }

    .proj{
        font-size: 20px;
        grid-row: 2 / 4;
        grid-column: 2;
        display: grid;
        grid-template-rows: repeat(8, 65px) 1fr;
        grid-template-columns: 1.75fr 5fr;
        padding: 20px;
    }

    .projectBox {
        background-color: var(--surface);
        margin: 5px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .singleProjectNameBox.projectBox:not(.selectedProjButton):hover {
        background-color: var(--surface-2);
        box-shadow: 5px 5px var(--overlay);
        cursor: pointer;
    }

    .singleProjectNameBox {
        grid-column: 1;
        color: var(--label);
        font-size: inherit;
        font-family: "Source Code Pro";
        font-weight: bold;
        border: 1px solid var(--btn-border);
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
        color: var(--pane-solid);
        background-color: var(--label);
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
        box-shadow: 5px 5px var(--overlay);
    }

    .linkButton:active {
        color: var(--pane-solid);
        background-color: var(--text-strong);
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
        background-color: var(--selected);
        grid-column: 2;
        grid-row: 1;
    }

    .paneTitle {
        background-color: var(--surface);
        color: var(--heading);
        font-weight: bold;
        border: 1px solid var(--tile-border);
    }

    .singleFoldersTitle {
        grid-column: 1;
        grid-row: 1;
    }

    .singleProjectDetailsTitle {
        grid-column: 2;
        grid-row: 1;
    }

    .infoBox, .topBar {
        outline: 2px solid transparent;
        outline-offset: -2px;
        transition: outline-color 0.2s ease;
        border: 1px solid var(--tile-border);
        box-shadow: 0 3px 10px var(--tile-shadow);
    }

    .infoBox:hover, .infoBox:focus-within, .topBar:hover, .topBar:focus-within {
        outline-color: var(--label);
    }

    .infoBox {
        background-color: var(--pane);
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
        background-color: var(--surface);
        border-radius: 50%;
        display: inline-block;
        background-image: url("/comic_pf2.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    /* Laptop widths: keep vim buffer lines on one line */
    @media (min-width: 851px) and (max-width: 1700px) {
        .vimLine {
            font-size: 17px;
        }
    }

    /* Laptop heights: compact the panes so the whole session fits on screen */
    @media (min-width: 851px) and (max-height: 980px) {
        body {
            font-size: 18px;
        }

        p.headerFont {
            font-size: 36px;
        }

        p.highlightFont {
            font-size: 19px;
        }

        .distroArt {
            font-size: 9px;
        }

        .vimText {
            min-height: 200px;
        }
    }

    /* Mobile: the tmux session stays, the panes stack vertically */
    @media (max-width: 850px) {
        .topBar {
            font-size: 14px;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 6px 12px;
        }

        .rightTopBar {
            flex: 0 0 auto;
        }

        .leftTopBar {
            flex: 1 1 auto;
            flex-wrap: wrap;
        }

        .dev {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .profilePhoto {
            display: flex;
            justify-content: flex-start;
        }

        .info, .skills {
            width: 100%;
        }

        .proj {
            font-size: 17px;
        }

        .topBar .topBarButton {
            font-size: 14px;
            padding: 3px;
        }

        body {
            font-size: 16px;
        }

        div.background {
            height: auto;
            min-height: 100vh;
        }

        .hoverContainer {
            display: flex;
            flex-direction: column;
            height: auto;
            overflow: visible;
        }

        .workspaces {
            display: none;
        }

        .topBar {
            min-height: 48px;
            padding: 6px 12px;
        }

        p.headerFont {
            font-size: 30px;
        }

        p.highlightFont {
            font-size: 17px;
        }

        .distroArt {
            font-size: 8px;
        }

        .vimText {
            min-height: 0;
            height: auto;
            flex: 0 0 auto;
        }

        .vimLine {
            font-size: 14px;
        }

        .vimFiller {
            display: none;
        }

        .exp {
            min-height: 0;
        }

        .proj {
            display: flex;
            flex-direction: column;
            padding: 12px;
        }

        .projectBox {
            min-height: 44px;
        }

        .singleProjectDescBox {
            padding: 14px;
        }

        .modalContents {
            max-width: 92vw;
            box-sizing: border-box;
        }
    }

</style>
