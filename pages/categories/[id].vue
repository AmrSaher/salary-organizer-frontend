<template>
    <div class="CategoryExpenses">
        <Header 
            :title="category.title"
            backBtn="/home"
        >
            <NuxtLink
                :to="'/categories/expenses/create/' + route.params.id"
                class="px-2 rounded bg-[#5c46ea]"
            >
                <i class="bi bi-plus text-white text-3xl m-0"></i>
            </NuxtLink>
        </Header>
        <p class="text-gray-300 w-full text-center" v-if="!expenses.length">No expenses</p>
        <ul class="w-full flex flex-col gap-4" v-else>
            <li
                class="
                    w-full flex items-center justify-between
                    text-white
                "
                v-for="expense in expenses"
                :key="expense.id"
            >
                <div class="flex items-center gap-3">
                    <h3 class="text-lg font-normal">{{ expense.title }}</h3>
                </div>
                <span class="text-red-500">-{{ expense.cost }} L.E</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/authStore'
import { useExpensesStore } from '~/stores/expensesStore'

definePageMeta({
    middleware: [
        'auth',
        'complete-profile-required',
    ],
})

const route = useRoute()
const authStore = useAuthStore()
const expensesStore = useExpensesStore()
const category = authStore.user.categories.filter(cat => cat.id == route.params.id)[0]
const expenses = ref([])

const fetchExpenses = async () => {
    expenses.value = await expensesStore.getExpenses(category.id)
}
await authStore.getUser()
await fetchExpenses()
</script>