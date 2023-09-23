export const useApi = async (url, options = {}) => {
    const jwt = useCookie('jwt').value
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: jwt ? 'Bearer ' + jwt : '',
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