import { defineStore } from 'pinia'
import { useLoaderStore } from './loaderStore'
import { useAuthStore } from './authStore'

export const useTransactionsStore = defineStore('transactions', () => {
    const loaderStore = useLoaderStore()
    const authStore = useAuthStore()

    const create = async (payload) => {
        loaderStore.startLoading()
        const { error } = await useApi('/transactions', {
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

        // await authStore.getUser()
        navigateTo('/home')
        loaderStore.stopLoading()
    }

    const destroy = async (transaction_id) => {
        loaderStore.startLoading()
        await useApi('/transactions/' + transaction_id, {
            method: 'delete',
            headers: {
                Authorization: 'Bearer ' + authStore.getJWTToken(),
            },
        })

        await authStore.getUser()
        loaderStore.stopLoading()
    }

    return {
        create,
        destroy,
    }
})