import { useAuthStore } from '~/stores/authStore'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore()
    await authStore.getUser()
    
    if (authStore.user?.profile?.first_name) return navigateTo('/home')
})