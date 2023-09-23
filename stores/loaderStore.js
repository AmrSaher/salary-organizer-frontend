import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', () => {
    const isLoading = ref(false)

    const showLoader = () => {
        isLoading.value = true
    }

    const hideLoader = () => {
        isLoading.value = false
    }

    return {
        isLoading,
        showLoader,
        hideLoader,
    }
})