<template>
    <div
        class="
            Main w-full min-h-screen flex flex-col justify-between
            items-center py-10 px-5
        "
    >
        <span></span>
        <h1 class="text-[#5c46ea] text-4xl font-bold">Salary Organizer</h1>
        <div class="flex flex-col w-full gap-2">
            <NuxtLink
                to="/login"
                class="
                    w-full px-7 py-4 bg-[#5c46ea] text-white
                    text-center rounded-md font-semibold text-md
                "
            >Login</NuxtLink>
            <NuxtLink
                to="/register"
                class="
                    w-full px-7 py-4 bg-[#47445e] text-white
                    text-center rounded-md font-semibold text-md
                "
            >Register</NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'start',
    middleware: 'guest',
})
</script>