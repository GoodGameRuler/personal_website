<script setup>
    // Apply the saved theme before hydration so there is no flash of the wrong theme
    useHead({
        script: [{
            innerHTML: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}})()`,
        }],
    })
</script>
<template>
  <div>
    <NuxtPage />
  </div>
</template>
