<template>
    <div class="Home">
        <Header :title="'Hello, ' + name">
            <NuxtLink to="/">
                <img src="~/assets/img/avatar.jpg" alt="avatar" class="w-[45px] rounded-full">
            </NuxtLink>
        </Header>
        <HomeCompleteProfileAlert />
        <HomeSlider />
        <HomeCard />
        <HomeExpenses />
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/authStore'

definePageMeta({
    layout: 'default',
    middleware: 'auth',
})

const authStore = useAuthStore()
const name = ref(authStore.user.name.split(' ')[0])

// authStore.clearJWTToken()
</script>