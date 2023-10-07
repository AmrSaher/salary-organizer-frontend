import { defineStore } from 'pinia'
import { useLoaderStore } from './loaderStore'
import { useAuthStore } from './authStore'

export const useExpensesStore = defineStore('expenses', () => {
    const loaderStore = useLoaderStore()
    const authStore = useAuthStore()

    const getExpenses = async (category_id) => {
        loaderStore.startLoading()
        const { data } = await useApi('/expenses/' + category_id, {
            headers: {
                Authorization: 'Bearer ' + authStore.getJWTToken(),
            }
        })

        loaderStore.stopLoading()
        return data.value
    }
    
    const create = async (category_id, payload) => {
        loaderStore.startLoading()
        const { error } = await useApi('/expenses/' + category_id, {
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

        navigateTo('/categories/' + category_id)
        loaderStore.stopLoading()
    }

    return {
        getExpenses,
        create,
    }
})