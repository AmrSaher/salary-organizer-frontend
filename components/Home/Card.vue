<template>
    <div class="HomeCard relative w-full mb-7 h-[190px]">
        <div
            class="
                card absolute w-[95%] -top-4 left-2
                -rotate-6 h-[185px] bg-gradient-to-r
                from-[#ca49f6] to-[#5c46ea]
                rounded-3xl
            "
        ></div>
        <div
            class="
                card absolute top-0 
                left-0 w-full p-7 
                bg-[#80808033] text-white 
                backdrop-blur-md rounded-3xl 
                h-[190px] flex flex-col justify-between
            "
        >
            <header class="flex flex-col">
                <h2 class="font-light text-lg">My salary</h2>
                <span class="font-bold text-[30px] -mt-2">{{ authStore.user?.profile?.salary }} L.E</span>
            </header>
            <div class="flex w-full items-center">
                <div class="w-[50%]">
                    <h3 class="font-light text-lg">Spend</h3>
                    <span class="font-semibold text-[20px]">{{ authStore.user?.profile?.spend }} L.E</span>
                </div>
                <div class="w-[50%]">
                    <h3 class="font-light text-lg">Residual</h3>
                    <span
                        class="font-semibold text-[20px]"
                        :class="{'text-red-500': authStore.user?.profile?.residual < 0}"
                    >{{ authStore.user?.profile?.residual }} L.E</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/authStore'

const authStore = useAuthStore()
</script>

<style lang="scss" scoped>
.HomeCard {
    .card {
        box-shadow: rgba(17, 12, 46, 0.30) 0px 48px 70px 25px;
    }
}
</style>