<template>
    <li
        class="CategoriesExpenseItem transition-all delay-200 text-white"
        ref="item"
        data-type="0"
    >
        <div
            @touchstart.capture="touchStart"
            @touchend.capture="touchEnd"
        >
            <div class="flex items-center justify-between overflow-hidden p-2">
                <div class="flex items-center gap-3">
                    <h3 class="text-lg font-normal">{{ expense.title }}</h3>
                </div>
                <span class="text-red-500">-{{ expense.cost }} L.E</span>
            </div>
        </div>
        <button 
            class="
                w-16 h-full bg-red-500 text-xl text-center 
                absolute top-0 -right-16 rounded-sm
            "
            @click="handleDeleteExpenseSubmit"
        >
            <i class="bi bi-trash-fill"></i>
        </button>
    </li>
</template>

<script setup>
import { useAuthStore } from '~/stores/authStore'
import { useExpensesStore } from '~/stores/expensesStore'

const { expense } = defineProps([
    'expense',
])
const emit = defineEmits([
    'fetchExpenses'
])
const expensesStore = useExpensesStore()
const authStore = useAuthStore()
const startX = ref(0)
const endX = ref(0)
const item = ref(null)

const touchStart = (e) => {
    startX.value = e.touches[0].clientX
}
const touchEnd = (e) => {
    let parentElement = e.currentTarget.parentElement
    endX.value = e.changedTouches[0].clientX
    
    if (parentElement.dataset.type == 0 && startX.value - endX.value > 30) {
        restSlide()
        parentElement.dataset.type = 1
    }
    
    if (parentElement.dataset.type == 1 && startX.value - endX.value < -30) {
        restSlide();
        parentElement.dataset.type = 0
    }
    startX.value = 0
    endX.value = 0
}
const restSlide = () => {
    item.value.dataset.type = 0
}

const handleDeleteExpenseSubmit = async () => {
    if (confirm('Are you sure ?')) await expensesStore.destroy(expense.id)
    emit('fetchExpenses')
}
</script>

<style lang="scss" scoped>
.CategoriesExpenseItem {
    &[data-type="0"] {
        transform: translate3d(0, 0, 0);
    }
    &[data-type="1"] {
        transform: translate3d(-64px, 0, 0);
    }
}
</style>