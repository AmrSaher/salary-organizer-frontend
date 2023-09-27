import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', () => {
    const isLoading = ref(false)

    const startLoading = () => {
        isLoading.value = true
    }

    const stopLoading = () => {
        isLoading.value = false
    }

    return {
        isLoading,
        startLoading,
        stopLoading,
    }
})