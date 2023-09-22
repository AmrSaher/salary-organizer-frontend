<template>
    <div
        class="
            HomeSlider overflow-x-auto flex
            items-center gap-3 mb-20 -ml-5
            -mr-5 px-7 scroll-without-bar
        "
    >
        <HomeSliderCard
            title="Bills"
            icon="bi-receipt"
            color="bg-orange-400"
        />
        <HomeSliderCard
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
    </div>
</template>