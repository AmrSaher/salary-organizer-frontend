<template>
    <div
        class="
            HomeCompleteProfileAlert flex items-center
            justify-between rounded-lg
            px-5 py-3 bg-[#47445e] mb-10 text-white
        "
    >
        <div class="flex flex-col gap-[3px]">
            <span class="flex items-center gap-2">
                <span
                    class="
                        w-3 h-3 rounded-full border-2 
                        border-[#47445e] bg-[#5c46ea] outline
                        outline-2 outline-[#5c46ea]
                    "
                ></span>
                <p class="text-sm">Registeration</p>
            </span>
            <span class="w-[2px] h-5 ml-[5px] bg-[#5c597c]"></span>
            <span class="flex items-center gap-2">
                <span
                    class="
                        w-3 h-3 rounded-full border-2
                        border-transparent outline
                        outline-2 outline-[#5c597c]
                    "
                ></span>
                <p class="text-sm text-gray-400">Enter your data</p>
            </span>
            <NuxtLink
                to="/"
                class="
                    text-sm rounded-md px-1.5 py-1
                    mt-2 bg-[#5c46ea]
                "
            >Complete your profile</NuxtLink>
        </div>
        <img class="w-[40%]" src="~/assets/img/complete-profile.png" alt="complete your profile">
    </div>
</template>