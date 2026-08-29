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
            <span class="profileCircle" />
        </div>
        <div class="info devBox">
            <p class="headerFont"> UDIT SAMANT </p> <br />
            <p class="highlightFont"> OS: <span style="color: #FFFFFF;"> Computer Science || Data Science </span></p><br />
            <p class="highlightFont"> HOST: <span style="color: #FFFFFF;"> The University of Sydney </span></p><br />
            <p class="highlightFont"> KERNEL: <span style="color: #FFFFFF;"> Bachelor of Advanced Computing || Bachelor of Science </span></p><br />
            <p class="highlightFont"> UPTIME: <span style="color: #FFFFFF;"> Final Year || June 2027 Graduation </span></p><br />
        </div>
        <div class="skills devBox">
            <p style="margin-bottom: 3px;"> ~ $ <span style="color: #FFFFFF;"> ls skills </span></p>
            <p> &#62; <span style="color: #FFFFFF;">
                <span class="" v-for="(skill, key) in skills" :key="key" @click="showSkill = true; selSkill = skill"><a class="skillButton"> {{ key }} </a>, </span></span></p>
        </div>

        <Modal v-model="showSkill" modalID="manPageSkills" modalContentsID="manPageSkillsContents">
            <p class=""> skills(9) - MAN PAGE MISC</p>
            <p class="modalHeader" style="color: #4295AE;"> NAME: {{ selSkill.name }} </p>
            <hr />
            <p> PROFICIENCY: {{ selSkill.prof }} </p>
        </Modal>
    </div>
</template>

<style>
    .skillButton:hover {
        color: #4295AE;
    }

    .devBox {
        padding: 5px;
    }

    #manPageSkills {
    }

    #manPageSkillsContents {
        background-color: rgba(26, 32, 34, 1);
    }

    .skills {
        grid-row: 3;
        grid-column: 1 / 3;
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
