<template>
    <div class="CategoriesExpensesCreate text-white">
        <Header 
            title="Create expense"
            :backBtn="'/categories/' + route.params.id"
        />
        <form
            @submit.prevent="handleCreateExpenseSubmit"
            class="
                w-full flex flex-col gap-3
            "
        >
            <input
                type="text"
                placeholder="Title"
                v-model="formData.title"
                class="
                    w-full p-4 rounded-md outline-none text-md
                    bg-[#363447] border-2 border-[#47445e]
                "
            >
            <span class="-mt-2 text-red-500 text-md font-semibold">{{ formErrors?.title[0] }}</span>
            <input
                type="number"
                placeholder="Cost"
                v-model="formData.cost"
                class="
                    w-full p-4 rounded-md outline-none text-md
                    bg-[#363447] border-2 border-[#47445e]
                "
            >
            <span class="-mt-2 text-red-500 text-md font-semibold">{{ formErrors?.cost[0] }}</span>
            <input
                type="submit"
                value="Create"
                class="
                    w-full px-7 py-4 bg-[#5c46ea] text-white
                    text-center rounded-md font-semibold text-md
                "
            >
        </form>
    </div>
</template>

<script setup>
import { useExpensesStore } from '~/stores/expensesStore'

definePageMeta({
    middleware: [
        'auth',
        'complete-profile-required',
    ],
})

const route = useRoute()
const expensesStore = useExpensesStore()
const formData = ref({
    title: '',
    cost: '',
})
const currentFormErrors = ref({
    title: [],
    cost: [],
})
const formErrors = ref(currentFormErrors.value)

const handleCreateExpenseSubmit = async () => {
    formErrors.value = currentFormErrors.value
    const errors = await expensesStore.create(route.params.id, formData.value)
    formErrors.value = {
        title: errors?.title ?? [],
        cost: errors?.cost ?? [],
    }
}
</script>