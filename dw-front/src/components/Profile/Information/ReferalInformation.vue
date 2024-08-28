<template>
    <div class="flex-grow space-y-5">
        <div class="bg-custom-black-adventage border-bottom-custom-adventage rounded-xl flex flex-col md:flex-row p-5 w-full">
            <div class="flex flex-col gap-y-4 w-full md:w-fit">
                <div class="flex flex-row text-xl gap-x-2">
                    <img src="@/assets/img/icons/Profile/info/Refferal.svg" class="w-6 h-6">
                    <span class="text-white">Your Refferal Code</span>
                </div>

                <div class="flex flex-row text-xl gap-x-2">
                    <img src="@/assets/img/icons/Profile/info/RefferalNum.svg" class="w-6 h-6">
                    <span class="text-white">Number Of Refferals</span>
                </div>

                <div class="flex flex-row text-xl gap-x-2">
                    <img src="@/assets/img/icons/Profile/info/RefferalBonus.svg" class="w-6 h-6">
                    <span class="text-white">Refferal Bonus Earned</span>
                </div>
             </div>
  
            <div class="flex flex-col gap-y-4 w-full md:w-fit md:ml-auto">
                <div class="flex flex-row justify-end text-xl gap-x-2">
                    <span class="custom-gradient-text-title-main">{{ user?.refferal_system?.code }}</span>
                </div>

                <div class="flex flex-row justify-end text-xl gap-x-2">
                    <span class="custom-gradient-text-title-main">{{ user?.refferal_system?.refferal_number }}</span>
                </div>

                <div class="flex flex-row justify-end text-xl gap-x-2">
                    <span class="custom-gradient-text-title-main">{{ user?.refferal_system?.refferal_bonus }}</span>
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
  