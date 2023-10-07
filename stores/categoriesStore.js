import { defineStore } from 'pinia'
import { useLoaderStore } from './loaderStore'
import { useAuthStore } from './authStore'

export const useCategoriesStore = defineStore('categories', () => {
    const loaderStore = useLoaderStore()
    const authStore = useAuthStore()

    const create = async (payload) => {
        loaderStore.startLoading()
        const { error } = await useApi('/categories', {
            method: 'post',
            body: payload,
            headers: {
                Authorization: 'Bearer ' + authStore.getJWTToken(),
            },
        })

        // Check if any errors return
        if (error?.value?.data?.errors) {
            loaderStore.stopLoading()
            return error.value.data.errors
        }

        await authStore.getUser()
        navigateTo('/home')
        loaderStore.stopLoading()
    }

    const destroy = async (category_id) => {
        loaderStore.startLoading()
        await useApi('/categories/' + category_id, {
            method: 'delete',
            headers: {
                Authorization: 'Bearer ' + authStore.getJWTToken(),
            },
        })

        await authStore.getUser()
        navigateTo('/home')
        loaderStore.stopLoading()
    }
    
    return {
        create,
        destroy,
    }
})