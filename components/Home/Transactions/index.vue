<template>
    <div class="HomeExpenses w-full">
        <header class="w-100 flex items-center justify-between mb-5">
            <h2 class="text-2xl text-white font-semibold">Transactions</h2>
            <NuxtLink
                to="/transactions/create"
                class="px-2 rounded bg-[#5c46ea]"
            >
                <i class="bi bi-plus text-white text-3xl"></i>
            </NuxtLink>
        </header>
        <p class="text-gray-300 w-full text-center" v-if="!authStore.user.transactions.length">No transactions</p>
        <ul class="w-full flex flex-col gap-4 overflow-hidden" v-else>
            <HomeTransactionsItem
                v-for="transaction in authStore.user.transactions"
                :key="transaction.id"
                :transaction="transaction"
            />
        </ul>
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/authStore'

const authStore = useAuthStore()
</script>