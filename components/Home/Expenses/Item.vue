<template>
    <li class="HomeExpensesItem w-full flex items-center justify-between text-white">
        <div class="flex items-center gap-3">
            <span class="w-[45px] h-[45px] rounded-full flex justify-center items-center text-xl text-white" :style="'background: ' + color">
                <i class="bi" :class="icon"></i>
            </span>
            <div class="flex flex-col">
                <h3 class="text-md font-normal">{{ title }}</h3>
                <span class="text-sm font-light">12 transactions</span>
            </div>
        </div>
        <span>-982 L.E</span>
    </li>
</template>

<script lang="ts" setup>
const { icon, title, color } = defineProps([
    'icon',
    'title',
    'color',
])
</script>