<template>
    <NuxtLink
        to="/"
        class="
            HomeSliderCard min-w-[90px] min-h-[90px] rounded-2xl
            flex flex-col justify-center
            items-center text-white
        "
        :class="color"
    >
        <i class="bi text-3xl" :class="icon"></i>
        <span class="text-white text-sm">{{ title }}</span>
    </NuxtLink>
</template>

<script lang="ts" setup>
const { color, icon, title } = defineProps([
    'color',
    'icon',
    'title',
])
</script>