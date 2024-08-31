<template>
    <div class="relative flex-grow space-y-5">
            <div class="bg-custom-black-adventage border-bottom-custom-adventage rounded-xl flex flex-col md:flex-row p-5 w-full">
                <div class="flex flex-col gap-y-4 w-full md:w-fit">
                    <div class="flex flex-row text-xl gap-x-2 blur-[11px]">
                        <img src="@/assets/img/icons/Profile/info/Refferal.svg" class="w-6 h-6">
                        <span class="text-white ">Your Refferal Code</span>
                    </div>

                    <div class="flex flex-row text-xl gap-x-2 blur-[11px]">
                        <img src="@/assets/img/icons/Profile/info/RefferalNum.svg" class="w-6 h-6">
                        <span class="text-white">Number Of Refferals</span>
                    </div>

                    <div class="flex flex-row text-xl gap-x-2 blur-[11px]">
                        <img src="@/assets/img/icons/Profile/info/RefferalBonus.svg" class="w-6 h-6">
                        <span class="text-white">Refferal Bonus Earned</span>
                    </div>
                </div>

                <div class="flex flex-col gap-y-4 w-full md:w-fit md:ml-auto">
                    <div class="flex flex-row justify-end text-xl gap-x-2 blur-[11px]">
                        <span class="custom-gradient-text-title-main">Unavailable</span>
                    </div>

                    <div class="flex flex-row justify-end text-xl gap-x-2 blur-[11px]">
                        <span class="custom-gradient-text-title-main">Unavailable</span>
                    </div>

                    <div class="flex flex-row justify-end text-xl gap-x-2 blur-[11px]">
                        <span class="custom-gradient-text-title-main">Unavailable</span>
                    </div>
                </div>
            </div>

        <div class="absolute inset-0 flex flex-col justify-center items-center text-[#858588]">
            <span class="text-xl">Refferal System Unavailable</span>
            <span class="text-xl">Click the link below to get started: <a href="https://t.me/drainwalkbot" target="_blank">t.me/drainwalkbot</a></span>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
