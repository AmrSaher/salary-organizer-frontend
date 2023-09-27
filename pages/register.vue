<template>
    <div
        class="
            Register w-full min-h-screen flex flex-col justify-between
            py-10 px-5 text-white
        "
    >
        <div class="flex flex-col">
            <h2 class="text-lg font-semibold">Welcome to salary organizer</h2>
            <p class="text-sm text-gray-300 mb-3">Make you life better</p>
            <form
                @submit.prevent="handleRegisterSubmit"
                class="
                    w-full flex flex-col gap-3
                "
            >
                <input
                    type="text"
                    placeholder="Username"
                    v-model="formData.name"
                    class="
                        w-full p-4 rounded-md outline-none text-md
                        bg-[#363447] border-2 border-[#47445e]
                    "
                >
                <input
                    type="email"
                    placeholder="Email Address"
                    v-model="formData.email"
                    class="
                        w-full p-4 rounded-md outline-none text-md
                        bg-[#363447] border-2 border-[#47445e]
                    "
                >
                <input
                    type="password"
                    placeholder="Password"
                    v-model="formData.password"
                    class="
                        w-full p-4 rounded-md outline-none text-md
                        bg-[#363447] border-2 border-[#47445e]
                    "
                >
                <input
                    type="password"
                    placeholder="Confirm Your Password"
                    v-model="formData.password_confirmation"
                    class="
                        w-full p-4 rounded-md outline-none text-md
                        bg-[#363447] border-2 border-[#47445e]
                    "
                >
            </form>
        </div>
        <div class="flex flex-col gap-2">
            <button
                @click="handleRegisterSubmit"
                class="
                    w-full px-7 py-4 bg-[#5c46ea] text-white
                    text-center rounded-md font-semibold text-md
                "
            >Register</button>
            <div class="w-full flex justify-between items-center">
                <span class="w-full h-[1px] bg-[#47445e]"></span>
                <span class="text-[#47445e] mx-2">OR</span>
                <span class="w-full h-[1px] bg-[#47445e]"></span>
            </div>
            <NuxtLink
                to="/login"
                class="
                    w-full px-7 py-4 bg-[#47445e] text-white
                    text-center rounded-md font-semibold text-md
                "
            >Login</NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/authStore'

definePageMeta({
    layout: 'start',
    middleware: 'guest',
})

const formData = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
})
const authStore = useAuthStore();

const handleRegisterSubmit = async () => {
    await authStore.register(formData.value)
}
</script>