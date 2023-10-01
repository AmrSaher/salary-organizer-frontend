<template>
    <header
        class="
            Header fixed top-0 left-0 px-5
            py-4 z-30 w-full bg-[#2a28387a]
            backdrop-blur-md flex flex-col
        "
    >
        <div class="w-full flex items-center justify-between">
            <div class="flex items-center gap-2">
                <NuxtLink :to="backBtn" v-if="backBtn">
                    <i class="bi bi-arrow-left-short text-3xl"></i>
                </NuxtLink>
                <h1 class="text-3xl text-white font-semibold">{{ title }}</h1>
            </div>
            <slot />
        </div>
    </header>
</template>

<script setup>
const { title, backBtn } = defineProps([
    'title',
    'backBtn',
])
</script>