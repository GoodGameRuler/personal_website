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
