<template>
    <div
        class="
            CategoriesIconSelect w-full p-4 rounded-md outline-none text-md
            bg-[#363447] border-2 border-[#47445e] relative text-center
        "
        @click="toggle"
    >
        <span class="text-xl">{{ icon }}</span>
        <div
            v-if="showIcons"
            class="
                absolute top-[90%] left-[50%] w-[200px]
                p-2 bg-[#363447] rounded-md flex
                items-center gap-2 justify-center flex-wrap
                border-2 border-[#47445e]
            "
        >
            <span 
                v-for="(icon, i) in iconsStore.icons"
                :key="i"
                :value="icon"
                class="text-lg"
                @click="setIcon(icon)"
            >
                {{ icon }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { useIconsStore } from '~/stores/iconsStore'

const { icon } = defineProps([
    'icon',
])
const emit = defineEmits([
    'setIcon',
])
const iconsStore = useIconsStore()
const showIcons = ref(false)

const toggle = () => showIcons.value = !showIcons.value
const setIcon = (icon) => {
    emit('setIcon', icon)
}
</script>