<script setup>
    import TopBar from './components/TopBar.vue'
    import DevBox from './components/DevBox.vue'
    import ExpBox from './components/ExpBox.vue'
    import ProjButton from './components/ProjButton.vue'
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
                      <ProjButton value="UniTrack" />
                      <div class="singleProjectDetailsTitle projectBox"> Project Details </div>

                      <ProjButton value="GDSC Game Jam" />
                      <ProjButton value="Self" />

                      <!--  SELF SHOULD BE LAST -->
                      <div class="singleProjectDescBox projectBox"></div>
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
        overflow: scroll;
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
        grid-template-rows: 1fr 50px;
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
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .singleProjectNameBox {
        grid-column: 1;
        color: #4295AE;
        font-size: 20px;
        font-family: "Source Code Pro";
        font-weight: bold;
        border: none;
    }

    .singleProjectNameBox:focus {
        background-color: rgba(45, 104, 122, 0.4);
        transition: all ease-in 0.5s;
    }

    .singleProjectDescBox {
        grid-column: 2;
        grid-row: 2 / 10;
    }
 
    .singleProjectDetailsTitle {
        background-color: rgba(45, 104, 122, 0.4);
        grid-column: 2;
    }

    .infoBox {
        background-color: rgba(26, 32, 34, 0.7);
        border: 1px #1C2A32;
        padding: 20px;
        box-sizing: border-box;
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
        background-image: url("./assets/profile.avif");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>
