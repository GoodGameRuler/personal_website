<script setup>
    const showSkill = ref(false);

    let skills = {
        C: {name: "C Programming", prof: "4 / 5"},
        RUST: {name: "Rust", prof: "2.5 / 5"},
        GO: {name: "Go", prof: "3.5 / 5"},
        PYTHON: {name: "Python", prof: "4 / 5"},
        OCAML: {name: "OCaml", prof: "2.5 / 5"},
        JAVA: {name: "Java", prof: "4 / 5"},
        SQL: {name: "SQL", prof: "5 / 5"},
        JAVASCRIPT: {name: "JavaScript", prof: "4 / 5"},
        VUE: {name: "Vue", prof: "3 / 5"},
        NUXT: {name: "Nuxt", prof: "3.5 / 5"},
        DOCKER: {name: "Docker", prof: "3 / 5"},
        LINUX: {name: "Linux", prof: "4 / 5"},
    };

    const selSkill = ref(skills["C"]);

</script>

<template>
    <div class="dev infoBox">
        <div class="profilePhoto devBox">
            <pre class="distroArt distroArch">                  -`
                 .o+`
                `ooo/
               `+oooo:
              `+oooooo:
              -+oooooo+:
            `/:-:++oooo+:
           `/++++/+++++++:
          `/++++++++++++++:
         `/+++ooooooooooooo/`
        ./ooosssso++osssssso+`
       .oossssso-````/ossssss+`
      -osssssso.      :ssssssso.
     :osssssss/        osssso+++.
    /ossssssss/        +ssssooo/-
  `/ossssso+/:-        -:/+osssso+-
 `+sso+:-`                 `.-/+oso:
`++:.                           `-/+/
.`                                 `/</pre>
            <pre class="distroArt distroFedora">             .',;::::;,'.
         .';:cccccccccccc:;,.
      .;cccccccccccccccccccccc;.
    .:cccccccccccccccccccccccccc:.
  .;ccccccccccccc;.:dddl:.;ccccccc;.
 .:ccccccccccccc;OWMKOOXMWd;ccccccc:.
.:ccccccccccccc;KMMc;cc;xMMc;ccccccc:.
,cccccccccccccc;MMM.;cc;;WW:;cccccccc,
:cccccccccccccc;MMM.;cccccccccccccccc:
:ccccccc;oxOOOo;MMM000k.;cccccccccccc:
cccccc;0MMKxdd:;MMMkddc.;cccccccccccc;
ccccc;XMO';cccc;MMM.;cccccccccccccccc'
ccccc;MMo;ccccc;MMW.;ccccccccccccccc;
ccccc;0MNc.ccc.xMMd;ccccccccccccccc;
cccccc;dNMWXXXWM0:;cccccccccccccc:,
cccccccc;.:odl:.;cccccccccccccc:,.
ccccccccccccccccccccccccccccc:'.
:ccccccccccccccccccccccc:;,..
 ':cccccccccccccccc::;,.</pre>
        </div>
        <div class="info devBox">
            <p class="headerFont"> UDIT SAMANT </p> <br />
            <p class="highlightFont"> OS: <span class="hl"> Computer Science || Data Science </span></p><br />
            <p class="highlightFont"> HOST: <span class="hl"> The University of Sydney </span></p><br />
            <p class="highlightFont"> KERNEL: <span class="hl"> Bachelor of Advanced Computing || Bachelor of Science </span></p><br />
            <p class="highlightFont"> UPTIME: <span class="hl"> Final Year || June 2027 Graduation </span></p><br />
        </div>
        <div class="skills devBox">
            <p style="margin-bottom: 3px;"> ~ $ <span class="hl"> ls skills </span></p>
            <p> &#62; <span class="hl">
                <span class="" v-for="(skill, key) in skills" :key="key" @click="showSkill = true; selSkill = skill"><a class="skillButton"> {{ key }} </a>, </span></span></p>
            <p class="shellPrompt"> ~ $ <span class="promptCursor"></span></p>
        </div>

        <Modal v-model="showSkill" modalID="manPageSkills" modalContentsID="manPageSkillsContents">
            <p class=""> skills(9) - MAN PAGE MISC</p>
            <p class="modalHeader lbl"> NAME: {{ selSkill.name }} </p>
            <hr />
            <p> PROFICIENCY: {{ selSkill.prof }} </p>
        </Modal>
    </div>
</template>

<style>
    .distroArt {
        font-family: "Source Code Pro", monospace;
        font-size: 11px;
        line-height: 1.05;
        font-weight: bold;
        color: var(--label);
        user-select: none;
    }

    .distroFedora {
        display: none;
    }

    :root[data-theme="light"] .distroArch {
        display: none;
    }

    :root[data-theme="light"] .distroFedora {
        display: block;
        color: var(--heading);
    }

    .skillButton:hover {
        color: var(--label);
    }

    .devBox {
        padding: 5px;
    }

    #manPageSkills {
    }

    #manPageSkillsContents {
        background-color: var(--pane-solid);
    }

    .skills {
        grid-row: 3;
        grid-column: 1 / 3;
    }

    .shellPrompt {
        margin-top: 8px;
    }

    .promptCursor {
        display: inline-block;
        width: 0.6em;
        height: 1.05em;
        background-color: var(--text);
        vertical-align: text-bottom;
        opacity: 0.45;
    }

    .dev:hover .promptCursor, .dev:focus-within .promptCursor {
        opacity: 1;
        animation: promptBlink 1.1s step-end infinite;
    }

    @keyframes promptBlink {
        50% { opacity: 0; }
    }

    .info {
        grid-row: 1;
        grid-column: 2;
    }

    .intro {
        grid-row: 2;
        grid-column: 1 / 3;
        color: white;
        font-style: italic;
    }

</style>
