import { defineStore } from 'pinia'
import { useLoaderStore } from './loaderStore'

export const useAuthStore = defineStore('auth', () => {
    const user = ref({})
    const token = ref({})
    const loaderStore = useLoaderStore()

    const cacheJWTToken = (jwt) => {
        token.value = jwt
        useCookie('jwt').value = jwt.access_token
    }

    const getJWTToken = () => token.value.access_token ?? useCookie('jwt').value

    const clearJWTToken = () => {
        token.value = {}
        useCookie('jwt').value = null
    }

    const getUser = async () => {
        const { data } = await useApi('/user', {
            headers: {
                Authorization: 'Bearer ' + getJWTToken(),
            },
        })
        user.value = data.value
    }

    const login = async (credentials) => {
        loaderStore.isLoading = true
        const { data } = await useApi('/login', {
            method: 'post',
            body: credentials,
        })

        cacheJWTToken(data.value)
        await getUser()
        navigateTo('/home')
        loaderStore.isLoading = false
    }

    const register = async (credentials) => {
        loaderStore.isLoading = true
        const { data } = await useApi('/register', {
            method: 'post',
            body: credentials,
        })

        cacheJWTToken(data.value)
        await getUser()
        navigateTo('/home')
        loaderStore.isLoading = false
    }

    const logout = async () => {
        await useApi('/logout', {
            method: 'post',
            headers: {
                Authorization: 'Bearer ' + getJWTToken(),
            },
        })
        clearJWTToken()
    }

    return {
        user,
        getUser,
        login,
        register,
        logout,
        clearJWTToken,
    }
})