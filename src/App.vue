<script setup>
</script>

<template>
  <header>
  </header>

  <main>
      <div class="background">
          <div class="blurContainer">
              <div class="hoverContainer">
                  <div class="topBar">
                      <div class="rightTopBar"> US </div>
                      <div class="leftTopBar"> 80% | 27/03/2024 | Contact Me </div>
                  </div>
                  <div class="dev infoBox">
                    <div class="profilePhoto devBox">
                        <span class="profileCircle" />
                    </div>
                    <div class="info devBox">
                        <p class="headerFont"> UDIT SAMANT </p> <br />
                        <p class="highlightFont" style="color: #4295AE;"> OS: <span style="color: #FFFFFF;"> Computer Science || Data Science </span></p><br />
                        <p class="highlightFont" style="color: #4295AE;"> HOST: <span style="color: #FFFFFF;"> The University of Sydney </span></p><br />
                        <p class="highlightFont" style="color: #4295AE;"> KERNEL: <span style="color: #FFFFFF;"> Bachelor of Adanced Computing || Bachelor of Science </span></p><br />
                        <p class="highlightFont" style="color: #4295AE;"> UPTIME: <span style="color: #FFFFFF;"> 4th Year (Penultimate) || 2025 Graduation </span></p><br />
                    </div>
                    <div class="skills devBox">
                        <p style="color: #4295AE; font-size: 20px; margin-bottom: 3px;"> ~ $ <span style="color: #FFFFFF;"> ls skills </span></p>
                        <p style="color: #4295AE; font-size: 20px;"> ~ $ <span style="color: #FFFFFF;"> C, C++, PYTHON, RUST </span></p>
                    </div>
                  </div>
                  </div>
              </div>
          </div>
      </div>
  </main>
</template>


<style>
    @import "./assets/fonts.css";

    body {
        font-family: "Source Code Pro";
        font-weight: bold;
        color: #4295AE;
        font-size: 20px;
    }

    p.headerFont {
        font-size: 45px;
        color: #9EC4C2;
    }
    
    p.highlightFont {
        font-size: 22px;
    }
    
    div.background {
        height: 100vh;
        width: 100vw;
        background-image: url('./assets/bg.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .hoverContainer {
        height: 100%;
        width: 100%;
        padding: 2rem;
        background-color: #1A2225;
        opacity: 70%;
        box-sizing: border-box;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        padding: 12px;
        display: grid;
        gap: 12px;
        grid-template-rows: 75px 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    }

    .blurContainer {
        height: 100%;
        width: 100%;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }

    .topBar {
        grid-row: 1;
        grid-column: 1 / 3;
        background-color: #000000;
        display: flex;
        align-items: center;
        padding: 0px 30px;
    }

    .leftTopBar {
        flex: 1;
        display: flex;
        justify-content: right;

    }

    .rightTopBar {
        flex: 1;
    }

    .dev {
        grid-row: 2;
        grid-column: 1;
        padding: 20px;
        display: grid;
        gap: 10px;
        grid-template-rows: 1fr 50px;
        grid-template-columns: 1fr 2fr;
    }

    .exp {
        grid-row: 3;
        grid-column: 1;
    }

    .proj{
        grid-row: 2 / 4;
        grid-column: 2;
    }

    .infoBox {
        background-color: #000000;
        border: 1px #1C2A32;
    }

    .devBox {
        padding: 5px;

    }

    .skills {
        grid-row: 2;
        grid-column: 1 / 3;
    }

    .info {
        grid-row: 1;
        grid-column: 2;
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
    }

</style>
