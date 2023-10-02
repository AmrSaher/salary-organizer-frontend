import { defineStore } from 'pinia'

export const useIconsStore = defineStore('icons', () => {
    const icons = ref([
        '🏠', '💸', '🪙', '🧑🏻‍🤝‍🧑🏻', '📜',
    ])

    return {
        icons,
    }
})