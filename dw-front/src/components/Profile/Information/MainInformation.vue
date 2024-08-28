<template>
    <div class="flex-grow space-y-5">
        <div class="bg-custom-black-adventage border-bottom-custom-adventage rounded-xl flex flex-col md:flex-row p-5 w-full">

            <div class="flex flex-col gap-y-4 w-full md:w-fit">
                <div class="flex flex-row text-xl gap-x-2">
                    <img src="@/assets/img/icons/Profile/info/RegDate.svg" class="w-6 h-6">
                    <span class="text-white">Registration Date</span>
                </div>

                <div class="flex flex-row text-xl gap-x-2">
                    <img src="@/assets/img/icons/Profile/info/ExpDate.svg" class="w-6 h-6">
                    <span class="text-white">Expiration Date</span>
                </div>

                <div class="flex flex-row text-xl gap-x-2">
                    <img src="@/assets/img/icons/Profile/info/LastLogDate.svg" class="w-6 h-6">
                    <span class="text-white">Last Login Date</span>
                </div>

                <div class="flex flex-row text-xl gap-x-2">
                    <img src="@/assets/img/icons/Profile/info/Email.svg" class="w-6 h-6">
                    <span class="text-white">Email</span>
                </div>

                <div class="flex flex-row text-xl gap-x-2">
                    <img src="@/assets/img/icons/Profile/info/Email.svg" class="w-6 h-6">
                    <span class="text-white">Password</span>
                </div>

                <div class="flex flex-row text-xl gap-x-2">
                    <img src="@/assets/img/icons/Profile/info/Hwid.svg" class="w-6 h-6">
                    <span class="text-white">HWID</span>
                </div>
            </div>
  
            <div class="flex flex-col gap-y-4 w-full md:w-fit md:ml-auto">
                <div class="flex flex-row justify-end text-xl gap-x-2">
                    <span class="custom-gradient-text-title-main">{{ user?.statistics?.reg_date }}</span>
                </div>

                <div class="flex flex-row justify-end text-xl gap-x-2">
                    <span class="custom-gradient-text-title-main">12.08.2024</span>
                </div>

                <div class="flex flex-row justify-end text-xl gap-x-2">
                    <span class="custom-gradient-text-title-main">12.08.2024</span>
                </div>

                <div class="flex flex-row justify-end text-xl gap-x-2">
                    <span class="custom-gradient-text-title-main">{{ user?.email }}</span>
                </div>

                <div class="flex flex-row justify-end text-xl gap-x-2">
                    <span class="custom-gradient-text-title-main"> huihuihui </span>
                </div>

                <div class="flex flex-row justify-end text-xl gap-x-2 ">
                    <span class="custom-gradient-text-title-main break-words">{{ user?.hwid }}</span>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'

import { computed } from 'vue';

const userStore = useUserStore();
const user = computed(() => userStore.user);
</script>
  