<template>
    <div class="CategoryExpenses">
        <Header 
            :title="category.title"
            backBtn="/home"
        >
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
                <span>-{{ expense.cost }} L.E</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/authStore'
import { useLoaderStore } from '~/stores/loaderStore'

definePageMeta({
    middleware: [
        'auth',
        'complete-profile-required',
    ],
})

const route = useRoute()
const authStore = useAuthStore()
const loaderStore = useLoaderStore()
const category = authStore.user.categories.filter(cat => cat.id == route.params.id)[0]
const expenses = ref([])

const fetchExpenses = async () => {
    loaderStore.startLoading()
    const { data } = await useApi('/expenses/' + category.id, {
        headers: {
            Authorization: 'Bearer ' + authStore.getJWTToken(),
        }
    })

    expenses.value = data.value
    loaderStore.stopLoading()
}
await fetchExpenses()
</script>