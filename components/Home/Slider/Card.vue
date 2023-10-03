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
        <i
            class="bi text-3xl"
            v-if="category.icon.startsWith('bi')"
            :class="category.icon"
            :style="'color: ' + textColor"
        ></i>
        <span v-else class="text-3xl">{{ category.icon }}</span>
        <span
            class="
                font-medium text-sm
            "
            :style="'color: ' + textColor"
        >{{ category.title }}</span>
    </NuxtLink>
</template>

<script setup>
const { category } = defineProps([
    'category',
])

const textColor = computed(
    () => (
        (parseInt(category.color.replace('#', ''), 16) > 0xffffff / 2)
        ? '#000' : '#fff'
    )
)
</script>