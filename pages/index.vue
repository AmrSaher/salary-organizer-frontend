<template>
    <div class="Home">
        <Header title="Hello, Amr">
            <NuxtLink to="/">
                <img src="~/assets/img/avatar.jpg" alt="avatar" class="w-[50px] rounded-full">
            </NuxtLink>
        </Header>
        <HomeSlider />
        <HomeCard />
        <HomeExpenses />
    </div>
</template>