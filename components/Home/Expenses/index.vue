<template>
    <div class="HomeExpenses w-full">
        <header class="w-100 flex items-center justify-between mb-5">
            <h2 class="text-2xl text-white font-semibold">Expenses</h2>
            <NuxtLink to="/" class="text-gray-300">See all</NuxtLink>
        </header>
        <ul class="w-full flex flex-col gap-4">
            <HomeExpensesItem
                icon="bi-egg-fried"
                title="Food and drink"
                color="#5c46ea"
            />
            <HomeExpensesItem
                icon="bi-controller"
                title="Entertainment"
                color="#cb4bf6"
            />
            <HomeExpensesItem
                icon="bi-bag"
                title="Clothes and shoes"
                color="#f9b06d"
            />
        </ul>
    </div>
</template>

<script setup>
</script>