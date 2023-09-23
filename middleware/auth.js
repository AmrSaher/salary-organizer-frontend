export default defineNuxtRouteMiddleware((to, from) => {
    const jwt = useCookie('jwt').value

    if (!jwt) return navigateTo('/login')
})