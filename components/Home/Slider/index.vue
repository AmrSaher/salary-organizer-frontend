<template>
    <div
        class="
            HomeSlider overflow-x-auto flex
            items-center gap-3 mb-14 -ml-5
            -mr-5 px-5 scroll-without-bar
        "
    >
        <HomeSliderCard
            v-for="category in authStore.user.categories"
            :key="category.id"
            :category="category"
        />
        <!-- <HomeSliderCard
            title="Rentals"
            icon="bi-house"
            color="bg-blue-400"
        />
        <HomeSliderCard
            title="Installments"
            icon="bi-cash-coin"
            color="bg-cyan-400"
        />
        <HomeSliderCard
            title="Fellows"
            icon="bi-people-fill"
            color="bg-red-400"
        />
        <HomeSliderCard
            title="Investments"
            icon="bi-bank"
            color="bg-purple-400"
        />
        -->
        <HomeSliderCard
            :category="{
                title: 'Add new',
                icon: 'bi-plus',
                color: '#5c46ea',
                link: '/categories/create',
            }"
        />
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/authStore'

const authStore = useAuthStore()
</script>