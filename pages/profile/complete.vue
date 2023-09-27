<template>
    <div class="ProfileComplete text-white">
        <Header title="Complete your data" />
        <form
            @submit.prevent="handleUpdateProfileSubmit"
            class="
                w-full flex flex-col gap-3
            "
        >
            <input
                type="text"
                placeholder="First Name"
                v-model="formData.first_name"
                class="
                    w-full p-4 rounded-md outline-none text-md
                    bg-[#363447] border-2 border-[#47445e]
                "
            >
            <input
                type="text"
                placeholder="Last Name"
                v-model="formData.last_name"
                class="
                    w-full p-4 rounded-md outline-none text-md
                    bg-[#363447] border-2 border-[#47445e]
                "
            >
            <input
                type="date"
                placeholder="Birth Date"
                v-model="formData.birth_date"
                class="
                    w-full p-4 rounded-md outline-none text-md
                    bg-[#363447] border-2 border-[#47445e]
                "
            >
            <input
                type="number"
                placeholder="Salary"
                v-model="formData.salary"
                class="
                    w-full p-4 rounded-md outline-none text-md
                    bg-[#363447] border-2 border-[#47445e]
                "
            >
            <input
                type="submit"
                value="Start"
                class="
                    w-full px-7 py-4 bg-[#5c46ea] text-white
                    text-center rounded-md font-semibold text-md
                "
            >
        </form>
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/authStore'

definePageMeta({
    middleware: [
        'auth',
        'complete-profile-not-required',
    ],
})

const formData = ref({
    first_name: '',
    last_name: '',
    birth_date: '',
    salary: '',
})

const authStore = useAuthStore()

const handleUpdateProfileSubmit = async () => {
    await authStore.updateProfile(formData.value)
}
</script>