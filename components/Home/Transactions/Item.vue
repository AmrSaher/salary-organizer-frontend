<template>
    <li
        class="HomeExpensesItem text-white transition-all delay-100"
        ref="item"
        data-type="0"
    >
        <div
            @touchstart.capture="touchStart"
            @touchend.capture="touchEnd"
        >
            <div class="w-full flex items-center justify-between overflow-hidden p-2">
                <div class="flex items-center gap-3">
                    <span
                        class="
                            w-[45px] h-[45px] rounded-full
                            flex justify-center items-center
                            text-xl text-white
                        "
                        :style="'background: ' + transaction.color"
                    >
                        {{ transaction.icon }}
                    </span>
                    <h3 class="text-md font-normal">{{ transaction.title }}</h3>
                </div>
                <span
                    :class="{
                        'text-green-500': transaction.isIncome,
                        'text-red-500': !transaction.isIncome,
                    }"
                >{{ transaction.isIncome ? '+' : '-' }}{{ transaction.cost }} L.E</span>
            </div>
        </div>
        <button 
            class="
                w-16 h-full bg-red-500 text-xl text-center 
                absolute top-0 -right-16 rounded-sm
            "
            @click="handleDeleteTransactionSubmit"
        >
            <i class="bi bi-trash-fill"></i>
        </button>
    </li>
</template>

<script setup>
import { useTransactionsStore } from '~/stores/transactionsStore'

const { transaction } = defineProps([
    'transaction',
])

const transactionsStore = useTransactionsStore()
const startX = ref(0)
const endX = ref(0)
const item = ref(null)

const touchStart = (e) => {
    startX.value = e.touches[0].clientX
}
const touchEnd = (e) => {
    let parentElement = e.currentTarget.parentElement
    endX.value = e.changedTouches[0].clientX
    
    if (parentElement.dataset.type == 0 && startX.value - endX.value > 10) {
        restSlide()
        parentElement.dataset.type = 1
    }
    
    if (parentElement.dataset.type == 1 && startX.value - endX.value < -10) {
        restSlide();
        parentElement.dataset.type = 0
    }
    startX.value = 0
    endX.value = 0
}
const restSlide = () => {
    item.value.dataset.type = 0
}

const handleDeleteTransactionSubmit = async () => {
    if (confirm('Are you sure ?')) await transactionsStore.destroy(transaction.id)
}
</script>

<style lang="scss" scoped>
.HomeExpensesItem {
    &[data-type="0"] {
        transform: translate3d(0, 0, 0);
    }
    &[data-type="1"] {
        transform: translate3d(-64px, 0, 0);
    }
}
</style>