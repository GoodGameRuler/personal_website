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

    p {
        font-family: "Source Code Pro";
        font-weight: bold;
        color: #B5B4FB;
    }

    p.headerFont {
        font-size: 37px;
    }
    
    p.welcomeFont {
        font-size: 85px;
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
        display: flex;
        flex-direction: column;
        padding: 12px;
    }

    .blurContainer {
        height: 100%;
        width: 100%;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }

    .topBar {
        width: 100%;
        height: 40px;
        background-color: #000000;
    }
</style>
