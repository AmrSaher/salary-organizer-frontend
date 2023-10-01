<template>
    <NuxtLink
        :to="category.id ? `/categories/${category.id}` : category.link"
        class="
            HomeSliderCard min-w-[90px] min-h-[90px]
            flex flex-col justify-center rounded-2xl
            items-center text-white
        "
        :style="'background: ' + category.color"
    >
        <i class="bi text-3xl text-white mix-blend-difference" v-if="category.icon.startsWith('bi')" :class="category.icon"></i>
        <span v-else class="text-3xl">{{ category.icon }}</span>
        <span class="text-white font-medium text-sm mix-blend-difference truncate">{{ category.title }}</span>
    </NuxtLink>
</template>

<script setup>
const { category } = defineProps([
    'category',
])
</script>