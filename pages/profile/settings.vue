<template>
    <section>
        Тут будут найстроки юзера
    </section>
</template>
<script setup>
useHead({ title: 'Настройки' });
definePageMeta({
    layout: 'auth',
    middleware: ["auth"]
})
</script>
