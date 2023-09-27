export const useApi = async (url, options = {}) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }

    const { BASE_API_URL } = useRuntimeConfig().public

    return await useFetch(BASE_API_URL + url, {
        watch: false,
        ...options,
        headers: {
            ...headers,
            ...options?.headers,
        },
    })
}