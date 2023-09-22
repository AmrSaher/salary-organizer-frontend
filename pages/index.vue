<template>
    <div class="Home">
        <Header title="Hello, Amr">
            <NuxtLink to="/">
                <img src="~/assets/img/avatar.jpg" alt="avatar" class="w-[45px] rounded-full">
            </NuxtLink>
        </Header>
        <HomeCompleteProfileAlert />
        <HomeSlider />
        <HomeCard />
        <HomeExpenses />
    </div>
</template>

<script lang="ts" setup>
</script>