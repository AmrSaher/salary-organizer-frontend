<template>
    <header class="Header w-full flex items-center justify-between mb-7 bg-[#2a2838]">
        <h1 class="text-3xl text-white font-semibold">{{ title }}</h1>
        <slot />
    </header>
</template>

<script lang="ts" setup>
const { title } = defineProps([
    'title',
])
</script>