import { defineStore } from 'pinia'
import { useLoaderStore } from './loaderStore'

export const useAuthStore = defineStore('auth', () => {
    const currentUser = ref({
        name: '',
        profile: {
            first_name: '',
        },
    })
    const user = ref(currentUser.value)
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
        user.value = data.value ? data.value : currentUser.value
    }

    const login = async (credentials) => {
        loaderStore.startLoading()
        const { data } = await useApi('/login', {
            method: 'post',
            body: credentials,
        })

        cacheJWTToken(data.value)
        await getUser()
        navigateTo('/home')
        loaderStore.stopLoading()
    }

    const register = async (credentials) => {
        loaderStore.startLoading()
        const { data } = await useApi('/register', {
            method: 'post',
            body: credentials,
        })

        cacheJWTToken(data.value)
        await getUser()
        navigateTo('/home')
        loaderStore.stopLoading()
    }

    const logout = async () => {
        loaderStore.startLoading()
        await useApi('/logout', {
            method: 'post',
            headers: {
                Authorization: 'Bearer ' + getJWTToken(),
            },
        })

        clearJWTToken()
        navigateTo('/')
        loaderStore.stopLoading()
    }

    const updateProfile = async (attrs) => {
        loaderStore.startLoading()
        await useApi('/profile', {
            method: 'put',
            body: attrs,
            headers: {
                Authorization: 'Bearer ' + getJWTToken(),
            },
        })

        await getUser()
        navigateTo('/home')
        loaderStore.stopLoading()
    }

    return {
        user,
        getUser,
        login,
        register,
        logout,
        updateProfile,
        getJWTToken,
    }
})