<template>
    <li class="HomeExpensesItem w-full flex items-center justify-between text-white">
        <div class="flex items-center gap-3">
            <span
                class="
                    w-[45px] h-[45px] rounded-full
                    flex justify-center items-center
                    text-xl text-white
                "
                :style="'background: ' + transaction.color"
            >
                {{ transaction.icon }}
            </span>
            <h3 class="text-md font-normal">{{ transaction.title }}</h3>
        </div>
        <span
            class="text-red-500"
            :class="{'text-green-500': transaction.isIncome}"
        >{{ transaction.isIncome ? '+' : '-' }}{{ transaction.cost }} L.E</span>
    </li>
</template>

<script setup>
const { transaction } = defineProps([
    'transaction',
])
</script>