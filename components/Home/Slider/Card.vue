<template>
    <NuxtLink
        :to="category.id ? `/categories/${category.id}` : category.link"
        class="
            HomeSliderCard min-w-[90px] min-h-[90px] rounded-2xl
            flex flex-col justify-center
            items-center text-white
        "
        :style="'background: ' + category.color"
    >
        <i class="bi text-3xl" v-if="category.icon.startsWith('bi')" :class="category.icon"></i>
        <span v-else class="text-3xl">{{ category.icon }}</span>
        <span class="text-white text-md">{{ category.title }}</span>
    </NuxtLink>
</template>

<script setup>
const { category } = defineProps([
    'category',
])
</script>