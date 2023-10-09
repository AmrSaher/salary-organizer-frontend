<template>
    <div class="CategoryExpenses">
        <Header 
            :title="category.title"
            backBtn="/home"
        >
            <div class="flex h-full items-center gap-3">
                <button @click="handleDeleteCategorySubmit">
                    <i class="bi bi-trash-fill text-red-500 text-2xl"></i>
                </button>
                <NuxtLink
                    :to="'/categories/expenses/create/' + route.params.id"
                    class="w-8 h-8 rounded-full bg-[#5c46ea] flex justify-center items-center"
                >
                    <i class="bi bi-plus text-white text-3xl"></i>
                </NuxtLink>
            </div>
        </Header>
        <p class="text-gray-300 w-full text-center" v-if="!expenses.length">No expenses</p>
        <ul class="w-full flex flex-col gap-4 overflow-hidden" v-else>
            <CategoriesExpenseItem
                v-for="expense in expenses"
                :key="expense.id"
                :expense="expense"
                @fetchExpenses="fetchExpenses"
            />
        </ul>
        <!-- <CategoriesExpensesList /> -->
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/authStore'
import { useExpensesStore } from '~/stores/expensesStore'
import { useCategoriesStore } from '~/stores/categoriesStore'

definePageMeta({
    middleware: [
        'auth',
        'complete-profile-required',
    ],
})

const route = useRoute()
const authStore = useAuthStore()
const expensesStore = useExpensesStore()
const categoriesStore = useCategoriesStore()
const category = authStore.user.categories.filter(cat => cat.id == route.params.id)[0]
const expenses = ref([])

const fetchExpenses = async () => {
    expenses.value = await expensesStore.getExpenses(category.id)
}
await fetchExpenses()

const handleDeleteCategorySubmit = async () => {
    if (confirm('Are you sure ?')) await categoriesStore.destroy(route.params.id)
}
</script>