<script setup>
    // Apply the saved theme before hydration so there is no flash of the wrong theme
    useHead({
        link: [
            { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' },
            { rel: 'alternate icon', href: '/favicon.ico?v=2' },
        ],
        script: [{
            innerHTML: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}})()`,
        }],
    })
</script>
<template>
  <div>
    <NuxtPage />
  </div>
</template>
