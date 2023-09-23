import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const user = ref({})
    const token = ref({})

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
        const { data } = await useApi('/login', {
            method: 'post',
            body: credentials,
        })

        cacheJWTToken(data.value)
        navigateTo('/home')
    }

    const register = async (credentials) => {
        const { data } = await useApi('/register', {
            method: 'post',
            body: credentials,
        })

        cacheJWTToken(data.value)
        navigateTo('/home')
    }

    const logout = async () => {
        const { data } = await useApi('/logout', {
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
    }
})