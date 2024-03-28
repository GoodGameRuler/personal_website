<script setup>
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
            <p class="highlightFont"> KERNEL: <span style="color: #FFFFFF;"> Bachelor of Adanced Computing || Bachelor of Science </span></p><br />
            <p class="highlightFont"> UPTIME: <span style="color: #FFFFFF;"> 4th Year (Penultimate) || 2025 Graduation </span></p><br />
        </div>
        <div class="skills devBox">
            <p style="margin-bottom: 3px;"> ~ $ <span style="color: #FFFFFF;"> ls skills </span></p>
            <p> ~ $ <span style="color: #FFFFFF;"> C, C++, PYTHON, RUST </span></p>
        </div>
    </div>
</template>

<style>
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

</style>
