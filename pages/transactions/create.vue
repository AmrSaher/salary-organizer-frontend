<template>
    <div class="CategoriesCreate text-white">
        <Header
            title="Add new transaction"
            backBtn="/home"
        />
        <form
            @submit.prevent="handleCreateTransactionSubmit"
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
            <div class="grid grid-cols-[1fr,2fr] gap-2">
                <CategoriesIconSelect
                    :icon="formData.icon"
                    @setIcon="i => formData.icon = i"
                />
                <input
                    type="color"
                    placeholder="Color"
                    v-model="formData.color"
                    class="
                        w-full h-full rounded-md outline-none text-md
                        bg-[#363447] border-2 border-[#47445e]
                    "
                >
                <span class="-mt-2 text-red-500 text-md font-semibold">{{ formErrors?.icon[0] }}</span>
                <span class="-mt-2 text-red-500 text-md font-semibold">{{ formErrors?.color[0] }}</span>
            </div>
            <div class="w-full flex items-center justify-between">
                <label for="isincome" class="text-lg font-semibold">Income ?</label>
                <input type="checkbox" id="isincome" v-model="formData.isIncome">
            </div>
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
import { useTransactionsStore } from '~/stores/transactionsStore'
import { useIconsStore } from '~/stores/iconsStore'

definePageMeta({
    middleware: [
        'auth',
        'complete-profile-required',
    ],
})

const transactionsStore = useTransactionsStore()
const iconsStore = useIconsStore()
const formData = ref({
    title: '',
    color: '',
    icon: iconsStore.icons[0],
    cost: '',
    isIncome: false,
})
const currentFormErrors = ref({
    title: [],
    color: [],
    icon: [],
    cost: [],
})
const formErrors = ref(currentFormErrors.value)

const handleCreateTransactionSubmit = async () => {
    formErrors.value = currentFormErrors.value
    const errors = await transactionsStore.create(formData.value)
    formErrors.value = {
        title: errors?.title ?? [],
        color: errors?.color ?? [],
        icon: errors?.icon ?? [],
        cost: errors?.cost ?? [],
    }
}
</script>