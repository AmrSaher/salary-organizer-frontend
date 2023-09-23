<template>
    <header
        class="
            Header fixed top-0 left-0 px-7
            py-4 z-30 w-full flex items-center
            justify-between bg-[#2a28387a]
            backdrop-blur-md
        "
    >
        <h1 class="text-3xl text-white font-semibold">{{ title }}</h1>
        <slot />
    </header>
</template>

<script setup>
const { title } = defineProps([
    'title',
])
</script>