<script setup>
    const emit = defineEmits(['selectButton']);

    const isActive = ref(true);

    const props = defineProps({
      button: Object,
      selectedButton: Number
    });

    const handleClick = () => {
      emit('selectButton', props.button.no);
      console.log();
    };
</script>

<template>
    <button class="singleProjectNameBox projectBox" @click="handleClick" v-bind:class="{ 'selectedProjButton': selectedButton === props.button.no }"> {{ button.value }} </button>

</template>

<style>
    .proj .projectBox.selectedProjButton {
        background-color: var(--label);
        color: var(--pane-solid);
    }

    .proj .projectBox.selectedProjButton:hover {
        background-color: var(--label);
        color: var(--pane-solid);
    }

</style>
