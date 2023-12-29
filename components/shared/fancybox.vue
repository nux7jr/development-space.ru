<script setup>
import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const props = defineProps({
    options: Object,
})

onMounted(() => {
    const opts = props.options || {}

    NativeFancybox.bind('[data-fancybox]', opts)

    return () => {
        NativeFancybox.destroy()
    }
})
</script>

<template>
    <slot />
</template>
