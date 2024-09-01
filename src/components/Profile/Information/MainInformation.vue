<template>
    <div class="flex-grow space-y-5 z-50">
        <div class="bg-custom-black-adventage border-bottom-custom-adventage rounded-xl flex flex-col md:flex-row p-5 w-full">

            <div class="flex flex-col gap-y-4 w-full md:w-fit">
                <div class="flex flex-row text-xl gap-x-2 items-center">
                    <img src="@/assets/img/icons/Profile/Info/RegDate.svg" class="w-6 h-6">
                    <span class="text-white">Registration Date</span>
                </div>

                <div class="flex flex-row text-xl gap-x-2 items-center" v-if="user?.subscription?.expiration_date">
                    <img src="@/assets/img/icons/Profile/Info/ExpDate.svg" class="w-6 h-6">
                    <span class="text-white" >Expiration Date</span>
                </div>

                <div class="flex flex-row text-xl gap-x-2 items-center">
                    <img src="@/assets/img/icons/Profile/Info/LastLogDate.svg" class="w-6 h-6">
                    <span class="text-white">Last Login Date</span>
                </div>

                <div v-if="user?.email" class="flex flex-row text-xl gap-x-2 items-center">
                    <img src="@/assets/img/icons/Profile/Info/Email.svg" class="w-6 h-6">
                    <span class="text-white">Email</span>
                </div>

                <div v-if="user?.email" class="flex flex-row text-xl gap-x-2 items-center">
                    <img src="@/assets/img/icons/Profile/Info/Password.svg" class="w-6 h-6">
                    <span class="text-white">Password</span>
                </div>

                <div v-if="user?.hwid" class="flex flex-row text-xl gap-x-2">
                    <img src="@/assets/img/icons/Profile/Info/Hwid.svg" class="w-6 h-6">
                    <span class="text-white">HWID</span>
                </div>
            </div>
  
            <div class="flex flex-col gap-y-4 w-full md:w-fit md:ml-auto z-50">
                <div class="flex flex-row justify-end text-xl gap-x-2">
                    <span class="custom-gradient-text-title-main">{{ formatDate(user?.statistics?.reg_date) }}</span>
                </div>

                <div class="flex flex-row justify-end text-xl gap-x-2" v-if="user?.subscription?.expiration_date">
                    <span class="custom-gradient-text-title-main">{{ formatDate(user?.subscription?.expiration_date) }}</span>
                </div>

                <div class="flex flex-row justify-end text-xl gap-x-2">
                    <span class="custom-gradient-text-title-main" v-if="user?.statistics?.last_launch">{{ formatDate(user?.statistics?.last_launch) }}</span>
                    <span class="custom-gradient-text-title-main" v-else>None</span>
                </div>

                <div v-if="user?.email" class="flex flex-row justify-end text-xl gap-x-2">
                    <span class="custom-gradient-text-title-main">{{ user?.email }}</span>
                </div>

                <div v-if="user?.email" class="flex flex-row justify-end text-xl gap-x-2">
                    <span class="custom-gradient-text-title-main">****</span>
                    <PasswordPopup />
                </div>

                <div v-if="user?.hwid" class="flex flex-row justify-end text-xl gap-x-2">
                    <span class="custom-gradient-text-title-main break-words">{{ user?.hwid }}</span>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import PasswordPopup from '../PasswordPopup.vue';

import { computed } from 'vue';

const userStore = useUserStore();
const user = computed(() => userStore.user);

function formatDate(dateString: string | undefined): string {
    if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }
</script>
