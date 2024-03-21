<script setup>
</script>

<template>
  <header>
  </header>

  <main>
      <div class="background">
          <div class="blurContainer">
              <div class="hoverContainer">
                  <p class="headerFont"> UDIT SAMANT - PERSONAL WEBSITE</p>
                  <div class="mainLoginConatiner"> 
                      <div class="dividedLoginFlexContainter">
                          <div class="welcomeFont"> 
                              <p class="welcomeFont"> 04:06 </p>
                              <p class="welcomeFont"> Welcome Visitor </p>
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
        background-image: url('./assets/Fedora BG.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .hoverContainer {
        height: 100%;
        width: 100%;
        padding: 2rem;
        background-color: #3A273F;
        opacity: 70%;
        box-sizing: border-box;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        display: flex;
        flex-direction: column;
    }

    .blurContainer {
        height: 100%;
        width: 100%;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }

    .mainLoginConatiner {
        margin: 10% 10% 30%;
        box-sizing: border-box;
        flex-grow: 1;
    }
</style>
