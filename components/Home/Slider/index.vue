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