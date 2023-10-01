import { defineStore } from 'pinia'

export const useIconsStore = defineStore('icons', () => {
    const icons = ref([
        {
            icon: '🏠',
            text: 'Home',
        },
        {
            icon: '💸',
            text: 'Money',
        },
        {
            icon: '🪙',
            text: 'Gold',
        },
        {
            icon: '🧑🏻‍🤝‍🧑🏻',
            text: 'Group',
        },
    ])

    return {
        icons,
    }
})