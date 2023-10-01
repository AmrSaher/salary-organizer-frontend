<template>
    <div class="Home">
        <Header title="Home">
            <a href="#" @click="handleLogoutSubmit">
                <img src="~/assets/img/avatar.jpg" alt="avatar" class="w-[45px] rounded-full">
            </a>
        </Header>
        <!-- <HomeCompleteProfileAlert /> -->
        <HomeSlider />
        <HomeCard />
        <HomeExpenses />
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/authStore'

definePageMeta({
    middleware: [
        'auth',
        'complete-profile-required',
    ],
})

const authStore = useAuthStore()

const handleLogoutSubmit = async () => {
    await authStore.logout()
}
</script>