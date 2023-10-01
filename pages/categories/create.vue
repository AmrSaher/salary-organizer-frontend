<template>
    <div class="CategoriesCreate text-white">
        <Header
            title="Add new category"
            backBtn="/home"
        />
        <form
            @submit.prevent="handleCreateCategorySubmit"
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
            <div class="grid grid-cols-2 gap-2">
                <select
                    class="
                        w-full p-4 rounded-md outline-none text-md
                        bg-[#363447] border-2 border-[#47445e]
                    "
                    v-model="formData.icon"
                >
                    <option v-for="(icon, i) in iconsStore.icons" :key="i" :value="icon.icon" class="text-lg">
                        {{ icon.icon }} {{ icon.text }}
                    </option>
                </select>
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
import { useCategoriesStore } from '~/stores/categoriesStore'
import { useIconsStore } from '~/stores/iconsStore'

definePageMeta({
    middleware: 'auth',
})

const categoriesStore = useCategoriesStore()
const iconsStore = useIconsStore()
const formData = ref({
    title: '',
    color: '',
    icon: '',
})
const currentFormErrors = ref({
    title: [],
    color: [],
    icon: [],
})
const formErrors = ref(currentFormErrors.value)

const handleCreateCategorySubmit = async () => {
    formErrors.value = currentFormErrors.value
    const errors = await categoriesStore.create(formData.value)
    formErrors.value = {
        title: errors?.title ?? [],
        color: errors?.color ?? [],
        icon: errors?.icon ?? [],
    }
}
</script>