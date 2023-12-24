<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useHead({
  htmlAttrs: {
    lang: 'ru',
    class: 'scroll-smooth selection:bg-black selection:text-white'
  },
  titleTemplate: (title) => `${title} - «development-space.ru»`,
});
</script>
